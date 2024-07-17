'use client';

import { SideDialog, SideDialogContent, SideDialogDescription, SideDialogHeader, SideDialogTitle } from "./side-dialog";


interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const SideModal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <SideDialog open={isOpen} onOpenChange={onChange}>
      <SideDialogContent>
        <SideDialogHeader>
          <SideDialogTitle className='text-2xl'>{title}</SideDialogTitle>
          <hr />
        </SideDialogHeader>
        <div className=' mt-4'>{children}</div>
      </SideDialogContent>
    </SideDialog>
  );
};
