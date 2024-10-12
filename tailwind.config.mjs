/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        theme: '#37786c',
        'theme-hover': '#37786ccc',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        //borders
        '.border-primary': {
          '@apply border-zinc-300 dark:border-zinc-700': {},
        },
        '.border-secondary': {
          '@apply border-zinc-500 dark:border-zinc-500': {},
        },
        //backgrounds
        '.bg-primary': {
          '@apply bg-zinc-50 dark:bg-zinc-900': {},
        },
        '.bg-secondary': {
          '@apply bg-zinc-200 dark:bg-zinc-700': {},
        },
        '.bg-tertiary': {
          '@apply bg-zinc-300 dark:bg-zinc-600': {},
        },
        //typography
        '.text-primary': {
          '@apply text-zinc-900 dark:text-zinc-100': {},
        },
        '.text-secondary': {
          '@apply text-zinc-800 dark:text-zinc-200': {},
        },
        '.text-tertiary': {
          '@apply text-zinc-600 dark:text-zinc-400': {},
        },
      });
    },
  ],
};
