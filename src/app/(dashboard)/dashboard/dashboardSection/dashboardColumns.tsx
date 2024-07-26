"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Employee } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";

export const dashboardColumns: ColumnDef<Employee>[] = [
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
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "day",
    header: "24h%",
  },
];
