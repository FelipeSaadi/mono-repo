import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  safelist: ["dark", "light"],
  theme: {
  },
} satisfies Config;