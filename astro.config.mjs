import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio.martin-antonovich.workers.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
