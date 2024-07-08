/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "10px": "10px", // Add this to ensure it's recognized by Tailwind
      },
    },
  },
  plugins: [],
};
