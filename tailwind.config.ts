import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vip-1' : "#F7F1E3",
        'vip-2' : "#101E25",
        'vip-3' : "#749BAE",
        'vip-4' : "#B8CACA",
        'vip-5' : "#FFC073",
      }
    },
  },
  plugins: [],
};
export default config;
