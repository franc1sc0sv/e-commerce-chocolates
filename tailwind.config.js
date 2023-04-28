/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#282424"
      }
    },
    fontFamily: {
      Outfit: 'Outfit, sans-serif',
      SourceCodePro: 'Source Code Pro, monospace'
  }
},
plugins: [],
}

