module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        scroll: 'scroll 5s linear infinite',
      },
    },
  },
  plugins: [],
}