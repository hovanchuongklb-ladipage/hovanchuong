"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { asset, siteConfig } from "@/config/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = siteConfig.nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/95 shadow-lg shadow-black/20 backdrop-blur-sm"
          : "bg-gradient-to-b from-navy-950/90 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#tong-quan"
          onClick={(e) => { e.preventDefault(); handleNavClick("#tong-quan"); }}
          className="flex items-center gap-2"
          aria-label={siteConfig.name}
        >
          <div className="relative h-9 w-36 shrink-0 rounded-lg bg-white px-2 py-1.5 shadow-sm sm:h-11 sm:w-44">
            <Image
              src={asset("/images/noble-crystal-riverside/logo.png")}
              alt={siteConfig.name}
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain object-left"
            />
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSection === item.href
                  ? "bg-gold-500 text-navy-950"
                  : "text-white/80 hover:text-gold-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.hotline}`}
            className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-gold-400 sm:flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.hotlineDisplay}
          </a>
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-full p-2 text-white lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-navy-950 px-4 py-4 lg:hidden">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                activeSection === item.href
                  ? "bg-gold-500 text-navy-950"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={`tel:${siteConfig.hotline}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-bold text-navy-950"
          >
            <Phone className="h-4 w-4" />
            Gọi ngay {siteConfig.hotlineDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
