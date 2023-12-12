/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        'grey': '#232323',
        'background': '#F9F6ED',
        'secondary': '#EEE8D4',
      },
      fontFamily: {
        'lily': ['"Lily Script One"', 'cursive'],
        'kumbh': ['"Kumbh Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

