module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0F1927',     // ← TRUE brand dark blue
        burntYellow: '#F4A948',
        offWhite: '#FFEFDB',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
