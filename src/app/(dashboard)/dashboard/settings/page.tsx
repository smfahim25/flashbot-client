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
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Settings", link: "/dashboard/settings" },
  { title: "Genral Settings", link: "/dashboard/settings" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
export default function Page() {
    const [support, setSupport] = useState(false);
    const handleToggleChange = () => {
        setSupport(!support);
      };
  return (
    <ScrollArea className="h-full">
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
            <h4 className="font-[400] text-sm text-inner text-[#737373] ext-center p-2 border-b border-b-[#D9DFEB] cursor-pointer hover:border-b-[#FE0FE2]">
            Password Settings
            </h4>
            </Link>
            <Link href="/dashboard/settings/notification">
            <h4 className="font-[400] text-sm text-inner text-[#737373] ext-center p-2 border-b border-b-[#D9DFEB] cursor-pointer hover:border-b-[#FE0FE2]">
            Notification Settings
            </h4>
            </Link>
            
            
            </div>
            <div className="grid grid-cols-3 gap-4">
            <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B] dark:text-white">
                    Language
                </Label>
                <Select>
                    <SelectTrigger className="w-full bg-[white] text-[#A5A5A5] dark:text-white dark:bg-[#19191A]">
                    <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="bangla">Bangla</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B] dark:text-white">
                    Execution mode
                </Label>
                <Select>
                    <SelectTrigger className="w-full bg-[white] text-[#A5A5A5] dark:text-white dark:bg-[#19191A]">
                    <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="bangla">Bangla</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B] dark:text-white">
                Auto Adjust Executor Qty
                </Label>
                <Select>
                    <SelectTrigger className="w-full bg-[white] text-[#A5A5A5] dark:text-white dark:bg-[#19191A]">
                    <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="bangla">Bangla</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>
          
            <div className="space-y-1">
                <h4 className="text-lg font-[600] text-[#101828] my-5 dark:text-white">API</h4>
            </div>
            <SelectSeparator className="my-4" />
            <div className="flex gap-5 my-5">
                <h4 className="text-sm w-[280px] font-inner font-[600] text-[#101828] dark:text-white">Binance API Key</h4>
                <Input placeholder="••••••••" className="w-[512px] "></Input>
            </div>

            <SelectSeparator className="my-4" />
            <div className="flex gap-5 my-5">
                <h4 className="text-sm w-[280px] font-inner font-[600] text-[#101828] dark:text-white">Binance API Key</h4>
                <Input placeholder="••••••••" className="w-[512px] "></Input>
            </div>
            <div className="flex gap-5 justify-end mb-5">
                <Button className="font-inner font-[700] text-[16px] w-[110px] h-[50px] ">Save</Button>
            </div>
        </Card>
        
        
        
      </div>
    </ScrollArea>
  );
}
