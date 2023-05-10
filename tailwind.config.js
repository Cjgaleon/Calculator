/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'light':'f9f9f9',
        'light-btn':'#f7f7f7',
        'red':'#ee8083',
        'green':'#8cdece',
        'dark-gray':'#63646a',
        'light-gray':'#e1e1e1',
        'dark-1':'#22252d',
        'dark-2':'#2a2d37',
        'dark-btn':'#282b33',
      }
    },
  },
  plugins: [],
}
