/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      buttonColor:'#255652',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],theme: {
    "extend": {
      "colors": {
      "white": "#fff",
      "neutral-gray": "#8d8d8d",
      "black": "#000",
      "darkslategray": "#255652",
      "gray": {
      "100": "#1e1e1e",
      "200": "rgba(255, 255, 255, 0.3)"
      },
      "neutral-dark-gray": "#505050"
      },
      "spacing": {},
      "fontFamily": {
      "roboto": "Roboto",
      "roboto-slab": "'Roboto Slab'",
      "iceland": "Iceland"
      },
      "borderRadius": {
      "31xl": "50px",
      "23xl": "42px",
      "xl": "20px"
      }
      },
      "fontSize": {
      "base": "1rem",
      "5xl": "1.5rem",
      "lg": "1.125rem",
      "29xl": "3rem",
      "sm": "0.875rem",
      "13xl": "2rem",
      "27xl": "2.875rem",
      "37xl": "3.5rem",
      "inherit": "inherit"
      }
      },
}