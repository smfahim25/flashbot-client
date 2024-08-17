"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Notification } from "@/components/notification";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Employee, users } from "@/constants/data";
import { HiOutlineDocumentText } from "react-icons/hi";
import { DashboardTable } from "@/components/dashboard/dashboardTable/dashboard-table";
import { dashboardColumns } from "./dashboardSection/dashboardColumns";
import { Lexend, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import useAvailableStrategiesStore from "@/app/store/useAvailableStrategies";
import { LuSettings2 } from "react-icons/lu";
import TradingMarket from "@/components/dashboard/trading-table";
const breadcrumbItems = [{ title: "Dashboard", link: "/dashboard" }];

const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
const jakarta = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["vietnamese"],
});

export default function Page() {
  const totalUsers = 20;
  const pageLimit = 10;
  const pageCount = Math.ceil(totalUsers / pageLimit);
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
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <h6
          className={`font-semibold text-[24px] leading-10 ${lexend.className}`}
        >
          Dashboard
        </h6>
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Total Profits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">
                $45,231.89
              </div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Executors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">55</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Executions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">12</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Backtests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">489</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Binance Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-green-100 text-green-500 hover:bg-green-100 dark:bg-[#00470B]">
                Connected
              </Badge>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/imgs/bitcoin.svg" alt="svg" width={30} height={30} />
            <p>
              Bitcoin <span className="text-muted-foreground">BTC</span>
            </p>
          </div>
          <div className="flex items-center gap-3 bg-[#FFFFFF] dark:bg-black border-2 px-5 py-2 rounded-md">
            <LuSettings2 />
            <span>Filter</span>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                24h Low & High
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">
                <Image src="/imgs/24hbar.svg" alt="" width={250} height={50} />
              </div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                All Time High
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">$73,867</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Price Change (1h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">-1.13%</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Price Change (24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">+1.63%</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Price Change (7d)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">+7.89%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 border-0">
          <Card className=" border-0">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground flex">
                <div className="bg-[#FE0FE2] text-white text-lg rounded p-1 mr-2">
                  <HiOutlineDocumentText />
                </div>
                <span
                  className={`${jakarta.className} text-[14px] dark:text-[white]`}
                >
                  Live Notification
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Notification />
            </CardContent>
          </Card>
          <Card className=" border-0">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground flex">
                <span
                  className={`${jakarta.className} text-[14px] dark:text-[white]`}
                >
                  Trending Crypto
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[50vh]">
                <TradingMarket />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          <Card className="col-span-4 md:col-span-3 border-0">
            <CardContent>
              <DashboardTable
                title="Top Gain Count"
                searchKey="anything here"
                columns={dashboardColumns}
                totalUsers={totalUsers}
                data={employee}
              />
            </CardContent>
          </Card>
          <Card className="col-span-4 md:col-span-3 border-0">
            <CardContent>
              <DashboardTable
                title="Top Lose Count"
                searchKey="anything here"
                columns={dashboardColumns}
                totalUsers={totalUsers}
                data={employee}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
