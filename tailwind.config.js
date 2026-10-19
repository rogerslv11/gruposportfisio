/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Deep institutional navy extracted from the original identity (#000e91 / #16389f)
        ink: {
          DEFAULT: '#071336',
          50: '#eef2fb',
          100: '#d6e0f6',
          200: '#a9bdec',
          300: '#7397df',
          400: '#3f6ecd',
          500: '#1e4bc9',
          600: '#16389f',
          700: '#0f2a7d',
          800: '#0b1d5b',
          900: '#081542',
          950: '#060f2e',
        },
        // Sport cyan accent (#00baff) — usado com parcimônia em detalhes e links
        sky: {
          50: '#f0fbff',
          100: '#e2f8ff',
          200: '#b8eeff',
          300: '#7fdcff',
          400: '#40c8f7',
          500: '#12bdf5',
          600: '#0098d1',
          700: '#00719c',
        },
        // Signature CTA green (#87c181)
        sport: {
          50: '#f2f9ee',
          100: '#e0f1d8',
          200: '#c2e4b4',
          300: '#9ed389',
          400: '#87c181',
          500: '#6fb35c',
          600: '#559444',
          700: '#427536',
        },
        // Editorial warm paper base
        paper: {
          DEFAULT: '#f7f6f2',
          dark: '#efede7',
        },
      },
      fontFamily: {
        sans: ['Saira', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        // Editorial display: condensed, used uppercase for headlines
        display: ['"Saira Condensed"', 'Saira', 'system-ui', 'sans-serif'],
        // Serif italic accent — uma palavra de destaque por título
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(7,19,54,0.05), 0 6px 20px -12px rgba(7,19,54,0.15)',
        card: '0 1px 2px rgba(7,19,54,0.05), 0 16px 36px -20px rgba(7,19,54,0.22)',
        lift: '0 2px 4px rgba(7,19,54,0.05), 0 28px 52px -26px rgba(7,19,54,0.3)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '80%,100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'roll-in': {
          from: { transform: 'translateY(110%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        cue: {
          '0%': { transform: 'translateX(-6px)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateX(52px)', opacity: '0' },
        },
        sheen: {
          '0%': { transform: 'translateX(-140%) skewX(-18deg)' },
          '100%': { transform: 'translateX(420%) skewX(-18deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2,0.6,0.35,1) infinite',
        marquee: 'marquee 36s linear infinite',
        'roll-in': 'roll-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        cue: 'cue 1.9s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        sheen: 'sheen 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
