import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Proyectos: la tarjeta que se muestra en la sección "Proyectos".
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    // Los proyectos destacados aparecen primero en el grid.
    featured: z.boolean().default(false),
    // Fecha aproximada (YYYY-MM) usada solo para ordenar, no se muestra.
    date: z.string().optional(),
  }),
});

// Experiencia laboral: un archivo por puesto/empresa.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    // Formato YYYY-MM.
    startDate: z.string(),
    // Si se omite, se interpreta como "trabajo actual" y se muestra "Presente".
    endDate: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// Formación académica, cursos y certificaciones.
const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    institution: z.string(),
    title: z.string(),
    type: z.enum(['formacion', 'curso', 'certificacion']),
    startDate: z.string(),
    endDate: z.string().optional(),
    credentialUrl: z.string().url().optional(),
  }),
});

export const collections = { projects, experience, education };
