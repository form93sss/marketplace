"use client";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

// โหลด Logo3D แบบ Dynamic สไตล์ 3D สำหรับขวาบน
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
        {/* Navbar พร้อม 3D Logo "KhongManTongMi" มุมขวาบน */}
        <header className="sticky top-0 z-50 bg-zinc-950/85 backdrop-blur-md border-b border-orange-500/20 px-6 py-2.5">
          <div className="w-full flex justify-between items-center">
            {/* ซ้ายบน: ชื่อเว็บเดิม */}
            <Link href="/home" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-black font-black text-sm shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                CM
              </span>
              <span className="font-extrabold text-base bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Campus Marketplace
              </span>
            </Link>

            {/* ขวาบน: 3D Interactive Logo "KhongManTongMi" */}
            <div className="flex items-center gap-3">
              <Logo3D />
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