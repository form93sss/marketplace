"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2500); // ย้ายไปหน้า /home หลังผ่านไป 2.5 วินาที
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold animate-bounce shadow-lg">
        CM
      </div>
      <h1 className="mt-6 text-2xl font-bold">แอปซื้อขายสินค้านักเรียน/นักศึกษา</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">กำลังเข้าสู่ระบบ marketplace...</p>
    </div>
  );
}