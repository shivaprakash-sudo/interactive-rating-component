/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(25, 97%, 53%)"
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(217, 12%, 63%)",
          300: "hsl(216, 12%, 54%)",
          400: "hsl(213, 19%, 18%)",
          500: "hsl(216, 12%, 8%)"
        }
      },
      fontFamily: ["Overpass", ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [],
};
