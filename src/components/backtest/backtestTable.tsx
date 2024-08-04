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
  SelectGroup,
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
import FilterOption from "./backtestFilter";
import { UserJob } from "@/lib/schemas";

interface DataTableProps {
  columns: ColumnDef<UserJob, any>[];
  data: UserJob[];
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

export function BacktestTable({
  columns,
  data,
  searchKey,
  pageCount,
  pageSizeOptions = [10, 20, 30, 40, 50],
}: DataTableProps) {
  const [show, setShow] = useState(false);
  const [selectOngoing, setSelectOngoing] = useState(true);
  const [selectHistory, setSelectHistory] = useState(false);
  const [filteredData, setFilteredData] = useState<UserJob[]>([]);

  useEffect(() => {
    if (selectOngoing) {
      setFilteredData(
        data.filter((job) => job.progress.status === "in_progress")
      );
    } else if (selectHistory) {
      setFilteredData(data.filter((job) => job.progress.status === "complete"));
    }
  }, [selectOngoing, selectHistory, data]);

  // Conditionally adjust columns based on the selectHistory state
  const filteredColumns = useMemo(() => {
    return columns.filter((column) => {
      if (column.id === "download" && selectHistory && !selectOngoing) {
        return true;
      } else if (column.id === "download" && selectOngoing) {
        return false;
      }
      return true;
    });
  }, [selectHistory, columns, selectOngoing]);

  const table = useReactTable({
    data: filteredData,
    columns: filteredColumns,
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
        <div className="flex items-center cursor-pointer">
          <span
            className={`${jakarta.className} text-[14px] border-b-2 ${
              selectOngoing && "border-[#FE0FE2] text-[#FE0FE2]"
            } p-3`}
            onClick={() => {
              setSelectHistory(false);
              setSelectOngoing(true);
            }}
          >
            Ongoing Backtest
          </span>
          <span
            className={`${jakarta.className} text-[14px] border-b-2 p-3 ${
              selectHistory && "border-[#FE0FE2] text-[#FE0FE2]"
            }`}
            onClick={() => {
              setSelectHistory(true);
              setSelectOngoing(false);
            }}
          >
            History & Statistics
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

          <div>
            <Button variant={"secondary"} className="ml-4">
              <span className="px-2">
                <PiExport size={18} />
              </span>
              Export Backtest
            </Button>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[calc(80vh-220px)] w-[1050px] rounded-md border">
        <Table className="relative">
          <TableHeader>
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
                    className="text-center"
                  >
                    {row.getVisibleCells().map((cell) => {
                      const status = cell.column.id.includes("status");
                      const statusCol = cell.row.original.progress.status;

                      return (
                        <TableCell key={cell.id}>
                          <div
                            className={
                              status && statusCol === "complete"
                                ? "bg-[#E5FFEA] text-[#00B21D] p-2 text-center rounded-md"
                                : status && statusCol === "in_progress"
                                ? "bg-orange-100 text-orange-500"
                                : ""
                            }
                          >
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
                  No backtest on going now
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
