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

   | Campo           | Obligatorio | Descripción                                              |
   | --------------- | ----------- | --------------------------------------------------------- |
   | `title`         | sí          | Título del proyecto                                        |
   | `titleEn`       | no          | Traducción al inglés (si se omite, se usa `title` en los dos idiomas) |
   | `description`   | sí          | Descripción corta que aparece en la tarjeta                |
   | `descriptionEn` | no          | Traducción al inglés                                       |
   | `tags`          | no          | Lista de tecnologías usadas (`["Node.js", "PostgreSQL"]`)   |
   | `tagsEn`        | no          | Traducción de los tags (mismo orden que `tags`)             |
   | `image`         | no          | Ruta a una imagen en `public/` (ej: `/images/projects/foo.svg`) |
   | `repoUrl`       | no          | Link al repositorio                                         |
   | `demoUrl`       | no          | Link a una demo en vivo                                     |
   | `featured`      | no          | `true` para destacarlo y que aparezca primero               |
   | `date`          | no          | Formato `YYYY-MM`, solo se usa para ordenar                  |

4. El cuerpo del Markdown (debajo del frontmatter) no se muestra en la tarjeta
   actualmente — queda ahí como notas propias o para una futura página de detalle.

### Agregar una experiencia laboral nueva

1. Copiá un archivo de `src/content/experience/`.
2. Completá el frontmatter: `company`, `role`, `location`, `startDate`, `endDate`,
   `tags`, `url`, y **`bullets`** (array de strings con los logros/responsabilidades
   — reemplaza al cuerpo Markdown). Si el puesto es el actual, **no pongas
   `endDate`** — el sitio muestra automáticamente "Presente"/"Present". `url` es
   opcional y sirve para linkear un sitio en vivo (aparece como "Ver sitio →").
3. Para la versión en inglés, agregá `roleEn`, `companyEn`, `locationEn`, `tagsEn`
   y `bulletsEn` (todos opcionales — si falta alguno, se repite el valor en
   español en las dos versiones).
4. Se ordena automáticamente por `startDate` (más reciente primero). Este mismo
   contenido se reusa en la página `/cv` — no hay que cargarlo dos veces.

### Agregar un estudio, curso o certificación

1. Copiá un archivo de `src/content/education/`.
2. Completá el frontmatter: `institution`, `title`, `type`, `startDate`, `endDate`,
   `credentialUrl`, `description` (opcional). `type` tiene que ser uno de:
   `formacion`, `curso`, `certificacion`.
3. Para inglés, agregá `institutionEn`, `titleEn`, `descriptionEn` (opcionales,
   con el mismo fallback que en proyectos/experiencia).

### Editar tus datos personales

Todo lo que no es una lista (nombre, rol, bio, avatar, email, redes) vive en
**`src/data/site.ts`**. Editá ese archivo directamente:

- `avatar`: poné tu foto en `public/images/` y actualizá la ruta (reemplaza el
  placeholder `public/images/avatar.svg`).
- `resumeUrl`: opcional. Si subís un PDF de CV a `public/cv/` y poné la ruta acá,
  aparece un link secundario "Descargar el PDF original" en `/cv`. Si lo dejás en
  `null`, no se muestra — no hace falta, porque `/cv` genera un PDF actualizado al
  vuelo (ver siguiente sección).
- `social`: array de links a tus redes (GitHub, LinkedIn, email).

### La página /cv (currículum imprimible)

Además de las secciones del home, el sitio tiene una página dedicada en `/cv` que
arma un currículum de una sola columna, pensado para imprimirse o guardarse como
PDF. Reusa el mismo contenido que el resto del sitio, así que no hay que
mantenerlo por separado:

- **Experiencia y Estudios**: los mismos archivos de `src/content/`.
- **Sobre mí**: el `bio` de `src/data/site.ts`.
- **Habilidades e Idiomas**: viven en `src/data/skills.ts` — es una lista simple de
  categorías (`skillCategories`) e idiomas (`languages`), editala directamente
  para agregar algo nuevo que vayas aprendiendo. Cada entrada tiene su versión en
  inglés (`categoryEn`, `itemsEn`, `nameEn`, `levelEn`); si la omitís, se repite
  el valor en español.

El botón **"Descargar / Imprimir PDF"** de esa página dispara el diálogo nativo de
impresión del navegador (`window.print()`), con una hoja de estilos en
`global.css` (`@media print`) que oculta el nav/footer y fuerza colores legibles
en papel sin importar el tema activo. No genera un archivo en el servidor: cada
visita arma el PDF al momento con el contenido actual.

### Idioma del sitio (ES/EN)

El sitio tiene un botón **ES/EN** en el header que cambia el idioma al instante,
sin recargar la página. Técnicamente funciona igual que el toggle de tema
claro/oscuro: ambos idiomas se renderizan siempre en el HTML (componente
`src/components/I18nText.astro`) y se muestra uno solo vía CSS con un
`@custom-variant en` definido en `global.css`, activado por un atributo
`data-lang="en"` en `<html>` que se guarda en `localStorage`.

Para que un texto sea bilingüe, tiene que pasar por `<I18nText es="..." en="..." />`
en vez de escribirse directo. Si estás agregando contenido nuevo (un proyecto, una
experiencia, un estudio, un skill), completá los campos `*En` correspondientes
como se explica en las secciones de arriba — si los dejás vacíos, se usa el texto
en español también en inglés en vez de romper la build.

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
│   ├── site.ts             # Datos únicos: nombre, bio, avatar, redes, email
│   └── skills.ts            # Skills técnicos e idiomas (usados en /cv)
├── components/              # Un componente por sección + piezas reutilizables
├── layouts/
│   └── BaseLayout.astro    # <head>, fuentes, tema, Header/Footer
├── lib/
│   └── date.ts               # Helper para formatear fechas
├── scripts/
│   └── reveal.ts             # Animación de scroll-reveal (IntersectionObserver)
├── styles/
│   └── global.css             # Tailwind, tema, tipografía, estilos de impresión
└── pages/
    ├── index.astro              # Compone todas las secciones del home
    └── cv.astro                  # Currículum imprimible en /cv
```
