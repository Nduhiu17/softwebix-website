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
        primary: {
          50: '#f3f1f7',
          100: '#e8e3ef',
          200: '#d1c7df',
          300: '#b9abcf',
          400: '#a28fbf',
          500: '#8b73af',
          600: '#5c3c91',
          700: '#4a3074',
          800: '#382457',
          900: '#26183a',
        },
        brand: '#5c3c91',
        accent: {
          pink: '#c477c8',
          purple: '#5c3c91',
          indigo: '#553e9f',
          violet: '#7f18a4',
          blue: '#39479e',
          lavender: '#a994d4',
        },
        neutral: {
          dark: '#060606',
          medium: '#545454',
          light: '#a5a4ad',
          lightest: '#eae9ec',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
