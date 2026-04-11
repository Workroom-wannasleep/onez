import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral dark branding palette
        brand: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0d0f12',
        },
        accent: {
          50:  '#f7f5f4',
          100: '#ede9e7',
          200: '#dbd4d1',
          300: '#c4b5b0',
          400: '#a6938c',   // logo primary — RGB(166,147,140)
          500: '#8a7870',   // button active / deeper tone
          600: '#6e5d57',
          700: '#524540',
          800: '#372e2a',
          900: '#1c1715',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-kr)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};

export default config;
