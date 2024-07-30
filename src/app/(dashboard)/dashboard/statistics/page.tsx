"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Notification } from "@/components/notification";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Lexend, Plus_Jakarta_Sans } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Statistics", link: "/dashboard/statistics" },
];

const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});
const jakarta = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["vietnamese"],
});

export default function Page() {
  const router = useRouter();
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
          Statistics
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
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Risk/Reward (TP/SL)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">1.5/-1.0</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Coin Name
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">ADAUSDT</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Time Frame
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">4h</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Total Trade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">918</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">May 24</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Avg. Trade Time From Open to Close
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">13:03:18</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Average Bars in Trades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">3</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Average Bars in Winning Trades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">5</div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Average Bars in Losing Trades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700] font-inter">3</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-1 lg:grid-cols-3 border-0">
          <Card className="border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Trades Ratio
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center gap-10">
              <Image src="/imgs/trade.svg" alt="" width={500} height={164} />
              <Image
                src="/imgs/trade-text.svg"
                alt=""
                width={100}
                height={44}
              />
            </CardContent>
          </Card>
          <Card className="border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Total Longs & Shorts
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center gap-10">
              <Image src="/imgs/longs.svg" alt="" width={500} height={164} />
              <Image
                src="/imgs/ratio-text.svg"
                alt=""
                width={100}
                height={44}
              />
            </CardContent>
          </Card>
          <Card className="border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Total Positive & Negative Short
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-5">
              <Image src="/imgs/positive.svg" alt="" width={520} height={164} />
              <Image
                src="/imgs/positive-text.svg"
                alt=""
                width={300}
                height={100}
              />
            </CardContent>
          </Card>
          <Card className="border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Total Longs & Shorts
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center gap-10">
              <Image
                src="/imgs/positivelong.svg"
                alt=""
                width={500}
                height={164}
              />
              <Image
                src="/imgs/positivelong-text.svg"
                alt=""
                width={100}
                height={44}
              />
            </CardContent>
          </Card>
          <Card className="border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Trade Longest & Shortest
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center gap-10">
              <Image src="/imgs/longest.svg" alt="" width={500} height={164} />
            </CardContent>
          </Card>
          <Card className="border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground font-inter">
                Longs & Shorts Win Ratio
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center gap-10">
              <Image src="/imgs/ratio.svg" alt="" width={500} height={164} />
              <Image
                src="/imgs/ratio-text.svg"
                alt=""
                width={100}
                height={44}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
