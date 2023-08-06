/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightDark: "#24262B",
        deepDark: "#1E2024"
      }
    },
  },
  plugins: [],
}