module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        container: "1920px",
      },
      height: {
        nav: "10%",
        video: "90%",
      },
      colors: {
        background: "#F6F6F6",
        primary: "#F5BB01",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
