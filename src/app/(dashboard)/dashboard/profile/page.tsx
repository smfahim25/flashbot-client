"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FiCopy, FiEdit } from "react-icons/fi";
import { Card } from "@/components/ui/card";
import { Lexend } from "next/font/google";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Profile", link: "/dashboard/profile" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
export default function Page() {
  const { toast } = useToast();
  const handleCopy = () => {
    toast({
      title: "",
      variant: "default",
      description: "copied clipboard",
    });
  };
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

        <Card className="w-full border-none px-5 rounded-xl p-4 mt-5">
          <div className="flex justify-between">
            <h6 className="font-[600] text-[24px]">General Information</h6>
            <Link href="/dashboard/profile/editprofile">
              <FiEdit />
            </Link>
          </div>
          <div className="w-[120px] h-[120px] rounded-full bg-gray-200 mt-4">
            <Image src="/imgs/logo.png" alt="" width={120} height={120} />
          </div>
          <div className="grid grid-cols-3 gap-4 justify-center items-center my-5">
            <div>
              <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">
                Full Name
              </Label>
              <div className="flex">
                <h6 className="font-[600] text-[16px] font-inner">
                  Rafatul Islam
                </h6>
                <span className="cursor-pointer p-1">
                  <FiCopy onClick={handleCopy} />
                </span>
              </div>
            </div>
            <div>
              <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">
                Email ID
              </Label>
              <div className="flex">
                <h6 className="font-[600] text-[16px] font-inner">
                  watson@gmail.com
                </h6>
                <span className="cursor-pointer p-1">
                  {" "}
                  <FiCopy onClick={handleCopy} />
                </span>
              </div>
            </div>
            <div>
              <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">
                Phone Number
              </Label>
              <div className="flex">
                <h6 className="font-[600] text-[16px] font-inner">
                  +88019485 21934
                </h6>
                <span className="cursor-pointer p-1">
                  <FiCopy onClick={handleCopy} />
                </span>
              </div>
            </div>
            <div>
              <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">
                User Name
              </Label>
              <h6 className="font-[600] text-[16px] font-inner">
                rafatulislam
              </h6>
            </div>

            <div>
              <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">
                Date of Birth
              </Label>
              <h6 className="font-[600] text-[16px] font-inner">1991-07-26 </h6>
            </div>
            <div>
              <Label className="text-xs font-[400] font-inner text-[12px] text-[#717275]">
                Sex
              </Label>
              <h6 className="font-[600] text-[16px] font-inner">Male </h6>
            </div>
          </div>
        </Card>
      </div>
    </ScrollArea>
  );
}
