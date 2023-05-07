/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      spacing: {
        '0.2': '0.2rem',
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '4.5': '4.5rem',
        '5': '5rem',
        '5.5': '5.5rem',
        '6': '6rem',
        '6.5': '6.5rem',
        '7': '7rem',
        '7.5': '7.5rem',
        '8': '8rem',
        '8.5': '8.5rem',
        '9': '9rem',
        '9.5': '9.5rem',
        '10': '10rem',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        xs: '1.4rem',
        sm: '1.6rem',
        md: '1.8rem',
        base: '2.4rem',
        med: '2.8rem',
        lg: '3.2rem',
        xl: '4.2rem'
      },
      borderRadius: {
        sm: '0.6rem',
        md: '0.8rem',
        lg: '1rem',
        '4xl': '9rem'
      },
      colors: {
        blue: 'hsl(208, 49%, 24%)',
        red: {
          DEFAULT: 'hsl(356, 100%, 66%)',
          100: 'hsl(355, 100%, 74%)'
        },
        gray: {
          DEFAULT: 'hsl(207, 13%, 34%)',
          100: 'hsl(240, 2%, 79%)',
          200: 'hsl(240, 10%, 16%)'
        }
      },
      backgroundImage: {
        test: 'url(./src/assets/intro-mobile.svg), linear-gradient(135deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
        intro: 'linear-gradient(135deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
        body: 'linear-gradient(hsl(237, 17%, 21%), hsl(237, 23%, 32%))'
      },
      backgroundSize: {
        test: '300%, cover'
      },
      backgroundPosition: {
        test: 'top 36% left 39%, center'
      },
    },
  },
  plugins: [],
}

