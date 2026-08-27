"use client";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
  badgeColor: string;
}

const mockProducts: Product[] = [
  { id: 1, name: "หนังสือเรียน Next.js 14", price: 250, seller: "นายสมชาย (ปวส.2)", category: "หนังสือ", badgeColor: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20" },
  { id: 2, name: "เสื้อช็อปแผนกช่างกล (ไซส์ L)", price: 180, seller: "นางสาวสมหญิง (ปวช.3)", category: "เสื้อผ้า", badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20" },
  { id: 3, name: "เครื่องคิดเลขวิทยาศาสตร์", price: 400, seller: "อนันต์ (ปวส.1)", category: "อุปกรณ์การเรียน", badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20" },
  { id: 4, name: "เมาส์ไร้สาย Logitech", price: 150, seller: "กิตติ (ปวช.2)", category: "ไอที", badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
  { id: 5, name: "กระดานวาดรูป A3", price: 120, seller: "เมษา (ปวส.2)", category: "ศิลปะ", badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
];

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="pb-28 space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-500 p-6 text-white shadow-xl shadow-indigo-500/20">
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wide uppercase mb-2">
            ✨ Campus Marketplace
          </span>
          <h2 className="text-2xl font-black tracking-tight">ตลาดนัดเด็กอาชีวะ</h2>
          <p className="text-xs text-white/80 mt-1">แหล่งรวมสินค้า อุปกรณ์การเรียน และของใช้ในวิทยาลัย</p>
        </div>
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Top Action & Title */}
      <div className="flex justify-between items-center px-1">
        <div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            สินค้ายอดนิยม
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">รายการมาใหม่ล่าสุดวันนี้</p>
        </div>
        <Link
          href="/product"
          className="relative group overflow-hidden rounded-xl p-[2px] font-medium text-xs focus:outline-none"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl group-hover:opacity-80 transition" />
          <span className="relative block px-3.5 py-2 bg-slate-900 text-white rounded-[10px] font-bold">
            + ลงประกาศขาย
          </span>
        </Link>
      </div>

      {/* 3D Modern Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockProducts.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group relative bg-white dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-4 shadow-sm transition-all duration-300 transform cursor-pointer ${
              hoveredId === item.id
                ? "-translate-y-2 scale-[1.02] shadow-2xl shadow-indigo-500/15 border-indigo-500/40 dark:border-indigo-400/40"
                : "hover:shadow-md"
            }`}
          >
            {/* Colorful Image Preview Container */}
            <div className="w-full h-32 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-[0.98] transition">
              <span className={`px-3 py-1 rounded-full border text-xs font-semibold backdrop-blur-md ${item.badgeColor}`}>
                📦 {item.category}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Product Details */}
            <div className="mt-3.5 space-y-1.5">
              <h4 className="font-bold text-sm line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                {item.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span>👤</span> {item.seller}
              </p>
              
              <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <div>
                  <span className="text-[10px] text-slate-400 block">ราคาเริ่มต้น</span>
                  <span className="text-base font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                    ฿{item.price}
                  </span>
                </div>
                <button className="text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-3 py-1.5 rounded-xl shadow-md shadow-indigo-500/20 active:scale-95 transition">
                  ดูสินค้า
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experimental Colorful Floating Navigation Bar */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-slate-900/90 dark:bg-slate-800/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-500/20 rounded-full p-2.5 flex justify-around items-center z-50">
        <Link 
          href="/home" 
          className="flex flex-col items-center gap-0.5 text-xs font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent px-3 py-1 rounded-full bg-white/10"
        >
          <span className="text-lg">🏠</span>
          <span>หน้าหลัก</span>
        </Link>
        <Link 
          href="/product" 
          className="flex flex-col items-center gap-0.5 text-xs font-medium text-slate-400 hover:text-white transition"
        >
          <span className="text-lg">➕</span>
          <span>ลงขาย</span>
        </Link>
        <Link 
          href="#" 
          className="flex flex-col items-center gap-0.5 text-xs font-medium text-slate-400 hover:text-white transition"
        >
          <span className="text-lg">🔔</span>
          <span>แจ้งเตือน</span>
        </Link>
      </div>
    </div>
  );
}