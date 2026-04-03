export interface Project {
  title: string
  techUsed: string
  description: string
  image: string
  liveDemo?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: 'PesoFlow',
    techUsed: 'React, Vercel, Huggingface Model, IndexedDB',
    description:
      'A zero-cost personal finance web app with manual input, multiple themes, category tracking, daily allowances, and AI-powered advice. All data stored locally in IndexedDB.',
    image: '/assets/projects/pesoflow.png',
    liveDemo: 'https://pesoflow.vercel.app/',
    github: 'https://github.com/itzmerai/pesoflow.git',
  },
  {
    title: 'Ryan Amasora Portfolio',
    techUsed: 'React, Vercel, Typescript, Appwrite',
    description:
      'A modern, interactive portfolio with an admin panel powered by Appwrite, showcasing skills in programming, AI automations, and web development with a clean, responsive design.',
    image: '/assets/projects/ryan-portfolio.png',
    liveDemo: 'https://ryan-portfolio-chi.vercel.app/',
    github: 'https://github.com/itzmerai/ryan_portfolio.git',
  },
  {
    title: 'OJT Monitoring System (WebApp)',
    techUsed: 'ReactJS, ExpressJS, MySQL, Cloudinary',
    description:
      'A web-based application to streamline student internship monitoring. Automates progress tracking, report submissions, company evaluations, and school-company communication.',
    image: '/assets/projects/ojt-webapp.png',
    liveDemo: undefined,
    github: 'https://github.com/itzmerai/ojtfrontend.git',
  },
  {
    title: 'OJT Monitoring System (App)',
    techUsed: 'Expo, NodeJS, MySQL, Firebase',
    description:
      'Mobile companion for the OJT Monitoring System. Students can log tasks, submit reports, track attendance, receive feedback, and communicate with coordinators.',
    image: '/assets/projects/ojt-app.jpg',
    github: 'https://github.com/itzmerai/ojtmsexpo.git',
  },
  {
    title: "Ryan's Portfolio (V1)",
    techUsed: 'React Vite, Vercel',
    description:
      'First portfolio website showcasing programming skills and full-stack projects with a clean, modern design featuring light and dark modes.',
    image: '/assets/projects/ryan-portfolio-v1.png',
    liveDemo: 'https://ryansporfolio.vercel.app/',
    github: 'https://github.com/itzmerai/ryan-sporfolio.git',
  },
  {
    title: 'All About CSS: Quick Questions and Answers',
    techUsed: 'HTML, Scratch',
    description:
      'An educational game to help students review Computer Systems Servicing knowledge through multiple-choice questions with three difficulty levels.',
    image: '/assets/projects/css-quiz.png',
    liveDemo: 'https://itzmerai.github.io/group2/',
    github: 'https://github.com/itzmerai/group2.git',
  },
]
