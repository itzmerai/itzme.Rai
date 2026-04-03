import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  colSpan?: string
  delay?: number
}

export function BentoCard({ children, className, colSpan, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        'rounded-2xl border p-6 transition-shadow duration-300',
        'bg-surface-card border-border shadow-sm hover:shadow-lg',
        'dark:bg-dark-surface-card dark:border-dark-border dark:hover:shadow-2xl',
        colSpan,
        className
      )}
    >
      {children}
    </motion.div>
  )
}
