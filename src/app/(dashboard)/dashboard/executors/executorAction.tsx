"use client";
import { AlertModal } from "@/components/alert-modal/alert-modal";
import { SideModal } from "@/components/sideModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import { Executor } from "@/constants/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface CellActionProps {
  data: Executor;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [openPause, setOpenPause] = useState(false);
  const [open, setOpen] = useState(false);
  const [cloneOpen, setCloneOpen] = useState(false);
  const [runBacksetOpen, setRunBacksetOpen] = useState(false);

  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <Modal
        title="Delete"
        description="Are you sure you want to delete executor?"
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button variant={"ghost"} className="border-2">
            Cancel
          </Button>
          <Button>Delete Executor</Button>
        </div>
      </Modal>
      <Modal
        title="Pause"
        description="Are you sure you want to pause?"
        isOpen={openPause}
        onClose={() => setOpenPause(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button variant={"ghost"} className="border-2">
            Cancel
          </Button>
          <Button>Pause Executor</Button>
        </div>
      </Modal>
      <Modal
        title="Export"
        description="Exporting Executor to JSON"
        isOpen={openExport}
        onClose={() => setOpenExport(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button variant={"ghost"} className="border-2">
            Cancel
          </Button>
          <Button>Export Executor</Button>
        </div>
      </Modal>
      <SideModal
        title="Export"
        description="Exporting Executor tomsfklsdaklfjklj JSON"
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button variant={"ghost"} className="border-2">
            Cancel
          </Button>
          <Button>Export Executor</Button>
        </div>
      </SideModal>
      <SideModal
        title="May Test 13"
        description="View more"
        isOpen={viewMore}
        onClose={() => setViewMore(false)}
      >
        <div className="grid grid-cols-2 gap-4 justify-center items-center">

        <Card className="border-0 bg-gray-100 h-[90px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
                Coin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[20px] font-[600]">
                ADAUSDT
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gray-100 h-[90px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
                Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[20px] font-[600]">
                1000ADA
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gray-100 h-[90px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
                TP/SL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[20px] font-[600]">
                2:-1
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gray-100 h-[90px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
                Start Position
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[20px] font-[600]">
                NEUTRAL
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gray-100 h-[90px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
                Status
              </CardTitle>
            </CardHeader>
            <CardContent >
              <div className="text-[20px] font-[600] bg-orange-100 text-center text-orange-500 me-[60px]">
                Pause
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gray-100 h-[90px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
                Close Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[20px] font-[600]">
                TP/SL
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
        <h2 className="py-4 text-xl text-gray-500">Strategies Assigned</h2>
        <Card className="border-0 bg-gray-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="rsi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">rsi</SelectItem>
                <SelectItem value="dark">rsi</SelectItem>
                <SelectItem value="system">rsi</SelectItem>
              </SelectContent>
            </Select>

            </CardHeader>
            <CardContent>
              <div className="text-sm p-4 text-gray-500 innertext">
                <h4>PeriodRSI: 13</h4>
                <h4>EMA : True</h4>
                <h4>High Limit : 85</h4>
                <h4>Low Limit : 15</h4>
                <h4>30m</h4>  
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gray-100 mt-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="rsi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rsi">rsi</SelectItem>
              </SelectContent>
            </Select>

            </CardHeader>
          </Card>
        </div>
        
      </SideModal>
      <SideModal
        title="Clone Executors"
        description="Clone Executors tomsfklsdaklfjklj JSON"
        isOpen={cloneOpen}
        onClose={() => setCloneOpen(false)}
      >
        <div className="">
          <Label className="text-lg">End Date</Label>
          <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rsi">rsi</SelectItem>
              </SelectContent>
            </Select>
          <div className="flex gap-4 w-[300px] mx-auto mt-14">
            <Button variant={"ghost"} className="border-2 px-12 bg-gray-100">
              Cancel
            </Button>
            <Button>Clone Executor</Button>
          </div>
        </div>
      </SideModal>

      <SideModal
        title="Configure Backtest"
        description="Clone Executors tomsfklsdaklfjklj JSON"
        isOpen={runBacksetOpen}
        onClose={() => setRunBacksetOpen(false)}
      >
        <div className="">
          <div className="mb-5">
          <Label className="text-xs">Start Date</Label>
          <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rsi">rsi</SelectItem>
              </SelectContent>
            </Select>
          </div>

            <div className="mb-5">
            <Label className="text-xs">End Date</Label>
          <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rsi">rsi</SelectItem>
              </SelectContent>
            </Select>
            </div>

            <div className="mb-5">
            <Label className="text-xs">Coin</Label>
          <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rsi">rsi</SelectItem>
              </SelectContent>
            </Select>
            </div>
            <Label className="text-sm underline">You are backtesting on ---</Label>

            <div className="my-2">
            <Label className="text-xs">Custom Strategy</Label>
            <h2 className="text-lg font-[700]"> 1000BONKUSDT: 1 USDT -1: -1- LONG</h2>
            </div>

            <div className="my-2">
            <Label className="text-xs">Strategies</Label>
            <h2 className="text-lg font-[700]"> macd( 5m ) | rsi( 12h ) </h2>
            </div>


          <div className="flex gap-4 justify-center mx-auto mt-14">
            <Button variant={"ghost"} className="px-12 w-[200px] bg-gray-100 hover:bg-gray-200">
              Cancel
            </Button>
            <Button className="w-[200px]">Run Backtest</Button>
          </div>
        </div>
      </SideModal>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
          onClick={() => setViewMore(true)}
          >
            View More
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setViewOpen(true)}>
            Edit Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCloneOpen(true)}>
            Clone Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setRunBacksetOpen(true)}>
            Run backtest
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            View Executions
          </DropdownMenuItem>
          <hr />
          <DropdownMenuItem onClick={() => setOpenPause(true)}>
            <span className="text-yellow-400">Pause Executor</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenExport(true)}>
            Export Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenDelete(true)}>
            <span className="text-red-500">Delete Executor</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
