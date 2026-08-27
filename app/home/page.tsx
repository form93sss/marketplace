"use client";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
}

const mockProducts: Product[] = [
  { id: 1, name: "หนังสือเรียน Next.js 14", price: 250, seller: "นายสมชาย (ปวส.2)", category: "หนังสือ" },
  { id: 2, name: "เสื้อช็อปแผนกช่างกล (ไซส์ L)", price: 180, seller: "นางสาวสมหญิง (ปวช.3)", category: "เสื้อผ้า" },
  { id: 3, name: "เครื่องคิดเลขวิทยาศาสตร์", price: 400, seller: "อนันต์ (ปวส.1)", category: "อุปกรณ์การเรียน" },
  { id: 4, name: "เมาส์ไร้สาย Logitech", price: 150, seller: "กิตติ (ปวช.2)", category: "ไอที" },
  { id: 5, name: "กระดานวาดรูป A3", price: 120, seller: "เมษา (ปวส.2)", category: "อุปกรณ์การเรียน" },
];

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="pb-24 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Marketplace Trend
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">สินค้ารายการแนะนำในวิทยาลัย</p>
        </div>
        <Link
          href="/product"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-2 rounded-xl font-medium shadow-md transition"
        >
          + ลงประกาศ
        </Link>
      </div>

      {/* 3D Cards Grid (3D & Immersive Elements) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 perspective-1000">
        {mockProducts.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm transition-all duration-300 transform cursor-pointer ${
              hoveredId === item.id
                ? "scale-105 -rotate-1 shadow-xl border-indigo-500/50 dark:border-indigo-400/50"
                : "hover:shadow-md"
            }`}
          >
            {/* Immersive Preview Placeholder */}
            <div className="w-full h-28 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-xl flex items-center justify-center font-bold text-xs text-indigo-500 dark:text-indigo-400 relative overflow-hidden">
              <span className="backdrop-blur-sm bg-white/30 dark:bg-slate-900/40 px-3 py-1 rounded-full border border-white/20">
                📦 {item.category}
              </span>
            </div>

            <div className="mt-3">
              <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">ผู้ขาย: {item.seller}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-base">
                  ฿{item.price}
                </span>
                <button className="text-xs bg-slate-100 dark:bg-slate-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 px-2.5 py-1 rounded-lg transition">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experimental Navigation (Floating Bottom Bar) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-2xl rounded-full p-2 flex justify-around items-center z-50">
        <Link href="/home" className="flex flex-col items-center text-indigo-600 dark:text-indigo-400 font-medium text-xs">
          <span className="text-base">🏠</span>
          <span>หน้าหลัก</span>
        </Link>
        <Link href="/product" className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 text-xs transition">
          <span className="text-base">➕</span>
          <span>ขายสินค้า</span>
        </Link>
        <Link href="#" className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-indigo-600 text-xs transition">
          <span className="text-base">🔔</span>
          <span>แจ้งเตือน</span>
        </Link>
      </div>
    </div>
  );
}