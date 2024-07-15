import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsDot } from "react-icons/bs";
export function Notification() {
  return (
    <div className="space-y-8">
      <div className="flex items-center border-b-2 py-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/imgs/logo.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report
          </p>
          <p className="text-sm text-muted-foreground">Yesterday at 11:42 PM</p>
        </div>
        <div className="ml-auto font-medium text-3xl">
          <BsDot />
        </div>
      </div>
      <div className="flex items-center border-b-2 py-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/imgs/logo.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report
          </p>
          <p className="text-sm text-muted-foreground">Yesterday at 11:42 PM</p>
        </div>
        <div className="ml-auto font-medium text-3xl">
          <BsDot />
        </div>
      </div>
      <div className="flex items-center border-b-2 py-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/imgs/logo.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report
          </p>
          <p className="text-sm text-muted-foreground">Yesterday at 11:42 PM</p>
        </div>
        <div className="ml-auto font-medium text-3xl">
          <BsDot />
        </div>
      </div>
    </div>
  );
}

