/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pallette: {
          600: "#588b8b",
          500: "#ffffff",
          400: "#8ab17d",
          300: "#db504a",
          200: "#fbdf9d",
          100: "#93b7be",
          50: "#2d3047",
          10: "#E55934",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
