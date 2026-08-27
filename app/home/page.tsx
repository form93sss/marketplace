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
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 2, 
    name: "เสื้อช็อปแผนกช่างกล (ไซส์ L)", 
    price: 180, 
    seller: "นางสาวสมหญิง (ปวช.3)", 
    category: "เสื้อผ้า", 
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 3, 
    name: "เครื่องคิดเลขวิทยาศาสตร์ Casio", 
    price: 400, 
    seller: "อนันต์ (ปวส.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=500&q=80",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 4, 
    name: "เมาส์ไร้สาย Logitech Wireless", 
    price: 150, 
    seller: "กิตติ (ปวช.2)", 
    category: "ไอที", 
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 5, 
    name: "กระดานวาดรูป A3 พร้อมกระเป๋า", 
    price: 120, 
    seller: "เมษา (ปวส.2)", 
    category: "ศิลปะ", 
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 6, 
    name: "หูฟังบลูทูธไร้สาย เสียงดี", 
    price: 390, 
    seller: "พีระ (ปวส.1)", 
    category: "ไอที", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 7, 
    name: "กระเป๋าเป้นักศึกษา กันน้ำ", 
    price: 320, 
    seller: "ชนินทร์ (ปวช.3)", 
    category: "แฟชั่น", 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 8, 
    name: "โคมไฟอ่านหนังสือ LED ชาร์จ USB", 
    price: 190, 
    seller: "นภัส (ปวส.2)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&q=80",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
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
    <div className="pb-28 space-y-6 bg-zinc-950 text-zinc-100 min-h-screen p-4 sm:p-6">
      {/* 1. Dark & Neon Orange Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-zinc-900 via-orange-950/80 to-orange-600/90 border border-orange-500/30 p-6 text-white shadow-[0_0_30px_rgba(249,115,22,0.15)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-[10px] font-bold tracking-wider text-orange-400 uppercase mb-2">
              ⚡ HOT DEALS TODAY
            </span>
            <h2 className="text-2xl font-black tracking-tight text-white drop-shadow">ตลาดนัดวิทยาลัย</h2>
            <p className="text-xs text-zinc-400 mt-1">ซื้อ-ขาย แลกเปลี่ยนของใช้และอุปกรณ์การเรียน</p>
          </div>
          {/* Cart Icon inside Banner */}
          <div className="relative bg-zinc-900/90 p-3.5 rounded-2xl border border-orange-500/40 flex items-center justify-center shadow-lg">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Section Header */}
      <div className="flex justify-between items-center px-1">
        <div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            รายการสินค้าแนะนำ
          </h3>
          <p className="text-xs text-zinc-400">อัปเดตล่าสุด {mockProducts.length} รายการ</p>
        </div>
        <Link
          href="/product"
          className="bg-orange-500 hover:bg-orange-600 text-black text-xs font-black px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95 transition"
        >
          + ลงขายสินค้า
        </Link>
      </div>

      {/* 3. Product Grid (Dark & Orange Theme) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockProducts.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group bg-zinc-900/90 border rounded-2xl p-3.5 transition-all duration-300 transform cursor-pointer ${
              hoveredId === item.id
                ? "-translate-y-2 scale-[1.02] shadow-[0_0_20px_rgba(249,115,22,0.3)] border-orange-500/80"
                : "border-zinc-800 hover:border-zinc-700"
            }`}
          >
            {/* Image Box */}
            <div className="w-full h-44 rounded-xl relative overflow-hidden bg-zinc-950 border border-zinc-800">
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
              <h4 className="font-bold text-sm text-zinc-100 line-clamp-1 group-hover:text-orange-400 transition">
                {item.name}
              </h4>
              <p className="text-xs text-zinc-400 flex items-center gap-1">
                <span>👤</span> {item.seller}
              </p>
              
              <div className="flex justify-between items-center pt-2.5 border-t border-zinc-800">
                <span className="text-base font-black text-orange-400">
                  ฿{item.price}
                </span>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => addToCart(item.name)}
                    className="p-1.5 bg-orange-500/10 hover:bg-orange-500 hover:text-black text-orange-400 rounded-xl border border-orange-500/30 transition shadow-sm active:scale-90"
                    title="ใส่ตะกร้า"
                  >
                    🛒
                  </button>
                  <button className="text-xs font-bold text-black bg-orange-500 hover:bg-orange-400 px-3 py-1.5 rounded-xl shadow-[0_0_10px_rgba(249,115,22,0.3)] transition">
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Dock Navigation (Dark Orange Theme) */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-zinc-900/90 backdrop-blur-xl border border-orange-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-full p-2.5 flex justify-around items-center z-50">
        <Link href="/home" className="flex flex-col items-center gap-0.5 text-xs font-bold text-orange-400 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
          <span className="text-lg">🏠</span>
          <span>หน้าหลัก</span>
        </Link>
        <Link href="/product" className="flex flex-col items-center gap-0.5 text-xs font-medium text-zinc-400 hover:text-orange-400 transition">
          <span className="text-lg">➕</span>
          <span>ลงขาย</span>
        </Link>
        <div className="relative flex flex-col items-center gap-0.5 text-xs font-medium text-zinc-400 hover:text-orange-400 transition cursor-pointer">
          <span className="text-lg">🛒</span>
          <span>ตะกร้า ({cartCount})</span>
        </div>
      </div>
    </div>
  );
}