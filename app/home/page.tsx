"use client";
import React, { useState, useEffect } from "react";

// ----------------------------------------------------------------------
// 1. Loading Screen (KhongMan TongMi Theme)
// ----------------------------------------------------------------------
function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);
  const textToType = "KHONGMAN TONGMI";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinished, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onFinished]);

  useEffect(() => {
    const charIndex = Math.floor((progress / 100) * textToType.length);
    setDisplayedText(textToType.substring(0, charIndex));
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center select-none overflow-hidden">
      {/* Red Glow Background Effect */}
      <div className="absolute w-96 h-96 bg-red-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* KM Box Logo */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-red-600 via-red-800 to-black p-[2px] shadow-[0_0_30px_rgba(220,38,38,0.6)] mb-6 animate-pulse">
        <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center border border-red-500/30">
          <span className="font-black text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-500 tracking-tighter">
            KM
          </span>
        </div>
      </div>

      {/* Typo Heading */}
      <div className="relative h-12 flex items-center justify-center mb-1">
        <h1 className="text-2xl md:text-4xl font-black italic tracking-wider text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
          {displayedText}
          <span className="inline-block w-1.5 h-7 md:h-9 ml-1.5 bg-red-600 animate-ping align-middle" />
        </h1>
      </div>

      <p className="text-[10px] md:text-xs text-red-500 tracking-[0.25em] font-mono mb-8 uppercase font-bold">
        PROJECT CUSTOM PARTS
      </p>

      {/* Progress Bar & Percentage */}
      <div className="w-64 md:w-80 space-y-2">
        <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-red-900/40 p-[1px]">
          <div
            className="bg-gradient-to-r from-red-800 via-red-600 to-red-500 h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#dc2626]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
          <span>SYSTEM INITIALIZING...</span>
          <span className="font-bold text-red-500">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. Types & Data
// ----------------------------------------------------------------------
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  seller: string;
  category: string;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const featuredProduct: Product = {
  id: 100,
  name: "ชุดท่อไอเสีย CARBON / TITANIUM FULL SYSTEM",
  brand: "AKRAPOVIČ",
  price: 28500,
  seller: "KhongMan Official",
  category: "ระบบไอเสีย",
  image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
  description: "ปลายท่อคาร์บอนแท้พร้อมคอท่อสแตนเลสเกรดพรีเมียม เพิ่มแรงม้า เสียงทุ้มแน่นดุดัน ตรงรุ่นมอเตอร์ไซค์บิ๊กไบค์และสปอร์ต"
};

const mockProducts: Product[] = [
  featuredProduct,
  {
    id: 1,
    name: "โช้คหลังสับปะรดปรับระดับ Subtank",
    brand: "YSS PERFORMANCE",
    price: 14500,
    seller: "ช่างแม็ก มอเตอร์",
    category: "ระบบกันสะเทือน",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop",
    description: "สปริงสีแดงซิกเนเจอร์ ปรับความหนืด Rebound และ Compression ได้ละเอียด ซับแรงกระแทกเยี่ยม"
  },
  {
    id: 2,
    name: "ปั๊มเบรกบนลอย Corsa Corta Red Edition",
    brand: "BREMBO",
    price: 11800,
    seller: "เบรกซิ่ง หนองจอก",
    category: "ระบบเบรก",
    image: "https://images.unsplash.com/photo-1600706432520-256d6a2f4c93?q=80&w=600&auto=format&fit=crop",
    description: "ปั๊มเบรกโลโก้แดงระดับสนามแข่ง น้ำหนักเบา คุมน้ำหนักการเบรกได้แม่นยำสูงสุด"
  },
  {
    id: 3,
    name: "จานดิสก์เบรกแต่งเจาะรูระบายความร้อน 300mm",
    brand: "BREMBO RACING",
    price: 6900,
    seller: "KhongMan Official",
    category: "ระบบเบรก",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop",
    description: "หมุดสแตนเลส ทนความร้อนสูง ลดอาการเบรกเฟดเมื่อใช้งานหนัก"
  },
  {
    id: 4,
    name: "วงล้ออลูมิเนียมแต่งน้ำหนักเบา CNC ขอบ 17",
    brand: "MARCHESINI",
    price: 32000,
    seller: "ร้านวงล้อเทพ",
    category: "ล้อ & ยาง",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
    description: "ล้อแม็กฟอร์จอลูมิเนียม แข็งแกร่ง ควบคุมรถง่ายขึ้นทั้งทางตรงและยามเทโค้ง"
  },
  {
    id: 5,
    name: "ชุดสเตอร์หน้า-หลัง พร้อมโซ่ข้อหนา O-Ring Red",
    brand: "RK / SUNSTAR",
    price: 3800,
    seller: "โซ่สเตอร์ไทยแลนด์",
    category: "ระบบขับเคลื่อน",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=600&auto=format&fit=crop",
    description: "โซ่สีแดงข้อหนาทนแรงดึงสูง สเตอร์เหล็กชุบแข็งใช้งานได้ยาวนาน"
  }
];

const categories = ["ทั้งหมด", "ระบบไอเสีย", "ระบบกันสะเทือน", "ระบบเบรก", "ล้อ & ยาง", "ระบบขับเคลื่อน"];

// ----------------------------------------------------------------------
// 3. Main Page Component
// ----------------------------------------------------------------------
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredProducts = mockProducts.filter((p) => {
    const matchesCategory = selectedCategory === "ทั้งหมด" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return <LoadingScreen onFinished={() => setIsLoading(false)} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans pb-24 ${
      isDarkMode 
        ? "bg-[#070707] text-zinc-100 selection:bg-red-600 selection:text-white" 
        : "bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white"
    }`}>
      
      {/* Header / Navbar หลัก */}
      <header className={`w-full sticky top-0 z-40 px-4 md:px-8 py-3.5 flex items-center justify-between transition-colors border-b shadow-md ${
        isDarkMode 
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-red-950/80 shadow-black/80" 
          : "bg-white/95 backdrop-blur-md border-slate-200 shadow-slate-200"
      }`}>
        {/* LOGO KHONGMAN TONGMI */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-800 to-black p-[2px] shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center border border-red-500/30">
              <span className="font-black text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-500 tracking-tighter">
                KM
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className={`text-lg md:text-xl font-black tracking-wider uppercase flex items-center gap-1.5 leading-none ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}>
              KhongMan{" "}
              <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                TongMi
              </span>
            </h1>
            <span className="text-[9px] md:text-[10px] font-bold text-red-500 tracking-widest uppercase mt-1">
              PROJECT CUSTOM PARTS
            </span>
          </div>
        </div>

        {/* RIGHT CONTROLS - Cart & Theme Switch */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsCartOpen(true)} 
            className={`flex items-center gap-2 text-xs font-extrabold px-3.5 py-2 rounded-xl border transition-all ${
              isDarkMode 
                ? "bg-zinc-900 text-zinc-200 border-zinc-800 hover:border-red-600/50" 
                : "bg-slate-100 text-slate-800 border-slate-200 hover:border-red-500"
            }`}
          >
            <span>🛒 ตะกร้า</span>
            {totalCartCount > 0 && (
              <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-[0_0_8px_#dc2626]">
                {totalCartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-[10px] font-extrabold uppercase tracking-wide transition-all cursor-pointer ${
              isDarkMode
                ? "bg-zinc-900/90 border-red-600/40 text-red-400 shadow-[0_0_10px_rgba(220,38,38,0.2)] hover:border-red-500"
                : "bg-white border-red-400 text-red-600 hover:bg-red-50 shadow-sm"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_6px_#dc2626]"></span>
            </span>
            <span>{isDarkMode ? "🌙 DARK THEME" : "☀️ LIGHT THEME"}</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        {/* Banner สินค้าแนะนำ */}
        <div className={`relative w-full rounded-3xl p-6 md:p-10 border transition-all shadow-xl overflow-hidden mb-8 ${
          isDarkMode 
            ? "bg-[#0d0d0d] border-red-600/40 shadow-[0_0_40px_rgba(220,38,38,0.15)]" 
            : "bg-white border-slate-200 shadow-slate-200/50"
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block bg-red-600/10 text-red-600 text-[10px] font-extrabold px-3 py-1 rounded-full border border-red-600/30 tracking-wider uppercase">
                🔥 RECOMMENDED PART
              </span>

              <h2 className={`text-2xl md:text-4xl font-black italic tracking-wide leading-tight uppercase ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                {featuredProduct.name}
              </h2>

              <div className="text-xs font-bold flex items-center gap-2 text-zinc-400">
                <span>BRAND: <strong className="text-red-600">{featuredProduct.brand}</strong></span>
                <span>|</span>
                <span>หมวดหมู่: <strong className="text-red-600">{featuredProduct.category}</strong></span>
              </div>

              <p className={`text-xs md:text-sm leading-relaxed font-light ${
                isDarkMode ? "text-zinc-300" : "text-slate-600"
              }`}>
                {featuredProduct.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-red-600 tracking-tight drop-shadow-[0_0_12px_rgba(220,38,38,0.5)]">
                  ฿{featuredProduct.price.toLocaleString()}
                </span>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setSelectedProduct(featuredProduct)}
                    className={`px-5 py-2.5 text-xs font-bold rounded-xl border transition-all ${
                      isDarkMode 
                        ? "bg-zinc-800/80 hover:bg-zinc-700 text-white border-zinc-700" 
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"
                    }`}
                  >
                    🔍 รายละเอียด
                  </button>
                  <button 
                    onClick={() => addToCart(featuredProduct)}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] active:scale-95"
                  >
                    + ใส่ตะกร้า
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm h-[300px] rounded-2xl overflow-hidden border-2 border-red-600/80 shadow-lg group">
                <div className="absolute top-3 left-3 z-10 bg-black/80 backdrop-blur-md text-red-400 text-[10px] font-extrabold px-3 py-1 rounded-md border border-red-600/40 flex items-center gap-1">
                  <span>🏁</span> PERFORMANCE DISPLAY
                </div>
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="ค้นหาชื่อสินค้า, แบรนด์..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full text-xs px-4 py-2.5 rounded-xl border focus:outline-none focus:border-red-600 transition-colors ${
                isDarkMode 
                  ? "bg-zinc-900/90 border-zinc-800 text-white" 
                  : "bg-white border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                    : isDarkMode 
                      ? "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid สินค้า */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 hover:border-red-600/60 flex flex-col justify-between group ${
                isDarkMode 
                  ? "bg-[#0f0f0f] border-zinc-800/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.25)]" 
                  : "bg-white border-slate-200 hover:shadow-lg"
              }`}
            >
              <div className="relative h-52 bg-zinc-950 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-red-400 text-[10px] font-bold px-2.5 py-1 rounded border border-red-600/40">
                  {product.category}
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`font-bold text-sm transition-colors line-clamp-2 ${
                    isDarkMode ? "text-zinc-100 group-hover:text-red-500" : "text-slate-800 group-hover:text-red-600"
                  }`}>
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-1">BRAND: <span className="text-red-500 font-semibold">{product.brand}</span></p>
                </div>

                <div className={`mt-4 flex items-center justify-between pt-3 border-t ${
                  isDarkMode ? "border-zinc-800/80" : "border-slate-100"
                }`}>
                  <span className="text-base font-black text-red-600">฿{product.price.toLocaleString()}</span>
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        isDarkMode 
                          ? "bg-zinc-800 text-zinc-200 hover:bg-zinc-700" 
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      รายละเอียด
                    </button>
                    <button 
                      onClick={() => addToCart(product)}
                      className="px-2.5 py-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg transition-all shadow-[0_0_10px_rgba(220,38,38,0.3)]"
                    >
                      + ใส่ตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className={`w-full max-w-md h-full p-6 flex flex-col justify-between relative shadow-2xl border-l ${
            isDarkMode ? "bg-[#0f0f0f] border-zinc-800" : "bg-white border-slate-200"
          }`}>
            <div>
              <div className={`flex items-center justify-between pb-4 border-b ${
                isDarkMode ? "border-zinc-800" : "border-slate-200"
              }`}>
                <h2 className="text-lg font-bold text-red-600 flex items-center gap-2">
                  🛒 KHONGMAN CART ({totalCartCount})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    isDarkMode ? "bg-zinc-800 text-zinc-400 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 overflow-y-auto max-h-[60vh] space-y-4 pr-1">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-zinc-500">
                    <p className="text-4xl mb-2">🛒</p>
                    <p className="text-xs">ไม่มีสินค้าในตะกร้า</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between p-3 rounded-xl border ${
                        isDarkMode ? "bg-zinc-950 border-zinc-800" : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className={`font-bold text-xs line-clamp-1 ${isDarkMode ? "text-zinc-200" : "text-slate-800"}`}>
                            {item.name}
                          </h4>
                          <p className="text-xs text-red-600 font-bold">฿{item.price.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className={`flex items-center gap-2 px-2 py-1 rounded-lg border ${
                        isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-slate-200"
                      }`}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-zinc-400 hover:text-red-600 font-bold px-1"
                        >
                          -
                        </button>
                        <span className={`text-xs font-bold w-4 text-center ${isDarkMode ? "text-zinc-200" : "text-slate-800"}`}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-zinc-400 hover:text-red-600 font-bold px-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className={`pt-4 border-t ${isDarkMode ? "border-zinc-800" : "border-slate-200"}`}>
              <div className="flex justify-between items-center mb-4">
                <span className={`text-xs ${isDarkMode ? "text-zinc-400" : "text-slate-500"}`}>ราคารวมทั้งหมด:</span>
                <span className="text-2xl font-black text-red-600">฿{totalPrice.toLocaleString()}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full py-3 bg-red-600 hover:bg-red-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-extrabold rounded-xl transition-all shadow-md"
              >
                ยืนยันการสั่งซื้อ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`border rounded-2xl max-w-lg w-full p-6 relative shadow-2xl ${
            isDarkMode ? "bg-[#0f0f0f] border-red-600/40" : "bg-white border-slate-200"
          }`}>
            <button
              onClick={() => setSelectedProduct(null)}
              className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                isDarkMode ? "bg-zinc-800 text-zinc-400 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              ✕
            </button>
            <div className="w-full h-64 bg-zinc-950 rounded-xl mb-4 relative overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-600/10 text-red-600 border border-red-600/30">
              {selectedProduct.category}
            </span>
            <h2 className={`text-xl font-bold mt-2 ${isDarkMode ? "text-[#f1f1f1]" : "text-slate-900"}`}>
              {selectedProduct.name}
            </h2>
            <p className="text-xs text-red-600 font-semibold">BRAND: {selectedProduct.brand}</p>
            <p className="text-xs text-zinc-400 mt-1">ผู้ขาย: {selectedProduct.seller}</p>
            <p className={`text-xs mt-3 p-3 rounded-lg border ${
              isDarkMode ? "bg-zinc-950/80 text-zinc-300 border-zinc-800" : "bg-slate-50 text-slate-600 border-slate-200"
            }`}>
              {selectedProduct.description}
            </p>
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-black text-red-600">฿{selectedProduct.price.toLocaleString()}</span>
              <button 
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                  setIsCartOpen(true);
                }}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl transition-all shadow-lg"
              >
                + หยิบใส่ตะกร้า
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}