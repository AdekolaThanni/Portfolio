/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svg}"],
  theme: {
    extend: {
      colors: {
        gray: { dark: "#353535", light: "#2C2C2C" },
        purple: { primary: "#990093" },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
