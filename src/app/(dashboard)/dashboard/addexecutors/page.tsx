"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiPlus } from "react-icons/fi";
import { TfiImport } from "react-icons/tfi";
import { Card } from "@/components/ui/card";
import { Lexend, Manrope } from "next/font/google";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/hooks/useSidebar";
import { useState } from "react";
interface Executor {
  id: number;
  name: string;
  tp: string;
  status: string;
  ticker: string;
  size: string; // Consider using a proper date type if possible
  startposition: string;
  strategy: string;
}

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Executor List", link: "/dashboard/executors" },
  { title: "Add Executor", link: "/dashboard/addexecutors" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
const manarop = Manrope({
  weight: "700",
  subsets: ["vietnamese"],
});
// Define the types for the props
interface StrategyFormProps {
  onRemove: () => void;
  onAdd: () => void;
  showAddButton: boolean;
}

function StrategyForm({ onRemove, onAdd, showAddButton }: StrategyFormProps) {
  return (
    <Card className="w-full border-none p-2 px-5 mb-5">
      <div className="bg-[#CDF4F3] dark:bg-[#0B3231] w-[59px] h-[32px] flex justify-center my-4 rounded-sm">
        <h2 className="text-[#28B9B5] dark:text-[#28B9B5] text-center pt-1">
          rsi
        </h2>
      </div>
      <div className="mb-5">
        <Label className="text-xs">Add Strategy</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rsi">rsi</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-x-4 justify-center items-center">
        <div className="mb-5">
          <Label className="text-xs">PeriodoRSI</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rsi">rsi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-5">
          <Label className="text-xs">EMA</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rsi">rsi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-5">
          <Label className="text-xs">High Limit</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rsi">rsi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-5">
          <Label className="text-xs">Low Limit</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rsi">rsi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-5">
          <Label className="text-xs">Timeframe</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rsi">rsi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-5 justify-end mt-10 mb-2">
        {showAddButton && (
          <Button className="w-[125px] bg-[#2DD2CE]" onClick={onAdd}>
            Add
          </Button>
        )}
        <Button
          variant={"ghost"}
          className="border-2 px-12 w-[125px] bg-white dark:bg-[#252628]"
          onClick={onRemove}
        >
          Remove
        </Button>
      </div>
    </Card>
  );
}

function StrategyFormManager() {
  const [forms, setForms] = useState([{ id: Date.now() }]);

  const addForm = () => {
    setForms([...forms, { id: Date.now() }]);
  };

  const removeForm = (id: number) => {
    if (forms.length > 1) {
      setForms(forms.filter((form) => form.id !== id));
    }
  };

  return (
    <div>
      {forms.map((form, index) => (
        <StrategyForm
          key={form.id}
          onRemove={() => removeForm(form.id)}
          onAdd={addForm}
          showAddButton={index === forms.length - 1}
        />
      ))}
    </div>
  );
}
export default function Page() {
  const { isMinimized } = useSidebar();
  return (
    <ScrollArea className="h-full">
      <div className="flex-1  p-4 md:p-8 mb-16">
        <div className="flex justify-between items-center">
          <div>
            <h6
              className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
            >
              Add Executor
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        <div className=" w-full flex justify-center gap-4 rounded-xl p-4 mt-5">
          <ScrollArea className="h-[70vh] mt-4">
            <Card className="border-none w-full p-2 px-5">
              <div className="mb-5">
                <Label className="text-xs">Executor Name</Label>
                <Input placeholder="Name"></Input>
              </div>

              <div className="mb-5">
                <Label className="text-xs">Ticker / Coin / Symbol</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rsi">rsi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-5">
                <Label className="text-xs">Close Mode</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rsi">rsi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-x-4 justify-center items-center">
                <div className="mb-5">
                  <Label className="text-xs">TP</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                      %
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <Label className="text-xs">SL</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                      %
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <Label className="text-xs">Size per Trade</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rsi">rsi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-5">
                  <Label className="text-xs">Type</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <Label className="text-xs">Start Position</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rsi">rsi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-5">
                <Label className="text-xs">Status</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rsi">rsi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-5">
                <Label className="text-xs">Consensus</Label>
                <div className="flex items-center border rounded-md w-full shadow-sm">
                  <input
                    type="number"
                    className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                    placeholder="0"
                  />
                  <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                    %
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <Label className="text-xs">Leverage</Label>
                <div className="flex items-center border rounded-md w-full shadow-sm">
                  <input
                    type="number"
                    className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                    placeholder="0"
                  />
                  <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                    %
                  </span>
                </div>
              </div>
            </Card>
          </ScrollArea>
          <div className="w-1/2">
            <ScrollArea className="h-[70vh] mt-4">
              <StrategyFormManager />
            </ScrollArea>
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-0 right-0 bg-white dark:bg-[#0A0A0A] h-[90px] shadow-custom-top ${
          !isMinimized && "md:w-[calc(100%-287px)]"
        } ${isMinimized && "md:w-[calc(100%-72px)]"} sm:w-full`}
      >
        <div className="flex gap-5 justify-end mt-5 mr-5">
          <Button
            variant={"ghost"}
            className="border-[1.5px] px-12 md:w-[200px] h-[50px] "
          >
            Clear
          </Button>
          <Button className="md:w-[200px] h-[50px] rounded-md">
            Add Executor
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}
