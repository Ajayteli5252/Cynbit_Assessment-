import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cynbit: {
          teal: "#065457",
          tealHover: "#043E40",
          cyan: "#0B6E6D",
          lightMint: "#F0F7F6",
          badgeBg: "#FCEEE2",
          badgeText: "#7D4D1E",
          hubBlue: "#0A63AA",
          dark: "#111827",
          grayText: "#4B5563",
          inputBg: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
