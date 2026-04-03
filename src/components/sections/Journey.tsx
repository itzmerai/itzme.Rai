import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { experience as journey } from '../../data/journey'

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading title="My Journey" subtitle="Work experience and education" />
      <div className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border dark:bg-dark-border sm:left-1/2 sm:-translate-x-px" />

        {journey.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative mb-8 flex w-full ${
              i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-surface dark:bg-dark-surface sm:left-1/2" />

            <div
              className={`ml-10 w-full sm:ml-0 sm:w-[45%] ${
                i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
              }`}
            >
              <div className="rounded-xl border border-border bg-surface-card p-5 dark:border-dark-border dark:bg-dark-surface-card">
                <span className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                  {entry.period}
                </span>
                <h3 className="mb-2 text-base font-semibold text-text-primary dark:text-dark-text-primary">
                  {entry.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                  {entry.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
