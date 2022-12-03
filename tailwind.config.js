/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'navText-lg': '1.05rem',
        'navText-md': '.9rem',
        'navText-sm': '.7rem',
        'navText-phone': '.5rem',
      }
    },
  },
  plugins: [],
}
