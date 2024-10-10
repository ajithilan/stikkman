/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        athelas: ["Athelas", "sans-serif"]
      },
      backgroundImage: {
        'video-gradient': "linear-gradient(180deg,rgba(33,44,46,0) 0%, #212C2E 100%)",
      },
      animation: {
        fade: 'fade linear'
      },
      keyframes: {
        fade: {
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          }
        }
      },
      transitionDuration: {
        800: '800ms'
      }
    },
  },
  plugins: [],
}

