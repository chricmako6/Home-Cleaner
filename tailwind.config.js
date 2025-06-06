/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Primary:'hsl(228,78,61)',
        Secondary:'hsl(217,80,60)',
        Paragraph: 'hsl(210,1,44)',
      },
    },
  },
  plugins: [],
}