import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // "Ngọc Lục Bảo & Đồng Cổ" (emerald & antique copper) — a distinct
      // palette from the base boilerplate's navy/gold for this clone. Token
      // names (`navy`, `gold`) are kept as-is so every component's existing
      // `bg-navy-950` / `text-gold-400` classes keep working unchanged; only
      // the hex values differ, so recoloring a future clone is always a
      // config-only change here, never a per-component edit.
      colors: {
        navy: {
          DEFAULT: "#04231c",
          50: "#e8f4f0",
          100: "#c3e1d6",
          200: "#8cc4ac",
          300: "#59a482",
          400: "#357d5f",
          500: "#245f47",
          600: "#1a4735",
          700: "#143627",
          800: "#0e2a1e",
          900: "#0a2118",
          950: "#04120d",
        },
        gold: {
          DEFAULT: "#c8823f",
          50: "#fbf1e6",
          100: "#f2dcbd",
          200: "#e4bd84",
          300: "#d59f57",
          400: "#c8823f",
          500: "#b56d31",
          600: "#925627",
          700: "#70421e",
          800: "#4d2d15",
          900: "#33200f",
        },
      },
      // Font variables come from next/font/google in src/app/layout.tsx (Lora
      // + Nunito Sans) — a pairing distinct from the base boilerplate's
      // Playfair Display / Be Vietnam Pro.
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      // Softer, more rounded corners than Tailwind's defaults (xl: 0.75rem,
      // 2xl: 1rem) for a warmer, more organic feel matching the emerald/
      // copper palette — every existing `rounded-xl`/`rounded-2xl` class
      // picks this up automatically, no component edits needed.
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      animation: {
        "shake-slow": "shake 3s ease-in-out infinite",
        "bounce-slow": "bounce 2.5s infinite",
      },
      keyframes: {
        shake: {
          "0%, 90%, 100%": { transform: "rotate(0deg)" },
          "92%": { transform: "rotate(-12deg)" },
          "94%": { transform: "rotate(10deg)" },
          "96%": { transform: "rotate(-8deg)" },
          "98%": { transform: "rotate(6deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
