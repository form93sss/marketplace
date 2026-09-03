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
    <div className="fixed inset-0 z-50 bg-[#080808] flex flex-col items-center justify-center select-none overflow-hidden">
      <div className="absolute w-96 h-96 bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative h-20 flex items-center justify-center mb-2">
        <h1 className="text-3xl md:text-5xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-red-600 drop-shadow-[0_0_25px_rgba(220,38,38,0.8)]">
          {displayedText}
          <span className="inline-block w-1.5 h-10 ml-1.5 bg-red-600 animate-ping align-middle" />
        </h1>
      </div>

      <p className="text-xs text-red-500 tracking-widest font-mono mb-8 uppercase font-bold">
        อุปกรณ์แต่งรถจักรยานยนต์ | แต่งสวย แรง ไม่ซ้ำใคร
      </p>

      <div className="w-64 md:w-80 space-y-2">
        <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-red-600/30 p-[1px]">
          <div
            className="bg-gradient-to-r from-white via-red-500 to-red-700 h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#dc2626]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-red-400">
          <span>SYSTEM LOADING...</span>
          <span className="font-bold text-red-500">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. Types & Data Definition
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

const LOGO_URL = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop"; // โลโก้แต่งรถ

const featuredProduct: Product = {
  id: 100,
  name: "ชุดท่อไอเสีย Carbon / Titanium Full System",
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
    name: "โช้คหลังสับปะรดปรับระดับSubtank",
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
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart Management
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

  // Filter Logic
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
    <div className="min-h-screen bg-[#070707] text-zinc-100 font-sans selection:bg-red-600 selection:text-white pb-24">
      {/* Header / Navbar */}
      <header className="w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-red-950/60 sticky top-0 z-40 px-4 md:px-8 py-3 flex items-center justify-between">
        {/* LOGO AREA */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black border-2 border-red-600 overflow-hidden shadow-[0_0_15px_rgba(220,38,38,0.5)] flex items-center justify-center">
            <span className="font-black text-xs text-red-500 tracking-tighter">KM</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-red-500 tracking-widest uppercase">PROJECT CUSTOM PARTS</span>
            <h1 className="text-lg md:text-2xl font-black tracking-tight text-white flex items-center gap-1">
              KhongMan <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">TongMi</span>
            </h1>
          </div>
        </div>

        {/* Right Nav Options */}
        <div className="flex items-center gap-3 text-xs font-bold">
          <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span> TH
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors bg-zinc-900/90 px-3 py-1.5 rounded-xl border border-zinc-800 hover:border-red-600/50"
          >
            <span>🛒 ตะกร้า</span>
            {totalCartCount > 0 && (
              <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-[0_0_8px_#dc2626]">
                {totalCartCount}
              </span>
            )}
          </button>

          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            + ฝากขายอะไหล่
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        {/* Banner สินค้าแนะนำ */}
        <div className="relative w-full bg-[#0d0d0d] rounded-3xl p-6 md:p-10 border border-red-600/40 shadow-[0_0_40px_rgba(220,38,38,0.15)] overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block bg-red-950/80 text-red-400 text-[10px] font-extrabold px-3 py-1 rounded-full border border-red-700/60 tracking-wider uppercase">
                🔥 RECOMMENDED PART
              </span>

              <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide leading-tight uppercase">
                {featuredProduct.name}
              </h2>

              <div className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                <span>BRAND: <strong className="text-red-500">{featuredProduct.brand}</strong></span>
                <span>|</span>
                <span>หมวดหมู่: <strong className="text-red-500">{featuredProduct.category}</strong></span>
              </div>

              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                {featuredProduct.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-red-500 tracking-tight drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]">
                  ฿{featuredProduct.price.toLocaleString()}
                </span>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setSelectedProduct(featuredProduct)}
                    className="px-5 py-2.5 bg-zinc-800/80 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl border border-zinc-700 transition-all"
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
              <div className="relative w-full max-w-sm h-[300px] rounded-2xl overflow-hidden border-2 border-red-600/80 shadow-[0_0_30px_rgba(220,38,38,0.3)] group">
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
              className="w-full bg-zinc-900/90 border border-zinc-800 text-xs text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-red-600 transition-colors"
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
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
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
              className="bg-[#0f0f0f] border border-zinc-800/80 hover:border-red-600/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.25)] flex flex-col justify-between group"
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
                  <h3 className="font-bold text-sm text-zinc-100 group-hover:text-red-500 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-1">BRAND: <span className="text-red-400 font-semibold">{product.brand}</span></p>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-800/80">
                  <span className="text-base font-black text-red-500">฿{product.price.toLocaleString()}</span>
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="px-2.5 py-1.5 bg-zinc-800 text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-700 transition-all"
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

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="bg-[#0f0f0f] border-l border-zinc-800 w-full max-w-md h-full p-6 flex flex-col justify-between relative shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <h2 className="text-lg font-bold text-red-500 flex items-center gap-2">
                  🛒 KHONGMAN CART ({totalCartCount})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-zinc-400 hover:text-white w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold"
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
                      className="flex items-center justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-800"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-xs text-zinc-200 line-clamp-1">{item.name}</h4>
                          <p className="text-xs text-red-500 font-bold">฿{item.price.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-zinc-900 px-2 py-1 rounded-lg border border-zinc-800">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-zinc-400 hover:text-red-500 font-bold px-1"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-zinc-200 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-zinc-400 hover:text-red-500 font-bold px-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-zinc-400">ราคารวมทั้งหมด:</span>
                <span className="text-2xl font-black text-red-500">฿{totalPrice.toLocaleString()}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full py-3 bg-red-600 hover:bg-red-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-extrabold rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]"
              >
                ยืนยันการสั่งซื้อ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f0f0f] border border-red-600/40 rounded-2xl max-w-lg w-full p-6 relative shadow-[0_0_30px_rgba(220,38,38,0.25)]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold"
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
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-950/80 text-red-400 border border-red-800/60">
              {selectedProduct.category}
            </span>
            <h2 className="text-xl font-bold text-zinc-100 mt-2">{selectedProduct.name}</h2>
            <p className="text-xs text-red-400 font-semibold">BRAND: {selectedProduct.brand}</p>
            <p className="text-xs text-zinc-400 mt-1">ผู้ขาย: {selectedProduct.seller}</p>
            <p className="text-xs text-zinc-300 mt-3 bg-zinc-950/80 p-3 rounded-lg border border-zinc-800">
              {selectedProduct.description}
            </p>
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-black text-red-500">฿{selectedProduct.price.toLocaleString()}</span>
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