
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#a8a29e",
          
"secondary": "#9ca3af",
          
"accent": "#d6d3d1",
          
"neutral": "#9ca3af",
          
"base-100": "#374151",
          
"info": "#e5e7eb",
          
"success": "#ecfccb",
          
"warning": "#f5f5f4",
          
"error": "#ffe4e6",
          },
        },
      ],
    },
  plugins:[
    daisyui,
  ]
}
