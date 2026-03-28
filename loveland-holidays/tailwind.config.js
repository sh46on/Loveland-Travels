/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0077b6',
          dark:    '#005a8e',
          light:   '#00b4d8',
          deep:    '#001e3c',
        },
        sky: {
          soft:  '#e6f4ff',
          mid:   '#cce9ff',
        },
        gold: '#d4af37',
      },
      fontFamily: {
        sans:  ['Poppins', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        card:   '0 8px 32px rgba(0,119,182,0.12)',
        'card-lg': '0 20px 60px rgba(0,119,182,0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease forwards',
        'spin-slow':  'spin 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
