module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        'logo':'#FE6B6B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
