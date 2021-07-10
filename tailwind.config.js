module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '101': '40rem'
      },
      margin: {
        '13': '3.125rem'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}


