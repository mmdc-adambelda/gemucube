/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: { DEFAULT: '#FFDB49', dark: '#E6C520' },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          border: 'rgba(255,255,255,0.08)',
          hover: 'rgba(255,255,255,0.07)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        glowPulse: { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
        float:     { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      boxShadow: {
        'glass':        '0 4px 32px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.06)',
        'yellow-glow':  '0 0 40px rgba(255,219,73,0.15)',
        'yellow-glow-lg':'0 0 80px rgba(255,219,73,0.2)',
      },
    },
  },
  plugins: [],
}
