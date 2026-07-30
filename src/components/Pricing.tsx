"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { LeadForm } from "@/components/LeadForm";
import { asset, siteConfig } from "@/config/site";

const paymentHighlights = [
  "Bình ổn lãi suất 8% trong 12 tháng tiếp theo",
  "Ưu đãi lãi suất 0% trong vòng 24 tháng",
  "Hỗ trợ vay ngân hàng lên đến 70% giá trị hợp đồng",
  "Đặc quyền chiết khấu mở bán giới hạn 3% cho khách hàng đăng ký sớm",
];

export function Pricing() {
  return (
    <section id="gia-ban" className="bg-navy-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            Giá bán &amp; chính sách thanh toán
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-4xl">
            Chiết Khấu Thanh Toán {siteConfig.name}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {siteConfig.developer} công bố chính sách bán hàng mới nhất. Để nhận báo
            giá chi tiết từng căn và chính sách ưu đãi đang áp dụng, quý khách vui
            lòng để lại thông tin bên dưới.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold-500/20 shadow-2xl">
            <div className="relative h-56 w-full bg-white sm:h-72">
              <Image
                src={asset(siteConfig.images.pricing)}
                alt="Chính sách chiết khấu thanh toán Noble Crystal Riverside"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>

            <div className="space-y-6 bg-navy-950 p-6 sm:p-8">
              <ul className="space-y-3">
                {paymentHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-gold-500/30 bg-navy-950 p-6 shadow-2xl sm:p-8">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              Đăng Ký Nhận Bảng Giá &amp; Chính Sách Mới Nhất
            </h3>
            <p className="mt-2 text-sm text-white/65">
              Để tìm hiểu thông tin chi tiết, quý khách vui lòng để lại thông tin.
              Phòng kinh doanh sẽ liên hệ trong thời gian sớm nhất.
            </p>
            <div className="mt-6">
              <LeadForm source="Section Giá bán & Thanh toán" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
