/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        milk: {
          100: "#fefae0",
          200: "#fbc984",
        },
        "custom-color": {
          "blue-1": "#0050b3",
          "blue-2": "#40a9ff",
          "orange-1": "#faad14",
          "gray-1": "#f0f2f5",
          "gray-2": "#f3f4f6",
        },
      },
    },
  },
  plugins: [],
};
