# Sitio personal — Portfolio / CV

Sitio personal tipo portfolio/CV construido con [Astro](https://astro.build) 7 y
[Tailwind CSS](https://tailwindcss.com) 4. Es 100% estático (sin backend ni base de
datos): todo el contenido vive en archivos locales dentro de `src/content/` y
`src/data/`, pensado para editarse sin tocar el diseño.

## Requisitos

- Node.js **22.12 o superior** (requerido por Astro 7)
- npm (o el gestor de paquetes que prefieras: pnpm, yarn)

## Correr en local

```bash
npm install
npm run dev
```

Esto levanta un servidor de desarrollo en `http://localhost:4321`. Los cambios en
`src/` se reflejan al instante.

Otros comandos útiles:

```bash
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve dist/ localmente para probar el build de producción
npm run check    # corre el chequeo de tipos de Astro (astro check)
```

## Cómo agregar contenido

Todo el contenido "editable" vive en **Content Collections** de Astro
(`src/content/`), definidas con sus esquemas en `src/content.config.ts`. Para
agregar un elemento nuevo alcanza con copiar un archivo `.md` existente en la
carpeta correspondiente y cambiar sus datos — **no hace falta tocar ningún
componente**.

### Agregar un proyecto nuevo

1. Copiá un archivo de `src/content/projects/` (por ejemplo `dashboard-metricas.md`).
2. Renombralo (el nombre del archivo no se muestra, pero conviene que sea descriptivo).
3. Completá el frontmatter:

   | Campo         | Obligatorio | Descripción                                              |
   | ------------- | ----------- | --------------------------------------------------------- |
   | `title`       | sí          | Título del proyecto                                        |
   | `description` | sí          | Descripción corta que aparece en la tarjeta                |
   | `tags`        | no          | Lista de tecnologías usadas (`["Node.js", "PostgreSQL"]`)   |
   | `image`       | no          | Ruta a una imagen en `public/` (ej: `/images/projects/foo.svg`) |
   | `repoUrl`     | no          | Link al repositorio                                         |
   | `demoUrl`     | no          | Link a una demo en vivo                                     |
   | `featured`    | no          | `true` para destacarlo y que aparezca primero               |
   | `date`        | no          | Formato `YYYY-MM`, solo se usa para ordenar                  |

4. El cuerpo del Markdown (debajo del frontmatter) no se muestra en la tarjeta
   actualmente — queda ahí como notas propias o para una futura página de detalle.

### Agregar una experiencia laboral nueva

1. Copiá un archivo de `src/content/experience/`.
2. Completá el frontmatter (`company`, `role`, `location`, `startDate`, `endDate`,
   `tags`). Si el puesto es el actual, **no pongas `endDate`** — el sitio muestra
   automáticamente "Presente".
3. El cuerpo del Markdown son los bullets de responsabilidades/logros (una línea
   por bullet, con `- `). Se renderiza tal cual en la timeline.
4. Se ordena automáticamente por `startDate` (más reciente primero).

### Agregar un estudio, curso o certificación

1. Copiá un archivo de `src/content/education/`.
2. Completá el frontmatter (`institution`, `title`, `type`, `startDate`, `endDate`,
   `credentialUrl`). `type` tiene que ser uno de: `formacion`, `curso`,
   `certificacion`.
3. El cuerpo del Markdown es una descripción opcional.

### Editar tus datos personales

Todo lo que no es una lista (nombre, rol, bio, avatar, email, redes) vive en
**`src/data/site.ts`**. Editá ese archivo directamente:

- `avatar`: poné tu foto en `public/images/` y actualizá la ruta (reemplaza el
  placeholder `public/images/avatar.svg`).
- `resumeUrl`: si querés un botón de "Descargar CV", subí el PDF a `public/` y
  poné la ruta ahí (por ejemplo `/cv.pdf`); si lo dejás en `null`, el botón no
  se muestra.
- `social`: array de links a tus redes (GitHub, LinkedIn, email).

### Cambiar colores y fuentes

Los estilos globales, el tema y las fuentes están en `src/styles/global.css`:

- **Fuentes**: se cargan desde Google Fonts en `src/layouts/BaseLayout.astro`
  (etiqueta `<link>` en el `<head>`). Actualmente: **Space Grotesk** (títulos) +
  **Inter** (texto). Para cambiarlas, actualizá esa URL y los valores de
  `--font-sans` / `--font-heading` en el bloque `@theme` de `global.css`.
- **Colores**: el acento principal es `emerald` (Tailwind). Para cambiarlo,
  buscá y reemplazá las clases `emerald-*` en los componentes de
  `src/components/`.
- **Modo claro/oscuro**: el toggle vive en `src/components/ThemeToggle.astro` y
  persiste la preferencia en `localStorage`. Si nunca se tocó el toggle, se usa
  la preferencia del sistema operativo (`prefers-color-scheme`).

## Deploy a Cloudflare Pages

### Opción A — Conectando el repo de GitHub (recomendada)

1. Subí este proyecto a un repositorio de GitHub.
2. En el [dashboard de Cloudflare](https://dash.cloudflare.com), andá a
   **Workers & Pages → Create → Pages → Connect to Git** y elegí el repo.
3. En la configuración de build, elegí el preset **Astro** (autocompleta lo
   siguiente, pero verificá que quede así):
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Guardá y desplegá. Cada push a la rama configurada (por defecto `main`)
   dispara un nuevo deploy automáticamente.

### Opción B — Deploy manual con Wrangler

```bash
npm run build
npx wrangler pages deploy dist
```

La primera vez, Wrangler te va a pedir loguearte con tu cuenta de Cloudflare y
elegir (o crear) el proyecto de Pages.

## Estructura del proyecto

```
src/
├── content.config.ts     # Esquemas (Zod) de las content collections
├── content/
│   ├── projects/         # Un .md por proyecto
│   ├── experience/        # Un .md por experiencia laboral
│   └── education/          # Un .md por estudio/curso/certificación
├── data/
│   └── site.ts             # Datos únicos: nombre, bio, avatar, redes, email
├── components/              # Un componente por sección + piezas reutilizables
├── layouts/
│   └── BaseLayout.astro    # <head>, fuentes, tema, Header/Footer
├── lib/
│   └── date.ts               # Helper para formatear fechas
├── scripts/
│   └── reveal.ts             # Animación de scroll-reveal (IntersectionObserver)
├── styles/
│   └── global.css             # Tailwind, tema, tipografía
└── pages/
    └── index.astro              # Compone todas las secciones
```
