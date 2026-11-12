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
// 캐릭터 영상 기준 팔레트: 머리색 브라운, 볼터치 핑크, 옷깃 하늘색
        primary: {
          DEFAULT: '#9C6844',
          light: '#BF8D69',
          dark: '#7F5133',
        },
        secondary: {
          DEFAULT: '#FFF0EE',
          light: '#FFF8F6',
          dark: '#FBDCD8',
        },
        accent: {
          DEFAULT: '#F59495',
          light: '#FBC4C4',
          dark: '#DE6F72',
        },
        sky: '#7FA6C4',
        text: {
          primary: '#4A342B',
          secondary: '#70594E',
          muted: '#A69186',
        },
        background: '#ffffff',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Pretendard', 'system-ui', 'sans-serif'],
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
