/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem", // 1440px
        "9xl": "120rem", // 1920px
      },
      screens: {
        "4xl": "1920px",
      },
      fontSize: {
        "12xl": ["8rem", { lineHeight: 1.2 }], // 128px
        "10xl": ["4rem", { lineHeight: 1.2 }], // 64px
        "8xl": ["3.25rem", { lineHeight: 1.2 }], // 60px
        "7xl": ["3rem", { lineHeight: 1.2 }], // 48px
        "6xl": ["2.5rem", { lineHeight: 1.2 }], // 40px
        "6xl-mobile": ["2.3rem", { lineHeight: 1.2 }], // 40px
        "5xl": ["2.25rem", { lineHeight: 1.2 }], // 36px
        "4xl": ["2rem", { lineHeight: 1.2 }], // 32px
        "3xl": ["1.5rem", { lineHeight: 1.2 }], // 24px
        "2xl": ["1.25rem", { lineHeight: 1.5 }], // 20px
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
        dancing: ["var(--font-dancing-script)"],
        primary: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [],
};
