/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#00DC82',
        'secondary': '#020420',
      },
      boxShadow: {
        'primary': '0 0 2px 1px #00DC82',
      }
    },
  },
  plugins: [],
}

