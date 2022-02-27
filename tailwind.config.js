module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/city_landscape_3.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        green: "#00946A",
      },
    },
  },
  plugins: [],
};
