
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
        'Secondary': {
          DEFAULT: '#26BEA5',
          50: '#D3F6F0',
          100: '#BEF2E9',
          200: '#94E9DB',
          300: '#69E1CD',
          400: '#3FD8BF',
          500: '#26BEA5',
          600: '#1E9884',
          700: '#177263',
          800: '#0F4B41',
          900: '#072520',
          950: '#041210'
        },

      }
    },
    fontFamily: {
      Outfit: ['var(--font-outfit)'],
    },
  },
  plugins: [],
}
