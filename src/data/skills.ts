export interface Skill {
  name: string
  deviconClass: string
  category: string
}

// Maps CSV skill_name to devicon class names
const iconMap: Record<string, string> = {
  ReactJS: 'devicon-react-original',
  HTML: 'devicon-html5-plain',
  Javascript: 'devicon-javascript-plain',
  Typescript: 'devicon-typescript-plain',
  'C#': 'devicon-csharp-plain',
  'C++': 'devicon-cplusplus-plain',
  C: 'devicon-c-plain',
  Python: 'devicon-python-plain',
  PHP: 'devicon-php-plain',
  NextJS: 'devicon-nextjs-plain',
  Vite: 'devicon-vitejs-plain',
  Unity: 'devicon-unity-plain',
  ExpressJS: 'devicon-express-original',
  NodeJS: 'devicon-nodejs-plain',
  NestJS: 'devicon-nestjs-original',
  Firebase: 'devicon-firebase-plain',
  Cloudinary: 'devicon-cloudinary-plain',
  Appwrite: 'devicon-appwrite-plain',
  MySQL: 'devicon-mysql-plain',
  PostgreSQL: 'devicon-postgresql-plain',
  'G Suite': 'devicon-google-plain',
  Lovable: 'devicon-heart-plain',
  Cursor: 'devicon-cursor-plain',
  'Adobe Photoshop': 'devicon-photoshop-plain',
  Capcut: 'devicon-premierepro-plain',
  Zapier: 'devicon-zapier-plain',
  Make: 'devicon-thealgorithms-plain',
  'Go High Level': 'devicon-google-plain',
  'MS Office': 'devicon-windows11-original',
  Wordpress: 'devicon-wordpress-plain',
  N8N: 'devicon-nodejs-plain',
  VueJS: 'devicon-vuejs-plain',
  Trello: 'devicon-trello-plain',
  ElectronJS: 'devicon-electron-original',
  Notion: 'devicon-notion-plain',
  Asana: 'devicon-slack-plain',
  Codex: 'devicon-vscode-plain',
  SQLite: 'devicon-sqlite-plain',
  InertiaJS: 'devicon-laravel-original',
  Laravel: 'devicon-laravel-original',
  Astro: 'devicon-astro-plain',
  Claude: 'devicon-anthropic-plain',
}

export const skills: Skill[] = [
  // Front_End
  { name: 'ReactJS', deviconClass: iconMap.ReactJS, category: 'Frontend' },
  { name: 'NextJS', deviconClass: iconMap.NextJS, category: 'Frontend' },
  { name: 'VueJS', deviconClass: iconMap.VueJS, category: 'Frontend' },
  { name: 'HTML', deviconClass: iconMap.HTML, category: 'Frontend' },
  { name: 'Vite', deviconClass: iconMap.Vite, category: 'Frontend' },
  { name: 'ElectronJS', deviconClass: iconMap.ElectronJS, category: 'Frontend' },
  { name: 'Wordpress', deviconClass: iconMap.Wordpress, category: 'Frontend' },
  { name: 'Unity', deviconClass: iconMap.Unity, category: 'Frontend' },
  { name: 'Astro', deviconClass: iconMap.Astro, category: 'Frontend' },
  { name: 'InertiaJS', deviconClass: iconMap.InertiaJS, category: 'Frontend' },

  // Languages
  { name: 'Javascript', deviconClass: iconMap.Javascript, category: 'Languages' },
  { name: 'Typescript', deviconClass: iconMap.Typescript, category: 'Languages' },
  { name: 'Python', deviconClass: iconMap.Python, category: 'Languages' },
  { name: 'PHP', deviconClass: iconMap.PHP, category: 'Languages' },
  { name: 'C#', deviconClass: iconMap['C#'], category: 'Languages' },
  { name: 'C++', deviconClass: iconMap['C++'], category: 'Languages' },
  { name: 'C', deviconClass: iconMap.C, category: 'Languages' },

  // Back_end
  { name: 'NodeJS', deviconClass: iconMap.NodeJS, category: 'Backend' },
  { name: 'ExpressJS', deviconClass: iconMap.ExpressJS, category: 'Backend' },
  { name: 'NestJS', deviconClass: iconMap.NestJS, category: 'Backend' },
  { name: 'Laravel', deviconClass: iconMap.Laravel, category: 'Backend' },
  { name: 'Firebase', deviconClass: iconMap.Firebase, category: 'Backend' },
  { name: 'Cloudinary', deviconClass: iconMap.Cloudinary, category: 'Backend' },
  { name: 'Appwrite', deviconClass: iconMap.Appwrite, category: 'Backend' },

  // Database
  { name: 'MySQL', deviconClass: iconMap.MySQL, category: 'Database' },
  { name: 'PostgreSQL', deviconClass: iconMap.PostgreSQL, category: 'Database' },
  { name: 'SQLite', deviconClass: iconMap.SQLite, category: 'Database' },

  // AI & Automation
  { name: 'N8N', deviconClass: iconMap.N8N, category: 'AI & Automation' },
  { name: 'Zapier', deviconClass: iconMap.Zapier, category: 'AI & Automation' },
  { name: 'Make', deviconClass: iconMap.Make, category: 'AI & Automation' },
  { name: 'Go High Level', deviconClass: iconMap['Go High Level'], category: 'AI & Automation' },

  // Tools
  { name: 'G Suite', deviconClass: iconMap['G Suite'], category: 'Tools' },
  { name: 'MS Office', deviconClass: iconMap['MS Office'], category: 'Tools' },
  { name: 'Adobe Photoshop', deviconClass: iconMap['Adobe Photoshop'], category: 'Tools' },
  { name: 'Capcut', deviconClass: iconMap.Capcut, category: 'Tools' },
  { name: 'Cursor', deviconClass: iconMap.Cursor, category: 'Tools' },
  { name: 'Lovable', deviconClass: iconMap.Lovable, category: 'Tools' },
  { name: 'Claude', deviconClass: iconMap.Claude, category: 'Tools' },
  { name: 'Codex', deviconClass: iconMap.Codex, category: 'Tools' },

  // CRM / Project Management
  { name: 'Trello', deviconClass: iconMap.Trello, category: 'Project Management' },
  { name: 'Notion', deviconClass: iconMap.Notion, category: 'Project Management' },
  { name: 'Asana', deviconClass: iconMap.Asana, category: 'Project Management' },
]

export const skillCategories = [...new Set(skills.map(s => s.category))]
