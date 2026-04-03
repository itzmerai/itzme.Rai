import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { skills, skillCategories } from '../data/skills'
import { projects } from '../data/projects'
import { certificates } from '../data/certificates'
import { experience, education } from '../data/journey'
import { coreValues } from '../data/core-values'
import { carouselImages } from '../data/carousel'
import { asset } from '../utils/asset'
import { ThemeToggle } from '../components/ui/ThemeToggle'

function Gallery() {
  const [offset, setOffset] = useState(0)
  const scrollAmount = 300

  const scrollLeft = useCallback(() => {
    setOffset(o => Math.max(o - scrollAmount, 0))
  }, [])

  const scrollRight = useCallback(() => {
    setOffset(o => o + scrollAmount)
  }, [])

  return (
    <div className="mt-8 animate-fade-in" style={{ animationDelay: '700ms' }}>
      <h2 className="mb-4 text-2xl font-bold text-foreground dark:text-dark-foreground">Gallery</h2>
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 text-foreground-muted transition-colors hover:text-foreground dark:text-dark-foreground-muted dark:hover:text-dark-foreground"
          aria-label="Scroll left"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Images strip */}
        <div className="overflow-hidden">
          <div
            className="flex gap-2 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {carouselImages.map((img, i) => (
              <img
                key={i}
                src={asset(img)}
                alt={`Gallery ${i + 1}`}
                className="h-48 w-44 shrink-0 rounded-lg object-cover sm:h-56 sm:w-52"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 text-foreground-muted transition-colors hover:text-foreground dark:text-dark-foreground-muted dark:hover:text-dark-foreground"
          aria-label="Scroll right"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  )
}

interface Props {
  dark: boolean
  toggle: () => void
}

export function Home({ dark, toggle }: Props) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Profile Card */}
      <div className="bento-card p-6 animate-fade-in">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <img
            src={asset(profile.profileImage)}
            alt={profile.fullname}
            className="h-40 w-40 shrink-0 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <h1 className="text-2xl font-bold text-foreground dark:text-dark-foreground">
                {profile.fullname}
              </h1>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </span>
              <div className="ml-auto">
                <ThemeToggle dark={dark} toggle={toggle} />
              </div>
            </div>
            <p className="mb-1 flex items-center gap-1 text-sm">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {profile.location}
            </p>
            <p className="mb-4 text-sm font-medium text-foreground dark:text-dark-foreground">
              {profile.professionalTitle}
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}?subject=Hello%20Ryan`}
                className="rounded-lg bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5 dark:bg-dark-foreground dark:text-dark-background"
              >
                Send Email
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-muted px-4 py-2 text-xs font-medium text-foreground transition-transform hover:-translate-y-0.5 dark:bg-dark-muted dark:text-dark-foreground"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-muted px-4 py-2 text-xs font-medium text-foreground transition-transform hover:-translate-y-0.5 dark:bg-dark-muted dark:text-dark-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01a05e28ef57432160?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-muted px-4 py-2 text-xs font-medium text-foreground transition-transform hover:-translate-y-0.5 dark:bg-dark-muted dark:text-dark-foreground"
              >
                Upwork
              </a>
              <a
                href={asset('/assets/docs/cv.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-muted px-4 py-2 text-xs font-medium text-foreground transition-transform hover:-translate-y-0.5 dark:bg-dark-muted dark:text-dark-foreground"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-6">
        {/* About */}
        <div className="bento-card p-5 md:col-span-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <h2 className="mb-3 text-lg font-bold text-foreground dark:text-dark-foreground">About</h2>
          <p className="text-sm leading-relaxed">{profile.bio}</p>
        </div>

        {/* Journey / Experience - sidebar */}
        <div className="bento-card p-5 md:col-span-2 md:row-span-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="relative h-full overflow-y-auto pr-1">
            <h2 className="mb-4 text-lg font-bold text-foreground dark:text-dark-foreground">Experience</h2>
            <div className="relative pl-6">
              <div className="absolute left-[5px] top-1 h-[calc(100%-8px)] w-px bg-border dark:bg-dark-border" />
              {experience.map((entry, i) => (
                <div key={i} className="group relative mb-4 last:mb-0">
                  <div className={`absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full border-2 transition-colors ${i === 0 ? 'border-accent bg-accent dark:border-dark-accent dark:bg-dark-accent' : 'border-border bg-background group-hover:border-accent dark:border-dark-border dark:bg-dark-background dark:group-hover:border-dark-accent'}`} />
                  <p className="text-sm font-medium text-foreground dark:text-dark-foreground">{entry.title}</p>
                  <span className="mt-0.5 inline-block rounded bg-muted px-1.5 py-0.5 text-[10px] dark:bg-dark-muted">{entry.period}</span>
                </div>
              ))}
            </div>

            <h2 className="mb-4 mt-6 text-lg font-bold text-foreground dark:text-dark-foreground">Education</h2>
            <div className="relative pl-6">
              <div className="absolute left-[5px] top-1 h-[calc(100%-8px)] w-px bg-border dark:bg-dark-border" />
              {education.map((entry, i) => (
                <div key={i} className="group relative mb-4 last:mb-0">
                  <div className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-border bg-background transition-colors group-hover:border-accent dark:border-dark-border dark:bg-dark-background dark:group-hover:border-dark-accent" />
                  <p className="text-sm font-medium text-foreground dark:text-dark-foreground">{entry.title}</p>
                  <p className="text-xs">{entry.description}</p>
                  <span className="mt-0.5 inline-block rounded bg-muted px-1.5 py-0.5 text-[10px] dark:bg-dark-muted">{entry.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <Link
          to="/tech-stack"
          className="bento-card p-5 md:col-span-4 animate-fade-in group cursor-pointer"
          style={{ animationDelay: '300ms' }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground dark:text-dark-foreground">Tech Stack</h2>
            <svg className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
          {skillCategories.slice(0, 3).map(cat => (
            <div key={cat} className="mb-2 last:mb-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground/50 dark:text-dark-foreground/50">{cat}</p>
              <div className="flex flex-wrap gap-1.5">
                {skills.filter(s => s.category === cat).map(s => (
                  <span key={s.name} className="tag">{s.name}</span>
                ))}
              </div>
            </div>
          ))}
        </Link>

        {/* Projects Preview */}
        <Link
          to="/projects"
          className="bento-card p-5 md:col-span-4 animate-fade-in group cursor-pointer"
          style={{ animationDelay: '400ms' }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground dark:text-dark-foreground">Recent Projects</h2>
            <svg className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {projects.slice(0, 4).map(p => (
              <div key={p.title} className="rounded-lg bg-muted/50 p-3 dark:bg-dark-muted/50">
                <p className="text-sm font-medium text-foreground dark:text-dark-foreground">{p.title}</p>
                <p className="mt-0.5 line-clamp-2 text-xs">{p.description}</p>
              </div>
            ))}
          </div>
        </Link>

        {/* Certifications Preview */}
        <Link
          to="/certifications"
          className="bento-card p-5 md:col-span-3 animate-fade-in group cursor-pointer"
          style={{ animationDelay: '500ms' }}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground dark:text-dark-foreground">Certifications</h2>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
          <div className="space-y-1.5">
            {certificates.map(c => (
              <div key={c.title} className="rounded-md bg-muted/50 p-2 transition-colors hover:bg-muted dark:bg-dark-muted/50 dark:hover:bg-dark-muted">
                <p className="text-sm font-medium text-foreground dark:text-dark-foreground line-clamp-1">{c.title}</p>
                <p className="text-xs">{c.organization}</p>
              </div>
            ))}
          </div>
        </Link>

        {/* Core Values */}
        <div className="bento-card p-5 md:col-span-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <h2 className="mb-3 text-lg font-bold text-foreground dark:text-dark-foreground">Core Values</h2>
          <div className="space-y-2">
            {coreValues.map(v => (
              <div key={v.title} className="rounded-lg bg-muted/50 p-3 dark:bg-dark-muted/50">
                <div className="mb-1 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-accent/10 text-accent dark:bg-dark-accent/10 dark:text-dark-accent">
                    {v.title === 'Flexibility' && (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    )}
                    {v.title === 'Tech-Savvy' && (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    )}
                    {v.title === 'Innovation' && (
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    )}
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-dark-foreground">{v.title}</p>
                </div>
                <p className="text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery - full width */}
      <Gallery />

      {/* Footer */}
      <footer className="mt-12 border-t border-border py-8 text-center text-sm dark:border-dark-border">
        &copy; {new Date().getFullYear()} {profile.fullname}. All rights reserved.
      </footer>
    </div>
  )
}
