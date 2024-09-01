import { plugin } from 'postcss';

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
    require('flowbite/plugin')({
      charts: true,
  }),
  ], 
}


