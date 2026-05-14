import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#071a33",
        navy: "#0b2545",
        gold: "#d6a84f",
        cream: "#fbf7ef"
      },
      boxShadow: { soft: "0 18px 60px rgba(7,26,51,.12)" }
    },
  },
  plugins: [],
};
export default config;
