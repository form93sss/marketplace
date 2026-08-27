"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3200);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center text-center bg-black text-white overflow-hidden">
      {/* Background Glowing Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-600/25 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Floating Particle Dots */}
      <div className="absolute w-2 h-2 bg-orange-400 rounded-full top-20 left-10 animate-bounce opacity-40 duration-1000" />
      <div className="absolute w-3 h-3 bg-amber-500 rounded-full bottom-24 left-1/4 animate-ping opacity-30" />
      <div className="absolute w-2 h-2 bg-orange-500 rounded-full top-1/3 right-12 animate-bounce opacity-50 duration-700" />

      {/* 3D Floating Logo */}
      <div 
        onClick={() => router.push("/home")}
        className="relative group cursor-pointer z-10 my-4"
      >
        <div className="absolute -inset-4 rounded-full border border-orange-500/30 animate-ping opacity-75" />
        <div className="absolute -inset-8 rounded-full border border-amber-500/20 animate-pulse" />
        <div className="absolute -inset-2 bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500" />

        <div className="relative w-36 h-36 bg-zinc-950/90 border border-orange-500/40 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.4)] backdrop-blur-xl">
          <span className="text-6xl animate-bounce drop-shadow-[0_10px_15px_rgba(249,115,22,0.6)]">
            ⚡
          </span>
          <span className="mt-1 text-xs font-black tracking-widest text-orange-400 uppercase">
            Marketplace
          </span>
        </div>
      </div>

      {/* Typography */}
      <div className="mt-6 space-y-2 z-10">
        <h1 className="text-4xl font-black tracking-wider uppercase bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(249,115,22,0.5)]">
          Campus Market
        </h1>
        <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
          Powered by Next.js & Vercel
        </p>
      </div>

      {/* Orange Glowing Progress Bar */}
      <div className="mt-10 w-64 space-y-2 z-10">
        <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-orange-500/20 p-0.5 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          <div className="h-full bg-gradient-to-r from-orange-600 via-amber-400 to-orange-500 rounded-full animate-[pulse_1.2s_infinite] w-full shadow-[0_0_10px_#f97316]" />
        </div>
        <div className="flex justify-between items-center text-xs font-mono text-orange-400/80 px-1">
          <span className="animate-pulse">SYSTEM INITIALIZING...</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}