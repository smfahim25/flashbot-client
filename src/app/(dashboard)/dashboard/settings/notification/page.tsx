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

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Settings", link: "/dashboard/settings" },
  { title: "Notification Settings", link: "/dashboard/settings/notification" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
interface SettingsData {
  [key: string]: string | number | boolean | undefined;
}

export default function Page() {
  const [proNoti, setProNoti] = useState(false);
  const [receiveMsg, setReceiveMsg] = useState(false);
  const [getPush, setGetPush] = useState(false);
  const [receiveCupon, setReceiveCupon] = useState(false);
  const [receiveAccount, setReceiveAccount] = useState(false);
  const {
    data: defaultSettings,
    isLoading: defaultLoad,
    getAvailable: getDefaultSettings,
  } = useSettings();
  const { settingsData, isLoading: normalLoad, getSetting } = useSettings();
  const { changeSetting } = useSettings();

  useEffect(() => {
    getDefaultSettings();
  }, [getDefaultSettings]);

  useEffect(() => {
    getSetting();
  }, [getSetting]);

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
      const value = getValueByTag("prog_notifications");
      if (value === "on") {
        setProNoti(true);
      }
    }
  }, [defaultLoad, normalLoad, getValueByTag]);

  const handleProNoti = () => {
    setProNoti(!proNoti);
    changeSetting({
      tag: "prog_notifications",
      new_value: !proNoti === true ? "on" : "off",
    });
  };
  const handleReceiveMsg = () => {
    setReceiveMsg(!receiveMsg);
  };
  const handleGetPush = () => {
    setGetPush(!getPush);
  };
  const handleReceiveCupon = () => {
    setReceiveCupon(!receiveCupon);
  };
  const handleReceiveAccount = () => {
    setReceiveAccount(!receiveAccount);
  };
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8 mb-16">
        <div className="flex justify-between items-center">
          <div>
            <h6
              className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
            >
              Notification Settings
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
        <Card className="w-full border-none px-5 rounded-xl p-5 mt-5 ">
          <div className="grid grid-cols-3 w-1/2 my-4 ">
            <Link href="/dashboard/settings">
              <h4 className="font-normal text-sm text-center p-2 text-[#737373] border-b border-b-[#D9DFEB] cursor-pointer">
                General Settings
              </h4>
            </Link>

            <Link href="/dashboard/settings/password">
              <h4 className="font-[400] text-sm text-inner text-[#737373] text-center p-2 border-b border-b-[#D9DFEB] cursor-pointer">
                Password Settings
              </h4>
            </Link>
            <h4 className="font-[400] text-sm text-inner text-[#FE0FE2] text-center p-2 border-b border-b-[#FE0FE2]">
              Notification Settings
            </h4>
          </div>
          <div className="my-5 p-2">
            <div className="my-2 flex justify-between">
              <div>
                <p className="text-sm font-inner font-[500] text-[#8083A3]">
                  Notification type
                </p>
                <h4 className="text-md font-[700]">Progressive Notification</h4>
              </div>
              <Toggle
                pressed={proNoti === false}
                onPressedChange={handleProNoti}
                className={`relative w-10 h-6 rounded-full ${
                  proNoti === true
                    ? "bg-[#00D066] dark:bg-[#00D066]"
                    : "dark:bg-gray-700 bg-gray-500"
                } `}
              >
                <div
                  className={`block w-4 h-4 bg-white  rounded-full shadow-md transform transition-transform ${
                    proNoti === false
                      ? "translate-x-[-6px]"
                      : "translate-x-[6px]"
                  }`}
                />
              </Toggle>
            </div>
            <SelectSeparator className="my-4" />
            <div className="my-2 flex justify-between">
              <div>
                <p className="text-sm font-inner font-[500] text-[#8083A3]">
                  Product updates
                </p>
                <h4 className="text-md font-[700]">
                  Receive messages from our platform
                </h4>
              </div>
              <Toggle
                pressed={receiveMsg == false}
                onPressedChange={handleReceiveMsg}
                className={`relative w-10 h-6 rounded-full ${
                  receiveMsg === true
                    ? "bg-[#00D066] dark:bg-[#00D066]"
                    : "dark:bg-gray-700 bg-gray-500"
                } `}
              >
                <div
                  className={`block w-4 h-4 bg-white  rounded-full shadow-md transform transition-transform ${
                    receiveMsg === false
                      ? "translate-x-[-6px]"
                      : "translate-x-[6px]"
                  }`}
                />
              </Toggle>
            </div>
            <SelectSeparator className="my-4" />

            <div className="my-2 flex justify-between">
              <div>
                <p className="text-sm font-inner font-[500] text-[#8083A3]">
                  Notification
                </p>
                <h4 className="text-md font-[700]">Get push Notifications</h4>
              </div>
              <Toggle
                pressed={getPush == false}
                onPressedChange={handleGetPush}
                className={`relative w-10 h-6  rounded-full ${
                  getPush === true
                    ? "bg-[#00D066] dark:bg-[#00D066]"
                    : "dark:bg-gray-700 bg-gray-500"
                } `}
              >
                <div
                  className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    getPush === false
                      ? "translate-x-[-6px]"
                      : "translate-x-[6px]"
                  }`}
                />
              </Toggle>
            </div>
            <SelectSeparator className="my-4" />

            <div className="my-2 flex justify-between">
              <div>
                <p className="text-sm font-inner font-[500] text-[#8083A3]">
                  Promotions and tips
                </p>
                <h4 className="text-md font-[700]">
                  Receive coupons, promotions, surveys
                </h4>
              </div>
              <Toggle
                pressed={receiveCupon == false}
                onPressedChange={handleReceiveCupon}
                className={`relative w-10 h-6 rounded-full ${
                  receiveCupon === true
                    ? "bg-[#00D066] dark:bg-[#00D066]"
                    : "dark:bg-gray-700 bg-gray-500"
                } `}
              >
                <div
                  className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    receiveCupon === false
                      ? "translate-x-[-6px] "
                      : "translate-x-[6px] "
                  }`}
                />
              </Toggle>
            </div>
            <SelectSeparator className="my-4" />

            <div className="my-2 flex justify-between">
              <div>
                <p className="text-sm font-inner font-[500] text-[#8083A3]">
                  Account support
                </p>
                <h4 className="text-md font-[700]">
                  Receive messages about your account, legal alerts
                </h4>
              </div>
              <Toggle
                pressed={receiveAccount == false}
                onPressedChange={handleReceiveAccount}
                className={`relative w-10 h-6 rounded-full ${
                  receiveAccount === true
                    ? "bg-[#00D066] dark:bg-[#00D066]"
                    : "dark:bg-gray-700 bg-gray-500"
                }`}
              >
                <div
                  className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    receiveAccount === false
                      ? "translate-x-[-6px]"
                      : "translate-x-[6px] "
                  }`}
                />
              </Toggle>
            </div>
            <SelectSeparator className="my-4" />
          </div>
        </Card>
      </div>
    </ScrollArea>
  );
}
