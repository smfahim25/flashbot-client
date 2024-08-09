"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiCopy, FiEdit, FiLink, FiLink2, FiSend } from "react-icons/fi";
import { Card } from "@/components/ui/card";
import { Lexend } from "next/font/google";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { useCallback, useEffect, useState } from "react";
import useSettings from "@/app/store/useSettings";
import { SettingDescription } from "@/lib/schemas";
import Loader from "@/components/ui/loader";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ControlledInput } from "@/components/ui/controlInput";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Settings", link: "/dashboard/settings" },
  { title: "Genral Settings", link: "/dashboard/settings" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
const integrationFormSchema = z.object({
  api_key: z.string().min(3),
  api_secret: z.string().min(3),
  // testnet: z.boolean(),
});

type FormState = z.infer<typeof integrationFormSchema>;

export default function Page() {
  const [lang, setLang] = useState("");
  const [positionMode, setPositionMode] = useState("");
  const [exAutoAdjust, setExAutoAdjust] = useState("");
  const {
    data: defaultSettings,
    isLoading: defaultLoad,
    getAvailable: getDefaultSettings,
  } = useSettings();
  const { settingsData, isLoading: normalLoad, getSetting } = useSettings();
  const { changeSetting } = useSettings();
  const { apiData, getApiKeys, isLoading: apiLoad } = useSettings();
  const { editApiKey, isLoading: editLoad } = useSettings();

  useEffect(() => {
    getDefaultSettings();
  }, [getDefaultSettings]);

  useEffect(() => {
    getSetting();
  }, [getSetting]);

  useEffect(() => {
    getApiKeys();
  }, [getApiKeys]);

  const form = useForm<FormState>({
    resolver: zodResolver(integrationFormSchema),
    values: apiData,
  });
  const getValueByTag = useCallback(
    (tag: string) => {
      if (defaultSettings || settingsData) {
        return (
          settingsData?.[tag] ||
          defaultSettings.find(
            (setting: SettingDescription) => setting.tag === tag
          )?.value ||
          ""
        );
      }
    },
    [defaultSettings, settingsData]
  );

  useEffect(() => {
    if (!(defaultLoad || normalLoad)) {
      setLang(getValueByTag("language"));
      setPositionMode(getValueByTag("position_mode"));
      setExAutoAdjust(getValueByTag("ex_auto_adjust"));
    }
  }, [defaultLoad, normalLoad, getValueByTag]);
  const handleChnageLang = (language: string) => {
    setLang(language);
    changeSetting({
      tag: "language",
      new_value: language,
    });
  };
  const handleChnageMode = (mode: string) => {
    setPositionMode(mode);
    changeSetting({
      tag: "position_mode",
      new_value: mode,
    });
  };
  const handleChnageAdjust = (adjust: string) => {
    setExAutoAdjust(adjust);
    changeSetting({
      tag: "ex_auto_adjust",
      new_value: adjust,
    });
  };

  function onSubmit(data: FormState) {
    editApiKey({ api_key: data.api_key, api_secret: data.api_secret });
  }

  function onError(error: any) {
    console.log("error", error);
  }
  return (
    <ScrollArea className="h-full">
      {(normalLoad || defaultLoad || apiLoad || editLoad) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <Loader />
        </div>
      )}
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8 mb-16">
        <div className="flex justify-between items-center">
          <div>
            <h6
              className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
            >
              General Settings
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
        <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 ">
          <div className="grid grid-cols-3 w-1/2 my-4 ">
            <h4 className="font-normal text-sm text-center p-2 text-[#FE0FE2] border-b border-b-[#FE0FE2] ">
              General Settings
            </h4>
            <Link href="/dashboard/settings/password">
              <h4 className="font-[400] text-sm text-inner text-[#737373] text-center p-2 border-b border-b-[#D9DFEB] cursor-pointer">
                Password Settings
              </h4>
            </Link>
            <Link href="/dashboard/settings/notification">
              <h4 className="font-[400] text-sm text-inner text-[#737373] text-center p-2 border-b border-b-[#D9DFEB] cursor-pointer">
                Notification Settings
              </h4>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B] dark:text-white">
                Language
              </Label>
              <Select onValueChange={handleChnageLang} value={lang}>
                <SelectTrigger className="w-full bg-[white] text-[#A5A5A5] dark:text-white dark:bg-[#19191A]">
                  <SelectValue placeholder="select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eng">English</SelectItem>
                  <SelectItem value="spa">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B] dark:text-white">
                Execution mode
              </Label>
              <Select onValueChange={handleChnageMode} value={positionMode}>
                <SelectTrigger className="w-full bg-[white] text-[#A5A5A5] dark:text-white dark:bg-[#19191A]">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hedge">Hedge</SelectItem>
                  <SelectItem value="normal">One way</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B] dark:text-white">
                Auto Adjust Executor Qty
              </Label>
              <Select onValueChange={handleChnageAdjust} value={exAutoAdjust}>
                <SelectTrigger className="w-full bg-[white] text-[#A5A5A5] dark:text-white dark:bg-[#19191A]">
                  <SelectValue placeholder="Select auto adjust" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="on">On</SelectItem>
                  <SelectItem value="off">Off</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-[600] text-[#101828] my-5 dark:text-white">
              API
            </h4>
          </div>
          <SelectSeparator className="my-4" />
          <form onSubmit={form.handleSubmit(onSubmit, onError)}>
            <div className="flex gap-5 my-5 ml-5">
              <Label
                htmlFor="api_key"
                className="text-sm w-[280px] font-inner font-[600] text-[#101828] dark:text-white"
              >
                Binance API Key
              </Label>
              <ControlledInput
                placeholder="Binance API Key"
                control={form.control}
                className="w-[512px]"
                {...form.register("api_key")}
              />
            </div>

            <SelectSeparator className="my-4" />
            <div className="flex gap-5 my-5 ml-5">
              <Label
                htmlFor="api_secret"
                className="text-sm w-[280px] font-inner font-[600] text-[#101828] dark:text-white"
              >
                Binance API Secret
              </Label>
              <ControlledInput
                placeholder="Binance API Secret"
                control={form.control}
                className="w-[512px]"
                {...form.register("api_secret")}
              />
            </div>
            <div className="flex gap-5 justify-end mb-5">
              <Button
                type="submit"
                className="font-inner font-[700] text-[16px] w-[110px] h-[50px] "
              >
                Save
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </ScrollArea>
  );
}
