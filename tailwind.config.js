/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'home': '#222438',
        'black': '#000000',
        'lighBlack': '#16181C',
        'darkGray': '#1B1D20',
        'darkBlue':'#1D2C38'
      }
    }

  },
  plugins: [],
}