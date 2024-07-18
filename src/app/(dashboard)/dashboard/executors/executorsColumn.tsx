"use client";
import { Executor } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./executorAction";

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
    accessorKey: "ticker",
    header: "Ticker/Coin/Symbol",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "tp",
    header: "TP/SL",
  },
  {
    accessorKey: "startposition",
    header: "Start Position",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "strategy",
    header: "Strategy",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
