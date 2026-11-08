/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#101010',
          soft: '#161616',
          raised: '#1E1E1E',
        },
        line: '#2A2A2A',
        muted: '#A3A3A3',
        accent: {
          DEFAULT: '#F04B32',
          dim: '#C73A24',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'pulse-bar': {
          '0%, 100%': { transform: 'scaleY(0.55)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'pulse-bar': 'pulse-bar 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
