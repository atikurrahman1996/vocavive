/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3266E0",
        secondary: "#F5F7FD",
        warning: "#F19C38",
        white: "#FFFFFF",
        muted: "#6C7687",
      },
    },
  },
  plugins: [require("daisyui")],
};
