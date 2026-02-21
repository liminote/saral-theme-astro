 /** @type {import('tailwindcss').Config} */
  export default {
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      plugins: [],
      theme: {
          extend: {
              fontFamily: {
                  sans: ['"Noto Sans TC"', 'Inter', 'system-ui', 'sans-serif'],
                  serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
                  mono: ['"JetBrains Mono"', 'monospace'],
              },
          },
      },
  }
