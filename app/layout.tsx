"use client";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import Logo3D from "@/components/Logo3D"; // ดึงโลโก้ 3 มิติมาใช้โดยตรงได้เลย (ไม่ต้อง Dynamic)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="dark">
      <head>
        <Script 
          type="module" 
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js" 
          strategy="lazyOnload" 
        />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 transition-colors duration-300 antialiased overflow-x-hidden">
        {/* Header โลโก้ 3 มิติมุมซ้ายบน */}
        <header className="sticky top-0 z-50 bg-zinc-950/85 backdrop-blur-md border-b border-orange-500/20 px-6 py-3">
          <div className="w-full flex justify-between items-center">
            
            {/* ซ้ายบน: โลโก้ 3 มิติ CM + Campus Marketplace */}
            <Link href="/home" className="flex items-center">
              <Logo3D />
            </Link>

            {/* ขวาบน: ปุ่ม Dark Theme / Status */}
            <div className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-zinc-900 text-orange-400 border border-orange-500/30 flex items-center gap-2 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Dark Theme</span>
            </div>

          </div>
        </header>

        {/* Content หลัก */}
        <main className="w-full min-h-[calc(100vh-65px)] bg-zinc-950">
          {children}
        </main>
      </body>
    </html>
  );
}