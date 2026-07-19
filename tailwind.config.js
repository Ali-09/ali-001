const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './public/index.html'
  ],
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
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        rubik: ['Rubik']
      },
      colors: {
        current: 'white',
        blueGray: colors.slate,
        // Colores del sistema de diseño
        background: 'var(--background)',
        surface: 'var(--surface)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        lines: 'var(--lines)',
        accent: 'var(--accent)'
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
