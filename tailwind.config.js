/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'charcoal': '#333333',
        'mint': '#E1F4F3',
        'warm-gray': '#706C61',
      },
    },
  },
  plugins: [],
};