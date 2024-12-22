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
      screens: {
        mobile: '440px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        //borders
        '.border-primary': {
          '@apply border-zinc-200 dark:border-zinc-700': {},
        },
        '.border-secondary': {
          '@apply border-zinc-400 dark:border-zinc-500': {},
        },
        //backgrounds
        '.bg-primary': {
          '@apply bg-white dark:bg-zinc-950': {},
        },
        '.bg-secondary': {
          '@apply bg-zinc-200 dark:bg-zinc-700': {},
        },
        '.bg-tertiary': {
          '@apply bg-zinc-300 dark:bg-zinc-600': {},
        },
        '.bg-body': {
          '@apply bg-[#f7f9fa] dark:bg-[#16191c]': {},
        },
        //typography
        '.text-primary': {
          '@apply text-zinc-800 dark:text-zinc-100': {},
        },
        '.text-secondary': {
          '@apply text-zinc-700 dark:text-zinc-200': {},
        },
        '.text-tertiary': {
          '@apply text-zinc-600 dark:text-zinc-400': {},
        },
        '.text-negative': {
          '@apply text-zinc-100 dark:text-zinc-800': {},
        },
      });
    },
  ],
};
