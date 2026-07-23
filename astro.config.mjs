import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Cambiá esto por tu dominio real una vez que lo tengas (se usa para SEO/sitemap).
  site: 'https://tu-dominio.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
