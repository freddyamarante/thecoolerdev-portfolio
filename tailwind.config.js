/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
    "assets/**/*.{vue,js}",
  ],
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
