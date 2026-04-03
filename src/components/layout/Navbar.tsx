import { useState } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { cn } from '../../utils/cn'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  dark: boolean
  toggle: () => void
}

export function Navbar({ dark, toggle }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full backdrop-blur-md transition-colors duration-300',
        'bg-surface/80 border-b border-border',
        'dark:bg-dark-surface/80 dark:border-dark-border'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
          RA
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle dark={dark} toggle={toggle} />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle dark={dark} toggle={toggle} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="text-text-primary dark:text-dark-text-primary"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-surface px-4 py-4 dark:border-dark-border dark:bg-dark-surface md:hidden">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-text-secondary transition-colors hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
