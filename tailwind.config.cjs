/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        GrayishBlue: "hsl(237, 18%, 59%)",
        SoftRed: "hsl(345, 95%, 68%)",
        White: "hsl(0, 0%, 100%)",
        DarkDesaturatedBlue: "hsl(236, 21%, 26%)",
        DarkBlue: "hsl(235, 16%, 14%)",
        VeryDarkBlue: "hsl(234, 17%, 12%)",
      },
    },
  },
  plugins: [],
};
