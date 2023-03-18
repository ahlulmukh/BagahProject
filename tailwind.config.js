/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl' : '1320px',
      },
      colors: {
        dark : '#0f172a',
        primary : '#8095E8',
      },
      fontFamily:{
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

