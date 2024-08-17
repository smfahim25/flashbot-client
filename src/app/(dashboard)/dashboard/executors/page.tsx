"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiPlus } from "react-icons/fi";
import { TfiImport } from "react-icons/tfi";
import { columns } from "./executorsColumn";
import { Card } from "@/components/ui/card";
import { ExecutorTable } from "../../../../components/executors/executors-table";
import { Lexend, Manrope } from "next/font/google";
import Link from "next/link";
import useExecutorStore from "@/app/store/useExecutorStore";
import { useEffect, useRef } from "react";
import Loader from "@/components/ui/loader";
import { toast } from "react-toastify";
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
  { title: "Executors", link: "/dashboard/executors" },
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
  const fileInputRef = useRef<any>(null);
  const {
    data: executorData,
    total_count,
    isLoading,
    error,
    getData,
  } = useExecutorStore();
  const { createExecutor, isLoading: addExLoader } = useExecutorStore();

  useEffect(() => {
    getData();
  }, [getData]);

  const totalUsers = 20;
  const pageLimit = 50;
  const page = 0;
  const pageCount = Math.ceil(total_count / pageLimit);

  const handleImport = () => {
    fileInputRef.current.click();
  };

  const reviver = (ke: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      const seen = new WeakSet();
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };

  const readFileContent = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];

    const fileContent: any = await readFileContent(file);
    const jsonData = JSON.parse(fileContent, reviver);
    try {
      const obj = {
        close_mode: jsonData.close_mode,
        consensus_treshold: jsonData.consensus_treshold,
        leverage: jsonData.leverage,
        name: jsonData.name,
        paused: jsonData.paused,
        quantity: jsonData.quantity,
        quantity_mode: jsonData.quantity_mode,
        start_mode: jsonData.start_mode,
        stop_loss: jsonData.stop_loss,
        symbol: jsonData.symbol,
        take_profit: jsonData.take_profit,
        strategys: jsonData?.strategys?.map((strategy: any) => {
          return {
            name: strategy.name,
            parameters: strategy.parameters,
            timeframe: strategy.timeframe,
            is_custom: strategy.is_custom,
          };
        }),
      };
      if (obj.name === undefined) {
        toast.error("Error uploading file, recheck file content");
      } else {
        const response = await createExecutor(obj);
        toast.success("Successfully imported executor");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file, recheck file content");
    }
  };
  return (
    <ScrollArea className="h-full relative">
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
              Executors
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              className="mr-4 text-[16px] bg-[#FFE6FC] hover:bg-[#f4c4ef] text-[#FE0FE2]
dark:bg-[#3D0135]"
              onClick={handleImport}
            >
              <span className="px-2">
                <TfiImport size={18} />
              </span>
              <span className={manarop.className}> Import Executors</span>
            </Button>
            <Link href="/dashboard/executors/addexecutors">
              <Button className="text-[16px]">
                <span className="px-2">
                  <FiPlus />
                </span>
                <span className={manarop.className}> Add Executors</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full rounded-xl">
          <Card className="border-none px-5 py-5">
            <ExecutorTable
              pageNo={page}
              columns={columns}
              totalUsers={totalUsers}
              data={!isLoading ? executorData : []}
              pageCount={pageCount}
            />
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
