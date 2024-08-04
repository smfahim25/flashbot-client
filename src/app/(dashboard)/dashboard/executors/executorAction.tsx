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

import { CalendarIcon, EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CalendarDateRangePicker } from "@/components/date-pick-ranger";

import useSymbolStore from "@/app/store/useSymbolStore";
import MultipleSelector, { Option } from "@/components/ui/multiselector";
import useExecutorStore from "@/app/store/useExecutorStore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calender";
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [coinType, setCoinType] = useState("Default");
  const [value, setValue] = useState<Option[]>([]);
  const [_options, _setOptions] = useState<Option[]>([]);
  const router = useRouter();
  const { data: symbolData, getData } = useSymbolStore();
  const cloneExecutor = useExecutorStore((state) => state.cloneExecutor);
  const runBacktest = useExecutorStore((state) => state.runBacktest);
  const { deleteExecutor } = useExecutorStore();
  const strategies = data.strategys ?? [];
  const [startDateShow, setStartDateShow] = useState(false);
  const [endDateShow, setEndDateShow] = useState(false);
  const startDateRef = useRef<HTMLDivElement | null>(null);
  const endDateRef = useRef<HTMLDivElement | null>(null);
  const startRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

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
    _setOptions(symbolOptions);
  }, [symbolData]);

  const handleCloneExecutor = (clone_mode: string) => {
    const body = {
      executor_id: data?.id.toString(), // Ensure data?.id is not undefined
      clone_mode: clone_mode,
      symbols: coinValue.map((obj) => obj.value),
    };
    cloneExecutor(body);
    setCloneOpen(false);
  };
  const handleDelete = (id: string) => {
    deleteExecutor(id);
    setOpenDelete(false);
  };

  const handleEdit = (id: string) => {
    router.push(`/dashboard/executors/editexecutor?id=${id}`);
  };

  const getStrategies = (strategys: any) => {
    let str = "";
    strategys?.forEach(
      (strategy: any) =>
        (str = `${str ? `${str} |` : ""} ${strategy.name}( ${
          strategy.timeframe
        } )`)
    );

    return str;
  };
  const changeCoinType = (coin: string) => {
    setCoinType(coin);
  };

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (
        startDateRef.current &&
        !startDateRef.current.contains(e.target as HTMLElement) &&
        startRef.current &&
        !startRef.current.contains(e.target as HTMLElement)
      ) {
        setStartDateShow(false);
      }
    };

    document.body.addEventListener("mousedown", closeMenu);

    return () => document.body.removeEventListener("mousedown", closeMenu);
  }, []);
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (
        endDateRef.current &&
        !endDateRef.current.contains(e.target as HTMLElement) &&
        endRef.current &&
        !endRef.current.contains(e.target as HTMLElement)
      ) {
        setEndDateShow(false);
      }
    };

    document.body.addEventListener("mousedown", closeMenu);

    return () => document.body.removeEventListener("mousedown", closeMenu);
  }, []);

  const handleStart = (data: any) => {
    setStartDate(data);
    setStartDateShow(false);
  };
  const handleEnd = (data: any) => {
    setEndDate(data);
    setEndDateShow(false);
  };
  const handleRunBacktest = () => {
    const endDateISO =
      endDate instanceof Date
        ? endDate.toISOString()
        : new Date().toISOString();
    const startDateISO =
      startDate instanceof Date
        ? startDate.toISOString()
        : new Date().toISOString();
    if (endDateISO < startDateISO) {
      toast.error("End date must be greater than start date");
      return;
    }
    const twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(twoDaysFromNow.getDate() - 2);

    if (new Date(endDateISO) > twoDaysFromNow) {
      toast.error("Cannot backtest less than 2 days in the past");
      return;
    }

    if (coinType === "allCoins") {
      runBacktest({
        end_time: endDateISO,
        start_time: startDateISO,
        executer: {
          ...data,
          symbol: data.symbol,
        },
        targets: "all_symbols",
      });
    } else if (coinType === "multiple" && value.length > 0) {
      // value.forEach((coin) => {
      runBacktest({
        end_time: endDateISO,
        start_time: startDateISO,
        executer: {
          ...data,
          symbol: data.symbol,
        },
        targets: value.map((coin) => ({
          symbol: coin.value,
          quantity: null,
        })),
      });
      // });
      return;
    } else {
      runBacktest({
        end_time: endDateISO,
        start_time: startDateISO,
        executer: {
          ...data,
          symbol: data.symbol,
        },
        targets: [{ symbol: data.symbol, quantity: null }],
      });
    }
    setRunBacksetOpen(false);
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
          <Button onClick={() => handleDelete(data?.id)}>
            Delete Executor
          </Button>
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
            <Accordion
              type="single"
              collapsible
              className="w-full p-4 bg-[#F2F2F3] dark:bg-[#252628] rounded-md"
            >
              {data?.strategys?.map((strategy: any) => (
                <AccordionItem value="item-1" key={strategy.id}>
                  <AccordionTrigger className=" px-4 rounded-lg py-2 bg-[white] dark:text-white dark:bg-[#3E3F42]">
                    {strategy.name}
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    {strategy.parameters &&
                      Object.entries(strategy.parameters).map(
                        ([key, value]) => (
                          <p key={key}>
                            {key} : {String(value)}
                          </p>
                        )
                      )}

                    <div className=""> {strategy.timeframe}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                      `/dashboard/executors/clone_executor/?id=${data?.id}`
                    );
                    break;
                  case "multipleCoins":
                    handleCloneExecutor("multiple_coins");
                    break;
                  case "allCoins":
                    handleCloneExecutor("all_coins");
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
        <ScrollArea className="h-[85vh]">
          <div className="">
            <div className="flex gap-3 flex-col mb-5">
              <Label htmlFor="">Start Date</Label>
              <div ref={startDateRef}>
                <Popover open={startDateShow} onOpenChange={setStartDateShow}>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal dark:bg-darkbg-2 dark:text-white",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? (
                        format(startDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={handleStart}
                      initialFocus
                      fromYear={2005}
                      toYear={2025}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Label htmlFor="">End Date</Label>
              <div ref={endDateRef}>
                <Popover open={endDateShow} onOpenChange={setEndDateShow}>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal dark:bg-darkbg-2 dark:text-white",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? (
                        format(endDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={handleEnd}
                      initialFocus
                      fromYear={2005}
                      toYear={2025}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="mb-5">
              <Label className="text-xs">Coin</Label>
              <UiSelect onValueChange={changeCoinType} defaultValue="one coin">
                <SelectTrigger className="w-full dark:bg-[#56595C]">
                  <SelectValue placeholder="Select coin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one coin">One Coin</SelectItem>
                  <SelectItem value="multiple">Multiple Coins</SelectItem>
                  <SelectItem value="allcoins">All Coins</SelectItem>
                </SelectContent>
              </UiSelect>
            </div>
            <div>
              {coinType === "multiple" && (
                <>
                  {/* <label htmlFor="">Select multiple coins : </label> */}
                  <MultipleSelector
                    value={value}
                    onChange={setValue}
                    defaultOptions={options}
                    placeholder="Select Coins..."
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                      </p>
                    }
                  />
                </>
              )}
            </div>
            <Label className="text-sm underline">
              You are backtesting on ---
            </Label>

            <div className="my-2">
              <h2 className="text-lg font-[700]">{data.name}</h2>
            </div>

            <div className="my-2">
              <h2 className="text-lg font-[700]">
                {data.symbol}:{data.quantity}
                {data.quantity_mode === "PERCENTAGE"
                  ? "%"
                  : data.quantity_mode === "CURRENCY"
                  ? "USDT"
                  : ""}{" "}
                {data.take_profit}:{data.stop_loss} - {data.start_mode}
              </h2>

              <div className="mt-5">
                <Label className="text-md">Strategies</Label>
                <h2 className="text-lg font-[700]">
                  {getStrategies(data.strategys)}
                </h2>
              </div>
            </div>

            <div className="flex gap-4 justify-center mx-auto mt-14 mb-5">
              <Button
                variant={"ghost"}
                className="px-12 w-[200px] bg-[#F2F2F3] dark:bg-[#252628] hover:bg-gray-200"
                onClick={() => setRunBacksetOpen(false)}
              >
                Cancel
              </Button>
              <Button className="w-[200px]" onClick={handleRunBacktest}>
                Run Backtest
              </Button>
            </div>
          </div>
        </ScrollArea>
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
          <DropdownMenuItem onClick={() => handleEdit(data?.id)}>
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
