import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { skills, skillCategories } from '../../data/skills'
import { cn } from '../../utils/cn'

export function Skills() {
  const [active, setActive] = useState<string>('All')
  const categories = ['All', ...skillCategories]

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading title="Tech Stack" subtitle="Technologies and tools I work with" />

      {/* Category tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              active === cat
                ? 'bg-primary text-white'
                : 'border border-border text-text-secondary hover:bg-surface-secondary dark:border-dark-border dark:text-dark-text-secondary dark:hover:bg-dark-surface-secondary'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <motion.div layout className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        <AnimatePresence mode="popLayout">
          {filtered.map(skill => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -4 }}
              className={cn(
                'flex flex-col items-center gap-2 rounded-xl border p-4 transition-shadow',
                'border-border bg-surface-card hover:shadow-md',
                'dark:border-dark-border dark:bg-dark-surface-card dark:hover:shadow-lg'
              )}
            >
              <i className={cn(skill.deviconClass, 'text-3xl text-text-primary dark:text-dark-text-primary')} />
              <span className="text-center text-xs font-medium text-text-secondary dark:text-dark-text-secondary">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
