/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Mobile
      md: "768px", // Tablet
      lg: "1024px", // Desktop
      xl: "1280px", // Large desktop

      // custom
      "2xl": "1512px",
      "3xl": "1728px",
    },
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        logo: ["Ruluko", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ["17px", "21px"],
        xs: ["12px", "1.4"],
        sm: ["14px", "1.45"],
        lg: ["18px", "1.55"],
        xl: ["20px", "1.6"],
      },
      colors: {
        primary: "#ffcf3a",
        secondary: "#1E98D1",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
