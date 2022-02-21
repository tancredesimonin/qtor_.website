const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Code', 'sans-serif'],
    },
    colors: {
      primary: colors.indigo
    }
    },
  },
  plugins: [],
}
