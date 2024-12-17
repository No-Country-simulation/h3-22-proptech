/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        textGradient: ['linear-gradient(115.52deg, #FEEFA9 -78.15%, #7C5337 80.03%, #170E08 224.3%)'],
        graphicGradient:['linear-gradient(156.77deg, #6269F2 -178.15%, #FFFFFF 254.51%)'],
        bgFooter: ['linear-gradient(177.05deg, #171717 2.45%, #5960DE 223.11%)'],

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
}