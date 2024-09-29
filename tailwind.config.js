const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './public/index.html'
  ],
  textColor: {
    'primary': '#3490dc',
    'secondary': '#ffed4a',
    'danger': '#e3342f',
  },
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0
          },
        }
      },
      animation: {
          fade: 'fade 1.5s ease-in-out infinite'
      },
      fontFamily:{
        rubik:['Rubik']
      },
      colors: {
        current: 'white',
        blueGray: colors.slate
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
