"use client";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

const Logo3D = dynamic(() => import("@/components/Logo3D"), { ssr: false });

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
        {/* Header พร้อมโลโก้ 3D ฝั่งซ้ายบน */}
        <header className="sticky top-0 z-50 bg-zinc-950/85 backdrop-blur-md border-b border-orange-500/20 px-4 py-2">
          <div className="w-full flex justify-between items-center">
            
            {/* ฝั่งซ้ายบน: โลโก้ 3D (ไอคอน CM หมุนได้ + Campus Marketplace) */}
            <Link href="/home" className="flex items-center">
              <Logo3D />
            </Link>

            {/* ฝั่งขวาบน: ปุ่ม Dark Theme / Badge */}
            <div className="px-3 py-1.5 text-xs font-bold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Dark Theme</span>
            </div>

          </div>
        </header>

        {/* Content */}
        <main className="w-full min-h-[calc(100vh-65px)] bg-zinc-950">
          {children}
        </main>
      </body>
    </html>
  );
}