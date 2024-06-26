import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hocs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF005C",
        secondary: "#00FF66",
        background: "#262626",
        backgrondSec: "#444343",
        gray: "#B1B1B1",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
      },
    },
  },
  plugins: [],
};
export default config;
