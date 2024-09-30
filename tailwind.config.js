import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dusty-violet': '#C7C0D9',
        'dark-grey': '#3C3D3E',
        'light-grey': '#C7D0D9',
      },
      keyframes: {
        move: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
      },
      animation: {
        move: 'move 50s linear infinite',
      },
      boxShadow: {
        'custom-gallery': '0px 60px 41px 0px #0000001F',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }
],
}