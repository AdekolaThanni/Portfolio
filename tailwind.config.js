/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svg,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: { dark: "#f1f1f113", light: "#2C2C2C" },
        purple: { primary: "#AA14F0", secondary: "#BC8CF2" },
        white: "#EEEEEE",
        black: "#131313",
      },
      screens: {
        sm: { max: "23.43em" },
        md: { max: "37.5em" },
        "md-b": { max: "500px" },
        lg: { max: "800px" },
        xl: { max: "62.5em" },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
