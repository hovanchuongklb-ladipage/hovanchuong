"use client";

import { Phone } from "lucide-react";

import { InfoPopup } from "@/components/InfoPopup";
import { siteConfig } from "@/config/site";

export function FloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex items-center justify-center gap-4 px-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:justify-end">
      <InfoPopup />
      <a
        href={siteConfig.zaloLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat Zalo ${siteConfig.zaloNumber}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-xl shadow-black/30 ring-4 ring-white/20 transition hover:scale-105"
      >
        <span className="text-base font-black tracking-tighter">Zalo</span>
      </a>
      <a
        href={`tel:${siteConfig.hotline}`}
        aria-label={`Gọi ngay ${siteConfig.hotlineDisplay}`}
        className="flex h-14 w-14 animate-shake-slow items-center justify-center rounded-full bg-gold-500 text-navy-950 shadow-xl shadow-black/30 ring-4 ring-gold-500/20 transition hover:scale-105"
      >
        <Phone className="h-6 w-6" fill="currentColor" />
      </a>
    </div>
  );
}
