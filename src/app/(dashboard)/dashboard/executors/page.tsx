import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiPlus } from "react-icons/fi";
import { TfiImport } from "react-icons/tfi";
import { columns } from "./executorsColumn";
import { Card } from "@/components/ui/card";
import { EmployeeTable } from "../../../../components/executors/executors-table";
import { Lexend, Manrope } from "next/font/google";
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
              Executors
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="">
            <Button
              className="mr-4 text-[16px] bg-[#FFE6FC] hover:bg-[#f4c4ef] text-[#FE0FE2]
dark:bg-[#3D0135]"
            >
              {" "}
              <span className="px-2">
                <TfiImport size={18} />
              </span>
              <span className={manarop.className}> Import Executors</span>
            </Button>
            <Button className="text-[16px]">
              <span className="px-2">
                <FiPlus />
              </span>
              <span className={manarop.className}> Add Executors</span>
            </Button>
          </div>
        </div>

        <div className=" w-full rounded-xl p-4 mt-5">
          <Card className="mt-4 border-none">
            <EmployeeTable
              searchKey="size"
              pageNo={page}
              columns={columns}
              totalUsers={totalUsers}
              data={employee}
              pageCount={pageCount}
            />
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
