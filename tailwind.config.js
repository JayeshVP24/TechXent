const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        backG: '#F0ECE8',
        elementWhiteG: '#FFF5EB',
        elementBlackG: '#000000',
        paraC: '#D8D8D8',
        titleC: '#FFFFFF'
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],

      }
    },
  },
  plugins: [],
}
