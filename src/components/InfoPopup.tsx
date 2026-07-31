"use client";

import { FileText } from "lucide-react";

import { LeadForm } from "@/components/LeadForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";

export function InfoPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Nhận thông tin dự án"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-700 text-gold-400 shadow-xl shadow-black/30 ring-4 ring-navy-500/20 transition hover:scale-105"
        >
          <FileText className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent title={`Thông Tin Dự Án ${siteConfig.name}`}>
        <dl className="mt-3 space-y-1.5 text-sm text-white/70">
          <div className="flex gap-2">
            <dt className="font-semibold text-gold-300">Chủ đầu tư:</dt>
            <dd>{siteConfig.developer}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-gold-300">Vị trí:</dt>
            <dd>{siteConfig.address}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold text-gold-300">Hotline:</dt>
            <dd>{siteConfig.hotlineDisplay}</dd>
          </div>
        </dl>
        <p className="mt-3 text-sm leading-relaxed text-white/70">
          Để lại thông tin để nhận tài liệu, bảng giá chi tiết và chính sách ưu đãi mới
          nhất từ {siteConfig.name}. Đội ngũ tư vấn sẽ liên hệ trong thời gian sớm nhất.
        </p>
        <div className="mt-5">
          <LeadForm source="Popup Thông Tin Dự Án" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
