/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {

    extend: {
      colors: {
        primary: '#0D47A1',
        primary2:'#1771FD',
        secondary: '#F28D13',
        egrey: '#777777',
        primaryLite: '#0054D7',
        primary: '#0D47A1',
        lite: '#FFFCC8',
        success:'#08AD36',
        warning:'#FF0000',
        eteal:'#DDFFE6',
        secondaryLite:'#FDA944',
      },
    },
  },
  plugins: [],
}
