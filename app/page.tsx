"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center overflow-hidden">
      {/* 1. Dynamic Glowing Background Orbs */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-ping opacity-25" />

      {/* 2. Glassmorphism Card with Floating Icon */}
      <div 
        onClick={() => router.push("/home")}
        className="relative group cursor-pointer transform hover:scale-105 transition-all duration-500"
      >
        {/* Neon Light Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 animate-tilt transition duration-1000" />
        
        {/* Main Icon Box */}
        <div className="relative w-32 h-32 bg-slate-900/80 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] flex flex-col items-center justify-center shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-pink-500/20" />
          <span className="text-5xl animate-bounce tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            🛍️
          </span>
          <span className="mt-1 text-[10px] font-black tracking-widest text-indigo-300 uppercase">
            Marketplace
          </span>
        </div>
      </div>

      {/* 3. Gradient Typography */}
      <div className="mt-8 space-y-2 relative z-10">
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
          Campus Market
        </h1>
        <p className="text-xs font-semibold tracking-wide text-slate-400 dark:text-slate-400 uppercase">
          Next-Gen College Shopping Experience
        </p>
      </div>

      {/* 4. Sleek Loading Progress Bar */}
      <div className="mt-10 w-48 space-y-2">
        <div className="w-full h-1.5 bg-slate-200/50 dark:bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
          <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-[shimmer_1.5s_infinite] w-full" />
        </div>
        <p className="text-[10px] font-bold text-slate-400 tracking-wider animate-pulse">
          LOADING SYSTEM...
        </p>
      </div>
    </div>
  );
}