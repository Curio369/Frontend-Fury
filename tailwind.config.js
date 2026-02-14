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
        // Day Mode - Himalayan Sky & Forest
        'aegis-sky': '#87CEEB',
        'aegis-forest': '#2D5016',
        'aegis-mist': '#F0F4F8',
        'aegis-stone': '#E8E8E8',

        // Night Mode - Deep Mountain Night
        'aegis-navy': '#1a2332',
        'aegis-slate': '#334155',
        'aegis-emerald': '#059669',
        'aegis-dark-mist': '#1e293b',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
