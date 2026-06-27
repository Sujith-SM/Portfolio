import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        card: "#111111",
        accent: "#a3a3a3",
        cyan: "#d4d4d4",
        success: "#22C55E"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glass: "0 10px 34px rgba(255, 255, 255, 0.08)",
        soft: "0 14px 40px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.09), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.07), transparent 44%)"
      }
    }
  },
  plugins: []
} satisfies Config;
