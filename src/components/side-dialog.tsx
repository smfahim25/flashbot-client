"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const SideDialog = DialogPrimitive.Root;

const SideDialogTrigger = DialogPrimitive.Trigger;

const SideDialogPortal = DialogPrimitive.Portal;

const SideDialogClose = DialogPrimitive.Close;

const SideDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/10  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
SideDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const SideDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SideDialogPortal>
    <SideDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        " absolute top-0  right-0  z-50  w-full max-w-lg h-full  border bg-background p-6 shadow-lg duration-500 sm:rounded-lg md:w-full" ,
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </SideDialogPortal>
));
SideDialogContent.displayName = DialogPrimitive.Content.displayName;

const SideDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SideDialogHeader.displayName = "DialogHeader";

const SideDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SideDialogFooter.displayName = "DialogFooter";

const SideDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
SideDialogTitle.displayName = DialogPrimitive.Title.displayName;

const SideDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SideDialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  SideDialog,
  SideDialogPortal,
  SideDialogOverlay,
  SideDialogTrigger,
  SideDialogClose,
  SideDialogContent,
  SideDialogFooter,
  SideDialogTitle,
  SideDialogHeader,
  SideDialogDescription,
};
