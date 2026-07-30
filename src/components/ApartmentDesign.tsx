"use client";

import { Sun, Wind } from "lucide-react";
import Image from "next/image";

import { asset, siteConfig } from "@/config/site";

const unitTypes = [
  { type: "1 Phòng ngủ", area: "50 m²" },
  { type: "2 Phòng ngủ + 2WC", area: "82 - 88 m²" },
  { type: "3 Phòng ngủ + 2WC", area: "117 m²" },
];

export function ApartmentDesign() {
  return (
    <section id="thiet-ke" className="bg-navy-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            Thiết kế căn hộ
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-4xl">
            Không Gian Sống Chuẩn Châu Âu
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Căn hộ Sunshine Sky City được thiết kế theo phong cách Châu Âu với kết cấu
            khối vuông vức, cửa sổ lớn đón nắng và gió tự nhiên, mang lại không gian
            sống thông thoáng, gắn kết mọi thành viên trong gia đình.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/20 shadow-2xl">
            <Image
              src={asset(siteConfig.images.apartmentDesign.living)}
              alt="Phòng khách căn hộ Sunshine Sky City thiết kế trần cao, nội thất cao cấp"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/20 shadow-2xl">
            <Image
              src={asset(siteConfig.images.apartmentDesign.kitchen)}
              alt="Không gian bếp và phòng ăn căn hộ Sunshine Sky City"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {unitTypes.map((unit) => (
                <div
                  key={unit.type}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-5 text-center"
                >
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    {unit.type}
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-gold-400">
                    {unit.area}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-5">
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Sun className="h-5 w-5 shrink-0 text-gold-400" />
              Mọi phòng đều đón nắng &amp; gió tự nhiên
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Wind className="h-5 w-5 shrink-0 text-gold-400" />
              Lô gia thông bếp, tăng cảm giác rộng thoáng
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
