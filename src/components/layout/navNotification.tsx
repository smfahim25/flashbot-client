"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const btnRef = useRef<HTMLDivElement | null>(null);

  const handleAllClick = () => {
    setShowOptions((prevState) => !prevState);
  };

  const handleOptionClick = (value: any) => {
    setSelectedValue(value);
    setShowOptions(false); // Hide the options after selection
  };

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as HTMLElement)) {
        setShowOptions(false);
      }
    };

    document.body.addEventListener("mousedown", closeMenu);

    return () => document.body.removeEventListener("mousedown", closeMenu);
  }, []);
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
              <div className="relative" ref={btnRef}>
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
                  <div className="absolute mt-2 bg-white border border-gray-300 dark:bg-[#09090b] rounded shadow-md">
                    <div
                      className="px-3 py-1 cursor-pointer hover:bg-[#fe0fe2] hover:text-white"
                      onClick={() => handleOptionClick("Custom")}
                    >
                      Custom
                    </div>
                    <div
                      className="px-3 py-1 cursor-pointer hover:bg-[#fe0fe2] hover:text-white"
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
