/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pallette: {
          50: "#ef3a42",
          100: "#fc8c7c",
          200: "#405a1e",
          300: "#83ac5a",
          400: "#bfc8c9",
          500: "#607134",
        },
      },
    },
  },
  plugins: [daisyui],
};
