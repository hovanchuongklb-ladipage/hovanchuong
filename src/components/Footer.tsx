import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer id="lien-he" className="border-t border-white/10 bg-navy-950 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400 font-display text-sm font-bold text-gold-400">
              N
            </span>
            <span className="font-display text-lg font-bold text-white">
              {siteConfig.name.toUpperCase()}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400 hover:text-gold-400"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400 hover:text-gold-400"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-gold-400">
            Địa chỉ dự án
          </h4>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
            {siteConfig.address}
          </p>
          <h4 className="mt-6 text-sm font-bold uppercase tracking-wide text-gold-400">
            Văn phòng tư vấn bán hàng
          </h4>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
            {siteConfig.salesOffice}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-gold-400">
            Liên hệ
          </h4>
          <a
            href={`tel:${siteConfig.hotline}`}
            className="mt-3 flex items-center gap-2 text-sm text-white/70 hover:text-gold-400"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            Hotline: {siteConfig.hotlineDisplay}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 flex items-center gap-2 text-sm text-white/70 hover:text-gold-400"
          >
            <Mail className="h-4 w-4 text-gold-400" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
          >
            Chat Zalo tư vấn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-white/40 sm:px-6 lg:px-8">
        Copyright &copy; {new Date().getFullYear()} {siteConfig.name}. Trang thông tin
        được xây dựng phục vụ mục đích tư vấn, giới thiệu dự án.
      </div>
    </footer>
  );
}
