"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { LuSettings2 } from "react-icons/lu";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey: string;
  title: string;
  totalUsers?: number;
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}
const jakarta = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["vietnamese"],
});

export function DashboardTable<TData, TValue>({
  columns,
  data,
  searchKey,
  title,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true,
  });

  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <p className={`text-[14px] ${jakarta.className}`}>{title}</p>
        <div className="relative">
          <div className="absolute inset-y-0 ml-3 mb-1 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-[#BDBFC2]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.785 4.786a1 1 0 01-1.414 1.414l-4.785-4.786zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Input
            placeholder={`Search ${searchKey}`}
            className="block w-[230px] md:max-w-sm mb-2 bg-[#FAFAFA] dark:bg-[#19191A] pl-10 focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <ScrollArea className=" rounded-md border-0">
        <Table className="relative border-0">
          <TableHeader className="[&_tr]:border-b-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-0"
                >
                  {row.getVisibleCells().map((cell) => {
                    const name = cell.column.id.includes("name");
                    return (
                      <TableCell key={cell.id}>
                        <div className="flex justify-center items-center">
                          <div className="mr-1">
                            {name && (
                              <Image
                                src="/imgs/bitcoin.svg"
                                alt="bitcoin"
                                width={30}
                                height={20}
                              />
                            )}
                          </div>
                          <div>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </div>
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center border-0"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
