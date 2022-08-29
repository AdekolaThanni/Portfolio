/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svg}"],
  theme: {
    extend: {
      colors: {
        gray: { dark: "#353535", light: "#2C2C2C" },
        purple: { primary: "#AA14F0", secondary: "#BC8CF2" },
        white: "#EEEEEE",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
