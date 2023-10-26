/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'white': '#cccccc',
        'positive': "#089981",
        'positive-secondary': '#66BB6A',
        'negative-secondary': '#E61D62',
        'negative': "#F23645",
        'main': '#1c1c1c'
      },
      gridTemplateColumns: {
        "main": "85% auto",
        "control-sliders": "1.4em 1.4em auto",
      },
      gridTemplateRows: {
        "main": "minmax(25em, 46%) 40px auto",
        "control-sliders": "auto 68px",
      }
    },
  },
  plugins: [],
}
