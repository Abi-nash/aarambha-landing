module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
      height: {
        nav: "14%",
        video: "86%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
