"use client";

import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";

import { asset, siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="tong-quan" className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-navy-950">
      <Image
        src={asset(siteConfig.images.hero)}
        alt="Noble Crystal Riverside - Tổng mặt bằng dự án hình số 8 ven sông Quận 7"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/20 to-navy-950/80" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-20 text-center sm:px-6">
        <span className="rounded-full border border-gold-400/60 bg-navy-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 sm:text-sm">
          Tổ Hợp Căn Hộ 4.0 Ven Sông Nam Sài Gòn
        </span>

        <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Không Gian Nghỉ Dưỡng
          <span className="block text-gold-400">Hình Số 8 Độc Bản</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
          {siteConfig.name} tọa lạc trên trục đường Đào Trí, Phường Phú Thuận,
          liền kề Phú Mỹ Hưng — phát triển bởi Sunshine Group giữa lòng
          Quận 7, TP. Hồ Chí Minh.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={`tel:${siteConfig.hotline}`}
            className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400"
          >
            <Phone className="h-4 w-4" />
            Hotline {siteConfig.hotlineDisplay}
          </a>
          <a
            href="#gia-ban"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-gold-400 hover:text-gold-400"
          >
            Nhận Bảng Giá Mới Nhất
          </a>
        </div>

        <dl className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4">
          {[
            { label: "Vị trí", value: "Đảo Trí, Quận 7" },
            { label: "Số căn / tầng", value: "10 căn" },
            { label: "Loại hình", value: "2-5PN & Sky Villa" },
            { label: "Số tầng", value: "37 tầng" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <dt className="text-[11px] uppercase tracking-wide text-white/60 sm:text-xs">
                {item.label}
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-gold-400 sm:text-xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#vi-tri"
        aria-label="Cuộn xuống xem thêm"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce-slow text-white/70 hover:text-gold-400"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}
