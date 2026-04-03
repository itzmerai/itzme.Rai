import { BentoCard } from '../ui/BentoCard'
import { SectionHeading } from '../ui/SectionHeading'
import { projects } from '../../data/projects'
import { asset } from '../../utils/asset'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading title="Projects" subtitle="Things I've built" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <BentoCard key={project.title} delay={i * 0.1}>
            <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-surface-secondary dark:bg-dark-surface-secondary">
              <img
                src={asset(project.image)}
                alt={project.title}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                  el.parentElement!.innerHTML = `<div class="flex h-full w-full items-center justify-center text-text-secondary dark:text-dark-text-secondary"><svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>`
                }}
              />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
              {project.title}
            </h3>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {project.techUsed.split(', ').map(tech => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mb-4 line-clamp-3 text-sm text-text-secondary dark:text-dark-text-secondary">
              {project.description}
            </p>
            <div className="flex gap-2">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-hover"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-primary transition-colors hover:bg-surface-secondary dark:border-dark-border dark:text-dark-text-primary dark:hover:bg-dark-surface-secondary"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  Code
                </a>
              )}
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
