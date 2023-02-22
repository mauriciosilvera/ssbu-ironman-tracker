/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#7FBCD2',
        secondary: '#E1FFEE',
        buttons: '#FBDF07',
      },
      fontFamily: {
        seriff: ['PT sans, sans-seriff'],
      },
    },
  },
  plugins: [],
};
