"use client";

export default function Logo3D() {
  return (
    <div className="flex items-center gap-3 group select-none cursor-pointer">
      {/* 1. ไอคอนกล่องโลโก้ CM แบบ 3 มิติ (มีมิติความหนา เงาตกกระทบ และขอบนูน) */}
      <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105 active:scale-95">
        {/* ชั้นเงาตกกระทบด้านหลัง (3D Shadow Layer) */}
        <div className="absolute inset-0 bg-orange-700/60 rounded-2xl translate-y-1.5 blur-[1px] transition-all group-hover:translate-y-2 group-hover:blur-sm" />
        
        {/* ชั้นฐานความหนาด้านข้าง 3D (3D Extrude Base Layer) */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600 to-amber-700 rounded-2xl translate-y-1 border-b-2 border-orange-950 shadow-lg" />
        
        {/* ชั้นหน้าสัมผัสหลัก 3D (Front Face with Metallic & Glow Effect) */}
        <div className="relative w-full h-full bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-300 rounded-2xl border-t border-l border-amber-200/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center">
          {/* ตัวอักษร CM แบบนูนต่ำ 3 มิติ (Inner 3D Text Effect) */}
          <span 
            className="font-black text-sm tracking-tighter text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
            style={{
              textShadow: "0px 2px 3px rgba(0, 0, 0, 0.4), 0px -1px 0px rgba(255, 255, 255, 0.5)"
            }}
          >
            CM
          </span>
        </div>

        {/* จุดไฮไลต์แสงสะท้อนมุม 3D (Light Reflection Highlight) */}
        <div className="absolute top-1 left-1.5 w-2.5 h-1 bg-white/40 rounded-full blur-[0.5px]" />
      </div>

      {/* 2. ข้อความชื่อเว็บ 3 มิติ "Campus Marketplace" */}
      <div className="flex flex-col justify-center">
        <h1 
          className="font-black text-base tracking-tight bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent group-hover:brightness-125 transition-all"
          style={{
            // เทคนิคการสร้างเงา 3D ให้ข้อความ (3D Text Shadow)
            filter: "drop-shadow(0px 2px 4px rgba(249, 115, 22, 0.3))"
          }}
        >
          Campus Marketplace
        </h1>
        <span className="text-[9px] font-bold text-orange-400/80 tracking-widest uppercase -mt-1 drop-shadow">
          3D Interactive Market
        </span>
      </div>
    </div>
  );
}