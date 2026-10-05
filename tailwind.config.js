/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#050507',
          deep: '#030304',
          subtle: '#090a0f',
          surface: '#0e1017',
          elevated: '#141722',
          border: 'rgba(255, 255, 255, 0.06)',
          'border-active': 'rgba(255, 255, 255, 0.14)',
        },
        brand: {
          primary: '#f5f5f7',
          secondary: '#8b8b93',
          tertiary: '#52525b',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          sky: '#38bdf8',
          accent: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        widest: '0.15em',
      },
      boxShadow: {
        'clean': '0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'clean-hover': '0 8px 30px -4px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.12)',
        'elevation': '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)',
      },
      scale: {
        '98': '0.98',
        '102': '1.02',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}
