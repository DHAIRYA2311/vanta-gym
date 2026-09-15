/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        primary: '#F4F1EA',
        secondary: '#A5A39C',
        accent: '#C8A96B',
        border: 'rgba(244,241,234,0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Instrument Serif"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
