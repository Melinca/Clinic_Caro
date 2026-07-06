/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          50: '#fbf2f3',
          100: '#f7e3e6',
          200: '#eec9d0',
          300: '#e0a3af',
          400: '#cc7286',
          500: '#b34d65',
          600: '#9a3550',
          700: '#7e2a43',
          800: '#6b2438',
          900: '#5c2032',
          950: '#3a0f1c',
        },
        emerald2: {
          50: '#f0faf4',
          100: '#dcf3e4',
          200: '#bbe6cd',
          300: '#88d3ab',
          400: '#4fb884',
          500: '#2a9d6a',
          600: '#1c7d52',
          700: '#176443',
          800: '#155038',
          900: '#11422f',
          950: '#072619',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f6efd9',
          200: '#ecd9a8',
          300: '#e0bf76',
          400: '#d4a64e',
          500: '#c08c34',
          600: '#a36f28',
          700: '#835422',
          800: '#6c4420',
          900: '#5b3920',
        },
        cream: {
          50: '#fdfcfa',
          100: '#faf6f0',
          200: '#f4ece0',
          300: '#ebdcc6',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(126, 42, 67, 0.18)',
        card: '0 8px 30px -10px rgba(28, 125, 82, 0.15)',
        gold: '0 8px 30px -8px rgba(192, 140, 52, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'scale-in': 'scale-in 0.4s ease-out both',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
