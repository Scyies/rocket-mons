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
      backgroundSize: {
        'mobile': '5rem',
        'tablet': '7rem'
      },
      keyframes: {
        progressBar: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        cardRender: {
          '0%': { transform: 'translateY(100%)',
                  opacity: '0'        
                },
          '100%': { transform: 'translateY(0%)',
                    opacity: '1'
                  }
        },
        noCardsRender: {
          '0%': { transform: 'translateY(-50%)',
                  opacity: '0'        
                },
          '100%': { transform: 'translateY(0%)',
                    opacity: '1'
                  }
        }
      },
      animation: {
        'progress': 'progressBar 5s linear',
        'cardRender': 'cardRender .3s linear',
        'noCardsRender': 'noCardsRender .3s linear'
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
