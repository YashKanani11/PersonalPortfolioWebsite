"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
    >
      <div
        className={`bg-white dark:bg-black text-yellow-500 dark:text-white w-6 h-6 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </div>
    </button>
  );
}
