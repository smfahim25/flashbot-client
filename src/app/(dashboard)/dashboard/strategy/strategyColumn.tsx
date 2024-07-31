"use client";
import { Strategies } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./strategyAction";

export const columns: ColumnDef<Strategies>[] = [
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
