import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  seller: string;
  image: string;
}

const mockProducts: Product[] = [
  { id: 1, name: "หนังสือเรียน Next.js 14", price: 250, seller: "นายสมชาย (ปวส.2)", image: "https://via.placeholder.com/150" },
  { id: 2, name: "เสื้อช็อปแผนกช่างกล (ไซส์ L)", price: 180, seller: "นางสาวสมหญิง (ปวช.3)", image: "https://via.placeholder.com/150" },
  { id: 3, name: "เครื่องคิดเลขวิทยาศาสตร์", price: 400, seller: "อนันต์ (ปวส.1)", image: "https://via.placeholder.com/150" },
  { id: 4, name: "เมาส์ไร้สาย Logitech", price: 150, seller: "กิตติ (ปวช.2)", image: "https://via.placeholder.com/150" },
  { id: 5, name: "กระดานวาดรูป A3", price: 120, seller: "เมษา (ปวส.2)", image: "https://via.placeholder.com/150" },
];

export default function HomePage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">รายการสินค้าแนะนำ</h2>
        <Link
          href="/product"
          className="bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          + ลงขายสินค้า
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockProducts.map((item) => (
          <div key={item.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-sm flex gap-3 items-center">
            <div className="w-20 h-20 bg-slate-200 dark:bg-slate-700 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-xs text-slate-400">
              [รูปสินค้า]
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm line-clamp-1">{item.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">ผู้ขาย: {item.seller}</p>
              <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm mt-1">{item.price} บาท</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}