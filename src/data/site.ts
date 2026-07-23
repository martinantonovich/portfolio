// Datos únicos del sitio. Editá este archivo con tu información real.
// No es una content collection porque hay un solo "registro": vos.

export interface SocialLink {
  label: string;
  url: string;
  // Nombre de ícono usado en Contact.astro / Hero.astro (ver el switch en esos componentes).
  icon: 'github' | 'linkedin' | 'email';
}

export const site = {
  name: 'Tu Nombre',
  role: 'Desarrollador/a de Software',
  tagline:
    'Construyo APIs, integraciones y automatizaciones que hacen que los sistemas se hablen entre sí sin fricción.',
  bio: `Soy desarrollador/a de software con foco en backend, integración de APIs y automatización
de procesos. Me interesa simplificar sistemas complejos y eliminar trabajo manual repetitivo
con soluciones prolijas y mantenibles. Estas últimas experiencias resumen en qué estuve
trabajando — el detalle completo está en la sección de proyectos.`,
  location: 'Buenos Aires, Argentina',
  email: 'tu-email@ejemplo.com',
  avatar: '/images/avatar.svg',
  // PDF opcional de tu CV. Poné el archivo en /public y actualizá la ruta, o dejalo en null.
  resumeUrl: null as string | null,
  social: [
    { label: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:tu-email@ejemplo.com', icon: 'email' },
  ] satisfies SocialLink[],
};
