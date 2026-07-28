# Sitio personal — Portfolio / CV

Sitio personal tipo portfolio/CV construido con [Astro](https://astro.build) 7 y
[Tailwind CSS](https://tailwindcss.com) 4. Es 100% estático: todo el contenido
vive en archivos locales dentro de `src/content/` y `src/data/`.

## Correr en local

```bash
npm install
npm run dev       # http://localhost:4321, con hot reload
npm run build     # genera el sitio en dist/
npm run preview   # sirve dist/ localmente
npm run check     # chequeo de tipos de Astro
```

Requiere Node.js 22.12+.

## Contenido

- **Proyectos, experiencia y estudios**: un archivo `.md` por ítem en
  `src/content/{projects,experience,education}/`, con esquemas Zod en
  `src/content.config.ts`. Copiar un archivo existente y editar el frontmatter
  alcanza para agregar uno nuevo.
- **Datos personales** (nombre, bio, avatar, email, redes): `src/data/site.ts`.
- **Skills e idiomas** (usados en `/cv`): `src/data/skills.ts`.
- **Formulario de contacto**: envía mails vía [Web3Forms](https://web3forms.com)
  usando la variable de entorno `PUBLIC_WEB3FORMS_KEY` (ver `.env.example`).

Cada campo de texto tiene una versión `*En` opcional para la traducción al
inglés (toggle ES/EN en el header); si se omite, se reusa el texto en español.

## Deploy

Sitio 100% estático — build command `npm run build`, output `dist/`. Compatible
con Cloudflare Pages, Vercel, Netlify o GitHub Pages.

## Estructura

```
src/
├── content.config.ts     # Esquemas (Zod) de las content collections
├── content/               # Un .md por proyecto / experiencia / estudio
├── data/                   # site.ts (datos únicos) y skills.ts
├── components/             # Un componente por sección + piezas reutilizables
├── layouts/BaseLayout.astro
├── lib/date.ts
├── scripts/reveal.ts       # Animación de scroll-reveal
├── styles/global.css       # Tailwind, tema, tipografía, estilos de impresión
└── pages/
    ├── index.astro
    └── cv.astro             # Currículum imprimible en /cv
```
