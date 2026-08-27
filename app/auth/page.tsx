"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  // Form States
  const [formData, setFormData] = useState({
    studentId: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("❌ รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง");
      return;
    }

    alert(isLogin ? "เข้าสู่ระบบสำเร็จ!" : "ลงทะเบียนสำเร็จ!");
    router.push("/home");
  };

  return (
    <div className="relative flex items-center justify-center min-h-[calc(100vh-65px)] bg-zinc-950 p-4 overflow-hidden">
      {/* Background Glowing Effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative w-full max-w-md bg-zinc-900/90 border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(249,115,22,0.15)] backdrop-blur-xl z-10">
        
        {/* Brand Logo & Title */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-black font-black text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)]">
            CM
          </div>
          <h2 className="text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
            {isLogin ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </h2>
          <p className="text-xs text-zinc-400">
            {isLogin
              ? "ยินดีต้อนรับกลับสู่ตลาดนัดวิทยาลัย"
              : "สร้างบัญชีใหม่เพื่อเริ่มซื้อ-ขายสินค้า"}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-zinc-950/80 p-1 rounded-2xl border border-zinc-800 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
              isLogin
                ? "bg-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            เข้าสู่ระบบ
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
              !isLogin
                ? "bg-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            สมัครสมาชิก
          </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                ชื่อ-นามสกุล / ชื่อเล่น
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="สมชาย สายลุย"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1.5">
              อีเมลนักศึกษา / อีเมลทั่วไป
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="student@college.ac.th"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1.5">
              รหัสผ่าน
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
              />
            </div>
          )}

          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-[11px] text-orange-400 hover:underline">
                ลืมรหัสผ่าน?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-black text-sm py-3 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-98 transition duration-200"
          >
            {isLogin ? "เข้าสู่ระบบ" : "ยืนยันการสมัครสมาชิก"}
          </button>
        </form>

        {/* Back to Home Link */}
        <div className="mt-6 text-center border-t border-zinc-800/80 pt-4">
          <Link
            href="/home"
            className="text-xs text-zinc-400 hover:text-orange-400 transition flex items-center justify-center gap-1"
          >
            <span>←</span> กลับสู่หน้าหลัก
          </Link>
        </div>

      </div>
    </div>
  );
}