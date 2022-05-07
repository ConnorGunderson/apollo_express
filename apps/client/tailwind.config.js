const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{ts,tsx}'),
    join(__dirname, 'components/**/*.{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          100: '#f2f3f4',
          200: '#e6e7e9',
          300: '#d9dadf',
          400: '#cdced4',
          500: '#c0c2c9',
          600: '#9a9ba1',
          700: '#737479',
          800: '#4d4e50',
          900: '#262728',
        },
      },
    },
  },
  plugins: [],
}
