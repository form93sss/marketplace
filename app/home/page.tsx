"use client";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  category: string;
  image: string;
  description: string;
  badgeStyle: string;
}

interface CartItem extends Product {
  quantity: number;
}

const mockProducts: Product[] = [
  // --- หมวดอุปกรณ์การเรียน (เพิ่มใหม่) ---
  { 
    id: 101, 
    name: "ชุดปากกาเจล M&G 0.5mm (เซ็ต 12 ด้าม)", 
    price: 89, 
    seller: "ศิริพร (ปวช.2)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1585336261026-875a66a6ceb2?w=500&q=80",
    description: "หมึกน้ำเงิน 10 ด้าม + หมึกแดง 2 ด้าม หมึกเข้ม เขียนลื่น ไม่ขาดตอน แถมรีฟิลหมึก 2 แท่ง",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 102, 
    name: "สมุดโน้ตปกหนัง A5 สไตล์วินเทจ", 
    price: 125, 
    seller: "กิตติพงษ์ (ปวส.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80",
    description: "กระดาษถนอมสายตา 100 แกรม ซึมยาก มีสายรัดและที่เสียบปากกา สภาพมือหนึ่งยังไม่เคยใช้",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 103, 
    name: "ดินสอกด ROTRING 600 (0.5mm) สีดำ", 
    price: 450, 
    seller: "ภานุพงศ์ (ปวส.2)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=500&q=80",
    description: "ตัวด้ามทำจากโลหะทั้งแท่ง น้ำหนักดี สภาพ 98% สำหรับสายเขียนแบบและวาดภาพประกอบ",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 104, 
    name: "เซ็ตปากกาไฮไลท์สีพาสเทล Zebra Mildliner", 
    price: 160, 
    seller: "มณฑิรา (ปวช.3)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80",
    description: "สีพาสเทลสบายตา 5 สี 2 หัวในด้ามเดียว (หัวตัด + หัวเขียน) หมึกยังแน่นทุกด้าม",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 105, 
    name: "ชุดเครื่องมือวัดเรขาคณิต & ไม้บรรทัดเหล็ก", 
    price: 75, 
    seller: "ชัชวาล (ปวช.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&q=80",
    description: "ประกอบด้วย ไม้โปรแทรกเตอร์, ไม้ฉาก 2 ชิ้น, ไม้บรรทัดเหล็ก 30 ซม. และวงเวียน ครบชุดพร้อมกล่องเหล็ก",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 106, 
    name: "เทปลบคำผิด PLUS Whiper MR (พร้อมไส้เติม 3 ชิ้น)", 
    price: 65, 
    seller: "นภัสสร (ปวส.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80",
    description: "เนื้อเทปเนียนเรียบ ไม่หลุดลอกง่าย กว้าง 5mm ยาว 6m พร้อมรีฟิลสำรองอีก 3 ชิ้น",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },

  // --- สินค้าเดิม ---
  { 
    id: 1, 
    name: "หนังสือเรียน Next.js 14 & React", 
    price: 250, 
    seller: "นายสมชาย (ปวส.2)", 
    category: "หนังสือ", 
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    description: "หนังสือสภาพ 95% ไม่มีรอยขีดเขียน เหมาะสำหรับผู้เริ่มต้นเขียนเว็บ Next.js 14 App Router",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 2, 
    name: "เสื้อช็อปแผนกช่างกล (ไซส์ L)", 
    price: 180, 
    seller: "นางสาวสมหญิง (ปวช.3)", 
    category: "เสื้อผ้า", 
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80",
    description: "เสื้อช็อปผ้าหนา ทนทาน ใส่เรียนแล็ปไป 2 ครั้ง สภาพใหม่มาก ซักเก็บอย่างดี",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 3, 
    name: "เครื่องคิดเลขวิทยาศาสตร์ Casio", 
    price: 400, 
    seller: "อนันต์ (ปวส.1)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=500&q=80",
    description: "รุ่น fx-991EX คำนวณเมทริกซ์และสถิติได้ ใช้งานได้ปกติทุกปุ่ม พร้อมฝาครอบ",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
  { 
    id: 4, 
    name: "เมาส์ไร้สาย Logitech Wireless", 
    price: 150, 
    seller: "กิตติ (ปวช.2)", 
    category: "ไอที", 
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    description: "เชื่อมต่อผ่าน ตัวรับ USB 2.4GHz คลิกนุ่ม เงียบ ประหยัดแบตเตอรี่",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 5, 
    name: "กระดานวาดรูป A3 พร้อมกระเป๋า", 
    price: 120, 
    seller: "เมษา (ปวส.2)", 
    category: "ศิลปะ", 
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
    description: "กระดานไม้อัดอย่างดี ไม่งอ แถมกระเป๋ากันน้ำใส่กระดานและไม้ที",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 6, 
    name: "หูฟังบลูทูธไร้สาย เสียงดี", 
    price: 390, 
    seller: "พีระ (ปวส.1)", 
    category: "ไอที", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "เบสแน่น ตัดเสียงรบกวนได้ระดับหนึ่ง แบตเตอรี่อึด ใช้งานได้ต่อเนื่อง 6 ชั่วโมง",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 7, 
    name: "กระเป๋าเป้นักศึกษา กันน้ำ", 
    price: 320, 
    seller: "ชนินทร์ (ปวช.3)", 
    category: "แฟชั่น", 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    description: "กระเป๋าเป้มีช่องใส่โน้ตบุ๊ก 15.6 นิ้ว ซิปลื่น ผ้ากันน้ำซึม 100%",
    badgeStyle: "bg-amber-500/20 text-amber-400 border-amber-500/40" 
  },
  { 
    id: 8, 
    name: "โคมไฟอ่านหนังสือ LED ชาร์จ USB", 
    price: 190, 
    seller: "นภัส (ปวส.2)", 
    category: "อุปกรณ์การเรียน", 
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&q=80",
    description: "ปรับความสว่างได้ 3 ระดับ พับเก็บง่าย พกไปอ่านหอเพื่อนสะดวกมาก",
    badgeStyle: "bg-orange-500/20 text-orange-400 border-orange-500/40" 
  },
];

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ทั้งหมด");

  const categories = ["ทั้งหมด", "อุปกรณ์การเรียน", "หนังสือ", "ไอที", "เสื้อผ้า", "ศิลปะ", "แฟชั่น"];

  const filteredProducts = selectedCategory === "ทั้งหมด" 
    ? mockProducts 
    : mockProducts.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="pb-28 space-y-6 bg-zinc-950 text-zinc-100 min-h-screen p-4 sm:p-6">
      {/* 1. Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-zinc-900 via-orange-950/80 to-orange-600/90 border border-orange-500/30 p-6 text-white shadow-[0_0_30px_rgba(249,115,22,0.15)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-[10px] font-bold tracking-wider text-orange-400 uppercase mb-2">
              ⚡ BACK TO SCHOOL DEALS
            </span>
            <h2 className="text-2xl font-black tracking-tight text-white drop-shadow">ตลาดนัดวิทยาลัย</h2>
            <p className="text-xs text-zinc-400 mt-1">ซื้อ-ขาย อุปกรณ์การเรียน หนังสือ และของใช้นักศึกษา</p>
          </div>
          <div 
            onClick={() => setIsCartOpen(true)}
            className="relative bg-zinc-900/90 p-3.5 rounded-2xl border border-orange-500/40 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition"
          >
            <span className="text-2xl">🛒</span>
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {totalCartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Category Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Section Header */}
      <div className="flex justify-between items-center px-1">
        <div>
          <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            รายการสินค้า ({selectedCategory})
          </h3>
          <p className="text-xs text-zinc-400">พบ {filteredProducts.length} รายการ</p>
        </div>
        <Link
          href="/product"
          className="bg-orange-500 hover:bg-orange-600 text-black text-xs font-black px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95 transition"
        >
          + ลงขายสินค้า
        </Link>
      </div>

      {/* 4. Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group bg-zinc-900/90 border rounded-2xl p-3.5 transition-all duration-300 transform cursor-pointer ${
              hoveredId === item.id
                ? "-translate-y-2 scale-[1.02] shadow-[0_0_20px_rgba(249,115,22,0.3)] border-orange-500/80"
                : "border-zinc-800 hover:border-zinc-700"
            }`}
          >
            <div 
              onClick={() => setSelectedProduct(item)}
              className="w-full h-44 rounded-xl relative overflow-hidden bg-zinc-950 border border-zinc-800"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <span className={`absolute top-2 left-2 px-2.5 py-1 rounded-full border text-[10px] font-bold backdrop-blur-md ${item.badgeStyle}`}>
                ✏️ {item.category}
              </span>
            </div>

            <div className="mt-3 space-y-1.5">
              <h4 
                onClick={() => setSelectedProduct(item)}
                className="font-bold text-sm text-zinc-100 line-clamp-1 group-hover:text-orange-400 transition"
              >
                {item.name}
              </h4>
              <p className="text-xs text-zinc-400 flex items-center gap-1">
                <span>👤</span> {item.seller}
              </p>
              
              <div className="flex justify-between items-center pt-2.5 border-t border-zinc-800">
                <span className="text-base font-black text-orange-400">
                  ฿{item.price}
                </span>
                
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => addToCart(item)}
                    className="p-1.5 bg-orange-500/10 hover:bg-orange-500 hover:text-black text-orange-400 rounded-xl border border-orange-500/30 transition shadow-sm active:scale-90"
                    title="ใส่ตะกร้า"
                  >
                    🛒
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(item)}
                    className="text-xs font-bold text-black bg-orange-500 hover:bg-orange-400 px-3 py-1.5 rounded-xl shadow-[0_0_10px_rgba(249,115,22,0.3)] transition"
                  >
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-zinc-900/90 backdrop-blur-xl border border-orange-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-full p-2.5 flex justify-around items-center z-40">
        <Link href="/home" className="flex flex-col items-center gap-0.5 text-xs font-bold text-orange-400 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
          <span className="text-lg">🏠</span>
          <span>หน้าหลัก</span>
        </Link>
        <Link href="/product" className="flex flex-col items-center gap-0.5 text-xs font-medium text-zinc-400 hover:text-orange-400 transition">
          <span className="text-lg">➕</span>
          <span>ลงขาย</span>
        </Link>
        <div 
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-0.5 text-xs font-medium text-zinc-400 hover:text-orange-400 transition cursor-pointer"
        >
          <span className="text-lg">🛒</span>
          <span>ตะกร้า ({totalCartCount})</span>
        </div>
      </div>

      {/* Modal รายละเอียดสินค้า */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-zinc-900 border border-orange-500/40 rounded-3xl p-6 shadow-[0_0_50px_rgba(249,115,22,0.2)]">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-4 border border-zinc-800">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>
            <span className={`px-3 py-1 rounded-full border text-xs font-bold ${selectedProduct.badgeStyle}`}>
              ✏️ {selectedProduct.category}
            </span>
            <h3 className="text-xl font-black text-white mt-3">{selectedProduct.name}</h3>
            <p className="text-xs text-orange-400 mt-1 font-semibold">ผู้ขาย: {selectedProduct.seller}</p>
            <p className="text-sm text-zinc-300 mt-3 leading-relaxed bg-zinc-950 p-3 rounded-xl border border-zinc-800/80">
              {selectedProduct.description}
            </p>
            <div className="mt-5 flex justify-between items-center border-t border-zinc-800 pt-4">
              <div>
                <span className="text-xs text-zinc-400 block">ราคาขาย</span>
                <span className="text-2xl font-black text-orange-400">฿{selectedProduct.price}</span>
              </div>
              <button
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-black font-black text-xs px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] transition active:scale-95"
              >
                🛒 เพิ่มลงตะกร้า
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal ตะกร้าสินค้า */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-zinc-900 border border-orange-500/40 rounded-3xl p-6 shadow-[0_0_50px_rgba(249,115,22,0.2)] max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>🛒</span> ตะกร้าสินค้าของคุณ ({totalCartCount})
              </h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-zinc-400 hover:text-white bg-zinc-800 rounded-full w-7 h-7 flex items-center justify-center text-xs"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto my-4 space-y-3 pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-10 text-zinc-500 text-xs">
                  ยังไม่มีสินค้าในตะกร้า
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-zinc-950 p-3 rounded-2xl border border-zinc-800">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 px-3">
                      <h4 className="text-xs font-bold text-white line-clamp-1">{item.name}</h4>
                      <p className="text-xs font-bold text-orange-400 mt-0.5">฿{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-zinc-900 rounded-lg border border-zinc-800 px-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-1.5 py-0.5 text-zinc-400 hover:text-white text-xs font-bold">-</button>
                        <span className="px-2 text-xs font-bold text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-1.5 py-0.5 text-zinc-400 hover:text-white text-xs font-bold">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300 text-xs p-1">
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-zinc-800 pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">ราคารวมทั้งหมด</span>
                  <span className="text-xl font-black text-orange-400">฿{totalPrice}</span>
                </div>
                <button
                  onClick={() => {
                    alert("🎉 ชำระเงินสำเร็จ! ขอบคุณที่อุดหนุนสินค้าวิทยาลัย");
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black text-sm py-3 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] transition active:scale-95"
                >
                  สั่งซื้อและชำระเงิน
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}