import { Link } from 'react-router-dom'
import { skills, skillCategories } from '../data/skills'
import { ThemeToggle } from '../components/ui/ThemeToggle'

interface Props {
  dark: boolean
  toggle: () => void
}

export function TechStack({ dark, toggle }: Props) {
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
        <h1 className="text-2xl font-bold text-foreground dark:text-dark-foreground">Tech Stack</h1>
        <div className="ml-auto"><ThemeToggle dark={dark} toggle={toggle} /></div>
      </div>

      <div className="space-y-6">
        {skillCategories.map((cat, ci) => (
          <div
            key={cat}
            className="bento-card p-5 animate-fade-in"
            style={{ animationDelay: `${ci * 100}ms` }}
          >
            <h2 className="mb-3 text-lg font-bold text-foreground dark:text-dark-foreground">{cat}</h2>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter(s => s.category === cat)
                .map(s => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-sm dark:border-dark-foreground/10 dark:bg-dark-foreground/[0.03]"
                  >
                    <i className={`${s.deviconClass} text-base`} />
                    {s.name}
                  </span>
                ))}
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
