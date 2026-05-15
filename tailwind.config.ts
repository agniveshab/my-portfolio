import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        blue: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          glow: "#0ea5e9",
          electric: "#00d4ff",
        },
        purple: {
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          neon: "#bf5af2",
        },
        cyan: {
          400: "#22d3ee",
          neon: "#00ffff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.3), transparent)",
        "glow-blue": "radial-gradient(circle, rgba(0,212,255,0.15), transparent 70%)",
        "glow-purple": "radial-gradient(circle, rgba(191,90,242,0.15), transparent 70%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "border-glow": "borderGlow 3s linear infinite",
        "typewriter": "typewriter 3s steps(40) forwards",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0,212,255,0.3), 0 0 20px rgba(0,212,255,0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(0,212,255,0.6), 0 0 40px rgba(0,212,255,0.3)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(0,212,255,0.5)" },
          "50%": { borderColor: "rgba(191,90,242,0.5)" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        scanLine: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)",
        "glow-purple": "0 0 20px rgba(191,90,242,0.3), 0 0 40px rgba(191,90,242,0.1)",
        "glow-sm": "0 0 10px rgba(0,212,255,0.2)",
        "inner-glow": "inset 0 0 20px rgba(0,212,255,0.05)",
        "card": "0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
