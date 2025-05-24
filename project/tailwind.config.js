/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Navy Colors
        navy: {
          900: '#0B1120', // Very dark navy blue
          800: '#152033', // Dark navy blue
          700: '#1D2A42', // Medium dark navy blue
          600: '#253552', // Medium navy blue
          500: '#2D4165', // Navy blue
          400: '#3A5281', // Medium light navy blue
          300: '#4C689C', // Light navy blue
          200: '#7A91BD', // Very light navy blue
          100: '#A8B9DE', // Pale navy blue
          50: '#E2E8F5',  // Almost white navy blue
        },
        // Gold Accent Colors
        gold: {
          900: '#705818', // Very dark gold
          800: '#8F6F16', // Dark gold
          700: '#A68019', // Medium dark gold
          600: '#C1921D', // Medium gold
          500: '#D9A520', // Gold (primary accent)
          400: '#E6B94A', // Medium light gold
          300: '#EEC876', // Light gold
          200: '#F5DAA3', // Very light gold
          100: '#F9EBCF', // Pale gold
          50: '#FCF5E7',  // Almost white gold
        },
        // Red Accent Colors (for Brunswick military elements)
        brunswick: {
          red: '#AB2B2B',   // Brunswick military red
          black: '#1A1A1A', // Brunswick black (uniforms)
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1182392/pexels-photo-1182392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [],
};