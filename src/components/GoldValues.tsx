"use client";

import { Crown, Droplets, ShieldCheck, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { asset, siteConfig } from "@/config/site";

interface GoldValue {
  icon: typeof Smartphone;
  title: string;
  description: string;
  image: string;
}

const values: GoldValue[] = [
  {
    icon: Smartphone,
    title: "Sống thông minh thời thượng",
    description:
      "Yếu tố \"Smart\" là trụ cột cốt lõi tại Sunshine Sky City. Căn hộ trang bị hệ thống IR Gateway điều khiển đèn, rèm cửa, quạt, TV, loa, điều hòa... chỉ bằng một chạm, mang đến trải nghiệm làm chủ cuộc sống thực thụ cho cư dân.",
    image: siteConfig.images.goldValues.smartHome,
  },
  {
    icon: Droplets,
    title: "Chuẩn sống xanh \"Resort\"",
    description:
      "Lợi thế \"kế sông, cận thủy\" cùng khoảng 12.000 m² mặt nước từ hệ thống hồ điều hòa đan xen trong khuôn viên và mảng xanh trên các tầng cao, kiến tạo bầu không khí thoáng đãng hiếm có trong khu vực.",
    image: siteConfig.images.goldValues.greenLiving,
  },
  {
    icon: Crown,
    title: "Nội thất hoàng kim",
    description:
      "Đẳng cấp \"luxury\" thể hiện qua từng chi tiết mạ vàng tinh xảo đến từ những thương hiệu nội thất lừng danh thế giới — xứng tầm với những chủ nhân thành đạt của Sunshine Sky City.",
    image: siteConfig.images.goldValues.luxuryInterior,
  },
  {
    icon: ShieldCheck,
    title: "Hệ thống an ninh tuyệt đối",
    description:
      "Nhận diện gương mặt khi ra vào tòa nhà, hệ thống Intercom kết nối liên hoàn từ bãi đỗ xe, sảnh tiếp tân đến từng căn hộ, cùng đội ngũ bảo vệ túc trực 24/24.",
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
            Giá trị vàng
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-4xl">
            4 Giá Trị Vàng Của Sunshine Sky City
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
