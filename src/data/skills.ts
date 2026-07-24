// Skills técnicos e idiomas que se muestran en /cv. Agregá o quitá items
// libremente a medida que aprendas cosas nuevas — no hace falta tocar
// ningún componente. Cada categoría/idioma tiene versión ES y EN.

export interface SkillCategory {
  category: string;
  categoryEn: string;
  items: string[];
  itemsEn?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'IA & Machine Learning',
    categoryEn: 'AI & Machine Learning',
    items: ['YOLO (entrenamiento y etiquetado)', 'LLMs (fine-tuning y consultas)', 'Ollama', 'Visión por computadora'],
    itemsEn: ['YOLO (training & labeling)', 'LLMs (fine-tuning & querying)', 'Ollama', 'Computer vision'],
  },
  {
    category: 'Frontend',
    categoryEn: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vue.js', 'Angular.js', 'HTML5', 'CSS'],
  },
  {
    category: 'Backend & APIs',
    categoryEn: 'Backend & APIs',
    items: ['Spring Boot', 'Java', 'Python', 'APIs REST'],
    itemsEn: ['Spring Boot', 'Java', 'Python', 'REST APIs'],
  },
  {
    category: 'Bases de datos',
    categoryEn: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'ORM', 'SQL avanzado'],
    itemsEn: ['PostgreSQL', 'MySQL', 'ORM', 'Advanced SQL'],
  },
  {
    category: 'Herramientas & DevOps',
    categoryEn: 'Tools & DevOps',
    items: ['NVIDIA Omniverse (Digital Twin)', 'n8n', 'Docker', 'CI/CD', 'Git', 'Vercel', 'Railway'],
  },
];

export interface Language {
  name: string;
  nameEn: string;
  level: string;
  levelEn: string;
}

export const languages: Language[] = [
  { name: 'Español', nameEn: 'Spanish', level: 'Nativo', levelEn: 'Native' },
  {
    name: 'Inglés',
    nameEn: 'English',
    level: 'Intermedio (lectura, escritura y conversación técnica fluida)',
    levelEn: 'Intermediate (fluent reading, writing, and technical conversation)',
  },
];
