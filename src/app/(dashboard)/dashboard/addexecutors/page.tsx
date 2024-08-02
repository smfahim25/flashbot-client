"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import { useEffect, useState } from "react";
import useSymbolStore from "@/app/store/useSymbolStore";
import useAvailableStrategiesStore from "@/app/store/useAvailableStrategies";
import useExecutorStore from "@/app/store/useExecutorStore";

interface FormData {
  executorName: string;
  tickerSymbol: string;
  closeMode: string;
  tp: number;
  sl: number;
  sizePerTrade: string;
  type: number;
  startPosition: string;
  status: string;
  consensus: number;
  leverage: number;
}

interface StrategyFormData {
  id: number;
  strategy: string;
  periodoRSI: string;
  ema: string;
  highLimit: string;
  lowLimit: string;
  timeframe: string;
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

const timeFrame = [
  {
    id: 1,
    name: "1 Minutes",
    value: "1m",
  },
  {
    id: 2,
    name: "3 Minutes",
    value: "3m",
  },
  {
    id: 3,
    name: "5 Minutes",
    value: "5m",
  },
  {
    id: 4,
    name: "15 Minutes",
    value: "15m",
  },
  {
    id: 5,
    name: "30 Minutes",
    value: "30m",
  },
  {
    id: 6,
    name: "1 Hour",
    value: "1h",
  },
  {
    id: 7,
    name: "2 Hours",
    value: "2h",
  },
  {
    id: 8,
    name: "4 Hours",
    value: "4h",
  },
  {
    id: 9,
    name: "6 Hours",
    value: "6h",
  },
  {
    id: 10,
    name: "8 Hours",
    value: "8h",
  },
  {
    id: 11,
    name: "12 Hours",
    value: "12h",
  },
  {
    id: 12,
    name: "1 Day",
    value: "1d",
  },
  {
    id: 13,
    name: "3 Days",
    value: "3d",
  },
  {
    id: 14,
    name: "1 Week",
    value: "1w",
  },
  {
    id: 15,
    name: "1 Month",
    value: "1M",
  },
];

// Define the types for the props
interface StrategyFormProps {
  onRemove: () => void;
  onAdd: () => void;
  showAddButton: boolean;
  formData: StrategyFormData;
  onChange: (id: number, fieldName: string, value: string) => void;
}

interface StrategyFormData {
  id: number;
  strategy: string;
  periodoRSI: string;
  ema: string;
  highLimit: string;
  lowLimit: string;
  timeframe: string;
}

function StrategyForm({
  onRemove,
  onAdd,
  showAddButton,
  formData,
  onChange,
}: StrategyFormProps) {
  // Handle individual form change
  const handleSelectChange = (fieldName: string, value: string) => {
    onChange(formData.id, fieldName, value);
  };

  const {data:strategies,isLoading:strategyLoading,error:strategyError,getData:strategyData} = useAvailableStrategiesStore();
  useEffect(()=>{
    strategyData();    
  },[strategyData])

  return (
    <Card className="w-full border-none p-2 px-5 mb-5">
      <div className="bg-[#CDF4F3] dark:bg-[#0B3231] w-[59px] h-[32px] flex justify-center my-4 rounded-sm">
        <h2 className="text-[#28B9B5] dark:text-[#28B9B5] text-center pt-1">
          {formData.strategy || "rsi"}
        </h2>
      </div>
      <div className="mb-5">
        <Label className="text-xs">Add Strategy</Label>
        <Select
          value={formData.strategy}
          onValueChange={(value) => handleSelectChange("strategy", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
          <ScrollArea className="h-[30vh]">
                  {strategies?.map((strategy) => (
                    <SelectItem key={strategy.name} value={strategy.name}>
                      {strategy.name}
                    </SelectItem>
                  ))}
                  </ScrollArea>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-x-4 justify-center items-center">
        <div className="mb-5">
          <Label className="text-xs">PeriodoRSI</Label>
          <Select
            value={formData.periodoRSI}
            onValueChange={(value) => handleSelectChange("periodoRSI", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="14">14</SelectItem>
              <SelectItem value="21">21</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-5">
          <Label className="text-xs">EMA</Label>
          <Select
            value={formData.ema}
            onValueChange={(value) => handleSelectChange("ema", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="True">True</SelectItem>
              <SelectItem value="False">False</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-5">
          <Label className="text-xs">High Limit</Label>
          <Select
            value={formData.highLimit}
            onValueChange={(value) => handleSelectChange("highLimit", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="70">70</SelectItem>
              <SelectItem value="80">80</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-5">
          <Label className="text-xs">Low Limit</Label>
          <Select
            value={formData.lowLimit}
            onValueChange={(value) => handleSelectChange("lowLimit", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-5">
          <Label className="text-xs">Timeframe</Label>
          <Select
            value={formData.timeframe}
            onValueChange={(value) => handleSelectChange("timeframe", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
            <ScrollArea className="h-[30vh]">
                  {timeFrame?.map((timeFrame) => (
                    <SelectItem key={timeFrame.id} value={timeFrame.value}>
                      {timeFrame.name}
                    </SelectItem>
                  ))}
                  </ScrollArea>
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

function StrategyFormManager({
  strategyForms,
  addForm,
  removeForm,
  handleFormChange,
}: {
  strategyForms: StrategyFormData[];
  addForm: () => void;
  removeForm: (id: number) => void;
  handleFormChange: (id: number, fieldName: string, value: string) => void;
}) {
  

  return (
    <div>
      {strategyForms.map((form, index) => (
        <StrategyForm
          key={form.id}
          onRemove={() => removeForm(form.id)}
          onAdd={addForm}
          showAddButton={index === strategyForms.length - 1}
          formData={form}
          onChange={handleFormChange}
        />
      ))}
    </div>
  );
}


export default function Page() {
  const { isMinimized } = useSidebar();
  const {data:symbols,isLoading,error,getData} = useSymbolStore();

  useEffect(()=>{
    getData();
  },[getData])
  

// Initialize strategy form data
  const [strategyForms, setStrategyForms] = useState<StrategyFormData[]>([
    {
      id: Date.now(),
      strategy: "rsi",
      periodoRSI: "",
      ema: "",
      highLimit: "",
      lowLimit: "",
      timeframe: "",
    },
  ]);

  // Add a new strategy  form
  const addForm = () => {
    setStrategyForms([
      ...strategyForms,
      {
        id: Date.now(),
        strategy: "",
        periodoRSI: "",
        ema: "",
        highLimit: "",
        lowLimit: "",
        timeframe: "",
      },
    ]);
  };

  // Remove a strategy form by ID
  const removeForm = (id: number) => {
    if (strategyForms.length > 1) {
      setStrategyForms(strategyForms.filter((form) => form.id !== id));
    }
  };

  // Handle change for each strategy form
  const handleFormChange = (id: number, fieldName: string, value: string) => {
    setStrategyForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id ? { ...form, [fieldName]: value } : form
      )
    );
  };


   const [formData, setFormData] = useState<FormData>({
    executorName: '',
    tickerSymbol: '',
    closeMode: '',
    tp: 0,
    sl: 0,
    sizePerTrade: '',
    type: 0,
    startPosition: '',
    status: '',
    consensus: 0,
    leverage: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSelectChange = (value: string, fieldName: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  
  const { createExecutor, error:addExError, isLoading:addExLoader } = useExecutorStore();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestBody = {
      name: formData.executorName, 
      symbol: formData.tickerSymbol,
      quantity: formData.type,
      take_profit: formData.tp,
      stop_loss: formData.sl,
      paused: formData.status, 
      close_mode: formData.closeMode,
      consensus_treshold: formData.consensus,
      start_mode: formData.startPosition,
      leverage: formData.leverage,
      quantity_mode: formData.sizePerTrade,
      strategys: strategyForms.map((strategyForm) => ({
        name: strategyForm.strategy,
        parameters: {
          periodoRSI: strategyForm.periodoRSI,
          ema: strategyForm.ema,
          highLimit: strategyForm.highLimit,
          lowLimit: strategyForm.lowLimit,
        },
        timeframe: strategyForm.timeframe,
        is_custom: false, 
        custom_strategy_id: formData.executorName.split(':')[1], 
      })),
    };
  

    console.log("API Request Body: ", requestBody);
    await createExecutor(requestBody);
    
  };

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
          <form >
          <Card className="border-none w-full p-2 px-5">
            <div className="mb-5">
            <Label className="text-xs">Executor Name</Label>
            <Input
              name="executorName"
              placeholder="Name"
              value={formData.executorName}
              onChange={handleChange}
            />
            </div>

            <div className="mb-5">
              <Label className="text-xs">Ticker / Coin / Symbol</Label>
              <Select
                value={formData.tickerSymbol}
                onValueChange={(value) => handleSelectChange(value, 'tickerSymbol')}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-[30vh]">
                  {symbols?.map((symbol) => (
                    <SelectItem key={symbol.symbol_name} value={symbol.symbol_name}>
                      {symbol.symbol_name}
                    </SelectItem>
                  ))}
                  </ScrollArea>
                  
                </SelectContent>
              </Select>
            </div>

            <div className="mb-5">
              <Label className="text-xs">Close Mode</Label>
              <Select
                value={formData.closeMode}
                onValueChange={(value) => handleSelectChange(value, 'closeMode')}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SL/TP">TP/SL</SelectItem>
                  <SelectItem value="STRATEGY">STRATEGY</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-x-4 justify-center items-center">
              <div className="mb-5">
                <Label className="text-xs">TP</Label>
                <div className="flex items-center border rounded-md w-full shadow-sm">
                  <input
                    type="number"
                    name="tp"
                    value={formData.tp}
                    onChange={handleChange}
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
                    name="sl"
                    value={formData.sl}
                    onChange={handleChange}
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
                <Select
                  value={formData.sizePerTrade}
                  onValueChange={(value) => handleSelectChange(value, 'sizePerTrade')}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="COIN">COIN</SelectItem>
                    <SelectItem value="CURRENCY">CURRENCY</SelectItem>
                    <SelectItem value="PERCENTAGE">PERCENTAGE</SelectItem>

                  </SelectContent>
                </Select>
              </div>

              <div className="mb-5">
                <Label className="text-xs">Type</Label>
                <div className="flex items-center border rounded-md w-full shadow-sm">
                  <input
                    type="number"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
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
              <Select
                value={formData.startPosition}
                onValueChange={(value) => handleSelectChange(value, 'startPosition')}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LONG">LONG</SelectItem>
                  <SelectItem value="SHORT">SHORT</SelectItem>
                  <SelectItem value="NEUTRAL">NEUTRAL</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-5">
              <Label className="text-xs">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleSelectChange(value, 'status')}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Paused</SelectItem>
                  <SelectItem value="false">Not Paused</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-5">
              <Label className="text-xs">Consensus</Label>
              <div className="flex items-center border rounded-md w-full shadow-sm">
                <input
                  type="number"
                  name="consensus"
                  value={formData.consensus}
                  onChange={handleChange}
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
                  name="leverage"
                  value={formData.leverage}
                  onChange={handleChange}
                  className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                  placeholder="0"
                />
                <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                  %
                </span>
              </div>
            </div>
            </Card>
          </form>
          </ScrollArea>
          <div className="w-1/2">
            <ScrollArea className="h-[70vh] mt-4">
              <StrategyFormManager
              strategyForms={strategyForms}
              addForm={addForm}
              removeForm={removeForm}
              handleFormChange={handleFormChange}
               />
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
          <Button onClick={handleSubmit} className="md:w-[200px] h-[50px] rounded-md">
            Add Executor
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}
