import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiPlus } from "react-icons/fi";
import { TfiImport } from "react-icons/tfi";
// import { columns } from "./executorsColumn";
import { Card } from "@/components/ui/card";
import { EmployeeTable } from "../../../../components/executors/executors-table";
import { Lexend, Manrope } from "next/font/google";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
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
export default function page() {
  const totalUsers = 20;
  const pageLimit = 10;
  const page = 1;
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const employee: Executor[] = [
    {
      id: 1,
      name: "RSI Testing",
      ticker: "1000BONKUSDT",
      size: "1USDT",
      tp: "1:-1",
      startposition: "LONG",
      status: "Pause",
      strategy: "RSI Testing",
    },
    {
      id: 2,
      name: "KRP Testing",
      ticker: "1000BONKUSDT",
      size: "1USDT",
      tp: "1:-1",
      startposition: "LONG",
      status: "Pause",
      strategy: "RSI Testing",
    },
    {
      id: 3,
      name: "ZEP Testing",
      ticker: "1000BONKUSDT",
      size: "1USDT",
      tp: "1:-1",
      startposition: "LONG",
      status: "Pause",
      strategy: "RSI Testing",
    },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
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
          <Card className="mt-4 border-none w-1/2 p-2 px-5">
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
          
          </Card>
          <Card className="mt-4 w-1/2 border-none p-2 px-5">
           
           </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
