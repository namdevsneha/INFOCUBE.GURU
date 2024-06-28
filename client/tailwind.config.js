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
      hexPurple: "#9D94FF"
    },
    extend: {
      fontFamily: {
        iceland: ['Iceland', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        khand: ['Khand', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
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
      "darkorchid": "#8a31c8",
      "gray": {
      "100": "#1e1e1e",
      "200": "rgba(255, 255, 255, 0.3)",
      "300":"#F3F3F3"
      },
      "purple-feedback":"#B190B6",
      "neutral-dark-gray": "#505050"
      },
      "spacing": {},
      "fontFamily": {
      "roboto": "Roboto",
      "roboto-slab": "'Roboto Slab'",
      "inter": "Inter",
      "iceland": "Iceland",
      "lato": "Lato",
      "khand": "Khand",
      "poppins": "Poppins"
      },
      "borderRadius": {
      "31xl": "50px",
      "23xl": "42px",
      "xl": "20px"
      },
      boxShadow: {
        '3xl': '0 350px 600px +15px rgba(0, 100, 100, 1)',
        inner: '0 18px 60px -6px rgba(0, 0, 0, .4) ',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0px 4px 2px rgba(20, 20, 20, .35 )'
        ],
        'homeImage': [
          '4px 4px 30px rgba(177, 130, 209, 1 )'
      ],
      'homeImagePhone': [
          '3px 3px 20px rgba(177, 130, 209, 1 )'
      ]
      }
      },
      "fontSize": {
      "base": "1rem",
      "lg": "1.125rem",
      "sm": "0.875rem",
      "inherit": "inherit"
      }
      },
}


  
          