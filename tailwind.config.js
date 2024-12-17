/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  //tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        elite: ['"Hanken Grotesk"', 'sans-serif']
      }
    }
  }
}
}

