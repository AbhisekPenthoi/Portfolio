import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean, professional color palette
        background: "#111827", // Deep charcoal
        primary: "#1F2937",   // Rich gray
        secondary: "#374151", // Medium gray
        accent: "#3B82F6",   // Classic blue
        border: "#374151",   // Subtle border
        text: {
          primary: "#F9FAFB",   // Clean white
          secondary: "#9CA3AF", // Muted gray
          accent: "#60A5FA"     // Light blue for links/highlights
        }
      }
    },
  },
  plugins: [],
}

export default config 