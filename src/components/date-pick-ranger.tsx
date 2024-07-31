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
import { Calendar } from "@/components/ui/calender";

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<Date | undefined>();
  const [show, setShow] = React.useState(false);
  const dateRef = React.useRef<HTMLDivElement | null>(null);
  const popoverRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (
        dateRef.current &&
        !dateRef.current.contains(e.target as HTMLElement) &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target as HTMLElement)
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
    <div className={cn("relative", className)} ref={dateRef}>
      <Popover open={show} onOpenChange={setShow}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
            onClick={() => setShow(!show)}
          >
            {date ? format(date, "LLL dd, y") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          ref={popoverRef}
          align="start"
          side="bottom"
          sideOffset={10}
          alignOffset={-10}
          onInteractOutside={(e) => e.preventDefault()} // Prevent popover from closing on outside interaction
          className="p-0 w-auto"
        >
          <Calendar
            initialFocus
            selected={date}
            onSelect={handleSelect}
            mode="single"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
