/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#82cc86",
        greenPrimaryShade: {
          light: "#b9e3ba",
          dark: "#194a7a",
        },
        beigeSecondary: "#a99a84",
        yellowPrimary: "#e9cf02",
        yellowPrimaryShade: {
          light: "#ebd443",
        },
        darkBody: "#18181B",
      },
    },
  },
  plugins: [],
};
