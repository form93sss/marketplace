"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SellPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [sellerInfo, setSellerInfo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ลงประกาศขายสินค้าเรียบร้อยแล้ว!");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden select-none">
      {/* Background Red Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      {/* Top Header */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between mb-6 relative z-10">
        <Link
          href="/home"
          className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-red-600/50 text-xs font-bold transition-all flex items-center gap-2"
        >
          ← กลับ
        </Link>
        <h1 className="text-xl sm:text-2xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-500 uppercase drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
          ลงประกาศขายสินค้าใหม่
        </h1>
        <div className="w-16" /> {/* Spacer */}
      </header>

      {/* Main Form Card */}
      <main className="max-w-4xl mx-auto w-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(220,38,38,0.15)] relative z-10 my-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ชื่อสินค้า */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              ชื่อสินค้า
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="ระบุชื่อสินค้า หรือไอเทมที่ต้องการลงขาย..."
              className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            />
          </div>

          {/* ราคาขาย */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              ราคาขาย (บาท)
            </label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            />
          </div>

          {/* ชื่อผู้ขาย / รายละเอียดติดต่อ */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              ชื่อผู้ขาย / แผนกวิชา / ชั้นปี / ช่องทางติดต่อ
            </label>
            <input
              type="text"
              required
              value={sellerInfo}
              onChange={(e) => setSellerInfo(e.target.value)}
              placeholder="เช่น นายกิตติ แผนกคอมพิวเตอร์ ปวส.2 / โทร 08x-xxx-xxxx"
              className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-zinc-800/80">
            <Link
              href="/home"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-bold text-center transition-all"
            >
              ยกเลิก
            </Link>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95 flex items-center justify-center gap-2"
            >
              🚀 ยืนยันลงประกาศ
            </button>
          </div>
        </form>
      </main>

      {/* Floating Bottom Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-6 px-6 py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border border-red-600/30 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.25)]">
          <Link
            href="/home"
            className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="text-base">🏠</span>
            <span className="text-[10px] font-bold">หน้าหลัก</span>
          </Link>

          <Link
            href="/sell"
            className="flex flex-col items-center justify-center w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] font-bold text-lg active:scale-95"
          >
            +
          </Link>

          <Link
            href="/notifications"
            className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="text-base">🔔</span>
            <span className="text-[10px] font-bold">แจ้งเตือน</span>
          </Link>
        </div>
      </div>
    </div>
  );
}