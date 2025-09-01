/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { navy: "#1F2A44", gold: "#D4AF37", bg: "#FFFFFF", accent: "#F5F5F5" }
      },
      borderRadius: { "2xl": "1rem" }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
