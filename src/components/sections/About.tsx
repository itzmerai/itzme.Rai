import { BentoCard } from '../ui/BentoCard'
import { SectionHeading } from '../ui/SectionHeading'
import { coreValues } from '../../data/core-values'

const icons: Record<string, string> = {
  Flexibility: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  'Tech-Savvy': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  Innovation: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading title="Core Values" subtitle="The principles that drive my work" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value, i) => (
          <BentoCard key={value.title} delay={i * 0.1}>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={icons[value.title]} />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary dark:text-dark-text-primary">
              {value.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
              {value.description}
            </p>
          </BentoCard>
        ))}
      </div>
    </section>
  )
}
