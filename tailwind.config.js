/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#282424",
        secundary: "#5E6366",
        placeHolder: "#ABAFB1",
        progresiveBar: "#E2E6F9",
        danger: "#F57E77",
        strokeBox: "#DCDCDC",
        borderInputs: "#E6E6E6",
        bgInputs: "#F9F9F9",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        products: "repeat(auto-fit, 250px)",
      },
    },
    fontFamily: {
      Outfit: "Outfit, sans-serif",
      SourceCodePro: "Source Code Pro, monospace",
      Inter: "Inter, sans-serif",
      Montserrat: "Montserrat', sans-serif",
    },
  },
  plugins: [],
};
