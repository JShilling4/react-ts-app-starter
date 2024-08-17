import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {},
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
