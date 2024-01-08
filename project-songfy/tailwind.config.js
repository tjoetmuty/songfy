/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'img': "url('./src/img/background.png')",
    },
    colors: {
      'bluee': "#0A68AB"
    }
  },
  plugins: [],
}

