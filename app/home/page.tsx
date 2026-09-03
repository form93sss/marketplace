"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: string;
  category: string;
  image: string;
  sellerInfo: string;
}

interface CartItem extends Product {
  quantity: number;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [searchTerm, setSearchTerm] = useState("");

  // โหลดรายการสินค้าและตะกร้าจาก LocalStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem("km_products");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (e) {
        console.error("Error loading products", e);
      }
    }

    const savedCart = localStorage.getItem("km_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error loading cart", e);
      }
    }
  }, []);

  // บันทึกตะกร้าลง LocalStorage เมื่อมีการเปลี่ยนแปลง
  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("km_cart", JSON.stringify(newCart));
  };

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า
  const handleAddToCart = (product: Product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      updateCart(updatedCart);
    } else {
      updateCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ปรับจำนวนสินค้าในตะกร้า
  const handleUpdateQuantity = (id: string, delta: number) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter((item): item is CartItem => item !== null);

    updateCart(updatedCart);
  };

  // ลบสินค้าออกจากตะกร้า
  const handleRemoveFromCart = (id: string) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  // ลบประกาศสินค้า
  const handleDeleteProduct = (id: string) => {
    if (confirm("คุณต้องการลบรายการสินค้านี้ใช่หรือไม่?")) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      localStorage.setItem("km_products", JSON.stringify(updated));
      handleRemoveFromCart(id);
    }
  };

  const categories = [
    "ทั้งหมด",
    "ระบบไอเสีย",
    "ระบบกันสะเทือน",
    "ระบบเบรก",
    "ล้อ & ยาง",
    "ระบบขับเคลื่อน",
  ];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "ทั้งหมด" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sellerInfo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 p-4 sm:p-8 relative overflow-hidden select-none pb-28">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header Navigation */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-800 to-black p-[2px] shadow-[0_0_20px_rgba(220,38,38,0.5)]">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center border border-red-500/30">
              <span className="font-black text-base text-white tracking-tighter">KM</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wider text-white italic leading-tight">
              KHONGMAN <span className="text-red-500">TONGMI</span>
            </h1>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Project Custom Parts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* ปุ่มตะกร้าสินค้า */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-600 text-white transition-all"
          >
            <span className="text-lg">🛒</span>
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                {totalCartCount}
              </span>
            )}
          </button>

          <Link
            href="/product"
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] active:scale-95 flex items-center gap-2"
          >
            + ลงขายสินค้า
          </Link>
        </div>
      </header>

      {/* Controls Section */}
      <section className="max-w-7xl mx-auto w-full mb-8 relative z-10 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="ค้นหาชื่อสินค้า, ผู้ขาย..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs px-4 py-3 rounded-xl bg-[#0a0a0a] border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                    : "bg-[#0a0a0a] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto w-full relative z-10">
        {filteredProducts.length === 0 ? (
          <div className="w-full bg-[#0a0a0a] border border-zinc-800/80 rounded-3xl p-12 text-center my-8">
            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
              📦
            </div>
            <h2 className="text-lg font-bold text-white mb-1">ไม่มีสินค้าในระบบ</h2>
            <p className="text-xs text-zinc-500 mb-6">
              คลิกปุ่มด้านล่างเพื่อเพิ่มสินค้าและรูปภาพของคุณได้เลย
            </p>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              + เพิ่มสินค้าชิ้นแรก
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden border-b border-zinc-800/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-red-500/30 text-red-400 text-[10px] font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 line-clamp-1">
                      👤 {item.sellerInfo}
                    </p>
                    <div className="text-base font-black text-red-500 pt-1">
                      ฿{Number(item.price).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-2">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-[0_0_10px_rgba(220,38,38,0.3)] active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    🛒 ใส่ตะกร้า
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(item.id)}
                    className="w-full py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-600/50 hover:bg-red-950/30 text-zinc-400 hover:text-red-400 text-xs font-bold transition-all"
                  >
                    🗑️ ลบสินค้า
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Cart Modal Slide-over */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#0a0a0a] border-l border-zinc-800 h-full p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <h2 className="text-lg font-black text-white flex items-center gap-2">
                  🛒 ตะกร้าสินค้า ({totalCartCount})
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-zinc-400 hover:text-white font-bold p-1"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-zinc-500 text-xs text-center py-12">
                  ไม่มีสินค้าในตะกร้า
                </p>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#050505] border border-zinc-800"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-cover rounded-lg border border-zinc-800"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-red-500 font-bold">
                          ฿{Number(item.price).toLocaleString()}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="w-5 h-5 rounded bg-zinc-800 text-xs text-white hover:bg-red-600"
                          >
                            -
                          </button>
                          <span className="text-xs text-white font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="w-5 h-5 rounded bg-zinc-800 text-xs text-white hover:bg-red-600"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-zinc-500 hover:text-red-500 text-xs p-1"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t border-zinc-800 pt-4 space-y-3">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-zinc-400">ราคารวมทั้งหมด:</span>
                  <span className="text-red-500 text-base">
                    ฿{totalCartPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => alert("ระบบชำระเงินยังไม่เปิดให้บริการ")}
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                >
                  สั่งซื้อสินค้า
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-6 px-6 py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border border-red-900/40 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.25)]">
          <Link href="/home" className="flex flex-col items-center gap-1 text-white">
            <span className="text-base">🏠</span>
            <span className="text-[10px] font-bold">หน้าหลัก</span>
          </Link>
          <Link
            href="/product"
            className="flex flex-col items-center justify-center w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] font-bold text-lg active:scale-95"
          >
            +
          </Link>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors relative"
          >
            <span className="text-base">🛒</span>
            <span className="text-[10px] font-bold">ตะกร้า</span>
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[8px] font-bold px-1 rounded-full">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}