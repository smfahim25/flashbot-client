'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Employee } from '@/constants/data';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { AlertModal } from '../alert-modal/alert-modal';

interface CellActionProps {
  data: Employee;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem
            // onClick={() => router.push(`/dashboard/user/${data.id}`)}
          >
             View More
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Edit Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
          Clone Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
             Run backtest
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
             View Executions
          </DropdownMenuItem>
          <hr />
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <span className='text-yellow-400'>Pause Executor</span> 
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
           Export Executor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <span className='text-red-500'>Delete Executor</span>
          </DropdownMenuItem>
         
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
