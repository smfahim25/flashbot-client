import { Breadcrumbs } from "@/components/breadcrumbs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lexend } from "next/font/google";
import React from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Search By", link: "/dashboard/searchby" },
];
const lexend = Lexend({
  weight: "600",
  subsets: ["vietnamese"],
});

export default function Page() {
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
      </div>
    </ScrollArea>
  );
}
