/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#f8f3f6',
      }
    },
  },
  plugins: [],
}

