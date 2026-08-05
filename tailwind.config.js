export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '"Helvetica Neue"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#0F0F0F', soft: '#1C1C1E', muted: '#3A3A3C' },
        stone: { 50: '#FAFAF8', 100: '#F5F5F0', 200: '#E8E8E0', 300: '#D0D0C4' },
        accent: { DEFAULT: '#1A3A5C', light: '#2D5F8A', pale: '#E8EFF6' },
        gold: '#B8965A',
      },
    },
  },
  plugins: [],
}
