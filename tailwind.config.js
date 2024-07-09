/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      tablet: "810px",
      laptop: "1280px",
      desktop: "1320px",
    },
    extend: {
      fontFamily: {
        Caveat: ["Caveat"],
        BodoniModa: ["Bodoni Moda"],
        Cormorant: ["Cormorant"],
        Exo: ["Exo 2"],
        Philosopher: ["Philosopher"],
        Rajdhani: ["Rajdhani"],
      },
    },
  },
  plugins: [],
};
