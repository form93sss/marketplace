"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      alert("เข้าสู่ระบบเรียบร้อยแล้ว");
    } else {
      if (password !== confirmPassword) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
      }
      alert("สมัครสมาชิกเรียบร้อยแล้ว");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Red Glow Background Effect */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />

      {/* Main Card Modal */}
      <div className="w-full max-w-md bg-[#0a0a0a]/90 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(220,38,38,0.2)] relative z-10">
        
        {/* KM Logo Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 via-red-800 to-black p-[2px] shadow-[0_0_20px_rgba(220,38,38,0.6)] mb-3">
            <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center border border-red-500/30">
              <span className="font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-500 tracking-tighter">
                KM
              </span>
            </div>
          </div>

          <h1 className="text-2xl font-black italic tracking-wider text-white uppercase drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
            {isLogin ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </h1>
          <p className="text-[11px] font-bold text-red-500 tracking-widest uppercase mt-1">
            KHONGMAN TONGMI MARKETPLACE
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 p-1.5 bg-zinc-950 border border-zinc-800/80 rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`py-2.5 rounded-xl text-xs font-black transition-all ${
              isLogin
                ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            เข้าสู่ระบบ
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`py-2.5 rounded-xl text-xs font-black transition-all ${
              !isLogin
                ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            สมัครสมาชิก
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1.5">
              อีเมล
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full text-xs px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1.5">
              รหัสผ่าน
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full text-xs px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors"
              />
            </div>
          )}

          {isLogin && (
            <div className="flex justify-end pt-1">
              <a href="#" className="text-[11px] text-red-500 hover:text-red-400 font-bold transition-colors">
                ลืมรหัสผ่าน?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 mt-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm tracking-wide rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95"
          >
            {isLogin ? "เข้าสู่ระบบ" : "ยืนยันการสมัครสมาชิก"}
          </button>
        </form>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link
            href="/home"
            className="text-xs text-zinc-400 hover:text-white transition-colors font-medium inline-flex items-center gap-1"
          >
            ← กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}