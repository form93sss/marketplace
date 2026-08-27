"use client";
import React, { useState, useEffect } from "react";

// ----------------------------------------------------------------------
// 1. Loading Screen (CAMPUS ARCHIVE - Dark Orange Theme)
// ----------------------------------------------------------------------
function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);
  const textToType = "CAMPUS ARCHIVE";
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
        POWERED BY NEXT.JS & VERCEL
      </p>

      <div className="w-64 md:w-80 space-y-2">
        <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-orange-500/20 p-[1px]">
          <div
            className="bg-gradient-to-r from-white via-orange-500 to-amber-500 h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#f97316]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-orange-400/70">
          <span>SYSTEM INITIALIZING...</span>
          <span className="font-bold text-orange-500">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. Types & Expanded Anime/Manga Data
// ----------------------------------------------------------------------
interface Product {
  id: number;
  name: string;
  author: string;
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
  name: "JUJUTSU KAISEN (มหาเวทย์ผนึกมาร) VOL.1-24",
  author: "GEGE AKUTAMI",
  price: 1450,
  seller: "Kittiphat Archive",
  category: "อนิเมะ & มังงะ",
  image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
  description: "มังงะมหาเวทย์ผนึกมาร เล่ม 1-24 สภาพสะสมกริบๆ เก็บในซองอย่างดี ไม่เคยเปียกน้ำ ไม่มีรอยพับ สภาพ 98%+"
};

const mockProducts: Product[] = [
  featuredProduct,
  {
    id: 1,
    name: "Chainsaw Man Vol.1-12 ครบชุด",
    author: "TATSUKI FUJIMOTO",
    price: 890,
    seller: "นายสมชาย (ปวส.2)",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop",
    description: "สภาพดีมาก อ่านมือเดียว ไม่มีหน้าขาด ซองใสครบทุกเล่ม"
  },
  {
    id: 2,
    name: "Spy x Family Vol.1-10",
    author: "TATSUYA ENDO",
    price: 750,
    seller: "นางสาวสมหญิง (ปวช.3)",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    description: "พร้อมของแถมโปสการ์ดรอบพรีออเดอร์ สภาพสะสมสวยๆ"
  },
  {
    id: 3,
    name: "Demon Slayer (ดาบพิฆาตอสูร) ยกเซ็ต 1-23",
    author: "KOYOHARU GOTOUGE",
    price: 1650,
    seller: "กิตติพงษ์ (ปวส.1)",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=600&auto=format&fit=crop",
    description: "เล่ม 1-23 จบ สภาพบ้านสวยๆ ไม่มีรอยขีดเขียน"
  },
  {
    id: 4,
    name: "Tokyo Revengers (โตเกียว รีベンเจอร์ส) 1-31 จบ",
    author: "KEN WAKUI",
    price: 2100,
    seller: "อาร์ม สตรีทไลฟ์",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop",
    description: "แก๊งค์โตมันยกชุด สภาพกริบ 99% ใส่ซองกันรอยให้ทุกเล่ม"
  },
  {
    id: 5,
    name: "Blue Lock (ขังหลงโกล) เล่ม 1-22",
    author: "MUNEYUKI KANESHIRO",
    price: 1550,
    seller: "บอลมังงะ (ปี 2)",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
    description: "มังงะฟุตบอลสุดเดือด เล่ม 1-22 สภาพมือหนึ่งในซอง"
  },
  {
    id: 6,
    name: "Attack on Titan (ผ่าพิภพไททัน) 1-34 จบ Boxset",
    author: "HAJIME ISAYAMA",
    price: 3200,
    seller: "คลังไททัน TH",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop",
    description: "บ็อกเซ็ตครบชุด สภาพมือสองเกรด A+ หายากมากน่าสะสม"
  },
  {
    id: 7,
    name: "One Piece Vol.100-105 Set",
    author: "EIICHIRO ODA",
    price: 450,
    seller: "แฟนวันพีซ 90s",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=600&auto=format&fit=crop",
    description: "ภาควาโนะคุนิช่วงพีค สภาพใหม่กริบ อ่านรอบเดียว"
  },
  {
    id: 8,
    name: "My Hero Academia Vol.1-38",
    author: "KOHEI HORIKOSHI",
    price: 2400,
    seller: "โอตาคุ สายบวก",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=600&auto=format&fit=crop",
    description: "มายฮีโร่อคาเดเมีย ยกเซ็ตยาวๆ 38 เล่ม สภาพเก็บสะสม"
  },
  {
    id: 9,
    name: "Bleach (บลีช เทพมรณะ) ฉบับ Big Book 1-26",
    author: "TITE KUBO",
    price: 2900,
    seller: "Retro Manga",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=600&auto=format&fit=crop",
    description: "พิมพ์ใหญ่ Big Book กระดาษถนอมสายตา สภาพ 95%"
  },
  {
    id: 10,
    name: "Solo Leveling นิยาย/มังฮวา Vol.1-5",
    author: "DUBU / CHU-GONG",
    price: 1850,
    seller: "Hunter Archive",
    category: "นิยาย & ซีรีส์",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
    description: "เวอร์ชันสี่สีทั้งเล่ม งานภาพอลังการ สภาพใหม่กริบ"
  },
  {
    id: 11,
    name: "Hunter x Hunter เล่ม 1-36",
    author: "YOSHIHIRO TOGASHI",
    price: 2750,
    seller: "อาจารย์กิต",
    category: "อนิเมะ & มังงะ",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
    description: "ฮันเตอร์ x ฮันเตอร์ การ์ดเกมระดับตำนาน เล่ม 1-36 ครบ"
  }
];

const categories = ["ทั้งหมด", "อนิเมะ & มังงะ", "นิยาย & ซีรีส์", "เทคโนโลยี", "จิตวิทยา"];

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
                          p.author.toLowerCase().includes(searchQuery.toLowerCase());
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
            CAMPUS <span className="text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">ARCHIVE</span>
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
            + ฝากขาย
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
                RECOMMENDED ARCHIVE
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-wide leading-tight uppercase">
                {featuredProduct.name}
              </h2>

              <div className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                <span>AUTHOR: <strong className="text-orange-500">{featuredProduct.author}</strong></span>
                <span>|</span>
                <span>CATEGORY: <strong className="text-orange-500">{featuredProduct.category}</strong></span>
              </div>

              <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                {featuredProduct.description}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-orange-500 tracking-tight drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                  ฿{featuredProduct.price}
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
                  <span>🔥</span> 3D ARCHIVE DISPLAY
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
              placeholder="ค้นหาชื่อเรื่อง, ผู้แต่ง..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/90 border border-zinc-800 text-xs text-white px-4 py-2.5 rounded-xl focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-1">
            <span className="text-xs text-zinc-500 font-bold whitespace-nowrap mr-1">เรียงลำดับ: ปกติ</span>
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

        {/* Product Grid (12 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-[#0f0e0f] border border-zinc-800/80 hover:border-orange-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] flex flex-col justify-between group"
            >
              <div className="relative h-56 bg-zinc-950 overflow-hidden">
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
                  <p className="text-[11px] text-zinc-400 mt-1">AUTHOR: {product.author}</p>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-800/60">
                  <span className="text-lg font-black text-orange-500">฿{product.price}</span>
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
                  🛒 ARCHIVE CART ({totalCartCount})
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
                          <p className="text-xs text-orange-500 font-bold">฿{item.price}</p>
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
                <span className="text-2xl font-black text-orange-500">฿{totalPrice}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full py-3 bg-orange-500 hover:bg-orange-400 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-extrabold rounded-xl transition-all shadow-lg"
              >
                ยืนยันการสั่งซื้อ
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
            <p className="text-xs text-orange-400 font-semibold">AUTHOR: {selectedProduct.author}</p>
            <p className="text-xs text-zinc-400 mt-1">ผู้ขาย: {selectedProduct.seller}</p>
            <p className="text-xs text-zinc-300 mt-3 bg-zinc-950/60 p-3 rounded-lg border border-zinc-800">
              {selectedProduct.description}
            </p>
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-black text-orange-500">฿{selectedProduct.price}</span>
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