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
        bg: "#000000",
        "bg-elevated": "#0A0A0A",
        "bg-card": "#111111",
        border: "#1F1F1F",
        "border-strong": "#2A2A2A",
        text: "#FFFFFF",
        fg: "#FFFFFF",
        "text-dim": "#8A8A8A",
        "text-muted": "#5A5A5A",
        accent: "#1FA8E0",
        "accent-deep": "#0A4F7A",
        alert: "#E63946",
        warm: "#E87722",
      },
      fontFamily: {
        display: ["var(--font-bebas-neue)", "sans-serif"],
        sans: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
