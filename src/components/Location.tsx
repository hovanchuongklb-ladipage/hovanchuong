"use client";

import { Clock3, MapPin } from "lucide-react";
import Image from "next/image";

import { asset, siteConfig } from "@/config/site";

const distances = [
  { place: "Cao tốc Bến Lức - Long Thành & Vành đai 3", time: "Hoàn thành" },
  { place: "Đường trên cao Nguyễn Hữu Thọ & Nguyễn Văn Linh", time: "Khởi công" },
  { place: "Cầu Thủ Thiêm 4 & Metro Bến Thành - Cần Giờ", time: "Hoàn thành" },
  { place: "Cầu Phú Mỹ 2 & Cầu Cần Giờ", time: "Hoàn thành" },
  { place: "Metro số 4 (Hiệp Phước - Đồng Thạnh)", time: "Khởi công" },
  { place: "Sân bay Quốc tế Long Thành", time: "Hoàn thành" },
];

export function Location() {
  return (
    <section id="vi-tri" className="bg-navy-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            Động lực tăng trưởng Quận 7
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-4xl">
            Hạ Tầng Khu Nam Tăng Tốc 2026 - 2030
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {siteConfig.name} tọa lạc trên trục đường Đào Trí, Phường Phú Thuận,
            Quận 7 — liền kề khu đô thị Phú Mỹ Hưng, đón đầu làn sóng hạ tầng
            &ldquo;hạ tầng đi trước, bất động sản tăng giá theo sau&rdquo; của
            khu Nam Sài Gòn.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/20 bg-white shadow-2xl lg:col-span-3">
            <Image
              src={asset(siteConfig.images.location)}
              alt="Hạ tầng khu Nam tăng tốc 2026-2030 quanh Noble Crystal Riverside"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent px-4 pb-4 pt-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-950/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
                <MapPin className="h-4 w-4 text-gold-400" />
                Đường Đào Trí, Phường Phú Thuận, Quận 7, TP.HCM
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ul className="space-y-3">
              {distances.map((item) => (
                <li
                  key={item.place}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
                >
                  <span className="text-sm text-white/85 sm:text-base">{item.place}</span>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-bold text-gold-400 sm:text-sm">
                    <Clock3 className="h-3.5 w-3.5" />
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
