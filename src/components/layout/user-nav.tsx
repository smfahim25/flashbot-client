"use client";
import { useContext } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "../../AuthContext/AuthContext";
import Image from "next/image";
import Link from "next/link";
export function UserNav() {
  const { logout } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center cursor-pointer">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/imgs/logo.png" />
            {/* <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback> */}
          </Avatar>
          <span>MR.XXX</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-3" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-center space-y-1">
            <div className="mr-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/imgs/logo.png" />
              </Avatar>
            </div>
            <div>
              <p className="text-sm font-medium leading-none">MR.XXX</p>
              <p className="text-xs font-medium leading-none text-muted-foreground">
                edxample@gmail.com
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <Link href="/dashboard/profile"> 
          <div className="flex items-center">
              <span className="mr-2">
                <Image
                  src="/imgs/profile.svg"
                  alt="profile"
                  width={16}
                  height={16}
                />
              </span>
              <span>View Profile</span>
            </div>
           </Link>
            
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="mr-2">
                <Image
                  src="/imgs/setting.svg"
                  alt="profile"
                  width={16}
                  height={16}
                />
              </span>
              <span>Settings</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <div className="flex items-center">
            <span className="mr-2">
              <Image
                src="/imgs/logout.svg"
                alt="profile"
                width={16}
                height={16}
              />
            </span>
            <span>Log out</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
// }
