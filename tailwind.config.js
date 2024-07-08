/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './{App,app}.{js,ts,vue}',
    './{Error,error}.{js,ts,vue}',
    './app.config.{js,ts}'
  ],
  theme: {
    extend: {
      width: {
        '400px': '400px',
        '800px': '800px',
        '1000px': '1000px',
      },
      screens: {
        '300px': '300px',
        '720px': '720px',
        '1024px': '1024px',
      },
    }
  },
  plugins: []
}
