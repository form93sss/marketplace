"use client";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
  image: string;
  badgeStyle: string;
}

const mockProducts: Product[] = [
  { 
    id: 1, 
    name: "หนังสือเรียน Next.js 14 & React", 
    price: 250, 
    seller: "นายสมชาย (ปวส.2)", 
    category: "หนังสือ", 
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    badgeStyle: "bg-pink-500/20 text-pink-400 border-pink-500/30" 
  },
  { 
    id: 2, 
    name: "เสื้อช็อปแผนกช่างกล (ไซส์ L)", 
    price: 180, 
    seller: "นางสาวสมหญิง (ปวช.3)", 
    category: "เสื้อผ้า", 
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80",
    badgeStyle: "bg-purple-500/20 text-purple-400 border-purple-500/30" 
  },
  { 
    id: 3, 
    name: "เครื่องคิดเลขวิทยาศาสตร์ Casio", 
    price: 400, 
    seller: "อนันต์ (ปวส.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=500&q=80",
    badgeStyle: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" 
  },
  { 
    id: 4, 
    name: "เมาส์ไร้สาย Logitech Wireless", 
    price: 150, 
    seller: "กิตติ (ปวช.2)", 
    category: "ไอที", 
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    badgeStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" 
  },
  { 
    id: 5, 
    name: "กระดานวาดรูป A3 พร้อมกระเป๋า", 
    price: 120, 
    seller: "เมษา (ปวส.2)", 
    category: "ศิลปะ", 
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/30" 
  },
  { 
    id: 6, 
    name: "หูฟังบลูทูธไร้สาย เสียงดี", 
    price: 390, 
    seller: "พีระ (ปวส.1)", 
    category: "ไอที", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badgeStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" 
  },
  { 
    id: 7, 
    name: "กระเป๋าเป้นักศึกษา กันน้ำ", 
    price: 320, 
    seller: "ชนินทร์ (ปวช.3)", 
    category: "แฟชั่น", 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    badgeStyle: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" 
  },
  { 
    id: 8, 
    name: "โคมไฟอ่านหนังสือ LED ชาร์จ USB", 
    price: 190, 
    seller: "นภัส (ปวส.2)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&q=80",
    badgeStyle: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" 
  },
];

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    alert(`🛒 เพิ่ม "${productName}" ลงในตะกร้าเรียบร้อย!`);
  };

  return (
    <div className="pb-28 space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-500 p-6 text-white shadow-xl shadow-indigo-500/20">
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase mb-2">
              ✨ HOT DEALS TODAY
            </span>
            <h2 className="text-2xl font-black tracking-tight">ตลาดนัดวิทยาลัย</h2>
            <p className="text-xs text-white/80 mt-1">ซื้อ-ขาย แลกเปลี่ยนของใช้และอุปกรณ์การเรียน</p>
          </div>
          {/* Cart Icon in Banner */}
          <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex items-center justify-center">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Header Bar */}
      <div className="flex justify-between items-center px-1">
        <div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            รายการสินค้าแนะนำ
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">อัปเดตล่าสุด {mockProducts.length} รายการ</p>
        </div>
        <Link
          href="/product"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md shadow-indigo-500/25 active:scale-95 transition"
        >
          + ลงขายสินค้า
        </Link>
      </div>

      {/* 3D Product Grid with Real Images & Cart Action */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockProducts.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-3.5 shadow-sm transition-all duration-300 transform cursor-pointer ${
              hoveredId === item.id
                ? "-translate-y-2 scale-[1.02] shadow-xl shadow-indigo-500/15 border-indigo-500/40"
                : "hover:shadow-md"
            }`}
          >
            {/* Real Image Preview */}
            <div className="w-full h-44 rounded-xl relative overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-full border text-[10px] font-bold backdrop-blur-md ${item.badgeStyle}`}>
                📦 {item.category}
              </span>
            </div>

            {/* Product Details */}
            <div className="mt-3 space-y-1.5">
              <h4 className="font-bold text-sm line-clamp-1 group-hover:text-indigo-500 transition">
                {item.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span>👤</span> {item.seller}
              </p>
              
              <div className="flex justify-between items-center pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
                <span className="text-base font-black bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  ฿{item.price}
                </span>
                
                {/* Cart & Detail Buttons */}
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => addToCart(item.name)}
                    className="p-1.5 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white text-indigo-600 dark:text-indigo-400 rounded-xl transition shadow-sm active:scale-90"
                    title="ใส่ตะกร้า"
                  >
                    🛒
                  </button>
                  <button className="text-xs font-bold text-white bg-slate-900 dark:bg-slate-700 hover:bg-indigo-600 px-3 py-1.5 rounded-xl shadow-sm transition">
                    รายละเอียด
                  </button>
                </div>
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
        <div className="relative flex flex-col items-center gap-0.5 text-xs font-medium text-slate-500 dark:text-slate-400 cursor-pointer hover:text-indigo-500 transition">
          <span className="text-lg">🛒</span>
          <span>ตะกร้า ({cartCount})</span>
        </div>
      </div>
    </div>
  );
}