import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblack: {
          400: "#2A2E37", // border shade
          600: "#1E2128", // sidebar background
          700: "#171A1F", // navbar / darker sections
        },
        bgray: {
          50: "#F9FAFB",
          200: "#E5E7EB",
          300: "#D1D5DB",
          500: "#6B7280",
          700: "#374151",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
}

export default config
