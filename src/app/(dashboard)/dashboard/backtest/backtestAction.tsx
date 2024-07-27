"use client";
import { SideModal } from "@/components/sideModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Executor } from "@/constants/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface CellActionProps {
  data: Executor;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  return (
    <>
      <SideModal
        title="Export"
        description="Exporting Executor tomsfklsdaklfjklj JSON"
        isOpen={viewOpen}
        onClose={() => setViewOpen(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button variant={"ghost"} className="border-2">
            Cancel
          </Button>
          <Button>Export Executor</Button>
        </div>
      </SideModal>
      <SideModal
        title="May Test 13"
        description="View more"
        isOpen={viewMore}
        onClose={() => setViewMore(false)}
      >
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <Card className="border-0 bg-gray-100 h-[90px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
                Coin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700]">ADAUSDT</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-gray-100 h-[90px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
                Coin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] font-[700]">ADAUSDT</div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="py-4 text-xl text-gray-500">Strategies Assigned</h2>
          <Card className="border-0 bg-gray-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="rsi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">rsi</SelectItem>
                  <SelectItem value="dark">rsi</SelectItem>
                  <SelectItem value="system">rsi</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="text-[24px] innertext">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </div>
            </CardContent>
          </Card>
        </div>
      </SideModal>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setViewMore(true)}>
            View More
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
