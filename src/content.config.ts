import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Proyectos: la tarjeta que se muestra en la sección "Proyectos".
// Los campos "*En" son opcionales: si no se completan, se usa el valor en
// español también en inglés (ver fallback en los componentes).
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    tags: z.array(z.string()).default([]),
    tagsEn: z.array(z.string()).optional(),
    image: z.string().optional(),
    repoUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    // Los proyectos destacados aparecen primero en el grid.
    featured: z.boolean().default(false),
    // Fecha aproximada (YYYY-MM) usada solo para ordenar, no se muestra.
    date: z.string().optional(),
    // Orden y presencia en la lista curada de /cv (más corta que el grid del
    // home): si se omite, el proyecto no aparece en el CV. Menor = primero.
    cvOrder: z.number().optional(),
  }),
});

// Experiencia laboral: un archivo por puesto/empresa.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    companyEn: z.string().optional(),
    role: z.string(),
    roleEn: z.string().optional(),
    location: z.string().optional(),
    locationEn: z.string().optional(),
    // Formato YYYY-MM.
    startDate: z.string(),
    // Si se omite, se interpreta como "trabajo actual" y se muestra "Presente"/"Present".
    endDate: z.string().optional(),
    tags: z.array(z.string()).default([]),
    tagsEn: z.array(z.string()).optional(),
    // Bullets de responsabilidades/logros (reemplaza al cuerpo Markdown para
    // poder tener una versión en cada idioma).
    bullets: z.array(z.string()).default([]),
    bulletsEn: z.array(z.string()).optional(),
    // Sitio en vivo del proyecto/empresa, si lo tiene (ej: escribaniasureda.com.ar).
    url: z.url().optional(),
    // Orden en /cv (por defecto se ordena por startDate). Menor = primero.
    cvOrder: z.number().optional(),
    // Bullets alternativos usados solo en /cv, para reencuadrar el rol sin
    // tocar cómo se ve en el timeline del home (ver Delice La Plata).
    cvBullets: z.array(z.string()).optional(),
    cvBulletsEn: z.array(z.string()).optional(),
  }),
});

// Formación académica, cursos y certificaciones.
const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    institution: z.string(),
    institutionEn: z.string().optional(),
    title: z.string(),
    titleEn: z.string().optional(),
    type: z.enum(['formacion', 'curso', 'certificacion']),
    startDate: z.string(),
    endDate: z.string().optional(),
    credentialUrl: z.url().optional(),
    description: z.string().optional(),
    descriptionEn: z.string().optional(),
  }),
});

export const collections = { projects, experience, education };
