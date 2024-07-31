import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiPlus } from "react-icons/fi";
import { TfiImport } from "react-icons/tfi";
import { columns } from "./strategyColumn";
import { Card } from "@/components/ui/card";
import { Lexend, Manrope } from "next/font/google";
import Link from "next/link";
import { StrategyTable } from "@/components/strategy/strategy-table";
interface Strategies {
  id: number;
  name: string;
  purchase: string;
  creation: string;
  updated: string;
}

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Strategy List", link: "/dashboard/strategy" },
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
  const strategies: Strategies[] = [
    {
      id: 1,
      name: "RSI Testing",
      purchase: "Buy",
      creation: "May 22, 2024",
      updated: "May 22, 2024",
    },
    {
        id: 2,
        name: "(L) RSI 13 + EMA 200",
        purchase: "Sell",
        creation: "May 16, 2024",
        updated: "May 16, 2024",
      },
      {
        id: 3,
        name: "May 24",
        purchase: "Buy",
        creation: "May 22, 2024",
        updated: "May 22, 2024",
      },
      {
        id: 4,
        name: "RC Test 1",
        purchase: "Sell",
        creation: "May 22, 2024",
        updated: "May 22, 2024",
      },
      {
        id: 5,
        name: "(L) AC200+BB2.5 ",
        purchase: "Buy",
        creation: "May 22, 2024",
        updated: "May 22, 2024",
      },
      {
        id: 6,
        name: "(L) AC100+BB2.5 ",
        purchase: "Buy",
        creation: "May 22, 2024",
        updated: "May 22, 2024",
      },
      {
        id: 7,
        name: "(L) EMA 100",
        purchase: "Buy",
        creation: "May 22, 2024",
        updated: "May 22, 2024",
      },
      {
        id: 8,
        name: "BB 2.5 + 21",
        purchase: "Buy",
        creation: "May 22, 2024",
        updated: "May 22, 2024",
      },
      {
        id: 9,
        name: "(S) BB3+MAC200",
        purchase: "Buy",
        creation: "May 22, 2024",
        updated: "May 22, 2024",
      },
      
      {
        id: 10,
        name: "BB 2.5 + MAC200",
        purchase: "Buy",
        creation: "May 22, 2024",
        updated: "May 22, 2024",
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
              Strategy Builder
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          <div className="">
            <Link href="/dashboard/addexecutors">
              <Button className="text-[16px]">
                <span className="px-2">
                  <FiPlus />
                </span>
                <span className={manarop.className}> Create Strategy</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full rounded-xl">
          <Card className="border-none px-5 py-5">
            <StrategyTable
              searchKey="name"
              pageNo={page}
              columns={columns}
              totalUsers={totalUsers}
              data={strategies}
              pageCount={pageCount}
            />
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
