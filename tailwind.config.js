/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: ["index.html"],
  theme: {
    extend: {
      animation: {
        'shake':'shake 4s linear infinite',
        'bounce': 'bounce 7s linear infinite',
        'splash': 'splash 3s linear infinite',
        // 'bounce-linear': 'bounce 8s linear infinite',
        'wiggle' : 'wiggle 5s linear infinite'
      },
      keyframes:{
        'bounce' :{
        '0%, 100%':{'transform': 'translateX(-2%)'},
        '50%': { 'transform':'translateY(2%)'},
      },
      'shake':{
        '0%, 100%':{'transform': 'translateY(-2%)'},
        '50%': { 'transform':'translateX(1%)'},
      },
      'wiggle': {
        '0%, 100%': { 'transform': 'rotate(-5deg)' },
        '50%': { 'transform': 'rotate(1deg)' },}
    },
      fontFamily:{
        'sans':['montserrat']
      },
      height:{
        '97':'30rem',
        '98':'35rem',
        '100' : '45rem',
      },
      dropShadow:{
        '2xl': '0 0px 25px rgba(3, 0, 0, 0.85)',
        '3xl': '1px 13px 15px rgba(0, 83, 156, 0.65)',
        '4xl': '0px 10px 10px rgba(3, 0, 0, 1)',
        '5xl': '1px 13px 5px rgba(0, 83, 156, 0.85)',
      },
      colors:{
        'primary':'#DDA94B',
        'tree':'#1AAFBC',
        'second':'#1E4174',
      }
    },
  },
  plugins: [],
}

