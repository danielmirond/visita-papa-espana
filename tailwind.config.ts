import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        papal: {
          gold: '#D4AF37',
          'gold-light': '#F0D060',
          'gold-dark': '#B8960F',
          white: '#FEFEFE',
          cream: '#FFF8E7',
          red: '#C41E3A',
          'red-dark': '#8B0000',
          navy: '#1B2A4A',
          'navy-light': '#2D4066',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
