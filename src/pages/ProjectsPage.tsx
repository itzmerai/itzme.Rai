import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { asset } from '../utils/asset'
import { ThemeToggle } from '../components/ui/ThemeToggle'

interface Props {
  dark: boolean
  toggle: () => void
}

export function ProjectsPage({ dark, toggle }: Props) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 flex items-center gap-3 animate-fade-in">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm transition-colors hover:text-accent dark:hover:text-dark-accent"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Back
        </Link>
        <h1 className="text-2xl font-bold text-foreground dark:text-dark-foreground">All Projects</h1>
        <div className="ml-auto"><ThemeToggle dark={dark} toggle={toggle} /></div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.liveDemo || project.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card block p-4 space-y-3 group animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="aspect-video overflow-hidden rounded-lg bg-muted dark:bg-dark-muted">
              <img
                src={asset(project.image)}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent dark:text-dark-foreground dark:group-hover:text-dark-accent">
                {project.title}
              </h2>
              <p className="mt-1 text-sm line-clamp-2">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.techUsed.split(', ').map(tech => (
                  <span key={tech} className="tag text-xs">{tech}</span>
                ))}
              </div>
              <div className="mt-2 flex gap-2">
                {project.liveDemo && (
                  <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs dark:bg-dark-muted">
                    {new URL(project.liveDemo).hostname}
                  </span>
                )}
                {project.github && (
                  <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs dark:bg-dark-muted">
                    github.com
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>

      <footer className="mt-12 border-t border-border py-8 text-center text-sm dark:border-dark-border">
        &copy; {new Date().getFullYear()} Ryan Amasora. All rights reserved.
      </footer>
    </div>
  )
}
