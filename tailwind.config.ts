/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./logistics-control-tower.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f0d',
        bg2: '#111714',
        bg3: '#181f1b',
        bg4: '#1e2822',
        border: 'rgba(255,255,255,0.07)',
        border2: 'rgba(255,255,255,0.12)',
        text: '#e8f0eb',
        text2: '#8fa898',
        text3: '#5a7066',
        green: '#1D9E75',
        green2: '#5DCAA5',
        green3: '#9FE1CB',
        amber: '#BA7517',
        amber2: '#EF9F27',
        red: '#D85A30',
        red2: '#F09595',
        blue: '#378ADD',
        blue2: '#85B7EB',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'radius': '10px',
        'radius-lg': '14px',
      },
      animation: {
        'pulse-slow': 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}