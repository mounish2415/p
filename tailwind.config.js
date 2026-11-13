/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#05070e',
          navy: '#090e1a',
          card: '#0f172a',
          cardHover: '#131e36',
          border: 'rgba(56, 189, 248, 0.15)',
          borderHover: 'rgba(56, 189, 248, 0.45)',
          blue: '#0070f3',
          electric: '#00d2ff',
          cyan: '#00f2fe',
          neonCyan: '#22d3ee',
          neonBlue: '#3b82f6',
          accent: '#38bdf8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 18s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 210, 255, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 242, 254, 0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
        'electric-gradient': 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
      }
    },
  },
  plugins: [],
}

