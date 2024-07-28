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
  { title: "Edit Profile", link: "/dashboard/profile/editprofile" },
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
              Edit Profile
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

          <Card className="w-full mt-4 border-none p-2 px-5 rounded-xl p-4 mt-5">
            <div className="w-[120px] h-[120px] rounded-full bg-gray-200 mt-4 flex justify-center items-center cursor-pointer">
                <Label className="font-lexend font-[400] text-[16px] text-[#686868]">Upload <br/>Picture</Label>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-center items-center my-5">
                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">First Name</Label>
                <Input placeholder="First Name"></Input>
                </div>

                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">Last Name</Label>
                <Input placeholder="Last Name"></Input>
                </div>

                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">User Name</Label>
                <Input placeholder="User Name"></Input>
                </div>
                
                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">Email</Label>
                <Input placeholder="Email" type="email"></Input>
                </div>
               
                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">Phone Number</Label>
                <Input placeholder="Phone Number"></Input>
                </div>
                
                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">Date of Birth</Label>
                <Input placeholder="Date of Birth" type="date"></Input>
                </div>

                <div>
                <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">Sex</Label>
                <Select>
                  <SelectTrigger className="w-full bg-[white] dark:text-white dark:bg-[#3E3F42]">
                    <SelectValue placeholder="Sex" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                </div>
            </div>  
            <div className="flex gap-5 justify-end mt-10">
            <Button>Save</Button>
          </div>        
          </Card>
          
        
      </div>
    </ScrollArea>
  );
}
