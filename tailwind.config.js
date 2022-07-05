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
    extend: {
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
          500: '#BCBCBC',
          900: '#737380'
        },
        neutral: {
          100: 'FCF0E3'
        }
      },
    },
  },
  plugins: [],
}
