/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      

      'xl': {'max': '1279px'},
      

      'lg': {'max': '1024px'},
      

      'md': {'max': '767px'},
     

      'sm': {'max': '639px'},
      
      
      'xs': {'max': '350px'},
    },
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'rubik': ['Rubik', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'handjet': ['Handjet', 'serif'],
        'inter': ['Inter', 'serif'],
      },
      blur:{
        'xs':['2px'],
      },

      keyframes: {
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeRight: 'fadeRight 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

