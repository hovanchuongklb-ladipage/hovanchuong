"use client";

import { Sun, Wind } from "lucide-react";
import Image from "next/image";

import { asset, siteConfig } from "@/config/site";

const unitTypes = [
  { type: "2 Phòng ngủ", area: "104,4 - 116,6 m²" },
  { type: "3 Phòng ngủ", area: "141,0 - 141,9 m²" },
  { type: "Sky Villa Duplex", area: "~214 m² (2 tầng)" },
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
            Không Gian Sống Tối Ưu Công Năng
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Căn hộ {siteConfig.name} được bố trí công năng tối ưu với ban công
            lớn đón nắng và gió tự nhiên, mang lại không gian sống thông thoáng
            cho mọi thành viên trong gia đình.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/20 bg-white shadow-2xl">
            <Image
              src={asset(siteConfig.images.apartmentDesign.living)}
              alt="Phối cảnh 3D căn hộ 2 phòng ngủ Noble Crystal Riverside"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/20 bg-white shadow-2xl">
            <Image
              src={asset(siteConfig.images.apartmentDesign.kitchen)}
              alt="Phối cảnh 3D căn hộ 3 phòng ngủ Noble Crystal Riverside"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-contain"
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
