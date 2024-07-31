"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import * as React from "react";
import { Calendar } from "./ui/calender";

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<Date | undefined>();
  const [show, setShow] = React.useState(false);
  const dateRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (
        dateRef.current &&
        !dateRef.current.contains(e.target as HTMLElement)
      ) {
        setShow(false);
      }
    };

    document.body.addEventListener("mousedown", closeMenu);

    return () => document.body.removeEventListener("mousedown", closeMenu);
  }, []);

  const handleSelect = (data: any) => {
    setDate(data);
    setShow(false);
  };
  return (
    <div className={cn("grid gap-2 relative", className)} ref={dateRef}>
      <Popover>
        <PopoverTrigger
          asChild
          onClick={() => {
            console.log(show);
            setShow(true);
          }}
        >
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              " justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
          >
            {date ? format(date, "LLL dd, y") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        {show && (
          <div className="absolute z-50 w-auto rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 top-[-330px] right-[55px]">
            <Calendar
              initialFocus
              selected={date}
              onSelect={handleSelect}
              mode="single"
            />
          </div>
        )}
      </Popover>
    </div>
  );
}
