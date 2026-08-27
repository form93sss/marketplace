"use client";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 transition-colors duration-300 antialiased">
        {/* Navbar Theme Dark & Orange */}
        <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-orange-500/20 px-6 py-3.5">
          <div className="w-full flex justify-between items-center">
            <Link href="/home" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-black font-black text-sm shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                CM
              </span>
              <span className="font-extrabold text-base bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Campus Marketplace
              </span>
            </Link>
            
            <div className="px-3 py-1.5 text-xs font-bold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Dark Theme</span>
            </div>
          </div>
        </header>

        {/* Main Content Full Width */}
        <main className="w-full min-h-[calc(100vh-65px)] bg-zinc-950">
          {children}
        </main>
      </body>
    </html>
  );
}