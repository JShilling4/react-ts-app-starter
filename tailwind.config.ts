import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      transitionProperty: {
        size: 'margin, padding, height, width',
        palette: 'color, background-color',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0b6285',
          secondary: '#6b08db',
          accent: '#09eff7',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
