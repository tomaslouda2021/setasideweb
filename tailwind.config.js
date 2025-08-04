/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        finn: {
          primary: {
            start: '#0ea5e9',
            end: '#06b6d4',
            DEFAULT: '#0ea5e9',
          },
          secondary: '#10b981',
          accent: '#f59e0b',
          neutral: '#64748b',
          dark: '#1e293b',
          background: '#f8fafc',
        },
      },
      backgroundImage: {
        'finn-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}