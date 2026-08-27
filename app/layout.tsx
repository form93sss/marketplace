"use client";
import "./globals.css";
import { useState, useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // ดึงค่าธีมเดิมที่เคยบันทึกไว้
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <html lang="th">
      <body className="min-h-screen transition-colors duration-200">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex justify-between items-center max-w-md mx-auto sm:max-w-xl">
          <h1 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">Campus Market</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 hover:opacity-80 transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main className="max-w-md mx-auto sm:max-w-xl p-4">
          {children}
        </main>
      </body>
    </html>
  );
}