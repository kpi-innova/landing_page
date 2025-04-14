/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2ECC71',
        dark: '#1A1A1A',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}