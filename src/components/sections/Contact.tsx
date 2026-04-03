import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface-card p-8 text-center dark:border-dark-border dark:bg-dark-surface-card sm:p-12"
      >
        <h2 className="mb-3 text-3xl font-bold text-text-primary dark:text-dark-text-primary">
          Let's Work Together
        </h2>
        <p className="mb-8 text-text-secondary dark:text-dark-text-secondary">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-hover"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {profile.email}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary dark:text-dark-text-secondary">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </span>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-primary">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {profile.phone}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
