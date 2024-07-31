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
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import { Executor, Strategies } from "@/constants/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CalendarDateRangePicker } from "@/components/date-pick-ranger";
import { FiDelete, FiEdit, FiEdit2, FiEye, FiTrash, FiTrash2 } from "react-icons/fi";

interface CellActionProps {
  data: Strategies;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [view, setView] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [openPause, setOpenPause] = useState(false);
  const [open, setOpen] = useState(false);
  const [cloneOpen, setCloneOpen] = useState(false);
  const [runBacksetOpen, setRunBacksetOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <Modal
        title="Delete"
        description="Are you sure you want to delete Strategy?"
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button
            variant={"ghost"}
            className="border-2"
            onClick={() => setOpenDelete(false)}
          >
            Cancel
          </Button>
          <Button>Delete Strategy</Button>
        </div>
      </Modal>
      <SideModal
        title="Strategy Builder"
        description="View more"
        isOpen={viewMore}
        onClose={() => setViewMore(false)}
      >
        <ScrollArea className="h-[85vh]">
          <div className="flex justify-between">
          <div className="border-none">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="font-inner font-[400] text-[12px] text-muted-foreground">
                  Strategy Name
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[20px] font-[700]">RSI Testing</div>
              </CardContent>
            </div>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] h-[90px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">Buy</div>
              </CardContent>
            </Card>
          </div>
          <div>
          <div className="grid grid-cols-4 gap-4 justify-center items-center my-5">
            
            
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Indicator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">MA</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">Simple</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Souce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]  text-center me-[60px]">
                  Open
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">Average</div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="font-[700] py-4 text-[14px] text-[#3E3F42]">Parameters</h2>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
              Outputs
                </CardTitle>
                
              </CardHeader>
              <CardContent>
              <div className="text-[14px] font-[700]">100</div>
              </CardContent>
            </Card>

            <SelectSeparator className="py-[1px] my-5"/>

            <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] mt-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="text-[14px] font-[700]"> Equals </div>
              </CardHeader>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] mt-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="text-[14px] font-[700]">Indicators</div>
              </CardHeader>
            </Card>

            </div>

            
          </div>
          </div>
          <div>
          <div className="grid grid-cols-4 gap-4 justify-center items-center my-5">
            
            
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Indicator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">MA</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">Simple</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Souce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]  text-center me-[60px]">
                  Open
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">Average</div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="font-[700] py-4 text-[14px] text-[#3E3F42]">Parameters</h2>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
              Outputs
                </CardTitle>
                
              </CardHeader>
              <CardContent>
              <div className="text-[14px] font-[700]">100</div>
              </CardContent>
            </Card>

            <SelectSeparator className="py-[1px] my-5"/>

            <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] mt-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="text-[14px] font-[700]"> Equals </div>
              </CardHeader>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] mt-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="text-[14px] font-[700]">Indicators</div>
              </CardHeader>
            </Card>

            </div>

            
          </div>
          </div>
          <div>
          <div className="grid grid-cols-4 gap-4 justify-center items-center my-5">
            
            
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Indicator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">MA</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">Simple</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Souce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]  text-center me-[60px]">
                  Open
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] ">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-[12px] font-normal text-muted-foreground">
                  Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-[14px] font-[600]">Average</div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="font-[700] py-4 text-[14px] text-[#3E3F42]">Parameters</h2>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[12px] font-normal text-muted-foreground">
              Outputs
                </CardTitle>
                
              </CardHeader>
              <CardContent>
              <div className="text-[14px] font-[700]">100</div>
              </CardContent>
            </Card>

            <SelectSeparator className="py-[1px] my-5"/>

            <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] mt-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="text-[14px] font-[700]"> Equals </div>
              </CardHeader>
            </Card>
            <Card className="border-0 bg-[#F2F2F3] dark:bg-[#252628] mt-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="text-[14px] font-[700]">Indicators</div>
              </CardHeader>
            </Card>

            </div>

            
          </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </SideModal>

      

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setViewMore(true)}>
          <FiEye className="mr-2"/>  View
          </DropdownMenuItem>
          <DropdownMenuItem
            // onClick={() => router.push("/dashboard/")}
          >
          <FiEdit2 className="mr-2"/>  Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenDelete(true)}>
            <FiTrash2 className="mr-2"/>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
