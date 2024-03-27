/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      buttonColor:'#255652',
      black: "#000",
      darkslategray: "#255652",
      white: "#fff",
      gray: "#1e1e1e",
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
      "times-new-roman": "'Times New Roman'",
      "im-fell-double-pica": "'IM FELL Double Pica'",
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
      "16xl-1": "2.194rem",
      "46xl": "4.063rem",
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


  
          