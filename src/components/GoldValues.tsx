"use client";

import { Building2, Crown, ShieldCheck, Waves } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { asset, siteConfig } from "@/config/site";

interface GoldValue {
  icon: typeof Waves;
  title: string;
  description: string;
  image: string;
}

const values: GoldValue[] = [
  {
    icon: Building2,
    title: "Đón đầu hạ tầng khu Nam",
    description:
      "Giai đoạn 2026-2030, khu Nam Sài Gòn tăng tốc với cao tốc Bến Lức - Long Thành, Vành đai 3, cầu Thủ Thiêm 4, cầu Phú Mỹ 2 và tuyến Metro số 4 — hạ tầng đi trước, bất động sản tăng giá theo sau.",
    image: siteConfig.images.goldValues.smartHome,
  },
  {
    icon: Waves,
    title: "Không gian nghỉ dưỡng hình số 8",
    description:
      "Toàn bộ khối đế được thiết kế theo hình số 8 độc bản, ôm trọn hồ bơi vô cực, vườn cảnh quan, sân tennis và quảng trường trung tâm — mang chuẩn sống resort vào ngay nội khu.",
    image: siteConfig.images.goldValues.greenLiving,
  },
  {
    icon: Crown,
    title: "Sky Villa & Sky Garden thượng lưu",
    description:
      "Các tầng cao nhất dự án dành riêng cho dòng sản phẩm Sky Villa và Sky Garden duplex 2 tầng, tầm nhìn bao quát sông Sài Gòn và toàn cảnh khu Nam.",
    image: siteConfig.images.goldValues.luxuryInterior,
  },
  {
    icon: ShieldCheck,
    title: "Đồng hành cùng Sunshine Group",
    description:
      "Noble Crystal Riverside được phát triển bởi Sunshine Group, đi kèm chính sách bình ổn lãi suất, ưu đãi lãi suất 0% và hỗ trợ vay lên đến 70% giá trị hợp đồng.",
    image: siteConfig.images.goldValues.security,
  },
];

export function GoldValues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = values[activeIndex];

  return (
    <section id="gia-tri-vang" className="bg-navy-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            Vì sao chọn Noble Crystal Riverside
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-4xl">
            4 Giá Trị Cốt Lõi Của Dự Án
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/20 shadow-2xl">
            <Image
              key={active.image}
              src={asset(active.image)}
              alt={active.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={value.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-xl border px-5 py-4 text-left transition ${
                    isActive
                      ? "border-gold-500 bg-gold-500/10"
                      : "border-white/10 bg-white/5 hover:border-gold-500/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        isActive ? "bg-gold-500 text-navy-950" : "bg-white/10 text-gold-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-bold text-white sm:text-lg">
                      {value.title}
                    </h3>
                  </div>
                  {isActive && (
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {value.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
