/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#007FFF",
        secondary:"#1F1534",
        secondaryGray:"#000",
        secondaryBg:"#F4F6F9",
        inputBorder:"#666666",
        levelGreen:"#006769"
      }
    },
  },
  plugins: [],
}