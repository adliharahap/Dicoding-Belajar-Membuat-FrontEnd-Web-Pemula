/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      backgroundColor: {
        grayblack: "#222222",
      }
    },
  },
  plugins: [],
}

