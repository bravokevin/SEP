/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        glowing: {
          "0%, 100%": {
            'background-position': ' 0 0'
          },
          "50%": {
            'background-position': '400% 0'
          },
        },
      },
      animation: {
        "glowing": "glowing 20s linear infinite"
      },
      plugins: [],
    },
    // colors:{

    // }
  }
}