export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const site = {
  name: 'Martin Antonovich',
  role: 'Desarrollador Full Stack',
  roleEn: 'Full Stack Developer',
  tagline:
    'Desarrollo software full stack e integro IA y automatización para simplificar sistemas complejos.',
  taglineEn:
    'I build full stack software and integrate AI and automation to simplify complex systems.',
  bio: `Desarrollador full stack con foco en arquitecturas frontend e integración de inteligencia
artificial. Construyo interfaces responsivas y bases de datos robustas, y tengo la autonomía
para liderar proyectos complejos de punta a punta: de la arquitectura al despliegue.`,
  bioEn: `Full stack developer focused on frontend architectures and AI integration. I build
responsive interfaces and robust databases, and I have the autonomy to lead complex projects
end-to-end: from architecture to deployment.`,
  location: 'La Plata, Buenos Aires, Argentina',
  phone: '+54 9 221 639 7422',
  phoneUrl: 'tel:+5492216397422',
  email: 'mailto:martin.antonovich@gmail.com',
  avatar: '/images/foto_perfil.png',
  resumeUrl: '/cv/CV_Martin_Antonovich_resume.pdf' as string | null,
  social: [
    { label: 'GitHub', url: 'https://github.com/martinantonovich', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/antonovichmartin/', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:martin.antonovich@gmail.com', icon: 'email' },
  ] satisfies SocialLink[],
};
