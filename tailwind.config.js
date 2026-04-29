/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aegis: {
          void: '#0F172A',
          graphite: '#1E293B',
          cyan: '#22D3EE',
          violet: '#818CF8',
          slate: '#94A3B8',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        space: ['Space Grotesk', 'monospace'],
      }
    },
  },
  plugins: [],
}