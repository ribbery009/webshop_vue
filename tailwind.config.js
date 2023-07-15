/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#DC2F33',
        'secondary': '#E1E1E1',
        'tertiary': '#4A4A4A',
    },
  },
  plugins: [],
}
}