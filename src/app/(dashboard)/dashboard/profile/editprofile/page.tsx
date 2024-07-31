"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Lexend } from "next/font/google";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CalendarDateRangePicker } from "@/components/date-pick-ranger";
import { useRef, useState } from "react";
import Image from "next/image";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Profile", link: "/dashboard/profile" },
  { title: "Edit Profile", link: "/dashboard/profile/editprofile" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});

export default function Page() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [image, setImage] = useState<string | null>(null);

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8 mb-16">
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

        <Card className="w-full border-none px-5 rounded-xl p-4 mt-5">
          <div
            className="w-[120px] h-[120px] rounded-full bg-gray-200 mt-4 flex justify-center items-center cursor-pointer"
            onClick={handleDivClick}
            data-tip="Click to upload a photo"
          >
            {image ? (
              <Image
                src={image}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
                width={40}
                height={40}
              />
            ) : (
              <Label className="font-lexend font-[400] text-[16px] text-[#686868] cursor-pointer">
                Upload <br />
                Picture
              </Label>
            )}
            <Input
              className="cursor-pointer"
              ref={fileInputRef}
              style={{ display: "none" }}
              type="file"
              onChange={handleImageUpload}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 justify-center items-center my-5">
            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                First Name
              </Label>
              <Input placeholder="First Name" />
            </div>

            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Last Name
              </Label>
              <Input placeholder="Last Name" />
            </div>

            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                User Name
              </Label>
              <Input placeholder="User Name" />
            </div>

            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Email
              </Label>
              <Input placeholder="Email" type="email" />
            </div>

            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Phone Number
              </Label>
              <Input placeholder="Phone Number" />
            </div>

            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Date of Birth
              </Label>
              <CalendarDateRangePicker className="w-full" />
            </div>

            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Sex
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-[white] dark:text-white dark:bg-[#09090b]">
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
