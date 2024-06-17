/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
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
