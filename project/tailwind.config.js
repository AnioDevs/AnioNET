/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'],
      },
      colors: {
        'dbd-red': '#ff0000',
        'dbd-dark-red': '#8a0000',
        'dbd-purple': '#5c2c8e',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3391930/pexels-photo-3391930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'footer-texture': "url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [],
};