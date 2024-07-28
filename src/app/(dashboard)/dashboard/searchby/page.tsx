import { Breadcrumbs } from "@/components/breadcrumbs";
import { CalendarDateRangePicker } from "@/components/date-pick-ranger";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Employee } from "@/constants/data";
import { Lexend } from "next/font/google";
import React from "react";
import { searchbyColumns } from "./searchbycolumn";
import { SearchbyTable } from "@/components/searchby/searchbyTable";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Search By", link: "/dashboard/searchby" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});

export default function Page() {
  const employee: Employee[] = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "+1-202-555-0123",
      gender: "Male",
      date_of_birth: "1980-04-25",
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      country: "USA",
      name: "bitcoin",
      zipcode: "62701",
      longitude: -89.65,
      latitude: 39.7817,
      job: "Software Developer",
      profile_picture: null,
      price: "$167",
      day: "+6.04%",
    },
    {
      id: 2,
      first_name: "Jane",
      name: "bitcoin",
      last_name: "Smith",
      email: "jane.smith@example.com",
      phone: "+1-202-555-0145",
      gender: "Female",
      date_of_birth: "1985-07-14",
      street: "456 Oak St",
      city: "Madison",
      state: "WI",
      country: "USA",
      zipcode: "53703",
      longitude: -89.3838,
      latitude: 43.0731,
      job: "Project Manager",
      profile_picture: "https://example.com/profile/jane.jpg",
      price: "$1965",
      day: "+6.04%",
    },
    {
      id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0198",
      gender: "Female",
      name: "bitcoin",
      date_of_birth: "1990-01-05",
      street: "789 Pine St",
      city: "Columbus",
      state: "OH",
      country: "USA",
      zipcode: "43215",
      longitude: -82.9988,
      latitude: 39.9612,
      job: "Data Analyst",
      profile_picture: "https://example.com/profile/alice.jpg",
      price: "$1965",
      day: "+6.04%",
    },
    {
      id: 4,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0198",
      gender: "Female",
      name: "bitcoin",
      date_of_birth: "1990-01-05",
      street: "789 Pine St",
      city: "Columbus",
      state: "OH",
      country: "USA",
      zipcode: "43215",
      longitude: -82.9988,
      latitude: 39.9612,
      job: "Data Analyst",
      profile_picture: "https://example.com/profile/alice.jpg",
      price: "$1965",
      day: "+6.04%",
    },
    {
      id: 5,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0198",
      gender: "Female",
      name: "bitcoin",
      date_of_birth: "1990-01-05",
      street: "789 Pine St",
      city: "Columbus",
      state: "OH",
      country: "USA",
      zipcode: "43215",
      longitude: -82.9988,
      latitude: 39.9612,
      job: "Data Analyst",
      profile_picture: "https://example.com/profile/alice.jpg",
      price: "$1965",
      day: "+6.04%",
    },
  ];
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8 mb-16">
        <div className="flex justify-between items-center">
          <div>
            <h6
              className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
            >
              Search By
            </h6>
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Card className="w-full border-none px-5 rounded-xl p-4 mt-5 flex items-center justify-between">
            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Filter by
              </Label>
              <Select>
                <SelectTrigger className="w-[290px] bg-[white] dark:text-white dark:bg-[#19191A]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent></SelectContent>
              </Select>
            </div>
            <div className="ml-5">
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Start Date
              </Label>
              <CalendarDateRangePicker className="w-[290px]" />
            </div>
            <div className="ml-5">
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                End Date
              </Label>
              <CalendarDateRangePicker className="w-[290px]" />
            </div>
          </Card>
          <Button className="py-12 mt-5">
            <span className="text-[16px]">Generate</span>
          </Button>
        </div>
        <Card className="w-full border-none px-5 rounded-xl p-4 mt-5">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Indicator
              </Label>
              <Select>
                <SelectTrigger className="w-[290px] bg-[white] dark:text-white dark:bg-[#19191A]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent></SelectContent>
              </Select>
            </div>
            <div className="ml-5">
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Check for
              </Label>
              <Select>
                <SelectTrigger className="w-[290px] bg-[white] dark:text-white dark:bg-[#19191A]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent></SelectContent>
              </Select>
            </div>
            <div className="ml-5">
              <Label className="text-xs font-[600] font-inner text-[12px] text-[#37383B]">
                Amount
              </Label>
              <Input className="w-[290px]" placeholder="Amount"></Input>
            </div>
          </div>
          <div className="flex gap-5 justify-end mt-5">
            <Button variant={"ghost"} className="border-2 px-12">
              Cancel
            </Button>
            <Button className="rounded-md bg-[#2DD2CE] md:w-[150px]">
              Get data
            </Button>
          </div>
        </Card>
        <Card>
          <SearchbyTable columns={searchbyColumns} data={employee} />
        </Card>
      </div>
    </ScrollArea>
  );
}
