
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    screens: {
      '2xl-max-width': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl-max-width': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg-max-width': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md-max-width': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm-max-width': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
