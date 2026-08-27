"use client";
import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onFinished?: () => void;
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const textToType = "CAMPUS MARKETPLACE";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // 1. ตัวนับ % การโหลด (0 - 100%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onFinished) setTimeout(onFinished, 500); // ทำงานต่อเมื่อโหลดครบ
          return 100;
        }
        return prev + 1;
      });
    }, 25); // ปรับความเร็วการโหลดตรงนี้ (ยิ่งน้อยยิ่งเร็ว)

    return () => clearInterval(interval);
  }, [onFinished]);

  useEffect(() => {
    // 2. เอฟเฟกต์ตัวอักษรค่อยๆ โหลดขึ้นมาทีละตัวตาม Progress %
    const charIndex = Math.floor((progress / 100) * textToType.length);
    setDisplayedText(textToType.substring(0, charIndex));
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center select-none overflow-hidden">
      {/* เอฟเฟกต์แสงส้มเรืองแสงตรงกลาง背景 */}
      <div className="absolute w-72 h-72 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* โลโก้ไอคอนชาร์ต Lightning */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.4)] border border-orange-400/40 animate-pulse">
          <span className="text-4xl font-black text-black">⚡</span>
        </div>
      </div>

      {/* ข้อความ Typing Effect (ตัวอักษรค่อยๆ ปรากฏ) */}
      <div className="relative h-12 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 tracking-wider drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]">
          {displayedText}
          <span className="inline-block w-1.5 h-8 ml-1 bg-orange-500 animate-ping" />
        </h1>
      </div>

      <p className="text-xs text-orange-400/80 tracking-widest font-mono mt-2 mb-6 uppercase">
        POWERED BY NEXT.JS & VERCEL
      </p>

      {/* หลอด Progress Bar ด้านล่าง */}
      <div className="w-64 md:w-80 space-y-2">
        <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-orange-500/20 p-[1px]">
          <div
            className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_#f97316]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-orange-400/60">
          <span>SYSTEM INITIALIZING...</span>
          <span className="font-bold text-orange-400">{progress}%</span>
        </div>
      </div>
    </div>
  );
}