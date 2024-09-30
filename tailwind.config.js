/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgGetstarted: "#B1464A",
        'white-opacity-30': 'rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        Kaisei: ["KaiseiOpti-Bold", "serif"],
        Nunito: ["Nunito-Black", "serif"]
      }
    },
  },
  plugins: [],
}
