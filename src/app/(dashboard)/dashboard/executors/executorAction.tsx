"use client";
import { AlertModal } from "@/components/alert-modal/alert-modal";
import { SideModal } from "@/components/sideModal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import { Executor } from "@/constants/data";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface CellActionProps {
  data: Executor;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [openPause, setOpenPause] = useState(false);
  const [open, setOpen] = useState(false);
  const [cloneOpen, setCloneOpen] = useState(false);

  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <Modal
        title="Delete"
        description="Are you sure you want to delete executor?"
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button variant={"ghost"} className="border-2">
            Cancel
          </Button>
          <Button>Delete Executor</Button>
        </div>
      </Modal>
      <Modal
        title="Pause"
        description="Are you sure you want to pause?"
        isOpen={openPause}
        onClose={() => setOpenPause(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button variant={"ghost"} className="border-2">
            Cancel
          </Button>
          <Button>Pause Executor</Button>
        </div>
      </Modal>
      <Modal
        title="Export"
        description="Exporting Executor to JSON"
        isOpen={openExport}
        onClose={() => setOpenExport(false)}
      >
        <div className="flex gap-4 justify-end">
          <Button variant={"ghost"} className="border-2">
            Cancel
          </Button>
          <Button>Export Executor</Button>
        </div>
      </Modal>
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
        title="Clone Executors"
        description="Exporting Executor tomsfklsdaklfjklj JSON"
        isOpen={cloneOpen}
        onClose={() => setCloneOpen(false)}
      >
        <div className="">
          <Label className="text-lg">End Date</Label>
          <Input type="date" className=" py-4   mt-2"></Input>
          <div className="flex gap-4 w-[300px] mx-auto mt-14">
            <Button variant={"ghost"} className="border-2 px-12">
              Cancel
            </Button>
            <Button>Export Executor</Button>
          </div>
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
          <DropdownMenuItem
          // onClick={() => router.push(`/dashboard/user/${data.id}`)}
          >
            View More
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setViewOpen(true)}>
            Edit Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCloneOpen(true)}>
            Clone Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Run backtest
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            View Executions
          </DropdownMenuItem>
          <hr />
          <DropdownMenuItem onClick={() => setOpenPause(true)}>
            <span className="text-yellow-400">Pause Executor</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenExport(true)}>
            Export Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenDelete(true)}>
            <span className="text-red-500">Delete Executor</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
