import { Link } from 'react-router-dom'
import { certificates } from '../data/certificates'
import { asset } from '../utils/asset'
import { ThemeToggle } from '../components/ui/ThemeToggle'

interface Props {
  dark: boolean
  toggle: () => void
}

export function CertificationsPage({ dark, toggle }: Props) {
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
        <h1 className="text-2xl font-bold text-foreground dark:text-dark-foreground">All Certifications</h1>
        <div className="ml-auto"><ThemeToggle dark={dark} toggle={toggle} /></div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {certificates.map((cert, i) => (
          <div
            key={cert.title}
            className="bento-card p-4 space-y-3 group animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted dark:bg-dark-muted">
              <img
                src={asset(cert.image)}
                alt={cert.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent dark:text-dark-foreground dark:group-hover:text-dark-accent">
                {cert.title}
              </h2>
              <div className="mt-1 flex items-center justify-between">
                <p className="text-sm">{cert.organization}</p>
                <p className="text-xs">
                  {new Date(cert.issueDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-12 border-t border-border py-8 text-center text-sm dark:border-dark-border">
        &copy; {new Date().getFullYear()} Ryan Amasora. All rights reserved.
      </footer>
    </div>
  )
}
