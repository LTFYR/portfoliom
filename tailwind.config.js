/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-image": "url('/background1.jfif')",
        "cover-image": "url('/bg2.jpg')",
      },
      colors: {
        mainColor: "#191825",
        textColor: "#aeaeae",
      },
      boxShadow: {
        shadow: "#bbb 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
