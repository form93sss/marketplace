"use client";
import React, { useState } from "react";
import Image from "next/image";

// อินเทอร์เฟซโครงสร้างข้อมูลสินค้า
interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
  image: string;
  modelSrc: string;
  description: string;
  badgeStyle: string;
}

// ข้อมูลสินค้าอุปกรณ์การเรียน 8 รายการพร้อมรูปภาพตรงปก
const mockProducts: Product[] = [
  { 
    id: 1, 
    name: "เครื่องคิดเลขวิทยาศาสตร์ Casio", 
    price: 450, 
    seller: "นางสาวสมหญิง (ปวช.3)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=500&q=80",
    modelSrc: "", // เว้นว่างไว้เพื่อให้แสดงรูปภาพตรงปก
    description: "รุ่น fx-991EX คำนวณเมทริกซ์และสถิติได้ สภาพ 95% พร้อมฝาครอบ",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 2, 
    name: "ชุดวงเวียนเขียนแบบสถาปัตย์", 
    price: 280, 
    seller: "นายธีระ (ปวส.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1585336261026-8f5786372969?w=500&q=80",
    modelSrc: "",
    description: "ชุดกล่องเหล็กอุปกรณ์ครบ สภาพใหม่ เข็มตรง หัวจับปากกาหมึกเขียนแบบได้",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 3, 
    name: "โคมไฟอ่านหนังสือตั้งโต๊ะ LED", 
    price: 190, 
    seller: "กิตติพงษ์ (ปวช.2)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=500&q=80",
    modelSrc: "",
    description: "ชาร์จ USB ได้ ปรับความสว่างได้ 3 ระดับ ถนอมสายตา พับเก็บสะดวก",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 4, 
    name: "ไม้บรรทัดเหล็กยาว 30 ซม. (แพ็ก 3 ชิ้น)", 
    price: 60, 
    seller: "ศิริพร (ปวช.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1588665555327-a67c73b3cc23?w=500&q=80",
    modelSrc: "",
    description: "สเกลชัดเจน ตัวเลขไม่ลอก สแตนเลสหนา ไม่หักง่าย",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 5, 
    name: "ปากกาไฮไลต์สีพาสเทล 6 สี", 
    price: 85, 
    seller: "นลินี (ปวส.2)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80",
    modelSrc: "",
    description: "แห้งไว ไม่ซึมทะลุกระดาษ สีสวยอ่านสบายตา หมึกเต็มทุกแท่ง",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 6, 
    name: "สมุดโน้ตปกหนังริมห่วง A5", 
    price: 120, 
    seller: "อนุพงษ์ (ปวส.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    modelSrc: "",
    description: "กระดาษถนอมสายตา 80 แกรม หนา 100 แผ่น พร้อมสายรัดกันเปิด",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 7, 
    name: "กระเป๋าใส่ดินสอความจุสูง", 
    price: 110, 
    seller: "เมธาพร (ปวช.3)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1568805610918-f36c347f3b61?w=500&q=80",
    modelSrc: "",
    description: "ผ้าแคนวาสทนทาน ใส่ปากกาได้มากกว่า 40 แท่ง มีช่องแยกหลายชั้น",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 8, 
    name: "แท่นตัดกระดาษขนาด A4", 
    price: 320, 
    seller: "วรวุฒิ (ปวส.2)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80",
    modelSrc: "",
    description: "ฐานเหล็กสเกลเป๊ะ ใบมีดคม ตัดได้พร้อมกันสูงสุด 10 แผ่น มีตัวล็อคปลอดภัย",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
];

const categories = ["ทั้งหมด", "อุปกรณ์การเรียน", "หนังสือ", "ไอที", "เสื้อผ้า", "ศิลปะ", "แฟชั่น"];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // การกรองสินค้าตามหมวดหมู่
  const filteredProducts = mockProducts.filter((product) => {
    if (selectedCategory === "ทั้งหมด") return true;
    return product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8 pb-24">
      {/* Banner หัวข้อตลาดนัดวิทยาลัย */}
      <div className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-2xl p-6 md:p-8 mb-8 shadow-[0_10px_30px_rgba(249,115,22,0.2)] relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs text-orange-200 border border-orange-400/30 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            3D INTERACTIVE MARKET
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2">
            ตลาดนัดวิทยาลัย
          </h1>
          <p className="text-orange-100 text-sm md:text-base font-medium">
            ซื้อ-ขาย สินค้านักศึกษา หมุนดูแบบ 3D ได้สมจริง
          </p>
        </div>
      </div>

      {/* หมวดหมู่สินค้า (Category Buttons) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
              selectedCategory === cat
                ? "bg-orange-500 text-black border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* หัวข้อส่วนรายการสินค้า */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-orange-400 flex items-center gap-2">
            รายการสินค้าแบบ 3D
          </h2>
          <p className="text-xs text-zinc-400">
            พบ {filteredProducts.length} รายการ
          </p>
        </div>
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs md:text-sm rounded-xl transition-all shadow-md">
          + ลงขายสินค้า
        </button>
      </div>

      {/* การแสดง Grid รายการสินค้า 8 รายการ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900/80 border border-zinc-800/80 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] flex flex-col group"
          >
            {/* ส่วนแสดงภาพ / โมเดลสินค้า */}
            <div className="relative w-full h-56 bg-zinc-950 flex items-center justify-center overflow-hidden">
              {/* Badge หมวดหมู่ */}
              <span className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${product.badgeStyle}`}>
                {product.category}
              </span>

              {/* เช็คว่ามีโมเดล 3D หรือไม่ ถ้าไม่มีให้โชว์รูปภาพสินค้าตรงปกแทน */}
              {product.modelSrc ? (
                // @ts-ignore
                <model-viewer
                  src={product.modelSrc}
                  alt={product.name}
                  auto-rotate
                  camera-controls
                  touch-action="pan-y"
                  shadow-intensity="1"
                  style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
                >
                  {/* @ts-ignore */}
                </model-viewer>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                </div>
              )}
            </div>

            {/* ข้อมูลสินค้า */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-bold text-base text-zinc-100 line-clamp-1 group-hover:text-orange-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                  <span>👤</span> {product.seller}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-800/60">
                <span className="text-lg font-black text-orange-400">
                  ฿{product.price}
                </span>
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="px-3 py-1.5 bg-orange-500 hover:bg-orange-400 text-black text-xs font-bold rounded-lg transition-all"
                  >
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal ป๊อปอัพแสดงรายละเอียดสินค้า */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-orange-500/30 rounded-2xl max-w-lg w-full p-6 relative shadow-[0_0_30px_rgba(249,115,22,0.2)]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold"
            >
              ✕
            </button>
            <div className="w-full h-64 bg-zinc-950 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
              {selectedProduct.modelSrc ? (
                // @ts-ignore
                <model-viewer
                  src={selectedProduct.modelSrc}
                  alt={selectedProduct.name}
                  auto-rotate
                  camera-controls
                  style={{ width: "100%", height: "100%" }}
                >
                  {/* @ts-ignore */}
                </model-viewer>
              ) : (
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover rounded-xl"
                />
              )}
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${selectedProduct.badgeStyle}`}>
              {selectedProduct.category}
            </span>
            <h2 className="text-xl font-bold text-zinc-100 mt-2">{selectedProduct.name}</h2>
            <p className="text-xs text-zinc-400 mt-1">ผู้ขาย: {selectedProduct.seller}</p>
            <p className="text-sm text-zinc-300 mt-3 bg-zinc-950/50 p-3 rounded-lg border border-zinc-800">
              {selectedProduct.description}
            </p>
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-black text-orange-400">฿{selectedProduct.price}</span>
              <button className="px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm rounded-xl transition-all shadow-lg">
                หยิบใส่ตะกร้า
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}