"use client";
import { Executions } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Executions>[] = [
  {
    id: "rowNumber",
    header: "No",
    cell: ({ row }) => row.index + 1,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "ticker",
    header: "Ticker",
  },
  {
    accessorKey: "profit",
    header: "Unrealized Profit",
  },
  {
    accessorKey: "leverage",
    header: "Leverage",
  },
  {
    accessorKey: "start_mode",
    header: "Position Scale",
  },
  {
    accessorKey: "quantity",
    header: "Size",
  },
];
