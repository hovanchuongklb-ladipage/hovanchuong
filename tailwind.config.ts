import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Deep teal-green + warm bronze-gold — matches the actual Noble Crystal
      // Riverside brand materials (logo, floor-plate headers, chiết khấu
      // graphic all use this dark teal/gold pairing), distinct from both the
      // base boilerplate's navy/gold and the Chau Thanh Vuong clone's
      // emerald/copper this project was cloned from. Token names (`navy`,
      // `gold`) are kept as-is so every component's existing
      // `bg-navy-950` / `text-gold-400` classes keep working unchanged.
      colors: {
        navy: {
          DEFAULT: "#0c2e2f",
          50: "#e8f2f2",
          100: "#c5dfe0",
          200: "#8fc0c2",
          300: "#5a9fa2",
          400: "#357779",
          500: "#215c5e",
          600: "#194648",
          700: "#143738",
          800: "#0f2c2d",
          900: "#0c2426",
          950: "#061516",
        },
        gold: {
          DEFAULT: "#c19a5b",
          50: "#faf3e7",
          100: "#f1e0c0",
          200: "#e3c68c",
          300: "#d4ac5e",
          400: "#c19a5b",
          500: "#ab8244",
          600: "#8a6836",
          700: "#6b5029",
          800: "#4a381c",
          900: "#302511",
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
