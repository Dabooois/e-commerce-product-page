/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        darkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: ' hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        paragraph: 'rgba(69, 69, 69, 0.75)',
        blackTransparent: 'rgba(0, 0, 0, 0.7)',
      },
      fontSize: {
        title: '3rem',
      },
    },
  },
  plugins: [],
};
