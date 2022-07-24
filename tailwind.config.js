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
    backgroindSize: {
      'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
       '50%': '50%',
       '16': '4rem',
    },
    extend: {
      keyframes: {
        progressBar: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'progress': 'progressBar 5s linear'
      },
      backgroundImage: {
        'right-img': "url('assets/right-img.svg')",
        'left-img': "url('assets/left-img.svg')",
        'cats-dogs': "url('assets/cats-dogs.svg')"
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
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
