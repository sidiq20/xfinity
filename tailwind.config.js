/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xfinity-blue': '#0272ce',
        'xfinity-dark': '#1b2b3a',
      }
    },
  },
  plugins: [],
}