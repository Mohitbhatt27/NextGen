/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['raleway','sans-serif'],
        nunito: ['nunito','sans-serif'],
        merriweather: ['merriweather','sans-serif'],
        quicksand: ['quicksand','sans-serif'],
      },
    },
  },
  plugins: [],
}