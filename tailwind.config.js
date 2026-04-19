import colors from 'tailwindcss/colors';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9e6',
          100: '#fcf0cc',
          200: '#f9e199',
          300: '#f6d266',
          400: '#f3c333',
          500: '#d4a51e',
          600: '#b88a18',
          700: '#9c6f12',
          800: '#7f540c',
          900: '#633a06',
        },
        dark: {
          50: '#1a1a1a',
          100: '#262626',
          200: '#333333',
          300: '#404040',
          400: '#4a4a4a',
          500: '#5a5a5a',
          600: '#6a6a6a',
          700: '#7a7a7a',
          800: '#8a8a8a',
          900: '#9a9a9a',
        },
      },
    },
  },
  plugins: [],
};