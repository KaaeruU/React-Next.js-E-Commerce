import type { Config } from "tailwindcss";
import colors from "./src/lib/tailwind/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        robotoCondensed: ['"Roboto Condensed"', "sans-serif"],
      },
      fontSize: {
        14: "0.9rem",
        16: "1rem",
        18: "1.1rem",
        20: "1.2rem",
        24: "1.5rem",
        28: "1.7rem",
        48: "3rem",
        64: "4rem",
      },
      lineHeight: {
        120: "120%",
        150: "150%",
        200: "200%",
      },
      rotate: {
        45: "45deg",
        135: "-135deg",
        180: "180deg",
        90: "90deg",
        265: "265deg",
      },
    },
  },
  plugins: [],
};
export default config;
