// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      // Dark Blue variations - utilisez des noms sans tiret si possible
      darkblue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8", // Base dark blue
        800: "#1e40af",
        900: "#1e3a8a",
      },
      // Green Blue variations
      greenblue: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
      },
      // Ou en un seul mot
      darkBlue: "#1e40af",
      greenBlue: "#0d9488",
    },
  },
};
export const plugins = [require("tailwind-scrollbar")];
