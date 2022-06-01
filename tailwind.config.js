module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
        'size-400': '400% 400%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-50': '50% 50%',
          'pos-100': '90% 90%',
      },
    },
  },
  plugins: [],
}
