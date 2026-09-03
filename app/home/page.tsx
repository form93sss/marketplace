"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  image: string;
  sellerInfo: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [searchTerm, setSearchTerm] = useState("");

  // โหลดรายการสินค้า
  useEffect(() => {
    const savedProducts = localStorage.getItem("km_products");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (e) {
        console.error("Error loading products", e);
      }
    }
  }, []);

  // ฟังก์ชันลบสินค้า
  const handleDeleteProduct = (id: string) => {
    if (confirm("คุณต้องการลบรายการสินค้านี้ใช่หรือไม่?")) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      localStorage.setItem("km_products", JSON.stringify(updated));
    }
  };

  const categories = [
    "ทั้งหมด",
    "ระบบไอเสีย",
    "ระบบกันสะเทือน",
    "ระบบเบรก",
    "ล้อ & ยาง",
    "ระบบขับเคลื่อน",
  ];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "ทั้งหมด" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sellerInfo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 p-4 sm:p-8 relative overflow-hidden select-none pb-28">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header Navigation */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-800 to-black p-[2px] shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center border border-red-500/30">
              <span className="font-black text-base text-white tracking-tighter">KM</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wider text-white italic leading-tight">
              KHONGMAN <span className="text-red-500">TONGMI</span>
            </h1>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Project Custom Parts
            </p>
          </div>
        </div>

        <Link
          href="/product"
          className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] active:scale-95 flex items-center gap-2"
        >
          + ลงขายสินค้า
        </Link>
      </header>

      {/* Controls Section */}
      <section className="max-w-7xl mx-auto w-full mb-8 relative z-10 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="ค้นหาชื่อสินค้า, ผู้ขาย..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs px-4 py-3 rounded-xl bg-[#0a0a0a] border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                    : "bg-[#0a0a0a] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto w-full relative z-10">
        {filteredProducts.length === 0 ? (
          <div className="w-full bg-[#0a0a0a] border border-zinc-800/80 rounded-3xl p-12 text-center my-8">
            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
              📦
            </div>
            <h2 className="text-lg font-bold text-white mb-1">ไม่มีสินค้าในระบบ</h2>
            <p className="text-xs text-zinc-500 mb-6">
              คลิกปุ่มด้านล่างเพื่อเพิ่มสินค้าและรูปภาพของคุณได้เลย
            </p>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              + เพิ่มสินค้าชิ้นแรก
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden border-b border-zinc-800/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-red-500/30 text-red-400 text-[10px] font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 line-clamp-1">
                      👤 {item.sellerInfo}
                    </p>
                    <div className="text-base font-black text-red-500 pt-1">
                      ฿{Number(item.price).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => handleDeleteProduct(item.id)}
                    className="w-full py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-600/50 hover:bg-red-950/30 text-zinc-400 hover:text-red-400 text-xs font-bold transition-all"
                  >
                    🗑️ ลบสินค้า
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-6 px-6 py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border border-red-900/40 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.25)]">
          <Link href="/home" className="flex flex-col items-center gap-1 text-white">
            <span className="text-base">🏠</span>
            <span className="text-[10px] font-bold">หน้าหลัก</span>
          </Link>
          <Link
            href="/product"
            className="flex flex-col items-center justify-center w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] font-bold text-lg active:scale-95"
          >
            +
          </Link>
          <button type="button" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors">
            <span className="text-base">🔔</span>
            <span className="text-[10px] font-bold">แจ้งเตือน</span>
          </button>
        </div>
      </div>
    </div>
  );
}