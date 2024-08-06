"use client";
import React, { useEffect } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Lexend } from "next/font/google";
import useBacktestStore from "@/app/store/useBacktestStore";
import Loader from "@/components/ui/loader";
import { columns } from "./executtion-column";
import { ExecutionTable } from "@/components/live-execution/llive-execution-table";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Live Execution", link: "/dashboard/live_execution" },
];
const lexend = Lexend({
  weight: "600",
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
                Live Execution
              </h6>
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </div>

          <div className="w-full rounded-xl">
            <Card className="border-none p-2 px-5">
              <ExecutionTable
                searchKey="size"
                pageNo={page}
                columns={columns}
                totalUsers={totalUsers}
                data={[]}
                pageCount={pageCount}
              />
            </Card>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
