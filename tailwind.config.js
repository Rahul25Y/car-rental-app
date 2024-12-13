/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode with a specific class
  theme: {
    extend: {
      colors: {
        primary: "#ffc727", // Primary color
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111", // Dark mode base color
      },
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "3rem", // Padding for small screens
        },
      },
    },
  },
  plugins: [], // Add plugins here if needed
};
