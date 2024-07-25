import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { BsDot } from "react-icons/bs";

export function Notification() {
  return (
    <Accordion collapsible type="single" className="space-y-8">
      <AccordionItem value="1" className="border-b-2 py-4">
        <AccordionTrigger className="flex items-center w-full ">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/imgs/logo.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 text-start">
            <p className=" font-medium leading-none font-inter text-[14px]">
              Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report
            </p>
            <p className=" text-muted-foreground font-inter text-[14px]">
              Yesterday at 11:42 PM
            </p>
          </div>
          <div className="ml-auto font-medium text-3xl">
            <BsDot />
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          nobis. Sapiente similique eum ratione culpa, temporibus repellat
          facere illum sunt!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="2" className="border-b-2 py-4">
        <AccordionTrigger className="flex items-center w-full ">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/imgs/logo.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 text-start">
            <p className="font-inter text-[14px] font-medium leading-none">
              Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report
            </p>
            <p className="font-inter text-[14px] text-muted-foreground">
              Yesterday at 11:42 PM
            </p>
          </div>
          <div className="ml-auto font-medium text-3xl">
            <BsDot />
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          nobis. Sapiente similique eum ratione culpa, temporibus repellat
          facere illum sunt!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="3" className="border-b-2 py-4">
        <AccordionTrigger className="flex items-center w-full ">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/imgs/logo.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1 text-start">
            <p className="font-inter text-[14px] text-sm font-medium leading-none">
              Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report
            </p>
            <p className="font-inter text-[14px] text-muted-foreground">
              Yesterday at 11:42 PM
            </p>
          </div>
          <div className="ml-auto font-medium text-3xl">
            <BsDot />
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          nobis. Sapiente similique eum ratione culpa, temporibus repellat
          facere illum sunt!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
