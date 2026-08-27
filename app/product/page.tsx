"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddProductPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [seller, setSeller] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`🎉 บันทึกสินค้า "${name}" เรียบร้อยแล้ว!`);
    router.push("/home");
  };

  return (
    <div className="pb-24 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/home" className="p-2 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-xs font-bold">
          ← กลับ
        </Link>
        <h2 className="text-lg font-black bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
          ลงประกาศขายสินค้าใหม่
        </h2>
      </div>

      <div className="bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 p-6 rounded-3xl shadow-xl shadow-indigo-500/5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">
              ชื่อสินค้า
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="เช่น หนังสือเรียน Next.js, เสื้อช็อป"
              className="w-full p-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">
              ราคาขาย (บาท)
            </label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="เช่น 250"
              className="w-full p-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-1.5 text-slate-700 dark:text-slate-300">
              ชื่อผู้ขาย / แผนกวิชา / ชั้นปี
            </label>
            <input
              type="text"
              required
              value={seller}
              onChange={(e) => setSeller(e.target.value)}
              placeholder="เช่น นายสมชาย (ปวส.2 ช่างไฟฟ้า)"
              className="w-full p-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="w-1/2 py-3 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 shadow-lg shadow-indigo-500/25 active:scale-95 transition"
            >
              🚀 ยืนยันลงประกาศ
            </button>
          </div>
        </form>
      </div>

      {/* Experimental Floating Dock Navigation */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-sm glass-effect dark:bg-slate-900/90 border border-white/20 dark:border-slate-700 shadow-2xl rounded-full p-2.5 flex justify-around items-center z-50">
        <Link href="/home" className="flex flex-col items-center gap-0.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition">
          <span className="text-lg">🏠</span>
          <span>หน้าหลัก</span>
        </Link>
        <Link href="/product" className="flex flex-col items-center gap-0.5 text-xs font-bold text-indigo-500 px-3 py-1 rounded-full bg-indigo-500/10">
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