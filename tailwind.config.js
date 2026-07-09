/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1A18',
        paper: '#F5F2E8',
        teal: {
          50: '#EAF3F1',
          100: '#CFE3DF',
          400: '#1F5A54',
          600: '#123A38',
          800: '#0B2B2A',
          900: '#081F1E',
          950: '#061615',
        },
        lime: {
          300: '#E4EF8C',
          400: '#D7E94A',
          500: '#C3D62E',
          600: '#9FB01D',
        },
        clay: '#C9C2AC',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
