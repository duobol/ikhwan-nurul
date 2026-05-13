import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      colors: {
        gold: {
          DEFAULT: 'var(--gold)',
          dark: 'var(--gold-dark)',
          light: 'var(--gold-light)',
        },
        cream: 'var(--cream)',
        taupe: 'var(--taupe)',
        brown: 'var(--brown)',
        sage: 'var(--sage)',
      },
    },
  },
  plugins: [],
}

export default config
