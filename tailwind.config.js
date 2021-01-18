module.exports = {
  purge: ['./app/dashboard/templates/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        warning: '#FF6969',
        black: {
          100: '#132241',
          80: 'rgba(19, 34, 65, 0.8)',
          70: 'rgba(19, 34, 65, 0.7)',
          60: 'rgba(19, 34, 65, 0.6)',
          40: 'rgba(19, 34, 65, 0.4)',
          20: 'rgba(19, 34, 65, 0.2)',
          10: 'rgba(19, 34, 65, 0.1)',
          5: 'rgba(19, 34, 65, 0.05)',
        },
        white: {
          40: 'rgba(255, 255, 255, 0.4)',
          20: 'rgba(255, 255, 255, 0.2)',
          5: 'rgba(255, 255, 255, 0.05)',
        },
        primary: {
          100: '#3D39FF',
          90: 'rgba(61, 57, 255, 0.9)',
          80: 'rgba(61, 57, 255, 0.8)',
          60: 'rgba(61, 57, 255, 0.6)',
          50: 'rgba(61, 57, 255, 0.5)',
          40: 'rgba(61, 57, 255, 0.4)',
          10: 'rgba(61, 57, 255, 0.1)',
          8: 'rgba(61, 57, 255, 0.08)',
          5: 'rgba(61, 57, 255, 0.05)',
          3: 'rgba(61, 57, 255, 0.03)',
        },
        secondary: {
          green: '#76DAC8',
          yellow: '#D4D3AD',
          pink: '#E59195',
          blue: '#4551BB',
          neon: ' rgba(0, 255, 255, 0.8)',
          100: '#CC00FF',
          80: 'rgba(204, 0, 255, 0.8)',
        },
      },
      fontFamily: {
        body: ['TT Commons'],
      },
      fontSize: {
        60: '60px',
        40: '40px',
      },
      boxShadow: {
        popup: '0px 4px 40px rgba(19, 34, 65, 0.05)',
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover'],
      opacity: ['disabled'],
      placeholderColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
};

