/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
    }
  },
  plugins: [],
  safelist: [
    "[&::-webkit-progress-value]:bg-gray-600",
    "hover:[&::-webkit-progress-value]:bg-gray-200"
  ]
}