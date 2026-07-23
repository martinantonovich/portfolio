export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const site = {
  name: 'Martin Antonovich',
  role: 'Desarrollador Full Stack',
  tagline:
    'Desarrollo software full stack e integro IA y automatización para simplificar sistemas complejos.',
  bio: `Soy desarrollador full stack con foco en arquitecturas frontend e integración de inteligencia
artificial. Me apasiona construir interfaces de usuario responsivas, diseñar bases de datos
robustas, y explorar constantemente tecnologías emergentes como LLMs y gemelos digitales
(Digital Twins). Me adapto bien a equipos colaborativos, pero también tengo la autonomía para
liderar proyectos complejos de punta a punta: desde la arquitectura de sistemas hasta el despliegue.`,
  location: 'La Plata, Buenos Aires, Argentina',
  email: 'mailto:martin.antonovich@gmail.com',
  avatar: '/images/foto_perfil.png',
  resumeUrl: '/cv/CV_Martin_Antonovich_resume.pdf' as string | null,
  social: [
    { label: 'GitHub', url: 'https://github.com/martinantonovich', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/martin-antonovich-1a4077169/', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:martin.antonovich@gmail.com', icon: 'email' },
  ] satisfies SocialLink[],
};
