import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Cambiar por el dominio real cuando lo tenga (se usa para SEO/sitemap).
  site: 'https://tu-dominio.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
