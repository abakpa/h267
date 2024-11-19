/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        darkPurple: '#34204A', 
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        brandColor:'#6107F2',
        brightRed: 'hsl(12, 88%, 59%)',
      },
    },
  },
  plugins: [],
}