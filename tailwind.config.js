module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
