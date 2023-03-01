/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,jsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // './sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      jetMono: ['JetBrains Mono', 'monospace'],
      notoLaos: ['Noto Sans Lao', 'sans-serif'],
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('tailwind-scrollbar')({ nocompatible: true }),

  ],
  screens: {
    xs: '480px',
    ss: '620px',
    sm: '768px',
    md: '1060px',
    lg: '1200px',
    xl: '1700px',
  },
};
