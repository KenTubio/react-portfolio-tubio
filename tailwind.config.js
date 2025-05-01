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
      
      
      'xs': {'max': '450px'},
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
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(90deg)" },
        
        },

        asideL: {
          "0%": { transform: "translateX(20px)" },
          "50%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(20px)"},

        },

        asideR: {
          "0%": { transform: "translateX(-20px)" },
          "50%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-20px)"},

        },

        shake: {
          
        },

        slider: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        
        },
      },

      animation: {
        rotate: "rotate 2s ease-in-out infinite",
        slider: "slider 10s ease-in-out infinite",
        asideL: "asideL 2s ease-in-out infinite",
        asideR: "asideR 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

