"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./executorAction";
import { Executor } from "@/constants/data";

export const columns: ColumnDef<Executor>[] = [
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
    accessorKey: "symbol",
    header: "Ticker/Coin/Symbol",
  },
  {
    accessorKey: "quantity",
    header: "Size",
  },
  {
    id: "tp",
    header: "TP/SL",
    cell: ({ row }) => (
      <div>
        <div>
          {row.original.take_profit}:{row.original.stop_loss}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "start_mode",
    header: "Start Position",
  },
  {
    id: "paused",
    header: "Status",
    cell: ({ row }) => (
      <div>
        <div>{row.original.paused === true ? "Paused" : "Running"}</div>
      </div>
    ),
  },
  {
    id: "strategys",
    header: "Strategy",
    cell: ({ row }) => (
      <div>
        <div>{row.original.strategys[0]?.name}</div>
      </div>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
