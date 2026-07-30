"use client";

import { Download } from "lucide-react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { asset, siteConfig } from "@/config/site";

function TowerStructureTab() {
  const floorPlans = siteConfig.sections.floorPlans;

  return (
    <Tabs defaultValue={floorPlans[0].id} className="flex flex-col items-center">
      <TabsList>
        {floorPlans.map((plan) => (
          <TabsTrigger key={plan.id} value={plan.id}>
            {plan.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {floorPlans.map((plan) => (
        <TabsContent key={plan.id} value={plan.id} className="w-full">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-500/20 shadow-2xl">
              <Image
                src={asset(plan.image)}
                alt={`Mặt bằng điển hình ${plan.name} ${siteConfig.name}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Cơ cấu sản phẩm {plan.name}
              </h3>
              <p className="mt-2 text-sm text-white/60">{plan.specs}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {plan.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center"
                  >
                    <div className="font-display text-2xl font-bold text-gold-400 sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-white/60 sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#gia-ban"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border-2 border-gold-500 px-6 py-3.5 text-sm font-bold text-gold-400 transition hover:bg-gold-500 hover:text-navy-950 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Nhận Mặt Bằng Chi Tiết {plan.name}
              </a>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

function ApartmentTypesTab() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {siteConfig.sections.apartmentTypes.map((type) => (
        <div
          key={type.id}
          className="overflow-hidden rounded-2xl border border-gold-500/20 bg-white/5 shadow-2xl"
        >
          <div className="relative aspect-[3/4] w-full bg-white">
            <Image
              src={asset(type.image)}
              alt={`Mặt bằng ${type.name} ${siteConfig.name}`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-contain"
            />
          </div>
          <div className="p-5">
            <h3 className="font-display text-base font-bold text-white sm:text-lg">
              {type.name}
            </h3>
            <div className="mt-3 grid grid-cols-2 divide-x divide-white/10 rounded-xl border border-white/10 text-center">
              <div className="px-2 py-3">
                <div className="text-[11px] uppercase tracking-wide text-white/50">
                  Diện tích thông thủy
                </div>
                <div className="mt-1 font-display text-base font-bold text-gold-400">
                  {type.areaThongThuy}
                </div>
              </div>
              <div className="px-2 py-3">
                <div className="text-[11px] uppercase tracking-wide text-white/50">
                  Diện tích tim tường
                </div>
                <div className="mt-1 font-display text-base font-bold text-gold-400">
                  {type.areaTimTuong}
                </div>
              </div>
            </div>

            {type.gallery.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {type.gallery.map((image) => (
                  <div
                    key={image}
                    className="relative aspect-video overflow-hidden rounded-lg"
                  >
                    <Image
                      src={asset(image)}
                      alt={`Căn hộ mẫu ${type.name}`}
                      fill
                      sizes="(min-width: 768px) 16vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function TowerFloorPlatesTab() {
  const plates = siteConfig.sections.towerFloorPlates;
  const towers = Array.from(new Set(plates.map((plate) => plate.tower)));

  return (
    <div className="space-y-10">
      {towers.map((tower) => (
        <div key={tower}>
          <h3 className="font-display text-lg font-bold text-white sm:text-xl">{tower}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {plates
              .filter((plate) => plate.tower === tower)
              .map((plate) => (
                <div
                  key={plate.id}
                  className="overflow-hidden rounded-2xl border border-gold-500/20 bg-white shadow-2xl"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={asset(plate.image)}
                      alt={`Mặt bằng tầng ${plate.tower} ${plate.floorRange}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-navy-950 px-4 py-3">
                    <span className="text-sm font-semibold text-white">{plate.floorRange}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function FloorPlan() {
  return (
    <section id="mat-bang" className="bg-navy-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            Mặt bằng dự án
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-4xl">
            Cơ Cấu Loại Hình & Mặt Bằng Chi Tiết
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Tổng diện tích dự án 4,2 ha với 3.140 sản phẩm gồm Văn phòng đa năng, Căn
            hộ và Sky Villa, phân bổ trên 3 tòa tháp cao 9 – 38 tầng.
          </p>
        </div>

        <Tabs defaultValue="cocau" className="mt-12 flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="cocau">Cơ cấu tòa</TabsTrigger>
            <TabsTrigger value="loaican">Loại căn hộ</TabsTrigger>
            <TabsTrigger value="mattang">Mặt bằng tầng</TabsTrigger>
          </TabsList>

          <TabsContent value="cocau" className="w-full">
            <TowerStructureTab />
          </TabsContent>

          <TabsContent value="loaican" className="w-full">
            <ApartmentTypesTab />
          </TabsContent>

          <TabsContent value="mattang" className="w-full">
            <TowerFloorPlatesTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
