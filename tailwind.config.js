/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "success": "#22BB33",
        "warning": "#F0AD4E",
        "error": "#BB2124",
      },
    },
  },
  plugins: [],
}