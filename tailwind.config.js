/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081b2e',
          900: '#0c2540',
          800: '#123457',
          700: '#194670',
          600: '#215a8f',
        },
        teal: {
          600: '#0e7c86',
          500: '#12969f',
          400: '#1fb3ad',
        },
        gold: {
          500: '#c99a3f',
          400: '#d9b565',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(8, 27, 46, 0.25)',
        card: '0 4px 24px -6px rgba(8, 27, 46, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.9s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
