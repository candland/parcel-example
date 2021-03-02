// Roboto
// Share+Tech+Mono

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        headline: ['Share Tech Mono', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'csh-light': '#75B8FF',
        'csh-mid': '#2173CC',
        'csh-mid-alt': '#3A5E85',
        'csh-dark': '#144880'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
  purge: {
    content: [
      './src/**/*.html',
      './src/*.html',
      './src/**/*.njk',
      './src/*.njk'
    ]
  }
}
