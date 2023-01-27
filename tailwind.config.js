/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}",
  ],
  plugins: [
    require('flowbite')
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffc57e",
        secondary: "#0DA697",
        accent: "#e28f7c",
        highlight: "#f49d34",
        focal: "#dab167",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("flowbite")],
};
