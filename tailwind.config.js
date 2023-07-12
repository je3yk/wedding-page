/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "4xl": "1920px",
      },
      colors: {
        // BLUE
        blue: "#5073B8",
        // NATURAL
        "natural-90": "#000000",
        "natural-50": "#999999",
        natural: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
