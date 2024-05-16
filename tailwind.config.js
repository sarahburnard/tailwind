/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,json,liquid}"],
  theme: {
    letterSpacing: {
      tight: '-0.03em'
    },
    extend: {
      fontFamily: {
        'body': ['Helvetica', 'Arial', 'sans-serif'],
        'heading': ['Helvetica Neue', 'Arial', 'sans-serif']
      },
      
    }
  },
  plugins: [],
}

