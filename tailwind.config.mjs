/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1EC8E8',
        background: '#0B0E11',
        foreground: '#FFFFFF',
        muted: '#A7B0B8',
        surface: {
          DEFAULT: '#12161B',
          light: '#1A1F26',
          border: '#2A3038'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
