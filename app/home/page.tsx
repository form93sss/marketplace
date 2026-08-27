"use client";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
  badgeStyle: string;
}

const mockProducts: Product[] = [
  { id: 1, name: "หนังสือเรียน Next.js 14", price: 250, seller: "นายสมชาย (ปวส.2)", category: "หนังสือ", badgeStyle: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
  { id: 2, name: "เสื้อช็อปแผนกช่างกล (ไซส์ L)", price: 180, seller: "นางสาวสมหญิง (ปวช.3)", category: "เสื้อผ้า", badgeStyle: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { id: 3, name: "เครื่องคิดเลขวิทยาศาสตร์", price: 400, seller: "อนันต์ (ปวส.1)", category: "อุปกรณ์การเรียน", badgeStyle: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
  { id: 4, name: "เมาส์ไร้สาย Logitech", price: 150, seller: "กิตติ (ปวช.2)", category: "ไอที", badgeStyle: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
  { id: 5, name: "กระดานวาดรูป A3", price: 120, seller: "เมษา (ปวส.2)", category: "ศิลปะ", badgeStyle: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
];

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="pb-24 space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-500 p-6 text-white shadow-xl shadow-indigo-500/20">
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase mb-2">
            ✨ Hot Deals Today
          </span>
          <h2 className="text-2xl font-black tracking-tight">ตลาดนัดวิทยาลัย</h2>
          <p className="text-xs text-white/80 mt-1">ซื้อ-ขาย แลกเปลี่ยนของใช้และอุปกรณ์การเรียน</p>
        </div>
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center px-1">
        <div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            รายการสินค้าแนะนำ
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">อัปเดตล่าสุด 5 รายการ</p>
        </div>
        <Link
          href="/product"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md shadow-indigo-500/25 active:scale-95 transition"
        >
          + ลงขายสินค้า
        </Link>
      </div>

      {/* 3D Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockProducts.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-4 shadow-sm transition-all duration-300 transform cursor-pointer ${
              hoveredId === item.id
                ? "-translate-y-2 scale-[1.02] shadow-xl shadow-indigo-500/15 border-indigo-500/40"
                : "hover:shadow-md"
            }`}
          >
            <div className="w-full h-32 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-xl flex items-center justify-center relative overflow-hidden">
              <span className={`px-3 py-1 rounded-full border text-xs font-semibold backdrop-blur-md ${item.badgeStyle}`}>
                📦 {item.category}
              </span>
            </div>

            <div className="mt-3.5 space-y-1.5">
              <h4 className="font-bold text-sm line-clamp-1 group-hover:text-indigo-500 transition">
                {item.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span>👤</span> {item.seller}
              </p>
              
              <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <span className="text-base font-black bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  ฿{item.price}
                </span>
                <button className="text-xs font-bold text-white bg-slate-900 dark:bg-slate-700 hover:bg-indigo-600 px-3 py-1.5 rounded-xl shadow-sm transition">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experimental Floating Dock Navigation */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-sm glass-effect dark:bg-slate-900/90 border border-white/20 dark:border-slate-700 shadow-2xl rounded-full p-2.5 flex justify-around items-center z-50">
        <Link href="/home" className="flex flex-col items-center gap-0.5 text-xs font-bold text-indigo-500 px-3 py-1 rounded-full bg-indigo-500/10">
          <span className="text-lg">🏠</span>
          <span>หน้าหลัก</span>
        </Link>
        <Link href="/product" className="flex flex-col items-center gap-0.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition">
          <span className="text-lg">➕</span>
          <span>ลงขาย</span>
        </Link>
        <Link href="#" className="flex flex-col items-center gap-0.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition">
          <span className="text-lg">🔔</span>
          <span>แจ้งเตือน</span>
        </Link>
      </div>
    </div>
  );
}