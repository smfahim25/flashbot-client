"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Symbol } from "@/lib/schemas";
import { addExecutorAction } from "@/lib/action";
import { useRouter } from "next/navigation";
import useAvailableStrategiesStore from "@/app/store/useAvailableStrategies";
import useCustomStrategiesStore from "@/app/store/useCustomStrategies";
import { ControlledInput } from "@/components/ui/controlInput";
import useSymbolStore from "@/app/store/useSymbolStore";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Lexend } from "next/font/google";
import { ScrollArea } from "@/components/ui/scroll-area";
import useExecutorStore from "@/app/store/useExecutorStore";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/useSidebar";
import { toast } from "react-toastify";
import Loader from "@/components/ui/loader";

const executorFormSchema = z.object({
  name: z.string().min(3),
  symbol: z.string(),
  quantity: z.number().min(0.00001),
  take_profit: z.number(),
  stop_loss: z.number(),
  paused: z.string(),
  close_mode: z.string().min(1),
  consensus_treshold: z.number().gt(0),
  start_mode: z.string().min(1),
  leverage: z.number().gt(0),
  quantity_mode: z.string().min(1),
  strategys: z.array(
    z.object({
      name: z.string(),
      timeframe: z.string(),
      parameters: z.object<Record<string, any>>({}),
    })
  ),
});

type FormState = z.infer<typeof executorFormSchema>;
type ResponseSymbols = Record<"data", Record<"symbols", Symbol[]>>;
type FormFieldEvent = {
  type: string;
  target: {
    value: any;
    name: keyof FormState;
  };
};

type cutomeStrategies = {
  is_custom: boolean;
  custom_strategy_id: string | null;
  name: string;
  parameters: {};
  timeframe: string;
};

type strategies = {
  name: string;
  parameters: {};
  timeframe: string;
};
const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Executors", link: "/dashboard/executors" },
  { title: "Add Executors", link: "/dashboard/executors/addexecutors" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
function Page() {
  const { isMinimized } = useSidebar();
  const router = useRouter();
  const url = "https://flashbot-staging-bb3v6.ondigitalocean.app/";
  const hookForm = useForm<FormState>({
    resolver: zodResolver(executorFormSchema),
    defaultValues: {
      close_mode: "",
      consensus_treshold: 0,
      leverage: 0,
      name: "",
      paused: "",
      quantity: 0,
      quantity_mode: "",
      start_mode: "",
      stop_loss: 0,
      symbol: "",
      take_profit: 0,
      strategys: [{ name: undefined, parameters: {}, timeframe: "" }], // Change the default value here
    },
  });

  const qtyMode = hookForm.watch("quantity_mode");
  const [availableStrategies, setAvailableStrategies] = React.useState<
    cutomeStrategies[]
  >([]);
  const { data: availableStrategiesData, getData: getAvailStregies } =
    useAvailableStrategiesStore();
  const { data: customStrategiesData, getData: getCustomStregies } =
    useCustomStrategiesStore();
  const { data: symbolData, getData: getSymbolData } = useSymbolStore();
  const { createExecutor, isLoading: addExLoader } = useExecutorStore();

  useEffect(() => {
    getSymbolData();
  }, [getSymbolData]);

  useEffect(() => {
    getAvailStregies();
  }, [getAvailStregies]);

  useEffect(() => {
    getCustomStregies();
  }, [getCustomStregies]);

  useEffect(() => {
    let newStrategies: any[] = [];

    if (availableStrategiesData) {
      newStrategies = availableStrategiesData.map((strategy: any) => ({
        id: strategy.id,
        description: strategy.description,
        filter_available: strategy.filter_available,
        indicator_parameters_schema: strategy.indicator_parameters_schema,
        name: strategy.name,
        parameters: strategy.parameters,
      }));
    }

    if (url === "https://flashbot-staging-bb3v6.ondigitalocean.app/") {
      if (customStrategiesData) {
        const customStrategies = customStrategiesData.map((strategy: any) => ({
          id: strategy.id,
          description: null,
          filter_available: true,
          indicator_parameters_schema: strategy.indicator_parameters_schema,
          name: strategy.name,
          parameters: {},
        }));
        newStrategies = [...newStrategies, ...customStrategies];
      }
    }

    setAvailableStrategies(newStrategies);
  }, [availableStrategiesData, customStrategiesData]);

  useEffect(() => {
    console.log(availableStrategies);
  }, [availableStrategies]);

  const arrayFields = useFieldArray({
    name: "strategys",
    control: hookForm.control,
  });

  const strategies = hookForm.watch("strategys");

  const filterParameters = (
    strategyName: string,
    parameters: { [key: string]: any }
  ) => {
    const filteredParameters: { [key: string]: any } = {};
    for (const key in parameters) {
      if (key.startsWith(strategyName)) {
        const newKey = key.replace(`${strategyName} + `, "");
        filteredParameters[newKey] = parameters[key];
      }
    }
    return filteredParameters;
  };

  const handleAddExecutor = async () => {
    const formValues = hookForm.getValues();

    if (
      hookForm.getValues("consensus_treshold") > 100 ||
      hookForm.getValues("consensus_treshold") < 0
    ) {
      toast.error("Accepted values ​​for Consensus must be between 0 and 100");
      return;
    }

    let _strategys = [...formValues.strategys];

    let strategys = _strategys.map((strategy) => {
      if (url === "https://flashbot-staging-bb3v6.ondigitalocean.app/") {
        if (strategy.name.split(":")[1] !== "undefined") {
          let newCustomStrategy: cutomeStrategies = {
            is_custom: true,
            custom_strategy_id: strategy.name.split(":")[1],
            name: strategy.name.split(":")[0],
            parameters: Object.entries(strategy.parameters)
              .filter(
                ([key]) => key.split(" + ")[0] === strategy.name.split(":")[0]
              )
              .reduce(
                (acc, [key, value]) => ({
                  ...acc,
                  [key.split(" + ")[1]]: value,
                }),
                {}
              ),
            timeframe: strategy.timeframe,
          };
          return newCustomStrategy;
        } else {
          let newCustomStrategy: cutomeStrategies = {
            is_custom: false,
            custom_strategy_id: null,
            name: strategy.name.split(":")[0],
            parameters: Object.entries(strategy.parameters)
              .filter(
                ([key]) => key.split(" + ")[0] === strategy.name.split(":")[0]
              )
              .reduce(
                (acc, [key, value]) => ({
                  ...acc,
                  [key.split(" + ")[1]]: convertValue(value),
                }),
                {}
              ),
            timeframe: strategy.timeframe,
          };
          return newCustomStrategy;
        }
      } else {
        let newCustomStrategy: strategies = {
          name: strategy.name.split(":")[0],
          parameters: Object.entries(strategy.parameters)
            .filter(
              ([key]) => key.split(" + ")[0] === strategy.name.split(":")[0]
            )
            .reduce(
              (acc, [key, value]) => ({
                ...acc,
                [key.split(" + ")[1]]: convertValue(value),
              }),
              {}
            ),
          timeframe: strategy.timeframe,
        };
        return newCustomStrategy;
      }
    });
    const strategyBlank = strategys.filter((key) => key.name === "");
    if (strategyBlank) strategys.pop();
    const body = {
      ...formValues,
      strategys,
      stop_loss: -Math.abs(formValues.stop_loss),
      paused: formValues.paused === "paused",
    };

    console.log(JSON.stringify(body), "data");
    try {
      const res = await createExecutor(body);
      toast.success("Executor created successfully");
      hookForm.reset();
      setTimeout(() => {
        router.push("/dashboard/executors");
      }, 1000);
    } catch (error) {
      toast.error("Failed to add executor");
    }
  };

  const handleValidation = (error: any) => {
    toast.error("Please fill all the required fields");
  };

  const handleAddStrategy = () => {
    arrayFields.append({ name: "", parameters: {}, timeframe: "" });
  };

  const handleNumericValues = (
    e: FormFieldEvent,
    config?: { percent?: boolean; max?: number }
  ) => {
    if (e.target?.value && config) {
      let value = e.target.value;
      if (config.max && value > config.max) {
        value = config.max;
      }
      const inputValue = String(value).replace(/[^+\d.]/g, "");
      hookForm.setValue(e.target.name, Number(inputValue));
    }
  };

  function convertValue(value: string) {
    if (!isNaN(Number(value))) {
      return Number(value);
    } else if (
      value.toLowerCase() === "true" ||
      value.toLowerCase() === "false"
    ) {
      return value.toLowerCase() === "true";
    } else {
      return value;
    }
  }

  const timeFrame = [
    {
      id: 1,
      name: "1 Minutes",
      value: "1m",
    },
    {
      id: 2,
      name: "3 Minutes",
      value: "3m",
    },
    {
      id: 3,
      name: "5 Minutes",
      value: "5m",
    },
    {
      id: 4,
      name: "15 Minutes",
      value: "15m",
    },
    {
      id: 5,
      name: "30 Minutes",
      value: "30m",
    },
    {
      id: 6,
      name: "1 Hour",
      value: "1h",
    },
    {
      id: 7,
      name: "2 Hours",
      value: "2h",
    },
    {
      id: 8,
      name: "4 Hours",
      value: "4h",
    },
    {
      id: 9,
      name: "6 Hours",
      value: "6h",
    },
    {
      id: 10,
      name: "8 Hours",
      value: "8h",
    },
    {
      id: 11,
      name: "12 Hours",
      value: "12h",
    },
    {
      id: 12,
      name: "1 Day",
      value: "1d",
    },
    {
      id: 13,
      name: "3 Days",
      value: "3d",
    },
    {
      id: 14,
      name: "1 Week",
      value: "1w",
    },
    {
      id: 15,
      name: "1 Month",
      value: "1M",
    },
  ];

  useEffect(() => {
    if (qtyMode === "COIN") {
      hookForm.setValue("quantity", 0.00001);
    } else {
      hookForm.setValue("quantity", 0);
    }
    hookForm.setValue("consensus_treshold", 100);
  }, [qtyMode, hookForm]);

  return (
    <ScrollArea className="h-full">
      {addExLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader />
        </div>
      )}
      <div className="flex-1  p-4 md:p-8 mb-16">
        <div>
          <h6
            className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
          >
            Executors
          </h6>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <form
          onSubmit={hookForm.handleSubmit(handleAddExecutor, handleValidation)}
        >
          <div className="w-full grid grid-cols-2 gap-5 mt-5">
            <ScrollArea className="h-[70vh] mt-4">
              <Card className="w-full px-8 py-3 rounded-lg">
                <div>
                  <Label htmlFor="" className="text-sm">
                    Executor Name
                  </Label>
                  <ControlledInput
                    placeholder="Executor Name"
                    control={hookForm.control}
                    containerClass="w-auto"
                    className=" py-2 px-3 border-2 rounded-md"
                    {...hookForm.register("name", { required: true })}
                  />
                </div>
                <div className="flex flex-col mb-5">
                  <Label htmlFor="" className="text-sm">
                    Ticker / Coin / Symbol
                  </Label>
                  <select
                    {...hookForm.register("symbol", { required: true })}
                    className="border-2 py-2 rounded-md text-sm"
                  >
                    <option value="" disabled={true}>
                      Select the Ticker
                    </option>
                    {/* Populate options from the ticker/coins state */}
                    {symbolData
                      .sort((a, b) =>
                        a.symbol_name.localeCompare(b.symbol_name)
                      )
                      .map((symbol) => (
                        <option
                          key={symbol.symbol_name}
                          value={symbol.symbol_name}
                        >
                          {symbol.symbol_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col mb-5">
                  <Label htmlFor="" className="text-sm">
                    Close Mode
                  </Label>
                  <select
                    {...hookForm.register("close_mode", { required: true })}
                    className="border-2 py-2 rounded-md text-sm w-full"
                  >
                    <option value="" disabled={true}>
                      - -
                    </option>
                    <option value="SL/TP">TP/SL</option>
                    <option value="STRATEGY">STRATEGY</option>
                  </select>
                </div>
                <div className="flex gap-4 items-center mb-5 w-full">
                  <div className="flex flex-col">
                    <Label htmlFor="" className="text-sm">
                      TP
                    </Label>
                    <div className="flex border rounded-md w-full shadow-sm h-[41px]">
                      <ControlledInput
                        max="100"
                        placeholder="TP"
                        type="number"
                        control={hookForm.control}
                        containerClass="w-auto"
                        className="focus-visible:ring-0"
                        {...hookForm.register("take_profit", {
                          min: 0,
                          max: 100,
                          required: true,
                          onChange: (e) =>
                            handleNumericValues(e, { percent: true, max: 100 }),
                        })}
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                        %
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Label
                      htmlFor=""
                      className="dark:text-dark-text text-light-text mr-2 "
                    >
                      SL
                    </Label>
                    <div className="flex border rounded-md w-full shadow-sm h-[41px]">
                      <ControlledInput
                        placeholder="SL"
                        type="number"
                        control={hookForm.control}
                        containerClass="w-full"
                        className="focus-visible:ring-0"
                        {...hookForm.register("stop_loss", {
                          required: true,
                          max: 100,
                          onChange: (e) =>
                            handleNumericValues(e, { percent: true, max: 100 }),
                        })}
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                        %
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col w-1/2">
                    <Label htmlFor="" className="text-sm">
                      Size per Trade
                    </Label>
                    <select
                      {...hookForm.register("quantity_mode", {
                        required: true,
                      })}
                      className="border-2 py-2 rounded-md text-sm"
                    >
                      <option value="" disabled={true}>
                        Select the Ticker
                      </option>
                      <option value="COIN">COIN </option>
                      <option value="CURRENCY">CURRENCY</option>
                      <option value="PERCENTAGE">PERCENTAGE</option>
                    </select>
                  </div>
                  <div className="flex gap-3 w-1/2">
                    <div className="flex flex-col">
                      <Label htmlFor="" className="text-sm">
                        Type
                      </Label>
                      <div className="flex">
                        <ControlledInput
                          placeholder="Size per Trade"
                          control={hookForm.control}
                          className="focus-visible:ring-0"
                          containerClass=""
                          type="number"
                          {...hookForm.register("quantity", {
                            required: true,
                            min: "0",
                            onChange: (e) =>
                              handleNumericValues(e, {
                                percent: qtyMode === "PERCENTAGE",
                                max: qtyMode === "PERCENTAGE" ? 100 : undefined,
                              }),
                          })}
                        />
                        <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42] h-[41px]">
                          {qtyMode == "CURRENCY"
                            ? "USDT"
                            : qtyMode === "PERCENTAGE"
                            ? "%"
                            : "COIN"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-5">
                  <Label htmlFor="" className="text-sm">
                    Start Position
                  </Label>
                  <select
                    {...hookForm.register("start_mode", { required: true })}
                    className="border-2 py-2 rounded-md text-sm"
                  >
                    <option value="" disabled={true}>
                      Select Start Position
                    </option>
                    <option value="LONG">LONG</option>
                    <option value="SHORT">SHORT</option>
                    <option value="NEUTRAL">NEUTRAL</option>
                  </select>
                </div>
                <div className="flex flex-col mb-5">
                  <Label htmlFor="" className="text-sm">
                    Status
                  </Label>
                  <select
                    {...hookForm.register("paused", { required: true })}
                    className="border-2 py-2 rounded-md text-sm"
                  >
                    <option value="" disabled={true}>
                      Select Status - -
                    </option>
                    <option value="paused">Paused</option>
                    <option value="notpaused">Not paused</option>
                  </select>
                </div>
                <div className="flex-col">
                  <Label htmlFor="" className="text-sm">
                    Consensus
                  </Label>
                  <div className="flex">
                    <ControlledInput
                      type="number"
                      defaultValue={5}
                      control={hookForm.control}
                      containerClass=""
                      className="focus-visible:ring-0"
                      {...hookForm.register("consensus_treshold", {
                        required: true,
                        onChange: (e) =>
                          handleNumericValues(e, {
                            percent: qtyMode === "PERCENTAGE",
                            max: qtyMode === "PERCENTAGE" ? 100 : undefined,
                          }),
                      })}
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42] h-[41px]">
                      %
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <Label htmlFor="" className="text-sm">
                    Leverage
                  </Label>
                  <ControlledInput
                    type="number"
                    control={hookForm.control}
                    containerClass=""
                    className="focus-visible:ring-0"
                    {...hookForm.register("leverage", {
                      required: true,
                      onChange: (e) =>
                        handleNumericValues(e, {
                          percent: qtyMode === "PERCENTAGE",
                          max: qtyMode === "PERCENTAGE" ? 100 : undefined,
                        }),
                    })}
                  />
                </div>
              </Card>
            </ScrollArea>
            <ScrollArea className="h-[70vh]">
              <div className="w-full dark:bg-darkbg-1 px-8 py-3 rounded-lg mt-2">
                {/* <Card> */}
                {arrayFields.fields.map((field, index) => {
                  const name =
                    strategies[index]?.name?.split(":")[0] ?? "Default";
                  return (
                    <Card key={field.id} className="mb-5 p-5">
                      <div className="bg-[#CDF4F3] dark:bg-[#0B3231] w-[59px] h-[32px] flex justify-center my-4 rounded-sm">
                        <h2 className="text-[#28B9B5] dark:text-[#28B9B5] text-center pt-1">
                          {name}
                        </h2>
                      </div>
                      <div className="flex flex-col mb-5">
                        <Label htmlFor="" className="text-sm mb-2">
                          Add Strategy
                        </Label>
                        <select
                          {...hookForm.register(`strategys.${index}.name`)}
                          className="border-2 py-2 rounded-md text-sm"
                        >
                          <option value="">Select Strategy</option>
                          {availableStrategies.map((strategy: any) => (
                            <option
                              key={strategy.name}
                              value={`${strategy.name}:${strategy.id}`}
                            >
                              {
                                (strategy.description ||
                                  strategy.name) as string
                              }
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* Render fields based on selected strategy */}
                      {strategies[index]?.name &&
                        strategies[index]?.name !== "Select Strategy" && (
                          <>
                            {availableStrategies.map((strategy: any) => (
                              <div
                                key={strategy.name}
                                style={{
                                  display:
                                    strategies[index].name.split(":")[0] ===
                                    strategy.name
                                      ? "block"
                                      : "none",
                                }}
                              >
                                {/* Render fields based on strategy */}
                                <div className="grid grid-cols-2 gap-5">
                                  {Object.entries(strategy.parameters).map(
                                    ([paramName, paramValue]) => {
                                      return (
                                        <div
                                          key={paramName}
                                          className="col-span-1 flex flex-col"
                                        >
                                          <Label
                                            htmlFor={paramName}
                                            className="text-sm"
                                          >
                                            {paramName} :{" "}
                                          </Label>
                                          <ControlledInput
                                            placeholder={`Enter ${paramName}`}
                                            type="text"
                                            control={hookForm.control}
                                            containerClass="h-[40px]"
                                            className="focus-visible:ring-0"
                                            {...hookForm.register(
                                              `strategys.${index}.parameters.${strategy.name} + ${paramName}`
                                            )}
                                            defaultValue={paramValue}
                                          />
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            ))}
                            <div className="flex flex-col mt-5">
                              <Label htmlFor="" className="dtext-sm">
                                Timeframe
                              </Label>
                              <select
                                className="border-2 py-2 rounded-md text-sm"
                                {...hookForm.register(
                                  `strategys.${index}.timeframe`,
                                  { required: true }
                                )}
                              >
                                <option value="" disabled={true}>
                                  Select Timeframe
                                </option>
                                {timeFrame.map((timeFrame) => (
                                  <option
                                    key={timeFrame.id}
                                    value={timeFrame.value}
                                  >
                                    {timeFrame.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </>
                        )}

                      {/* Add/remove strategy fields */}
                      <div className="flex gap-5 justify-end mt-10 mb-2">
                        {strategies.length === index + 1 && (
                          <Button
                            onClick={handleAddStrategy}
                            className="w-[125px] bg-[#2DD2CE]"
                          >
                            Add
                          </Button>
                        )}
                        <Button
                          type="button"
                          onClick={() =>
                            arrayFields.fields.length > 1 &&
                            arrayFields.remove(index)
                          }
                          variant={"ghost"}
                          className="border-2 px-12 w-[125px] bg-white dark:bg-[#252628]"
                        >
                          Remove
                        </Button>
                      </div>
                    </Card>
                  );
                })}
                {/* </Card> */}
              </div>
            </ScrollArea>
          </div>
          <div
            className={`fixed bottom-0 right-0 bg-white dark:bg-[#0A0A0A] h-[90px] shadow-custom-top ${
              !isMinimized && "md:w-[calc(100%-287px)]"
            } ${isMinimized && "md:w-[calc(100%-72px)]"} sm:w-full`}
          >
            <div className="flex gap-5 justify-end mt-5 mr-5">
              <Button
                type="reset"
                onClick={() => hookForm.reset()}
                variant={"ghost"}
                className="border-[1.5px] px-12 md:w-[200px] h-[50px] "
              >
                Clear
              </Button>
              <Button
                type="submit"
                className="md:w-[200px] h-[50px] rounded-md"
              >
                Add Executor
              </Button>
            </div>
          </div>
        </form>
      </div>
    </ScrollArea>
  );
}

export default Page;
