import type { Project, ProjectCategory } from '../../types/portfolio';
import rekkoImage from '../../assets/projects/rekko.webp';
import pianomanImage from '../../assets/projects/pianoman.webp';
import primeroImage from '../../assets/projects/primero.webp';
import geoqueryaiImage from '../../assets/projects/geoqueryai.webp';
import iabdnotesImage from '../../assets/projects/iabdnotes.webp';
import webdevnotesImage from '../../assets/projects/webdevnotes.webp';
import astronomyarticlesphpImage from '../../assets/projects/astronomyarticlesphp.webp';

export const projects: Project[] = [
  {
    id: 'rekko',
    name: 'Rekko',
    image: rekkoImage,
    category: 'fullstack',
    year: '2026',
    tags: ['TypeScript', 'React', 'Node.js', 'Express','Tailwind', 'DaisyUI', 'Zustand', 'Vite', 'Prisma', 'PostgreSQL', 'JWT', 'Firebase', 'Supabase', 'Cloudinary', 'Nodemailer', 'Zod', 'Vercel', 'Railway'],
    repoUrl: 'https://github.com/Rekko-Lists',
    liveUrl: 'https://rekko-lists.net',
  },
  {
    id: 'rekkophp',
    name: 'RekkoPHP',
    category: 'backend',
    year: '2025',
    tags: ['PHP', 'JavaScript', 'MySQL', 'AJAX', 'OAuth2', 'JWT', 'PHPMailer', 'PHPStan', 'PDO'],
    repoUrl: 'https://github.com/Eriquito00/RekkoPHP',
  },
  {
    id: 'astronomy',
    name: 'AstronomyArticlesPHP',
    image: astronomyarticlesphpImage,
    category: 'backend',
    year: '2025',
    tags: ['PHP', 'MySQL', 'REST API', 'Pagination'],
    repoUrl: 'https://github.com/Eriquito00/AstronomyArticlesPHP',
  },
  {
    id: 'geoqueryai',
    name: 'GeoQueryAI',
    image: geoqueryaiImage,
    category: 'frontend',
    year: '2026',
    tags: ['TypeScript', 'Node.js', 'OpenAI API', 'Leaflet'],
    repoUrl: 'https://github.com/Eriquito00/GeoQueryAI',
  },
  {
    id: 'primero',
    name: 'Primero',
    image: primeroImage,
    category: 'fullstack',
    year: '2026',
    tags: ['TypeScript', 'Node.js', 'WebSockets', 'JavaScript', 'Render'],
    repoUrl: 'https://github.com/Eriquito00/Primero',
    liveUrl: 'https://ericmejias.es/primero/',
  },
  {
    id: 'iabd-notes',
    name: 'IABD-Notes',
    image: iabdnotesImage,
    category: 'education',
    year: '2026',
    tags: ['Notes', 'Markdown', 'Obsidian', 'GitHub'],
    repoUrl: 'https://github.com/Eriquito00/IABD-Notes',
  },
  {
    id: 'webdev-notes',
    name: 'Webdev-Notes',
    image: webdevnotesImage,
    category: 'education',
    year: '2024',
    tags: ['Notes', 'Markdown', 'Obsidian', 'GitHub'],
    repoUrl: 'https://github.com/Eriquito00/Webdev-Notes',
  },
  {
    id: 'climbing',
    name: 'ProyectoAplicacionEscalada',
    category: 'backend',
    year: '2025',
    tags: ['Java', 'MySQL', 'JDBC', 'Maven', 'Docker', 'OAuth2'],
    repoUrl: 'https://github.com/Eriquito00/ProyectoAplicacionEscalada',
  },
  {
    id: 'pokeapi',
    name: 'Atacando_PokeAPI',
    category: 'backend',
    year: '2025',
    tags: ['Python', 'MySQL', 'SQL', 'DDL', 'DML', 'PokeAPI', 'REST API'],
    repoUrl: 'https://github.com/Eriquito00/Atacando_PokeAPI',
  },
  {
    id: 'collections',
    name: 'Collections_Exceptions_JAVA',
    category: 'backend',
    year: '2025',
    tags: ['Java', 'Java Collections', 'Exception Handling', 'POO'],
    repoUrl: 'https://github.com/Eriquito00/Collections_Exceptions_JAVA',
  },
  {
    id: 'myanimelist',
    name: 'WysperOtaku_MyAnimeListAPIConsuming',
    category: 'backend',
    year: '2025',
    tags: ['Java', 'MySQL', 'OAuth2', 'Maven', 'Docker', 'MyAnimeList API'],
    repoUrl: 'https://github.com/WysperOtaku/MyAnimeListAPIConsuming',
  },
  {
    id: 'pianoman',
    name: 'PianoMan',
    image: pianomanImage,
    category: 'frontend',
    year: '2026',
    tags: ['TypeScript', 'DOM Events', 'Touch Events'],
    repoUrl: 'https://github.com/Eriquito00/PianoMan',
    liveUrl: 'https://ericmejias.es/pianoman/',
  },
];

export const projectCategories: Array<{ id: 'all' | ProjectCategory; label: string }> = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'education', label: 'Apuntes' },
];
