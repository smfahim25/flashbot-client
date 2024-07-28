"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiCopy, FiEdit, FiPlus } from "react-icons/fi";
import { TfiImport } from "react-icons/tfi";
import { Card } from "@/components/ui/card";
import { Lexend, Manrope } from "next/font/google";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/hooks/useSidebar";
import { FaCopy, FaEdit } from "react-icons/fa";
interface Executor {
  id: number;
  name: string;
  tp: string;
  status: string;
  ticker: string;
  size: string; // Consider using a proper date type if possible
  startposition: string;
  strategy: string;
}

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Profile", link: "/dashboard/profile" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
const manarop = Manrope({
  weight: "700",
  subsets: ["vietnamese"],
});
export default function Page() {
  const totalUsers = 20;
  const pageLimit = 10;
  const page = 1;
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const { isMinimized } = useSidebar();
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8 mb-16">
        <div className="flex justify-between items-center">
          <div>
            <h6
              className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
            >
              Profile
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

          <Card className="w-full mt-4 border-none p-2 px-5 rounded-xl p-4 mt-5">
            <div className="flex justify-between">
                <h6 className="font-[600] text-[24px]">General Information</h6>
                <FiEdit/>

            </div>  
            <div className="w-[120px] h-[120px] rounded-full bg-gray-200 mt-4"></div>
            <div className="grid grid-cols-3 gap-4 justify-center items-center my-5">
                <div>
                <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">Full Name</Label>
                <div className="flex">
                <h6 className="font-[600] text-[16px] font-inner">Rafatul Islam </h6>
                <span className="cursor-pointer p-1"> <FiCopy/> </span>
                </div>
                </div>
                <div>
                <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">Email ID</Label>
                <div className="flex">
                <h6 className="font-[600] text-[16px] font-inner">watson@gmail.com </h6>
                <span className="cursor-pointer p-1"> <FiCopy/> </span>
                </div>
                </div>
                <div>
                <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">Phone Number</Label>
                <div className="flex">
                <h6 className="font-[600] text-[16px] font-inner">+88019485 21934 </h6>
                <span className="cursor-pointer p-1"> <FiCopy/> </span>
                </div>
                </div>
                <div>
                <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">User Name</Label>
                <h6 className="font-[600] text-[16px] font-inner">rafatulislam </h6>
                </div>

                <div>
                <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">Date of Birth</Label>
                <h6 className="font-[600] text-[16px] font-inner">1991-07-26 </h6>
                </div>
                <div>
                <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">Sex</Label>
                <h6 className="font-[600] text-[16px] font-inner">Male </h6>
                </div>
                
            </div>          
          </Card>
          
        
      </div>
    </ScrollArea>
  );
}
