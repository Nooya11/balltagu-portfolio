import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B8956A',
          light: '#C4A57B',
          dark: '#A67D4B',
        },
        secondary: {
          DEFAULT: '#F5F1E8',
          light: '#FAF8F3',
          dark: '#E8E2D5',
        },
        accent: {
          DEFAULT: '#8B7355',
          light: '#9D8567',
          dark: '#75604A',
        },
        text: {
          primary: '#4A3F35',
          secondary: '#6B5D4F',
          muted: '#9B8E7E',
        },
        background: '#ffffff',
      },
      fontFamily: {
        sans: ['Pretendard', 'Nanum Square', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
