"use client";
import React, { useState, useEffect } from "react";

// ----------------------------------------------------------------------
// 1. Loading Screen (GARAGE ARCHIVE Theme)
// ----------------------------------------------------------------------
function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);
  const textToType = "GARAGE ARCHIVE";
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
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center select-none overflow-hidden">
      <div className="absolute w-80 h-80 bg-orange-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative h-20 flex items-center justify-center mb-2">
        <h1 className="text-4xl md:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-orange-600 drop-shadow-[0_0_25px_rgba(234,88,12,0.6)]">
          {displayedText}
          <span className="inline-block w-1.5 h-10 ml-1.5 bg-orange-500 animate-ping align-middle" />
        </h1>
      </div>

      <p className="text-xs text-orange-500/80 tracking-widest font-mono mb-8 uppercase">
        AUTO CUSTOM & PERFORMANCE PARTS
      </p>

      <div className="w-64 md:w-80 space-y-2">
        <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-orange-500/20 p-[1px]">
          <div
            className="bg-gradient-to-r from-white via-orange-500 to-amber-500 h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#f97316]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-orange-400/70">
          <span>TUNING SYSTEM...</span>
          <span className="font-bold text-orange-500">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. Types & Auto Parts Data
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
  name: "ชุดท่อไอเสีย Titanium Full Exhaust System",
  brand: "AKRAPOVIČ",
  price: 48500,
  seller: "Garage Performance",
  category: "ระบบไอเสีย & เครื่องยนต์",
  image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
  description: "ท่อไทเทเนียมแท้ทั้งเส้น น้ำหนักเบาเป็นพิเศษ เพิ่มอัตราเร่งและให้เสียงทุ้มดุดัน สภาพใหม่ 99% พร้อมปลายคาร์บอน"
};

const mockProducts: Product[] = [
  featuredProduct,
  {
    id: 1,
    name: "ล้อแม็กดิสก์ลายสปอร์ต TE37 Bronze 18 นิ้ว",
    brand: "RAYS VOLK RACING",
    price: 38000,
    seller: "ช่างนนท์ ออโต้",
    category: "ล้อ & ยาง",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop",
    description: "ล้อแท้ Japan ขอบ 18 กว้าง 8.5/9.5 ออฟเซ็ตสเปกตรง ไม่เคยซ่อม สภาพสวยมาก"
  },
  {
    id: 2,
    name: "ชุดโช้คอัพสตรีทปรับเกลียว MonoTube",
    brand: "TEIN FLEX Z",
    price: 29500,
    seller: "Kittiphat Tuning",
    category: "ช่วงล่าง & เบรก",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop",
    description: "ปรับความหนืดได้ 16 ระดับ หนึบแน่น ไม่กระด้าง นุ่มนวลสำหรับใช้งานประจำวัน"
  },
  {
    id: 3,
    name: "ชุดเบรกคาลิปเปอร์ 6-Pot พร้อมจาน 355mm",
    brand: "BREMBO GT",
    price: 42000,
    seller: "Brake Master Shop",
    category: "ช่วงล่าง & เบรก",
    image: "https://images.unsplash.com/photo-1600706432520-256d6a2f4c93?q=80&w=600&auto=format&fit=crop",
    description: "คาลิปเปอร์สีส้ม Custom จานเบรกเจาะรูระบายความร้อน เบรกอยู่นิ่ง มั่นใจทุกย่านความเร็ว"
  },
  {
    id: 4,
    name: "เบาะบัคเก็ตซีทแข่ง Full Carbon Fiber",
    brand: "BRIDE ZETA IV",
    price: 24500,
    seller: "Street Racing TH",
    category: "ตกแต่งภายใน",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
    description: "โครงคาร์บอนไฟเบอร์เบาพิเศษ กระชับลำตัว ผ้าสีดำปักโลโก้สีส้ม สภาพสวยไม่มีรอยฉีกขาด"
  },
  {
    id: 5,
    name: "พวงมาลัยหนังแท้ด้ายส้มทรง D-Shape",
    brand: "MOMO DRIFTING",
    price: 8900,
    seller: "อาร์ต พวงมาลัยซิ่ง",
    category: "ตกแต่งภายใน",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600&auto=format&fit=crop",
    description: "จับกระชับมือ หนังรูระบายอากาศ เดินด้ายส้มสปอร์ต พร้อมคอพวงมาลัยตรงรุ่น"
  },
  {
    id: 6,
    name: "ฝากระโปรงหน้า คาร์บอนไฟเบอร์ทรงเกล็ดฉลาม",
    brand: "SEIBON CARBON",
    price: 19500,
    seller: "Carbon Custom Tech",
    category: "ชุดแต่งภายนอก",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
    description: "ลายคาร์บอนชัดเป๊ะ เคลือบเงา UV ไม่ขึ้นเหลือง ช่วยระบายความร้อนในห้องเครื่อง"
  },
  {
    id: 7,
    name: "สปอยเลอร์หลังทรงสูง GT-Wing Carbon",
    brand: "VOLTEX RACING",
    price: 16800,
    seller: "Aero Dynamics",
    category: "ชุดแต่งภายนอก",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=600&auto=format&fit=crop",
    description: "เพิ่มแรงกด (Downforce) ท้ายรถขณะความเร็วสูง ขาอลูมิเนียม CNC แข็งแรงทนทาน"
  },
  {
    id: 8,
    name: "ชุดกรองอากาศคาร์บอนดักอากาศเย็น",
    brand: "GRUPPE M",
    price: 15900,
    seller: "Engine Intake Zone",
    category: "ระบบไอเสีย & เครื่องยนต์",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=600&auto=format&fit=crop",
    description: "เพิ่มปริมาณอากาศเข้าห้องเผาไหม้ คันเร่งเบาขึ้นอย่างเห็นได้ชัด เสียงกรองดูดอากาศไพเราะ"
  }
];

const categories = ["ทั้งหมด", "ระบบไอเสีย & เครื่องยนต์", "ช่วงล่าง & เบรก", "ล้อ & ยาง", "ชุดแต่งภายนอก", "ตกแต่งภายใน"];

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
    <div className="min-h-screen bg-[#080808] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white pb-24">
      {/* Navbar ด้านบน */}
      <header className="w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-900 sticky top-0 z-40 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-orange-500 tracking-widest uppercase">EST. 2026</span>
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-1">
            GARAGE <span className="text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">ARCHIVE</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold">
          <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
            <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span> TH
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800"
          >
            <span>🛒 ตะกร้า</span>
            {totalCartCount > 0 && (
              <span className="bg-orange-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                {totalCartCount}
              </span>
            )}
          </button>

          <button className="bg-orange-500 hover:bg-orange-400 text-white font-extrabold px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)]">
            + ฝากขายอะไหล่
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        {/* Featured Banner */}
        <div className="relative w-full bg-[#0f0e0f] rounded-3xl p-6 md:p-10 border border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.15)] overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block bg-orange-950/60 text-orange-400 text-[10px] font-extrabold px-3 py-1 rounded-full border border-orange-800/60 tracking-wider uppercase">
                RECOMMENDED PERFORMANCE PART
              </span>

              <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-wide leading-tight uppercase">
                {featuredProduct.name}
              </h2>

              <div className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                <span>BRAND: <strong className="text-orange-500">{featuredProduct.brand}</strong></span>
                <span>|</span>
                <span>CATEGORY: <strong className="text-orange-500">{featuredProduct.category}</strong></span>
              </div>

              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                {featuredProduct.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-orange-500 tracking-tight drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                  ฿{featuredProduct.price.toLocaleString()}
                </span>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setSelectedProduct(featuredProduct)}
                    className="px-5 py-2.5 bg-zinc-800/80 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl border border-zinc-700 transition-all flex items-center gap-1.5"
                  >
                    🔍 ดูรายละเอียด
                  </button>
                  <button 
                    onClick={() => addToCart(featuredProduct)}
                    className="px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-xs font-extrabold rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.5)] active:scale-95"
                  >
                    + ใส่ตะกร้า
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm h-[320px] rounded-2xl overflow-hidden border-2 border-orange-500/80 shadow-[0_0_30px_rgba(249,115,22,0.3)] group">
                <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md text-orange-400 text-[10px] font-extrabold px-3 py-1 rounded-md border border-orange-500/40 flex items-center gap-1">
                  <span>🔥</span> 3D PARTS DISPLAY
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
              className="w-full bg-zinc-900/90 border border-zinc-800 text-xs text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-1">
            <span className="text-xs text-zinc-500 font-bold whitespace-nowrap mr-1">หมวดหมู่:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-[#0f0e0f] border border-zinc-800/80 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] flex flex-col justify-between group"
            >
              <div className="relative h-52 bg-zinc-950 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-orange-400 text-[10px] font-bold px-2 py-1 rounded border border-orange-500/30">
                  {product.category}
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-zinc-100 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-1">BRAND: <span className="text-orange-400 font-semibold">{product.brand}</span></p>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-800/60">
                  <span className="text-base font-black text-orange-500">฿{product.price.toLocaleString()}</span>
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="px-2.5 py-1.5 bg-zinc-800 text-zinc-200 text-xs font-bold rounded-lg hover:bg-zinc-700 transition-all"
                    >
                      รายละเอียด
                    </button>
                    <button 
                      onClick={() => addToCart(product)}
                      className="px-2.5 py-1.5 bg-orange-500 hover:bg-orange-400 text-white text-xs font-bold rounded-lg transition-all"
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

      {/* Slide-over Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="bg-[#0f0e0f] border-l border-zinc-800 w-full max-w-md h-full p-6 flex flex-col justify-between relative shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <h2 className="text-lg font-bold text-orange-500 flex items-center gap-2">
                  🛒 PARTS CART ({totalCartCount})
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
                          <p className="text-xs text-orange-500 font-bold">฿{item.price.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-zinc-900 px-2 py-1 rounded-lg border border-zinc-800">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-zinc-400 hover:text-orange-500 font-bold px-1"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-zinc-200 w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-zinc-400 hover:text-orange-500 font-bold px-1"
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
                <span className="text-2xl font-black text-orange-500">฿{totalPrice.toLocaleString()}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full py-3 bg-orange-500 hover:bg-orange-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-extrabold rounded-xl transition-all shadow-lg"
              >
                ชำระเงินสั่งซื้อ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f0e0f] border border-orange-500/40 rounded-2xl max-w-lg w-full p-6 relative shadow-[0_0_30px_rgba(249,115,22,0.2)]">
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
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-orange-950/60 text-orange-400 border border-orange-800/60">
              {selectedProduct.category}
            </span>
            <h2 className="text-xl font-bold text-zinc-100 mt-2">{selectedProduct.name}</h2>
            <p className="text-xs text-orange-400 font-semibold">BRAND: {selectedProduct.brand}</p>
            <p className="text-xs text-zinc-400 mt-1">ผู้ขาย: {selectedProduct.seller}</p>
            <p className="text-xs text-zinc-300 mt-3 bg-zinc-950/60 p-3 rounded-lg border border-zinc-800">
              {selectedProduct.description}
            </p>
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-black text-orange-500">฿{selectedProduct.price.toLocaleString()}</span>
              <button 
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                  setIsCartOpen(true);
                }}
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs rounded-xl transition-all shadow-lg"
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