module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xxs': '360px',
      // => @media (min-width: 360px) { ... }
      'xs': '530px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '3': '3px'
    },

    extend: {

      gridTemplateRows:{
        'articleLayout': '100px minmax(0, 1fr)'
      }
    },
  },
  plugins: [],
}
