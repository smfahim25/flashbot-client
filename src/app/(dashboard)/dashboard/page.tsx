import { Breadcrumbs } from "@/components/breadcrumbs";
import { Notification } from "@/components/notification";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { users } from "@/constants/data";
import { HiOutlineDocumentText } from "react-icons/hi";
import { columns } from "./columns/columns";
const breadcrumbItems = [{ title: "Dashboard", link: "/dashboard" }];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal text-muted-foreground">
                Total Profits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold ">$45,231.89</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal text-muted-foreground">
                Executors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold ">55</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal text-muted-foreground">
                Executions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold ">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal text-muted-foreground">
                Backtests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold ">489</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal text-muted-foreground">
                Binance Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-green-100 text-green-500 hover:bg-green-100">
                Connected
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground flex">
                <div className="bg-pink-500 text-white text-lg rounded p-1 mr-2">
                  <HiOutlineDocumentText />
                </div>
                Live Notification
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
                <div className="bg-pink-500 text-white text-lg rounded p-1 mr-2">
                  <HiOutlineDocumentText />
                </div>
                Executors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable searchKey="name" columns={columns} data={users} />
            </CardContent>
          </Card>
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle className="text-base text-muted-foreground flex">
                <div className="bg-pink-500 text-white text-lg rounded p-1 mr-2">
                  <HiOutlineDocumentText />
                </div>
                Backtests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable searchKey="name" columns={columns} data={users} />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}

