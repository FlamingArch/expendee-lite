/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
