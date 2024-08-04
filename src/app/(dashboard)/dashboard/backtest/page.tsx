"use client";
import React, { useEffect } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Lexend, Manrope } from "next/font/google";
import { columns } from "./backtestColumn";
import { BacktestTable } from "@/components/backtest/backtestTable";
import useBacktestStore from "@/app/store/useBacktestStore";
import Loader from "@/components/ui/loader";

interface Backtest {
  id: number;
  name: string;
  tp: string;
  status: string;
  ticker: string;
  size: string;
  startposition: string;
  strategy: string;
  createdDate: string;
}

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Backtest", link: "/dashboard/backtest" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
const manarop = Manrope({
  weight: "700",
  subsets: ["vietnamese"],
});
export default function Page() {
  const totalUsers = 20;
  const pageLimit = 10;
  const page = 1;
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const { backtestData, isLoading, getBacktest } = useBacktestStore();
  useEffect(() => {
    getBacktest();
  }, [getBacktest]);
  console.log(backtestData);

  return (
    <div>
      <ScrollArea className="h-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <Loader />
          </div>
        )}
        <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
          <div className="flex justify-between items-center">
            <div>
              <h6
                className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
              >
                Backtest
              </h6>
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </div>

          <div className="w-full rounded-xl">
            <Card className="border-none p-2 px-5">
              <BacktestTable
                searchKey="size"
                pageNo={page}
                columns={columns}
                totalUsers={totalUsers}
                data={!isLoading ? backtestData.jobs : []}
                pageCount={pageCount}
              />
            </Card>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
