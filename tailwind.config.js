/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      'animation': {
        'gradient-x':'gradient-x 10s ease infinite',
        'gradient-y':'gradient-y 10s ease infinite',
        'gradient-xy':'gradient-xy 10s ease infinite',
        'spin-slow': 'spin-slow 15s linear infinite',
        'reverse-spin-slow': 'reverse-spin-slow 15s linear infinite',
        'bg-bottom-top': 'bg-bottom-top 40s linear infinite',
        'float': 'float 2s infinite',
      },
      'keyframes': {
        'gradient-y': {
            '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
            },
            '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
            }
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'gradient-xy': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        },
        'spin-slow': {
          '0%': {
            'transform': 'rotate(0deg)',
          },
          '100%': {
            'transform': 'rotate(360deg)',
          },
        },
        'reverse-spin-slow': {
          '0%': {
            'transform': 'rotate(360deg)',
          },
          '100%': {
            'transform': 'rotate(0deg)',
          },
        },
        'bg-bottom-top': {
          '0%': {
            'transform': 'translateY(100%)'
          },
          '100%': {
            'transform': 'translateY(-55%)'
          },
        },
        'float': {
          '0%': {
            'transform': 'translateY(0px)',
          },
          '50%': {
            'transform': 'translateY(-10px)',
          },
          '100%': {
            'transform': 'translateY(0px)',
          },
        },
      },
      animationDelay: {
        11000: '11000ms',
        15000: '15000ms',
        32000: '32000ms',
        37000: '37000ms',
        40000: '40000ms',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      colors: {
        'main': {
          light: '#F9F8FD',
          dark: '#070D1F',
        },
        'platinum': '#E3E5E9',
        'wisteria': '#CB98ED',
        'amethyst': '#8B63DA',
        'grape': '#591DA9',
        'violet-dark': '#250C46',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
