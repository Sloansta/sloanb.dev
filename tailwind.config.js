/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'arrow-fade': {
          '0%, 100%': { transform: 'translateY(10px)', opacity: 1 },
          '50%': { transform: 'translateY(30px)', opacity: 0}
        }
      },
      animation: {
        'arrow-fade': 'arrow-fade 2s infinite',
      }
    },
  },
  plugins: [],
}

