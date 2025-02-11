/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xfinity-blue': '#7B1FA2', // Changed to purple
        'xfinity-dark': '#1b2b3a',
      }
    },
  },
  plugins: [],
}