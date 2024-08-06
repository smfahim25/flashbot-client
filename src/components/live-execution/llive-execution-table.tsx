"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import { LuSettings2 } from "react-icons/lu";
import { PiExport } from "react-icons/pi";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useEffect, useMemo, useRef, useState } from "react";
import FilterOption from "./execution-filter";
import { Executions } from "@/constants/data";

interface DataTableProps {
  columns: ColumnDef<Executions, any>[];
  data: Executions[];
  searchKey: string;
  pageNo: number;
  totalUsers: number;
  pageSizeOptions?: number[];
  pageCount: number;
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

const jakarta = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["vietnamese"],
});

export function ExecutionTable({
  columns,
  data,
  pageCount,
  pageSizeOptions = [10, 20, 30, 40, 50],
}: DataTableProps) {
  const [show, setShow] = useState(false);

  const table = useReactTable({
    data: data,
    columns: columns,
    pageCount: pageCount ?? -1,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true,
  });

  const btnRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as HTMLElement)) {
        setShow(false);
      }
    };

    document.body.addEventListener("mousedown", closeMenu);

    return () => document.body.removeEventListener("mousedown", closeMenu);
  }, []);
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center ">
          <span className="bg-[#FE0FE2] text-white p-2 rounded-lg mr-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5975 8.50494C10.89 7.27494 9.81748 6.2024 8.58748 6.4949C8.00998 6.6374 7.53749 7.10992 7.39499 7.68742C7.10249 8.91742 8.17498 9.98991 9.40498 9.69741C9.98998 9.55491 10.4625 9.08244 10.5975 8.50494Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5075 12.8925C14.79 11.6925 15.5925 9.98998 15.5925 8.09248C15.5925 4.44748 12.6375 1.5 9.00003 1.5C5.36253 1.5 2.40753 4.45498 2.40753 8.09248C2.40753 9.99748 3.21753 11.715 4.51503 12.915"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.00001 10.9126C5.31001 10.1776 4.88251 9.18759 4.88251 8.09259C4.88251 5.82009 6.72751 3.9751 9.00001 3.9751C11.2725 3.9751 13.1175 5.82009 13.1175 8.09259C13.1175 9.18759 12.69 10.1701 12 10.9126"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.72498 12.495L6.64498 13.8375C5.78998 14.91 6.54748 16.4925 7.91998 16.4925H10.0725C11.445 16.4925 12.21 14.9025 11.3475 13.8375L10.2675 12.495C9.62248 11.6775 8.37748 11.6775 7.72498 12.495Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className={`${jakarta.className} text-[14px]`}>
            Live Execution
          </span>
        </div>
        <div className="flex mt-5">
          <Input
            placeholder="search"
            className="w-[250px] md:max-w-sm mb-2 mr-6"
          />

          <div ref={btnRef}>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="border-2"
                  onClick={() => setShow(!show)}
                >
                  <LuSettings2 className="mr-2" />
                  Filter
                </Button>
              </PopoverTrigger>
              {show && (
                <div className="absolute z-50 w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 2xl:top-[180px] sm:top-[130px] right-[350px]">
                  <FilterOption />
                  <Button
                    variant={"secondary"}
                    className="w-full dark:text-[#FE0FE2] dark:bg-[#700162]"
                    onClick={() => setShow(false)}
                  >
                    Apply
                  </Button>
                </div>
              )}
            </Popover>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[calc(80vh-220px)] rounded-md">
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
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="text-center border-0"
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          <div>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No result found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      <div className="flex flex-col items-center justify-end gap-2 space-x-2 py-4 sm:flex-row">
        <div className="flex w-full items-center justify-between">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
            <div className="flex items-center space-x-2">
              <p className="whitespace-nowrap text-sm font-medium">
                Rows per page
              </p>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value));
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {pageSizeOptions.map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2 sm:justify-end">
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              aria-label="Go to first page"
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <DoubleArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              aria-label="Go to previous page"
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              aria-label="Go to next page"
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              aria-label="Go to last page"
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <DoubleArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
