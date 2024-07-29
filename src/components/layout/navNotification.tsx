"use client";
import React, { useState } from "react";
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
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState("All");

  const handleAllClick = () => {
    setShowOptions((prevState) => !prevState);
  };

  const handleOptionClick = (value: any) => {
    setSelectedValue(value);
    setShowOptions(false); // Hide the options after selection
  };
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
              <div className="relative">
                <span
                  className="ml-5 flex items-center cursor-pointer"
                  onClick={handleAllClick}
                >
                  {selectedValue}
                  <span className="ml-2">
                    <RiArrowDownSLine />
                  </span>
                </span>
                {showOptions && (
                  <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-md">
                    <div
                      className="px-2 py-1 cursor-pointer hover:bg-[#fe0fe2] hover:text-white"
                      onClick={() => handleOptionClick("Custom")}
                    >
                      Custom
                    </div>
                    <div
                      className="px-2 py-1 cursor-pointer hover:bg-[#fe0fe2] hover:text-white"
                      onClick={() => handleOptionClick("All")}
                    >
                      All
                    </div>
                  </div>
                )}
              </div>
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
