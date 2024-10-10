/** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ["selector"],
// };
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        paddign: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        inria: ['"Inria Sans"', "sans-serif"],
        aclonica: ["Aclonica", "sans-serif"],
        marco: ["Marco One", "cursive"],
        merriwether: ["Merriweather", "serif"],
        varela: ["Varela Round", "sans-serif"],
        marko: ["Marko One", "sans-serif"],
        allerta: ["Allerta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
