/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bulldog-red': '#ba0c2f',
        'glory-glory': '#e4002b',
      },
    }
  },
  plugins: [],
}