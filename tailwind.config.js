/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
     'lexend-deca':'Lexend Deca',
     'big-shoulders-display':'Big Shoulders Display' 
    },
    colors:{
      'Bright-orange': 'hsl(31, 77%, 52%)',
      'Dark-cyan': 'hsl(184, 100%, 22%)',
      'Very-dark-cyan': 'hsl(179, 100%, 13%)',
      'Transparent-white': 'hsla(0, 0%, 100%, 0.75)',
      'Very-light-gray': 'hsl(0, 0%, 95%)',
    },
    extend: {
      fontSize:{
        'main':'15px',
      },
      width:{
        'container':'55rem'
      }
      
    },
  },
  plugins: [],
}
