import { getCollection } from 'astro:content';

// Única fuente de verdad para listar y ordenar el contenido. El home y /cv
// usan estas mismas funciones, así que agregar, editar o borrar un archivo en
// src/content/ se refleja igual en las dos vistas (y en el PDF del CV).

export async function getProjects() {
  return (await getCollection('projects')).sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return (b.data.date ?? '').localeCompare(a.data.date ?? '');
  });
}

export async function getExperience() {
  return (await getCollection('experience')).sort((a, b) =>
    b.data.startDate.localeCompare(a.data.startDate)
  );
}

export async function getEducation() {
  return (await getCollection('education')).sort((a, b) =>
    b.data.startDate.localeCompare(a.data.startDate)
  );
}
