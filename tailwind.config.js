/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1440px'
    },
    flex: {
      '2': '1 0 40%',
    },
    extend: {
      backgroundImage: {
        'right-img': "url('./src/assets/right-img.svg')",
        'left-img': "url('./src/assets/left-img.svg')",
        'cats-dogs': "url('./src/assets/cats-dogs.svg')"
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          500: '#36D6AD',
        },
        blue: {
          500: '#3772FF',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          400: '#FF9D9E',
          500: '#FC7071',
        },
        gray: {
          100: '#F6F6F6',
          300: '#E5E5E5',
          500: '#BCBCBC',
          900: '#737380'
        },
        yellow: {
          100: '#FCF0E3'
        }
      },
    },
  },
  plugins: [],
}
