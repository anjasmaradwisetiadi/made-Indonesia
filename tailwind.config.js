/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary' : '#014D81',
        'red-primary': '#f02722',
        'red-secondary': '#c10e65',
        'green-primary': '#16A34A',
        'green-secondary': '#a7f3d0',
      },
    },
  },
  plugins: [],
}

