"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiLink, FiSend } from "react-icons/fi";
import { Card } from "@/components/ui/card";
import { Lexend } from "next/font/google";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Table", link: "/dashboard/ai" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
export default function Page() {
  const [show, setShow] = useState(false);
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleLabelClick = () => {
    setIsEditing(true);
    textareaRef.current?.focus();
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleTextareaBlur = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as HTMLElement)) {
        setShow(false);
      }
    };

    document.body.addEventListener("mousedown", closeMenu);

    return () => document.body.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
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
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>
          <div className="flex gap-5 justify-end">
            <Button className="w-[169px] h-[110px] font-[600] text-[16px]">
              Generate
            </Button>
          </div>
        </div>
        <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 flex justify-center items-center h-[566px]">
          <Label className="font-inner font-[400] text-[16px] text-[#888C91] ">
            No Prompt yet
          </Label>
        </Card>

        <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 flex justify-between items-center h-[73px]">
          <div className="flex justify-center items-center gap-2">
            <Image src="/imgs/robot.png" alt="" width={44} height={45} />
            <div className="relative w-full">
              {!isEditing ? (
                <Label
                  className="font-inner font-[400] text-[16px] text-[#888C91] cursor-pointer"
                  onClick={handleLabelClick}
                >
                  {inputValue || "Write Prompt..."}
                </Label>
              ) : (
                <Textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={handleTextareaChange}
                  onBlur={handleTextareaBlur}
                  className="absolute inset-0 bg-transparent border-none z-10 resize-none w-[500px] top-[-30px]"
                />
              )}
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="relative" ref={btnRef}>
              <div
                className="w-[44px] h-[44px] rounded-[12px] flex justify-center items-center bg-white dark:bg-[#080808] border-[1px] cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <FiLink
                  className="text-[#292D32] dark:text-white"
                  name="filter"
                />
              </div>
              {show && (
                <Card className="absolute bottom-[70px] right-[-70px] w-[250px] h-[420px] border-gray px-5 rounded-lg p-4 mt-5 shadow-lg">
                  <h4 className="font-inner font-[400] text-[16px] text-[#6F7277] my-5">
                    Filter
                  </h4>
                  <Input className="mb-5" placeholder="Executor ID" />
                  <Input className="mb-5" placeholder="Execution ID" />
                  <Input className="mb-5" placeholder="Job ID" />

                  <div className="flex gap-5 justify-end mb-5">
                    <Button className="w-full h-[44px] font-inner font-[400] text-[16px] text-[#FE0FE2] bg-[#FFE6FC] dark:bg-[#700162] hover:bg-[#FFE6FD]">
                      Get Latest Execution
                    </Button>
                  </div>

                  <div className="flex gap-5 justify-end">
                    <Button className="w-full h-[44px] font-inner font-[400] text-[16px] text-[#FE0FE2] bg-[#FFE6FC] dark:bg-[#700162] hover:bg-[#FFE6FD]">
                      Backtesting Job Data
                    </Button>
                  </div>
                </Card>
              )}
            </div>
            <div className="w-[44px] h-[44px] rounded-[12px] flex justify-center items-center bg-[#2DD2CE] cursor-pointer">
              <FiSend className="text-white" name="Ask" />
            </div>
          </div>
        </Card>
      </div>
    </ScrollArea>
  );
}
