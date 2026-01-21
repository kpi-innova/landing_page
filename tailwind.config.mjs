/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#CCFF17', // Lime/Yellow-Green
        secondary: '#FFFFFF', // White
        dark: {
          DEFAULT: '#0B1120', // Deep Navy
          surface: '#1E293B', // Slate
          lighter: '#334155',
        },
        light: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at center, rgba(204, 255, 23, 0.1) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
}