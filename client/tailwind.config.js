/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight:{
      thin:'50',
      thin2:'100',
      thin3:'200',
    },
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
        gotham: ['Gotham', 'sans-serif'],
        lato:['Lato',"sans-serif"]
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
      "darkslategray2":"#4a4a4a",
      "slateblue": "#003bac",
      "dimgray": "#585858",
      "purple":"#B190B6",
      "purplefont": "rgba(138, 49, 200, 0.71)",
      "grey": "rgba(0, 0, 0, 0.5)",
      'graybutton':"#032127",
      "gray": {
      "100": "#1e1e1e",
      "200": "rgba(255, 255, 255, 0.3)",
      "300":"#F3F3F3"
      },
      "neutral-dark-gray": "#505050"
      },
      "spacing": {},
      "fontFamily": {
      "times-new-roman": "'Times New Roman'",
      "im-fell-double-pica": "'IM FELL Double Pica'",
      "roboto": "Roboto",
      "roboto-slab": "'Roboto Slab'",
      "inter": "Inter",
      "iceland": "Iceland",
      "lato": "Lato",
      "khand": "Khand"
      },
      "borderRadius": {
      "31xl": "50px",
      "23xl": "42px",
      "xl": "20px"
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0px 4px 2px rgba(0, 0, 0, .5 )'
        ]
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
      "21xl": "2.5rem",
      "12xl-2": "1.95rem",
      "27xl": "2.875rem",
      "37xl": "3.5rem",
      "83xl": "6.375rem",
      "57xl": "4.75rem",
      "inherit": "inherit"
      }
      },
}


  
          