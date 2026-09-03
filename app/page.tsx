import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col justify-between selection:bg-red-600 selection:text-white relative overflow-hidden">
      
      {/* Background Glows (แสงสะท้อนฉากหลังโทนแดง-เทา) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header / Navbar */}
      <header className="border-b border-zinc-800/60 glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center font-black text-xl shadow-lg shadow-red-900/40 text-white">
              K
            </div>
            <span className="text-xl font-bold tracking-wider text-white">
              KHONGMAN<span className="text-red-500">TONGMI</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors text-white font-semibold">
              หน้าแรก
            </Link>
            <Link href="/product" className="hover:text-white transition-colors">
              สินค้าทั้งหมด
            </Link>
            <Link href="/auth" className="hover:text-white transition-colors">
              เข้าสู่ระบบ
            </Link>
          </nav>

          <Link
            href="/product"
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 active:scale-95"
          >
            เข้าสู่คลังสินค้า
          </Link>
        </div>
      </header>

      {/* Hero / Download Section */}
      <main className="max-w-5xl mx-auto px-6 py-20 my-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 text-xs font-semibold mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          พร้อมดาวน์โหลดเวอร์ชันล่าสุดแล้ว
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          ดาวน์โหลดแอปพลิเคชัน <br />
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-amber-500 bg-clip-text text-transparent">
            KHONGMAN TONGMI
          </span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          ศูนย์รวมไฟล์ ไอเทม และระบบดิจิทัลคุณภาพสูง ตอบโจทย์ทุกการใช้งานด้วยระบบประมวลผลที่รวดเร็ว ปลอดภัย และใช้งานง่ายที่สุด
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base transition-all duration-200 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 flex items-center justify-center gap-3 active:scale-95 group"
          >
            <svg
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            ดาวน์โหลดสำหรับ Windows (.EXE)
          </a>

          <Link
            href="/product"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-zinc-700/80 hover:border-zinc-500 bg-zinc-900/60 text-zinc-300 hover:text-white font-bold text-base transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2"
          >
            ดูรายการสินค้าทั้งหมด
          </Link>
        </div>

        {/* Feature Cards / Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-red-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-red-950/50 border border-red-500/20 text-red-400 flex items-center justify-center mb-4">
              🚀
            </div>
            <h3 className="font-bold text-white text-lg mb-1">ติดตั้งรวดเร็ว</h3>
            <p className="text-zinc-400 text-sm">ตัวติดตั้งขนาดเล็ก ประมวลผลไว ไม่หนักเครื่อง</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-red-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-red-950/50 border border-red-500/20 text-red-400 flex items-center justify-center mb-4">
              🛡️
            </div>
            <h3 className="font-bold text-white text-lg mb-1">ปลอดภัย 100%</h3>
            <p className="text-zinc-400 text-sm">ผ่านการตรวจสอบไฟล์ ปราศจากไวรัสและสิ่งแปลกปลอม</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-md hover:border-red-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-red-950/50 border border-red-500/20 text-red-400 flex items-center justify-center mb-4">
              🔄
            </div>
            <h3 className="font-bold text-white text-lg mb-1">อัปเดตอัตโนมัติ</h3>
            <p className="text-zinc-400 text-sm">รองรับการอัปเดตเวอร์ชันใหม่ๆ โดยไม่ต้องลงซ้ำ</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 py-6 text-center text-xs text-zinc-500">
        <p>© 2025 KHONGMAN TONGMI. All rights reserved.</p>
      </footer>

    </div>
  );
}