// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0F1927',
        burntYellow: '#F4A948',
        offWhite: '#FFEFDB',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'zoom-in': 'zoomIn 0.9s ease-out both',
      },
      keyframes: {
        zoomIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.96)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
