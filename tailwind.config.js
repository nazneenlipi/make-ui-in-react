/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        dots: "dotsAnimation 4s linear infinite",
      },
      keyframes: {
        dotsAnimation: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" }, // Matches the background size
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

