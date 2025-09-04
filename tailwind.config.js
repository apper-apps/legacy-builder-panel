/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#b3d4ff',
          200: '#80b8ff',
          300: '#4d9cff',
          400: '#1a80ff',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003e7a',
          800: '#002951',
          900: '#001428',
        },
        navy: {
          50: '#e6f0f7',
          100: '#b3d1e6',
          200: '#80b2d4',
          300: '#4d93c3',
          400: '#1a74b1',
          500: '#003366',
          600: '#002952',
          700: '#001f3e',
          800: '#00142a',
          900: '#000a15',
        },
        gold: {
          50: '#fefbf3',
          100: '#fcf3d9',
          200: '#f9ebbe',
          300: '#f6e3a4',
          400: '#f3db89',
          500: '#d4af37',
          600: '#b8962e',
          700: '#9c7d26',
          800: '#80641d',
          900: '#644b15',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
        'section-gradient': 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)',
      }
    },
  },
  plugins: [],
}