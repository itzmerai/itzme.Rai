import { BentoCard } from '../ui/BentoCard'
import { SectionHeading } from '../ui/SectionHeading'
import { certificates } from '../../data/certificates'
import { asset } from '../../utils/asset'

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading title="Certificates" subtitle="Continuous learning and professional development" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert, i) => (
          <BentoCard key={cert.title} delay={i * 0.05}>
            <div className="mb-3 aspect-[4/3] overflow-hidden rounded-lg bg-surface-secondary dark:bg-dark-surface-secondary">
              <img
                src={asset(cert.image)}
                alt={cert.title}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.style.display = 'none'
                  el.parentElement!.innerHTML = `<div class="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center"><svg class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg><span class="text-xs text-text-secondary dark:text-dark-text-secondary">Certificate</span></div>`
                }}
              />
            </div>
            <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-text-primary dark:text-dark-text-primary">
              {cert.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-secondary dark:text-dark-text-secondary">
                {cert.organization}
              </span>
              <span className="text-xs text-text-secondary dark:text-dark-text-secondary">
                {new Date(cert.issueDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </span>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
