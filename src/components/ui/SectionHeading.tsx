import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <h2 className="text-3xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-text-secondary dark:text-dark-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  )
}
