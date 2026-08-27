"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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
      <body className="min-h-screen transition-colors duration-300">
        <header className="sticky top-0 z-50 glass-effect border-b border-slate-200/60 dark:border-slate-800/60 px-6 py-3">
          {/* เอา max-w-md / max-w-xl ออกเพื่อให้ขยายเต็มหน้าจอ */}
          <div className="w-full flex justify-between items-center">
            <Link href="/home" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-sm shadow-md shadow-indigo-500/30">
                CM
              </span>
              <span className="font-extrabold text-base bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Campus Marketplace
              </span>
            </Link>
            
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1.5 text-xs font-bold rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300/50 dark:border-slate-700 hover:scale-105 active:scale-95 transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </header>

        {/* เอา max-w ออกเพื่อให้เนื้อหาเต็มความกว้างหน้าจอ */}
        <main className="w-full p-4 sm:p-6 min-h-[calc(100vh-60px)]">
          {children}
        </main>
      </body>
    </html>
  );
}