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
import { Executor, Job } from "@/constants/data";
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
import { UserJob } from "@/lib/schemas";
import axiosClient from "@/lib/axiosClient";
import { toast } from "react-toastify";
import Loader from "@/components/ui/loader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CellActionProps {
  data: UserJob;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [viewMore, setViewMore] = useState(false);
  const [load, setLoad] = useState(false);

  const getDownloadUrl = async (id: string) => {
    setLoad(true);
    try {
      const response = await axiosClient.get(
        `/jobs/backtest_download_url/${id}`
      );
      setLoad(false);
      window.open(response.data.url, "_blank");
    } catch (error: any) {
      toast.error("An error occurred while fetching executors");
    }
  };
  return (
    <>
      {load && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader />
        </div>
      )}
      <SideModal
        title={data?.metadata?.backtest_metadata?.executor_copy?.name}
        description="View more"
        isOpen={viewMore}
        onClose={() => setViewMore(false)}
      >
        <ScrollArea className="h-[85vh]">
          <h2 className="py-4 text-[16px] text-gray-500">id: {data?.id}</h2>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Coin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">
                  {data?.metadata?.backtest_metadata?.executor_copy?.symbol}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">
                  {data?.metadata?.backtest_metadata?.executor_copy?.quantity}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  TP/SL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">
                  {
                    data?.metadata?.backtest_metadata?.executor_copy
                      ?.take_profit
                  }
                  :{data?.metadata?.backtest_metadata?.executor_copy?.stop_loss}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Start Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">
                  {data?.metadata?.backtest_metadata?.executor_copy?.start_mode}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`text-[14px] font-[600]  text-center  me-[60px] ${
                    data.progress.status === "complete"
                      ? "bg-[#E5FFEA] text-[#00B21D]"
                      : "bg-orange-100 text-orange-500"
                  }`}
                >
                  {data?.progress.status}
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
                <div className="text-[14px] font-[600]">
                  {data?.metadata?.backtest_metadata?.executor_copy?.close_mode}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Consensus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">
                  {
                    data?.metadata?.backtest_metadata?.executor_copy
                      ?.consensus_treshold
                  }
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Leverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">
                  {" "}
                  {data?.metadata?.backtest_metadata?.executor_copy?.leverage}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="py-4 text-[16px] text-gray-500">
              Strategies Assigned
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full p-4 bg-[#F2F2F3] dark:bg-[#252628] rounded-md mb-10"
            >
              {data?.metadata?.backtest_metadata?.executor_copy?.strategys?.map(
                (strategy: any) => (
                  <AccordionItem
                    value={`item-${strategy.id}-${Math.random()}-${Date.now()}`}
                    key={`item-${strategy.id}-${
                      data.id
                    }-${Math.random()}-${Date.now()}`}
                    className="mb-5"
                  >
                    <AccordionTrigger className=" px-4 rounded-lg py-2 bg-[white] dark:text-white dark:bg-[#3E3F42]">
                      {strategy.name}
                    </AccordionTrigger>
                    <AccordionContent className="p-4">
                      {strategy.parameters &&
                        Object.entries(strategy.parameters).map(
                          ([key, value]) => (
                            <p key={key}>
                              {key} : {String(value)}
                            </p>
                          )
                        )}

                      <div className=""> {strategy.timeframe}</div>
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
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
          {data.progress.status === "complete" && (
            <DropdownMenuItem onClick={() => getDownloadUrl(data.id)}>
              Download CSV
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
