/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-blue': '#F13304D',
        'medium-blue': '#425E7A',
        'light-blue': '#F3F7FA'
      }
    },
  },
  plugins: [],
}