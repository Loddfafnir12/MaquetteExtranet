/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geneva: ['Geneva', 'sans-serif'], // Ajoute "Geneva" comme famille de police
      },
    },
  },
  plugins: [],
}

