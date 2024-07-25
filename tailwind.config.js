/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-top': 'linear-gradient(to top, #13357B 50%, transparent 50%)',
        'gradient-to-bottom': 'linear-gradient(to bottom, #13337b99 50%, transparent 50%)',
      },
    
   
    },
  },

  plugins: [],
}