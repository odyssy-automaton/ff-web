/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ffTan: "#e4b973",
        ffOrange: "#f35e35",
        ffPink: "#bf347d",
        ffLightPurple: "#753284",
        ffPurple: "#33215f",
        ffBlack: "#171126",
        ffGreen: "#22a666",
        ffBlue: "#00687f",
      },
      fontFamily: {
        sans: ["AntiqueStories", "sans-serif"],
        serif: ["Rockwell", "serif"],
      },
    },
  },
  plugins: [],
};
