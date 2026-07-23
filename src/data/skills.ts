// Skills técnicos e idiomas que se muestran en /cv. Agregá o quitá items
// libremente a medida que aprendas cosas nuevas — no hace falta tocar
// ningún componente.

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'IA & Machine Learning',
    items: ['YOLO (entrenamiento y etiquetado)', 'LLMs (fine-tuning y consultas)', 'Ollama', 'Visión por computadora'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vue.js', 'Angular.js', 'HTML5', 'CSS'],
  },
  {
    category: 'Backend & APIs',
    items: ['Spring Boot', 'Java', 'Python', 'APIs REST'],
  },
  {
    category: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL', 'ORM', 'SQL avanzado'],
  },
  {
    category: 'Herramientas & DevOps',
    items: ['NVIDIA Omniverse (Digital Twin)', 'n8n', 'Docker', 'CI/CD', 'Git', 'Vercel', 'Railway'],
  },
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio (lectura, escritura y conversación técnica fluida)' },
];
