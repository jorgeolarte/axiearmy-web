module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#232426",
      dark: "#1B1B1B",
      gray: "#333333",
      purple: "#FF4D7C",
      white: "#FFFFFF",
      red: "#FF0000",
      green: "#00FF47",
      yellow: "#EDB914",
    },
    fontWeight: {
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    fontFamily: {
      sans: ["Kanit", "sans-serif"],
    },
  },
  plugins: [],
};
