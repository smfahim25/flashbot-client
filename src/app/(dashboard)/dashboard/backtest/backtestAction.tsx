"use client";
import { SideModal } from "@/components/sideModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Executor } from "@/constants/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CellActionProps {
  data: Executor;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <>
      <SideModal
        title="May Test 13"
        description="View more"
        isOpen={viewMore}
        onClose={() => setViewMore(false)}
      >
        <ScrollArea className="h-[85vh]">
          <h2 className="py-4 text-[16px] text-gray-500">
            id: 666123ce0df0f0f0f129038bdsfg0984bnfv9
          </h2>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Coin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">ADAUSDT</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">1000ADA</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  TP/SL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">2:-1</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Start Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">NEUTRAL</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600] bg-[#E5FFEA] text-[#00B21D] text-center me-[60px] py-1 rounded-md">
                  Completed
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Close Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">TP/SL</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Consensus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">100% Thresh</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Leverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">20</div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="py-4 text-[16px] text-gray-500">
              Strategies Assigned
            </h2>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <Select>
                  <SelectTrigger className="w-full bg-[white] dark:text-white dark:bg-[#3E3F42]">
                    <SelectValue placeholder="BB" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BB">BB</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="text-sm p-4 text-gray-500 dark:text-white innertext">
                  <h4>Period: 13</h4>
                  <h4>StdDev : 3</h4>
                  <h4>15</h4>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] mt-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Select>
                  <SelectTrigger className="w-full bg-[white] dark:text-white dark:bg-[#3E3F42]">
                    <SelectValue placeholder="rsi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">rsi</SelectItem>
                    <SelectItem value="dark">rsi</SelectItem>
                    <SelectItem value="system">rsi</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="text-sm p-4 text-gray-500 dark:text-white innertext">
                  <h4>PeriodRSI: 13</h4>
                  <h4>EMA : True</h4>
                  <h4>High Limit : 85</h4>
                  <h4>Low Limit : 15</h4>
                  <h4>30m</h4>
                </div>
              </CardContent>
            </Card>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </SideModal>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setViewMore(true)}>
            View More
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
