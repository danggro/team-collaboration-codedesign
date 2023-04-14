/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "ui-sans-serif", "ui-system"],
    },
    extend: {
      colors: {
        yellow: "#FFCA1D",
        "dark-blue": "#2B3377",
        secondary: "#585858",
      },
    },
  },
  plugins: [],
};
