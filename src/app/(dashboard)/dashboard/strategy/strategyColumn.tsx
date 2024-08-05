"use client";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./strategyAction";
interface Strategies {
  id: number;
  name: string;
  purchase: string[];
  creation: string;
  updated: string;
}
export const columns: ColumnDef<Strategies, any>[] = [
  {
    id: "rowNumber",
    header: "No",
    cell: ({ row }) => row.index + 1,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "purchase",
    header: "Buy/Sell",
    cell: ({ getValue }: CellContext<Strategies, string[]>) => {
      const value = getValue();
      return (
        <div className="flex items-center justify-center gap-3">
          {value.map((transaction, index) => (
            <div
              key={index}
              className={`${
                transaction === "Buy"
                  ? "w-[42px] h-[22px] bg-[#FFE6FC] dark:bg-[#3D0135] text-[#FE0FE2] font-inner font-[500] text-[12px]  border-[1px] border-[#FE0FE2]  text-center rounded-full"
                  : "w-[42px] h-[22px] bg-[#EAFAFA] dark:bg-[#0c3231] text-[#2DD2CE] font-inner font-[500] text-[12px]  border-[1px] border-[#2DD2CE] text-center rounded-full"
              }`}
            >
              {transaction}
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "creation",
    header: "Creation Date",
  },
  {
    accessorKey: "updated",
    header: "Last Updated",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
