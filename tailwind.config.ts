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
          teal: "#006067",
          tealDark: "#004e54",
          cyan: "#006971",
          mintBg: "#F7FAFA",
          mintCard: "#EAF2F2",
          badgeBg: "#FFDDB3",
          badgeText: "#9A5816",
          hubBlue: "#0E6EAF",
          inputBg: "#F1F4F4",
          syncCard: "#CFDBDB",
          dark: "#111827",
          grayText: "#4B5563",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
