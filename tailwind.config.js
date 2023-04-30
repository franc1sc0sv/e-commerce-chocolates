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
      },
    },
    fontFamily: {
      Outfit: "Outfit, sans-serif",
      SourceCodePro: "Source Code Pro, monospace",
      Inter: "Inter, sans-serif",
    },
  },
  plugins: [],
};
