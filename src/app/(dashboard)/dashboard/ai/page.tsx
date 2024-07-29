"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {  FiLink, FiSend } from "react-icons/fi";
import { Card } from "@/components/ui/card";
import { Lexend } from "next/font/google";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Table", link: "/dashboard/ai" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
export default function Page() {
  
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8 mb-16">
        <div className="flex justify-between items-center">
          <div>
            <h6
              className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
            >
              Tables
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
        <div className="flex mt-5">
        <Card className="w-full border-none px-5 rounded-xl p-4 mr-4 grid grid-cols-2 gap-4 justify-center items-center">

        <div>
              <Label className="text-xs font-[500] font-inner text-[14px] text-[#37383B]">
                Executor
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-[white] dark:text-white dark:bg-[#19191A]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-xs font-[500] font-inner text-[14px] text-[#37383B]">
                Execution
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-[white] dark:text-white dark:bg-[#19191A]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

          
          </Card>
          <div className="flex gap-5 justify-end">
            <Button className="w-[169px] h-[110px] font-[600] text-[16px]">Generate</Button>
          </div>
        </div>
        <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 flex justify-center items-center h-[566px]">
          <Label className="font-inner font-[400] text-[16px] text-[#888C91] ">No Prompt yet</Label>
        </Card>
        <Card className="w-[250px] h-[420px] border-none px-5 rounded-xl p-4 mt-5 top-[487px] left-[1150px]">
          <h4 className="font-inner font-[400] text-[16px] text-[#6F7277] my-5">Filter</h4>
          <Input className="mb-5" placeholder="Executor ID"/>
          <Input className="mb-5" placeholder="Execution ID"/>
          <Input className="mb-5" placeholder="Job ID"/>
          
          <div className="flex gap-5 justify-end mb-5">
            <Button className="w-full h-[44px] font-inner font-[400] text-[16px] text-[#FE0FE2] bg-[#FFE6FC] dark:bg-[#700162] hover:bg-[#FFE6FD]">Get Latest Execution</Button>
          </div>

          <div className="flex gap-5 justify-end">
            <Button className="w-full h-[44px] font-inner font-[400] text-[16px] text-[#FE0FE2] bg-[#FFE6FC] dark:bg-[#700162] hover:bg-[#FFE6FD]">Backtesting Job Data</Button>
          </div>
        </Card>

        <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 flex justify-between items-center h-[73px]">
          <div className="flex justify-center items-center gap-2">
            <Image src="/imgs/robot.png" alt="" width={44} height={45} />
            <Label className="font-inner font-[400] text-[16px] text-[#888C91]">Write Prompt...</Label></div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-[44px] h-[44px] rounded-[12px] flex justify-center items-center bg-white dark:bg-[#080808] border-[1px] ">
              <FiLink className="text-[#292D32] dark:text-white"/>
            </div>
            <div className="w-[44px] h-[44px] rounded-[12px] flex justify-center items-center bg-[#2DD2CE]">
              <FiSend className="text-white"/>
            </div>
          </div>
          
        </Card>
        
      </div>
    </ScrollArea>
  );
}
