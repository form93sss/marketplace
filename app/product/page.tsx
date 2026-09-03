"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductSellPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("ระบบไอเสีย");
  const [sellerInfo, setSellerInfo] = useState("");
  const [image, setImage] = useState<string>("");

  // ฟังก์ชันแปลงไฟล์รูปภาพเป็น Base64 String
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      title,
      price,
      category,
      sellerInfo,
      image: image || "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    };

    // ดึงข้อมูลสินค้าเดิมและบันทึกชิ้นใหม่เพิ่ม
    const existing = JSON.parse(localStorage.getItem("km_products") || "[]");
    const updated = [newProduct, ...existing];
    localStorage.setItem("km_products", JSON.stringify(updated));

    alert("ลงประกาศขายสินค้าเรียบร้อยแล้ว!");
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden select-none">
      {/* Background Red Glow Layer */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Navbar */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-red-800 to-black p-[2px] shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center border border-red-500/30">
              <span className="font-black text-sm text-white">KM</span>
            </div>
          </div>
          <div>
            <span className="text-lg font-black tracking-wider text-white italic">
              KHONGMAN <span className="text-red-500">TONGMI</span>
            </span>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest -mt-1">
              Project Custom Parts
            </p>
          </div>
        </div>

        <Link
          href="/home"
          className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-red-600/50 text-xs font-bold transition-all"
        >
          ← กลับหน้าหลัก
        </Link>
      </header>

      {/* Main Form Container */}
      <main className="max-w-4xl mx-auto w-full bg-[#0a0a0a] border border-red-900/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(220,38,38,0.15)] relative z-10 my-auto">
        <div className="flex items-center justify-between mb-8 border-b border-zinc-800/80 pb-4">
          <h1 className="text-xl sm:text-2xl font-black italic tracking-wider text-white uppercase flex items-center gap-2">
            <span className="w-2.5 h-6 bg-red-600 rounded-full inline-block" />
            ลงประกาศขายสินค้าใหม่
          </h1>
          <span className="px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 text-[11px] font-bold tracking-wider uppercase">
            Marketplace
          </span>
        </div>

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
              placeholder="ระบุชื่อสินค้า หรืออะไหล่ที่ต้องการลงขาย..."
              className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl bg-[#050505] border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl bg-[#050505] border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all"
              />
            </div>

            {/* หมวดหมู่สินค้า */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                หมวดหมู่สินค้า
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl bg-[#050505] border border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all"
              >
                <option value="ระบบไอเสีย">ระบบไอเสีย</option>
                <option value="ระบบกันสะเทือน">ระบบกันสะเทือน</option>
                <option value="ระบบเบรก">ระบบเบรก</option>
                <option value="ล้อ & ยาง">ล้อ & ยาง</option>
                <option value="ระบบขับเคลื่อน">ระบบขับเคลื่อน</option>
              </select>
            </div>
          </div>

          {/* อัปโหลดรูปภาพสินค้า */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              รูปภาพสินค้า
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-xs text-zinc-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-zinc-900 file:text-white hover:file:bg-red-600 transition-all bg-[#050505] border border-zinc-800 rounded-xl p-2"
            />
            {image && (
              <div className="mt-4 relative aspect-video w-full max-w-xs rounded-xl overflow-hidden border border-zinc-800">
                <img src={image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* รายละเอียดผู้ขาย */}
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
              className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl bg-[#050505] border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 border-t border-zinc-800/80">
            <Link
              href="/home"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs font-bold text-center transition-all"
            >
              ยกเลิก
            </Link>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95 flex items-center justify-center gap-2"
            >
              🚀 ยืนยันลงประกาศ
            </button>
          </div>
        </form>
      </main>

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-6 px-6 py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border border-red-900/40 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.25)]">
          <Link href="/home" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors">
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