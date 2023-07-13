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
      fontSize: {
        "12xl": ["6rem", { lineHeight: 2 }], // 96px
        "10xl": ["4.5rem", { lineHeight: 2 }], // 72px
        "8xl": ["3rem", { lineHeight: 1.5 }], // 48px
        "4xl": ["2.25rem", { lineHeight: 1.5 }], // 36px
        "3xl": ["1.875rem", { lineHeight: 1.5 }], // 30px
        "2xl": ["1.5rem", { lineHeight: 1.5 }], // 24px
        xl: ["1.125rem", { lineHeight: 1.5 }], // 18px
        lg: ["1rem", { lineHeight: 1.5 }], // 16px
        base: ["0.75rem", { lineHeight: 1.5 }], // 12px
        sm: ["0.625rem", { lineHeight: 1.5 }], // 10px
      },
      colors: {
        // BLUE
        blue: "#5073B8",
        // NATURAL
        "natural-90": "#000000",
        "natural-50": "#999999",
        natural: "#FFFFFF",
      },
      fontFamily: {
        vibes: ["var(--font-great-vibes)"],
        primary: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [],
};
