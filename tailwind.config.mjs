const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#100F11',
        light: '#F0F8FF',
        primary: '#1D56C2',
        lightHover: '#2a86ff',
        darkHover: '#2a004a',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'sans-serif'],
      },
      boxShadow: {
        black: '4px 4px 0 #1D56C2',
        white: '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit,minmax(200px, 1fr))',
      },
    },
  },
  darkMode: 'selector',
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
