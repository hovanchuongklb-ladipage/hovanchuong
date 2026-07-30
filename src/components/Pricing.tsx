"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { LeadForm } from "@/components/LeadForm";
import { asset, siteConfig } from "@/config/site";

const paymentHighlights = [
  "Thanh toán nhanh 95% chỉ với 07 ngày trước hạn thanh toán được chiết khấu ưu đãi",
  "Vay ngân hàng hỗ trợ tới 70% giá trị HĐMB, ân hạn nợ gốc trong 18 tháng",
  "Chiết khấu 0% lãi vay trong vòng 18 tháng kể từ ngày giải ngân đầu tiên",
  "Tặng Voucher S-Decoro hoặc Voucher Sunshine Mall trị giá 10% giá trị hợp đồng",
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
            Giá Bán Căn Hộ Sunshine Sky City
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Sunshine Group công bố giá bán chính thức mới nhất. Để nhận báo giá chi
            tiết từng căn và chính sách ưu đãi đang áp dụng, quý khách vui lòng để lại
            thông tin bên dưới.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold-500/20 shadow-2xl">
            <div className="relative h-56 w-full sm:h-72">
              <Image
                src={asset(siteConfig.images.pricing)}
                alt="Toàn cảnh dự án Sunshine Sky City về đêm"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
            </div>

            <div className="space-y-6 bg-navy-950 p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                  Giá bán căn hộ tòa S2 (đã gồm VAT, chưa gồm KPBT)
                </p>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <div>
                    <span className="text-xs text-white/50">Đơn giá từ</span>
                    <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                      70,5 tr/m²
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white/50">Trung bình</span>
                    <div className="font-display text-xl font-bold text-gold-400 sm:text-2xl">
                      90 tr/m²
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 border-t border-white/10 pt-5">
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
