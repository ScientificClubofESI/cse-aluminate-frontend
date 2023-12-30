const { Outfit } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Primary': {
          DEFAULT: '#0464FF',
          50: '#E9F2FF',
          100: '#D0E2FF',
          200: '#9DC2FF',
          300: '#6AA3FF',
          400: '#3783FF',
          500: '#0464FF',
          600: '#0055DF',
          700: '#0048BC',
          800: '#003A98',
          900: '#002C74',
          950: '#002662'
        },
        'Secondary':
        {
          DEFAULT: '#0464FF',
          50: '#E9F2FF',
          100: '#D0E2FF',
          200: '#9DC2FF',
          300: '#6AA3FF',
          400: '#3783FF',
          500: '#0464FF',
          600: '#0055DF',
          700: '#0048BC',
          800: '#003A98',
          900: '#002C74',
          950: '#002662'
        },
      }
    },
    fontFamily: {
      "Outfit": ["Outfit", "sans-serif"]
    },
  },
  plugins: [],
}
