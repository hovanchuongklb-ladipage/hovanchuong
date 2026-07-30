"use client";

import { Clock3, MapPin } from "lucide-react";
import Image from "next/image";

import { asset, siteConfig } from "@/config/site";

const distances = [
  { place: "Crescent Mall & Vivo City", time: "4 - 12 phút" },
  { place: "Hồ Bán Nguyệt & Cầu Ánh Sao", time: "5 phút" },
  { place: "Bệnh viện FV & Tim Tâm Đức", time: "5 - 6 phút" },
  { place: "Trường Quốc tế Nhật Bản, Hàn Quốc, Đài Loan", time: "4 phút" },
  { place: "Trường Quốc tế RMIT", time: "13 phút" },
  { place: "Trung tâm Tài chính Thủ Thiêm", time: "~20 phút" },
];

export function Location() {
  return (
    <section id="vi-tri" className="bg-navy-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            Vị trí kim cương
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-4xl">
            Kết Nối Trọn Vẹn Giữa Lòng Quận 7
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Sunshine Sky City tọa lạc ngay nút giao ngã tư đường Phú Thuận &amp; Huỳnh
            Tấn Phát, Phường Tân Phú, Quận 7 — liền kề khu đô thị Phú Mỹ Hưng,
            hợp long 2 nhánh sông Cả Cấm, sở hữu thế đất &ldquo;kề sông cận thủy&rdquo;
            hiếm có.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/20 bg-white shadow-2xl lg:col-span-3">
            <Image
              src={asset(siteConfig.images.location)}
              alt="Bản đồ liên kết vùng khu vực Quận 7 quanh Sunshine Sky City"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent px-4 pb-4 pt-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-950/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
                <MapPin className="h-4 w-4 text-gold-400" />
                Ngã tư Phú Thuận &amp; Huỳnh Tấn Phát, Quận 7, TP.HCM
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
