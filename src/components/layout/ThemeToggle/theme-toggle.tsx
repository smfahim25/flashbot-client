"use client";

import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle"; // Adjust the import path based on your project structure
import { useTheme } from "next-themes";
import { useSidebar } from "@/hooks/useSidebar";

type CompProps = {};

export default function ThemeToggle({}: CompProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isMinimized } = useSidebar();
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null; // Render nothing until mounted on the client
  }

  return (
    <div className="flex items-center justify-between space-x-2 p-4">
      {!isMinimized && (
        <span className="text-gray-500">
          {theme === "dark" ? "Light" : "Dark"}
        </span>
      )}
      <Toggle
        pressed={theme === "dark"}
        onPressedChange={handleToggleChange}
        className={`relative w-10 h-6 bg-gray-500 dark:bg-gray-600 rounded-full ${
          isMinimized && "ml-[-10px]"
        }`}
      >
        <div
          className={`block w-4 h-4 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform ${
            theme === "dark" ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </Toggle>
    </div>
  );
}
