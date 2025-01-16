import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['var(--font-opensans)']
      },
      colors: {
        orangeClr: "#f08a06",
        lightGray: "rgb(241, 241, 241)"
      }
    },
  },
  plugins: [],
} satisfies Config;
