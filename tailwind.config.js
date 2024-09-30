/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'hk-grotesk': ['Hk Grotesk', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '7.5rem',
      },
      colors: {
        'pink-600': '#ff3258',
        'white-1': '#e5e5e6da',
      },

    },
  },
  plugins: [],
}
