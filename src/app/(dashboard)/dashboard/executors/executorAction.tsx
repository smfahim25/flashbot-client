"use client";
import { SideModal } from "@/components/sideModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import { Executor, Strategy } from "@/constants/data";
import {
  Select as UiSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CalendarDateRangePicker } from "@/components/date-pick-ranger";

import useSymbolStore from "@/app/store/useSymbolStore";
import MultipleSelector, { Option } from "@/components/ui/multiselector";
import useExecutorStore from "@/app/store/useExecutorStore";

interface CellActionProps {
  data: Executor;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [cloneMode, setCloneMode] = useState<string>("");
  const [viewOpen, setViewOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [openPause, setOpenPause] = useState(false);
  const [open, setOpen] = useState(false);
  const [cloneOpen, setCloneOpen] = useState(false);
  const [runBacksetOpen, setRunBacksetOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [coinValue, setCoinValue] = useState<Option[]>([]);
  const router = useRouter();
  const { data: symbolData, getData } = useSymbolStore();
  const cloneExecutor = useExecutorStore((state) => state.cloneExecutor);
  const strategies = data.strategys ?? [];
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(
    null
  );
  const [showDetails, setShowDetails] = useState(false);
  const [displayDetails, setDisplayDetails] = useState(false);

  const handleSelectChange = (value: any) => {
    const strategy = strategies.find((s) => s.name === value);
    setSelectedStrategy(strategy || null);
    setShowDetails(true); // Show details when a new strategy is selected
    setDisplayDetails(true);
  };

  const handleExportExecutor = async () => {
    const fileName = `${data?.name}.json`;
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setOpenExport(false);
  };
  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const symbolOptions: Option[] = symbolData
      ?.sort((a, b) => a.symbol_name.localeCompare(b.symbol_name))
      .map((symbol) => ({
        label: symbol.symbol_name,
        value: symbol.symbol_name,
      }));
    setOptions(symbolOptions);
  }, [symbolData]);

  const handleCloneExecutor = async (clone_mode: string) => {
    const body = {
      executor_id: data?.id.toString(), // Ensure data?.id is not undefined
      clone_mode: clone_mode,
      symbols: coinValue.map((obj) => obj.value),
    };
    await cloneExecutor(body); // Ensure you await the promise
  };

  return (
    <>
      <Modal
        title="Delete"
        description="Are you sure you want to delete executor?"
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button
            variant={"ghost"}
            className="border-2"
            onClick={() => setOpenDelete(false)}
          >
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
          <Button
            variant={"ghost"}
            className="border-2"
            onClick={() => setOpenPause(false)}
          >
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
          <Button
            variant={"ghost"}
            className="border-2"
            onClick={() => setOpenExport(false)}
          >
            Cancel
          </Button>
          <Button onClick={handleExportExecutor}>Export Executor</Button>
        </div>
      </Modal>
      <SideModal
        title="Export"
        description="Exporting Executor tomsfklsdaklfjklj JSON"
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button
            variant={"ghost"}
            className="border-2"
            onClick={() => setViewOpen(false)}
          >
            Cancel
          </Button>
          <Button>Export Executor</Button>
        </div>
      </SideModal>
      <SideModal
        title={data?.name}
        description="View more"
        isOpen={viewMore}
        onClose={() => setViewMore(false)}
      >
        <ScrollArea className="h-[85vh]">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Coin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">{data?.symbol}</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">{data?.quantity}%</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  TP/SL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">
                  {data?.take_profit}:{data?.stop_loss}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Start Position
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">{data?.start_mode}</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600] bg-orange-100 text-center text-orange-500 me-[60px]">
                  {data?.paused === true ? "Paused" : "Running"}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Close Mode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">{data?.close_mode}</div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="py-4 text-xl text-gray-500">
              {strategies.length > 0
                ? "Strategies Assigned"
                : "No Strategies Assigned"}
            </h2>
            {strategies.length > 0 && (
              <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <UiSelect
                    value={selectedStrategy ? selectedStrategy.name : ""}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="w-full bg-[white] dark:text-white dark:bg-[#3E3F42]">
                      <SelectValue placeholder="Select Strategy" />
                    </SelectTrigger>
                    <SelectContent>
                      {strategies.map((strategy) => (
                        <SelectItem key={strategy.name} value={strategy.name}>
                          {strategy.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </UiSelect>
                </CardHeader>
                {selectedStrategy && showDetails && displayDetails && (
                  <CardContent
                    className={`text-sm p-4 ml-5 text-gray-500 dark:text-white innertext transition-opacity duration-500 ease-in ${
                      showDetails && displayDetails
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <h4>PeriodRSI: {selectedStrategy.parameters.PeriodoRSI}</h4>
                    <h4>
                      EMA: {selectedStrategy.parameters.EMA ? "True" : "False"}
                    </h4>
                    <h4>
                      High Limit: {selectedStrategy.parameters["High Limit"]}
                    </h4>
                    <h4>
                      Low Limit: {selectedStrategy.parameters["Low Limit"]}
                    </h4>
                    <h4>{selectedStrategy.timeframe}</h4>
                  </CardContent>
                )}
              </Card>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </SideModal>

      <SideModal
        title="Clone Executors"
        description="Clone Executors tomsfklsdaklfjklj JSON"
        isOpen={cloneOpen}
        onClose={() => setCloneOpen(false)}
      >
        <div className="">
          <div className="flex flex-col p-4 md:flex-col justify-evenly gap-3">
            <UiSelect onValueChange={setCloneMode} defaultValue={cloneMode}>
              <SelectTrigger>
                <SelectValue placeholder="Select clone mode:" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="oneCoin">One Coin</SelectItem>
                <SelectItem value="multipleCoins">Multiple Coins</SelectItem>
                <SelectItem value="allCoins">All Coins</SelectItem>
              </SelectContent>
            </UiSelect>

            {cloneMode === "multipleCoins" && (
              <MultipleSelector
                value={coinValue}
                onChange={setCoinValue}
                defaultOptions={options}
                placeholder="Select Coins..."
                emptyIndicator={
                  <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                    no results found.
                  </p>
                }
              />
            )}
          </div>
          <div className="flex gap-5 justify-end mt-10">
            <Button
              variant={"ghost"}
              className="border-2 px-12 bg-[#F2F2F3] dark:bg-[#252628]"
              onClick={() => setCloneOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                switch (cloneMode) {
                  case "oneCoin":
                    router.push(
                      `/dashboard/executors/clone-executor/?id=${data?.id}`
                    );
                    break;
                  case "multipleCoins":
                    handleCloneExecutor("multiple_coins");
                    console.log("multiple coins");
                    break;
                  case "allCoins":
                    handleCloneExecutor("all_coins");
                    console.log("all coins");
                    break;
                  default:
                    console.log("default");
                    break;
                }
              }}
            >
              Clone Executor
            </Button>
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
            <CalendarDateRangePicker className="w-full" />
          </div>

          <div className="mb-5">
            <Label className="text-xs">End Date</Label>
            <CalendarDateRangePicker className="w-full" />
          </div>

          <div className="mb-5">
            <Label className="text-xs">Coin</Label>
            <UiSelect>
              <SelectTrigger className="w-full dark:bg-[#56595C]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="One Coin">One Coin</SelectItem>
                <SelectItem value="Multiple Coins">Multiple Coins</SelectItem>
                <SelectItem value="All Coins">All Coins</SelectItem>
              </SelectContent>
            </UiSelect>
          </div>
          <Label className="text-sm underline">
            You are backtesting on ---
          </Label>

          <div className="my-2">
            <Label className="text-xs">Custom Strategy</Label>
            <h2 className="text-lg font-[700]">
              {" "}
              1000BONKUSDT: 1 USDT -1: -1- LONG
            </h2>
          </div>

          <div className="my-2">
            <Label className="text-xs">Strategies</Label>
            <h2 className="text-lg font-[700]"> macd( 5m ) | rsi( 12h ) </h2>
          </div>

          <div className="flex gap-4 justify-center mx-auto mt-14">
            <Button
              variant={"ghost"}
              className="px-12 w-[200px] bg-[#F2F2F3] dark:bg-[#252628] hover:bg-gray-200"
              onClick={() => setRunBacksetOpen(false)}
            >
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
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setViewMore(true)}>
            View More
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push("/dashboard/addexecutors")}
          >
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
