/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bimg': "url('src/bg.jpg')",
      },
      colors: {
        'btra': 'rgba(255,255,255,0.1)',
        'bt': 'rgba(255,255,255,0.2)',
        'bor':'rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [],
}