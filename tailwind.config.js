/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/css/tailwind.css"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
