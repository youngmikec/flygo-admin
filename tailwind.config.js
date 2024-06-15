/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      lighterGray: '#E4E4E7',
      footerBlack: '#202020',
      // textBlack: '#121212',
      textBlack: '#717171',
      lightGray: '#C1C1C1',
      darkGray: '#808080',
      primary: '#FF8608',
      secondary: '#66708',
      red: '#DD584F',
      textBlue: '#167EE6',
      waterBlue: '#167ee61f',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}

