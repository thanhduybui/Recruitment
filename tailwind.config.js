/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        100: "#9bd2ff",
        200: "#6abcff",
        300: "#38a5ff",
        400: "#068fff",
        500: "#0581e6",
        600: "#0572cc",
        700: "#034880",
        800: "#023966",
        900: "#164e63",
      },
      gray: {
        100: "#ececec",
        200: "#7c7c7c",
        300: "#575757",
        400: "#444444",
        500: "#3d3d3d",
        600: "#363636",
        700: "#303030",
        800: "#292929",
        900: "#222222",
      },
    },
  },
  plugins: [],
};
