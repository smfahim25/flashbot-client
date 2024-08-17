"use client";
import { Executor } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./backtestAction";
import { UserJob, UserJobs } from "@/lib/schemas";
interface Metadata {
  backtest_metadata: {
    executor_copy: {
      name: string;
      symbol: string;
      quantity: number;
      take_profit: number;
      stop_loss: number;
      paused: boolean;
      close_mode: string;
      consensus_treshold: number;
      start_mode: string;
      leverage: number;
      quantity_mode: string;
      id: string;
      last_change: string;
      strategys: { name: string }[];
    };
  };
}
export type Job = {
  id: string;
  type: string;
  instructions: string;
  result: string;
  user_id: string;
  settings: string;
  created_date: string;
  metadata: Metadata;
  progress: string;
};

export const columns: ColumnDef<UserJob>[] = [
  {
    id: "rowNumber",
    header: "No",
    cell: ({ row }) => <div>{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div>{row?.original.metadata?.backtest_metadata.executor_copy.name}</div>
    ),
  },
  {
    accessorKey: "coin",
    header: "Ticker/Coin/Symbol",
    cell: ({ row }) => (
      <div className="capitalize w-36">
        {row?.original.metadata?.backtest_metadata.executor_copy.symbol}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Size",
    cell: ({ row }) => (
      <div className="capitalize">
        {row?.original?.metadata?.backtest_metadata?.executor_copy?.quantity}
      </div>
    ),
  },
  {
    accessorKey: "SLTP",
    header: "TP/SL",
    cell: ({ row }) => (
      <div>
        {row?.original.metadata?.backtest_metadata.executor_copy.take_profit}:{" "}
        {row?.original.metadata?.backtest_metadata.executor_copy.stop_loss}
      </div>
    ),
  },
  {
    accessorKey: "startPos",
    header: "Start Position",
    cell: ({ row }) => (
      <div className="capitalize w-10">
        {row?.original?.metadata?.backtest_metadata?.executor_copy?.start_mode}
      </div>
    ),
  },
  {
    accessorKey: "strategyName",
    header: "Strategy Name",
    cell: ({ row }) => (
      <div className="capitalize">
        {
          row?.original.metadata?.backtest_metadata?.executor_copy?.strategys[0]
            ?.name
        }
      </div>
    ),
  },
  {
    accessorKey: "created_date",
    header: "Created Date",
    cell: ({ row }) => (
      <div className="capitalize">
        {new Date(row?.original?.created_date).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row?.original?.progress?.status}</div>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
