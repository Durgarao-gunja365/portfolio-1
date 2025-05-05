/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // ✅ this is important
    './public/index.html',        // optional but sometimes helpful
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
