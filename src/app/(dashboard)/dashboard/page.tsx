"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Notification } from "@/components/notification";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { users } from "@/constants/data";
import { HiOutlineDocumentText } from "react-icons/hi";
import { columns } from "./executors/executorsColumn";
import { DashboardTable } from "@/components/dashboard/dashboardTable/dashboard-table";
import { dashboardColumns } from "./dashboardSection/dashboardColumns";
import { Lexend, Plus_Jakarta_Sans } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const breadcrumbItems = [{ title: "Dashboard", link: "/dashboard" }];
interface Executor {
  id: number;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null;
}
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
  const page = 1;
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const router = useRouter();

  const employee: Executor[] = [
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
      name: "",
      zipcode: "62701",
      longitude: -89.65,
      latitude: 39.7817,
      job: "Software Developer",
      profile_picture: null,
    },
    {
      id: 2,
      first_name: "Jane",
      name: "",
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
    },
    {
      id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0198",
      gender: "Female",
      name: "",
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
    },
    {
      id: 4,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0198",
      gender: "Female",
      name: "",
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
    },
    {
      id: 5,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0198",
      gender: "Female",
      name: "",
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
    },
  ];
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        // Redirect to login if token doesn't exist
        router.push("/auth/login");
      }
    };
    // Set an interval to check the token every 5 seconds
    const intervalId = setInterval(checkToken, 2000);

    checkToken();
    return () => {
      clearInterval(intervalId);
    };
  }, [router]);
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
          <Card>
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Executors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">55</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Executions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Backtests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">489</div>
            </CardContent>
          </Card>
          <Card>
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground flex">
                <div className="bg-[#FE0FE2] text-white text-lg rounded p-1 mr-2">
                  <HiOutlineDocumentText />
                </div>
                <span className={`jakarta.className} text-[14px]`}>
                  Live Notification
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Notification />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground flex">
                <div className="bg-[#FE0FE2] text-white text-lg rounded p-1 mr-2">
                  <HiOutlineDocumentText />
                </div>
                Executors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DashboardTable
                searchKey="country"
                pageNo={page}
                columns={dashboardColumns}
                totalUsers={totalUsers}
                data={employee}
                pageCount={pageCount}
              />
            </CardContent>
          </Card>
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground flex">
                <div className="bg-[#FE0FE2] text-white text-lg rounded p-1 mr-2">
                  <HiOutlineDocumentText />
                </div>
                Backtests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DashboardTable
                searchKey="country"
                pageNo={page}
                columns={dashboardColumns}
                totalUsers={totalUsers}
                data={employee}
                pageCount={pageCount}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
