import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        brice: ["Brice", ...defaultTheme.fontFamily.sans],
        aeonik: ["Aeonik", ...defaultTheme.fontFamily.sans],
        dm: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        eggshell: "#F2E9DB",
        crayola: "#FF9E1B",
        seashell: "#F9F6ED",
        persimmon: "#E35205",
        "dark-lemon": "#78BE20",
      },
      borderRadius: {
        32: "32px",
      },
    },
  },
  plugins: [],
} satisfies Config;
