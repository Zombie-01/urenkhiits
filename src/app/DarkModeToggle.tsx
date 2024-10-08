"use client";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import useDarkMode from "@/lib/darkmode";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  // Toggle between dark and light modes
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 lg:right-20 z-[999999999999999] bg-gray-200 rounded-full dark:bg-gray-800 text-black dark:text-white py-2 px-2 text-[9px]">
      {isDarkMode ? (
        <IconSun width={18} height={18} />
      ) : (
        <IconMoon width={18} height={18} />
      )}
    </button>
  );
};

export default DarkModeToggle;
