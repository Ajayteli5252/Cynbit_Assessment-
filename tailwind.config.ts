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
          bg: "#070A13",
          surface: "#0D111F",
          card: "#131B2E",
          cardHover: "#18233C",
          border: "#1E293B",
          borderHover: "#38BDF8",
          cyan: "#00F0FF",
          cyanMuted: "#38BDF8",
          purple: "#8B5CF6",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Menlo', 'Monaco', 'Consolas', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 240, 255, 0.25)",
        glowPurple: "0 0 25px -5px rgba(139, 92, 246, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
