/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      sl: '320px',
      '2xl': '1536px',
      '3xl': '1600px',
    },

    extend: {
      colors: {
        primary: '#2C66FF',
        negative: '#E01A00',
        positive: '#20AF0B',
        warning: '#FFC22E',
        black: '#0C0D0F',
        'custom-gradient': '#6922d1',
        'custom-black': '#0e1012',
        'custom-black-100': '#16161a',
      },
    },
  },
  plugins: [],
}
