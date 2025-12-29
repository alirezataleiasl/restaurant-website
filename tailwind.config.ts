import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}", // این خط برای ساختار Scalable ما مهم است
  ],
  theme: {
    extend: {
      fontFamily: {
        // اینجا فونت‌های لود شده در layout.tsx را به Tailwind وصل می‌کنیم
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-vazir)", "sans-serif"],
      },
      colors: {
        // رنگ‌های پیشنهادی برای استایل Una Pizza
        brand: {
          black: "#111111",
          white: "#fcfcfc",
        }
      }
    },
  },
  plugins: [],
};
export default config;