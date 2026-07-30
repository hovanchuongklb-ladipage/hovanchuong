"use client";

import {
  Baby,
  Building2,
  Dumbbell,
  ShieldCheck,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import Image from "next/image";

import { asset, siteConfig, type AmenityIconKey } from "@/config/site";

// Config can only hold plain data, never a React component reference, so
// siteConfig.sections.amenities stores an icon *key* per card — this
// registry is what resolves that key to the actual lucide-react icon.
const amenityIcons: Record<AmenityIconKey, typeof Waves> = {
  pool: Waves,
  restaurant: UtensilsCrossed,
  gym: Dumbbell,
  mall: Building2,
  park: Baby,
  security: ShieldCheck,
};

const fullAmenityList = [
  "Hồ bơi người lớn (vô cực)",
  "Hồ bơi trẻ em",
  "Dòng sông lười & Thác nước",
  "Jacuzzi",
  "Khu tương tác trẻ em",
  "Suối cảnh quan",
  "Hồ tràn nghệ thuật",
  "Khu quảng trường",
  "Bar",
  "Hồ cạn kết hợp ghế nằm",
  "Chòi ven hồ",
  "Khu trò chơi trong nhà",
  "Đường chạy bộ",
  "Thư viện",
  "Nhạc nước",
  "Khu BBQ",
  "Khu tập thể dục ngoài trời",
  "Vườn treo cảnh quan",
  "Cầu ngắm cảnh",
];

export function Amenities() {
  return (
    <section id="tien-ich" className="bg-navy-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            Tiện ích đẳng cấp 5 sao
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-4xl">
            Hệ Sinh Thái Tiện Ích Thượng Lưu
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Vận hành theo nền tảng công nghệ Smart Living, mang đến đặc quyền giải trí,
            mua sắm và nghỉ dưỡng dành riêng cho cư dân {siteConfig.name}.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.sections.amenities.map((item) => {
            const Icon = amenityIcons[item.icon];
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-xl transition hover:-translate-y-1 hover:border-gold-500/40"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={asset(item.image)}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-white sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="font-display text-base font-bold text-white sm:text-lg">
            Danh sách đầy đủ tiện ích nội khu
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {fullAmenityList.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gold-500/30 bg-navy-950 px-3.5 py-1.5 text-xs font-medium text-white/80 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
