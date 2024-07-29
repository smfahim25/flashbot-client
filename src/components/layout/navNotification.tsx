import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Notification } from "../notification";
import { GoBell } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function NavNotification() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            <GoBell className="text-2xl" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-5 p-3 w-96" align="end" forceMount>
          <div className="flex item-center justify-between">
            <div className="flex items-center">
              <span className="text-[16px] font-[500]">Notification</span>
              <span className="ml-5 flex items-center cursor-pointer">
                All
                <span className="ml-2">
                  <RiArrowDownSLine />
                </span>
              </span>
            </div>
            <div className="flex items-center cursor-pointer">
              <span>Mark all as read</span>
              <span className="ml-3">
                <FaRegCircleCheck />
              </span>
            </div>
          </div>
          <Notification />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
