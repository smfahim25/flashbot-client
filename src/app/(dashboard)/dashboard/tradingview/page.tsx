"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiCalendar, FiCopy, FiDollarSign, FiEdit, FiInfo, FiLink, FiLink2, FiPercent, FiSend } from "react-icons/fi";
import { Card } from "@/components/ui/card";
import { Lexend } from "next/font/google";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaCircleInfo } from "react-icons/fa6";
import { CalendarDateRangePicker } from "@/components/date-pick-ranger";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Trading View", link: "/dashboard/tradingview" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
export default function Page() {
  const [proSel, setProSel] = useState(false);
  const handleProSel = () => {
    setProSel(!proSel);
  };
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8 mb-16">
        <div className="flex justify-between items-center">
          <div>
            <h6
              className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
            >
              Trading View
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 justify-center">
            <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 ">
            <RadioGroup defaultValue="option-one" className="flex justify-between py-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label  htmlFor="option-one" className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white  " >Buy Limit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two" className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white  " >Buy Market</Label>
              </div>
            </RadioGroup>
                <div className="flex justify-between">
                    
                </div>
               
                  <div className="mb-5">
                    <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white  ">TP</Label>
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-[#F2F2F3] dark:bg-[#19191A]  text-gray-500 dark:text-white  rounded-md dark:bg-[#3E3F42]">
                        USD/BTC
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between  mb-5">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="font-inner font-[500] text-md text-[#344054] dark:text-white  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          TradingView Signal
                        </label>
                    </div>
                      
                      <FiInfo/>
                  </div>

                  <div className="mb-5">
                    <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Webhook URL</Label>
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="text"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="www.webhook.com/your-webhook"
                      />
                      <span className="px-2.5 py-1.5 bg-[#F2F2F3] dark:bg-[#19191A]  text-gray-500 dark:text-white  rounded-md dark:bg-[#3E3F42]">
                        <FiCopy className="h-[24px]" />
                        
                      </span>
                    </div>
                  </div>

                <div className="mb-5">
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Message</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="text"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="{Symbol} {Side} {Price} {Quantity}"
                    />
                    <span className="px-2.5 py-1.5 bg-[#F2F2F3] dark:bg-[#19191A]  text-gray-500 dark:text-white  rounded-md dark:bg-[#3E3F42]">
                      <FiCopy className="h-[24px]" />
                      
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between mb-5">
                  <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-inner font-[500] text-md text-[#344054] dark:text-white  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Trigger Point
                      </label>
                  </div>
                  <FiInfo/>
                </div>

                <div className="mb-5 flex justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="font-inner font-[500] text-md text-[#344054] dark:text-white  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Do not buy
                    </label>
                    <FiInfo/>
                </div>
                <Label className="font-inner font-[500] text-md text-[#344054] dark:text-white ">Capital: $123.12</Label>

                </div>
                


              <div className="grid grid-cols-2 gap-x-4 justify-center items-center">
                

                <div className="mb-5">
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Part of my capital</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                      <FiDollarSign className="h-[24px]"/>
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Capital employed</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                      <FiPercent className="h-[24px]"/>
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">I buy</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                      BST
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">With</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                      USDT
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">BTC available</Label>

                  <h4 className="font-inner font-[700] text-[20px] text-[#344054] dark:text-white ">0.0001</h4>
                </div>
                <div className="mb-5"> 
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">USDT available</Label>
                  <h4 className="font-inner font-[700] text-[20px] text-[#344054] dark:text-white ">6.17</h4>
                </div>
                
              </div>
              <div className="flex justify-between mb-5">
                  <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-inner font-[500] text-md text-[#344054] dark:text-white  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Leverage
                      </label>
                  </div>
                  <FiInfo/>
                </div>
                <div className="flex justify-between mb-5">
                  <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-inner font-[500] text-md text-[#344054] dark:text-white  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Entry cancelled on
                      </label>
                  </div>
                  <FiInfo/>
                </div>
            
            </Card>

            <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 ">
              <div className="my-2 flex justify-center mb-5">
              <Toggle
                pressed={proSel === false}
                onPressedChange={handleProSel}
                className={`relative w-10 h-6 rounded-full ${
                  proSel === true
                    ? "bg-[#FE0FE2] dark:bg-[#FE0FE2]"
                    : "dark:bg-gray-700"
                } `}
              >
                <div
                  className={`block w-4 h-4  rounded-full shadow-md transform transition-transform ${
                    proSel === false
                      ? "translate-x-[-6px] bg-black dark:bg-white"
                      : "translate-x-[6px] bg-white"
                  }`}
                />
              </Toggle>
              <Label className="ml-2 font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Take Profit (sell)</Label>
            </div>
            <div className="my-2">
              <div className="grid grid-cols-3 gap-4">
              <div className="mb-5">
                    <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Part</Label>
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiPercent className="h-[24px]"/>
                      </span>
                    </div>
                  </div>
              <div className="mb-5">
                    <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Price</Label>
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiDollarSign className="h-[24px]"/>
                      </span>
                    </div>
                </div>

                <div className="mb-5">
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Profit</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                      <FiPercent className="h-[24px]"/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex">
                <h2 className="font-inner font-[500] text-[12px] text-[#229F9C] dark:text-[#2DD2CE]  text-center bg-[#CDF4F3] dark:bg-[#0B3231]  px-[30px] py-[10px] rounded-l-md">Limit</h2>
                <h2 className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  text-center bg-[#F2F2F3] dark:bg-[#19191A]  px-[30px] py-[10px] rounded-r-md">Market</h2>
                </div>
                <div className="flex">
                <Label className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  mr-2">Trading</Label>
                <FiInfo/>
                </div>
              </div>
              <SelectSeparator className="my-4" />
            </div>

            <div className="my-2">
              <div className="grid grid-cols-3 gap-4">
              <div className="mb-5">
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiPercent className="h-[24px]"/>
                      </span>
                    </div>
                  </div>
              <div className="mb-5">
                    
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiDollarSign className="h-[24px]"/>
                      </span>
                    </div>
                </div>

                <div className="mb-5">
                  
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                      <FiPercent className="h-[24px]"/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex">
                <h2 className="font-inner font-[500] text-[12px] text-[#229F9C] dark:text-[#2DD2CE]  text-center bg-[#CDF4F3] dark:bg-[#0B3231]  px-[30px] py-[10px] rounded-l-md">Limit</h2>
                <h2 className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  text-center bg-[#F2F2F3] dark:bg-[#19191A]  px-[30px] py-[10px] rounded-r-md">Market</h2>
                </div>
                <div className="flex">
                <Label className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  mr-2">Trading</Label>
                <FiInfo/>
                </div>
              </div>
              <SelectSeparator className="my-4" />
            </div>

            <div className="my-2">
              <div className="grid grid-cols-3 gap-4">
              <div className="mb-5">
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiPercent className="h-[24px]"/>
                      </span>
                    </div>
                  </div>
              <div className="mb-5">
                    
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiDollarSign className="h-[24px]"/>
                      </span>
                    </div>
                </div>

                <div className="mb-5">
                  
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                      <FiPercent className="h-[24px]"/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex">
                <h2 className="font-inner font-[500] text-[12px] text-[#229F9C] dark:text-[#2DD2CE]  text-center bg-[#CDF4F3] dark:bg-[#0B3231]  px-[30px] py-[10px] rounded-l-md">Limit</h2>
                <h2 className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  text-center bg-[#F2F2F3] dark:bg-[#19191A]  px-[30px] py-[10px] rounded-r-md">Market</h2>
                </div>
                <div className="flex">
                <Label className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  mr-2">Trading</Label>
                <FiInfo/>
                </div>
              </div>
              <SelectSeparator className="my-4" />
            </div>

            <div className="my-2">
              <div className="grid grid-cols-3 gap-4">
              <div className="mb-5">
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiPercent className="h-[24px]"/>
                      </span>
                    </div>
                  </div>
              <div className="mb-5">
                    
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiDollarSign className="h-[24px]"/>
                      </span>
                    </div>
                </div>

                <div className="mb-5">
                  
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                      <FiPercent className="h-[24px]"/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex">
                <h2 className="font-inner font-[500] text-[12px] text-[#229F9C] dark:text-[#2DD2CE]  text-center bg-[#CDF4F3] dark:bg-[#0B3231]  px-[30px] py-[10px] rounded-l-md">Limit</h2>
                <h2 className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  text-center bg-[#F2F2F3] dark:bg-[#19191A]  px-[30px] py-[10px] rounded-r-md">Market</h2>
                </div>
                <div className="flex">
                <Label className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  mr-2">Trading</Label>
                <FiInfo/>
                </div>
              </div>
              <SelectSeparator className="my-4" />
            </div>


            <div className="my-2">
              <div className="grid grid-cols-3 gap-4">
              <div className="mb-5">
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 dark:text-white  rounded-r-md dark:bg-[#3E3F42]">
                        <FiPercent className="h-[24px]"/>
                      </span>
                    </div>
                  </div>
              <div className="mb-5">
                    
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                        <FiDollarSign className="h-[24px]"/>
                      </span>
                    </div>
                </div>

                <div className="mb-5">
                  
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                      <FiPercent className="h-[24px]"/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex">
                <h2 className="font-inner font-[500] text-[12px] text-[#229F9C] dark:text-[#2DD2CE]  text-center bg-[#CDF4F3] dark:bg-[#0B3231]  px-[30px] py-[10px] rounded-l-md">Limit</h2>
                <h2 className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  text-center bg-[#F2F2F3] dark:bg-[#19191A]  px-[30px] py-[10px] rounded-r-md">Market</h2>
                </div>
                <div className="flex">
                <Label className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  mr-2">Trading</Label>
                <FiInfo/>
                </div>
              </div>
              <SelectSeparator className="my-4" />
            </div>
            <div className="flex justify-end">
            <Label className="font-inner font-[500] text-[14px] text-[#000000] dark:text-white">Net Percentage: 0.00%</Label>
            </div>
            
            
 



            </Card>

            <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 ">
              <div className="my-2 flex justify-center mb-5">
              <Toggle
                pressed={proSel === false}
                onPressedChange={handleProSel}
                className={`relative w-10 h-6 rounded-full ${
                  proSel === true
                    ? "bg-[#FE0FE2] dark:bg-[#FE0FE2]"
                    : "dark:bg-gray-700"
                } `}
              >
                <div
                  className={`block w-4 h-4  rounded-full shadow-md transform transition-transform ${
                    proSel === false
                      ? "translate-x-[-6px] bg-black dark:bg-white"
                      : "translate-x-[6px] bg-white"
                  }`}
                />
              </Toggle>
              <Label className="ml-2 font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Stop Loss</Label>
            </div>
            <div className="my-2">
              <div className="grid grid-cols-2 gap-4">
              <div className="mb-5">
                    <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Stop Loss (Sell) * </Label>
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                        <FiDollarSign className="h-[24px]"/>
                      </span>
                    </div>
                  </div>
                <div className="mb-5">
                  <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white ">Profit *</Label>
                  <div className="flex items-center border rounded-md w-full shadow-sm">
                    <input
                      type="number"
                      className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                      placeholder="0"
                    />
                    <span className="px-2.5 py-1.5 bg-gray-100 text-gray-500 rounded-r-md dark:bg-[#3E3F42]">
                      <FiPercent className="h-[24px]"/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-5">
                <Label className="font-inner font-[500] text-[14px] text-[#000000] dark:text-white">Net Percentage: 0.00%</Label>
              </div>
            
              <div className="flex justify-between items-center">
                <div className="flex">
                <h2 className="font-inner font-[500] text-[12px] text-[#229F9C] dark:text-[#2DD2CE]  text-center bg-[#CDF4F3] dark:bg-[#0B3231]  px-[30px] py-[10px] rounded-l-md">Limit</h2>
                <h2 className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  text-center bg-[#F2F2F3] dark:bg-[#19191A]  px-[30px] py-[10px] rounded-r-md">Market</h2>
                </div>
                <div className="flex">
                <Label className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  mr-2">Trading</Label>
                <FiInfo/>
                </div>
              </div>
              
            </div>

            <div className="my-5">
                <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white  ">Auto Stop Loss On</Label>
                <CalendarDateRangePicker></CalendarDateRangePicker>
              <div className="flex justify-end my-2">
                <Label className="font-inner font-[500] text-[12px] text-[#000000] dark:text-white"> current server date and time : 2024/02/04 02:14</Label>
                
              </div>
              <div className="flex justify-end my-2">
              <div className="flex">
                <Label className="font-inner font-[500] text-[12px] text-[#344054] dark:text-white  mr-2">Move SL to</Label>
                <FiInfo/>
                </div>
              </div>
              
                   
            </div>


                  <div className="my-5">
                    <Label className="font-inner font-[500] text-[14px] text-[#344054] dark:text-white  ">Target SL *</Label>
                    <div className="flex items-center border rounded-md w-full shadow-sm">
                      <input
                        type="number"
                        className="w-full py-1.5 px-2.5 text-gray-900 border-none rounded-l-md focus:outline-none focus:ring-0"
                        placeholder="0"
                      />
                      <span className="px-2.5 py-1.5 bg-[#F2F2F3] dark:bg-[#19191A]  text-gray-500 dark:text-white  rounded-md dark:bg-[#3E3F42]">
                        USD/BTC
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end my-2">
                    <Label className="font-inner font-[500] text-[12px] text-[#000000] dark:text-white text-end"> Max capital loss: 0.00% (0.00$) <br/>
                    Reward / Risk : 3.54:1</Label>
                    
                  </div>
            
 



            </Card>
            
        </div>
        
      </div>
    </ScrollArea>
  );
}
