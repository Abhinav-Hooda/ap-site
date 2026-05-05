import { motion as Motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { openWhatsApp } from '../lib/whatsapp'
import { IconWhatsApp } from './icons'

const EASE = [0.215, 0.61, 0.355, 1] as const
const NAV_SPRING = { type: 'spring' as const, stiffness: 220, damping: 24 }

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'properties', label: 'Properties' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
] as const

function scrollToSection(id: string) {
  const el = document.getElementById(`section-${id}`)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar({ isDark, setIsDark }: { isDark: boolean, setIsDark: (v: boolean) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-background border-b border-border'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <div className="flex-1 flex justify-start">
          <a
            href="#section-home"
            className="font-mulish text-lg font-bold tracking-tight text-foreground md:text-xl flex items-center gap-3 shrink-0"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
              setMenuOpen(false)
            }}
          >
            <img src="/logo.png" alt="Abhinav Properties Logo" className="size-10 object-contain rounded-full shadow-sm" />
            <span className="hidden sm:inline-block">{site.name}</span>
          </a>
        </div>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#section-${item.id}`}
              className="touch-manipulation font-inter text-sm font-medium tracking-wide text-muted-foreground transition-all duration-200 hover:text-accent px-4 py-2 rounded-full hover:bg-accent/5"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="flex size-10 items-center justify-center rounded-full border border-black/5 bg-muted transition-all duration-300 hover:bg-accent/10 hover:text-accent"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="hidden min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-inter text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-accent-strong md:inline-flex touch-manipulation"
          >
            <IconWhatsApp className="size-5" />
            WhatsApp
          </button>

          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-foreground/10 bg-transparent p-2 font-inter text-sm font-medium text-foreground md:hidden touch-manipulation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            {menuOpen ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>


      <div
        id="mobile-menu"
        className={`bg-background md:hidden ${
          menuOpen ? 'max-h-screen opacity-100 border-t border-border' : 'max-h-0 overflow-hidden opacity-0'
        } transition-all duration-300 ease-in-out`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-6"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#section-${item.id}`}
              className="min-h-11 py-3 font-inter text-base font-semibold tracking-wide text-foreground touch-manipulation border-b border-black/5 last:border-0"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
                setMenuOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              openWhatsApp()
              setMenuOpen(false)
            }}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 font-inter text-sm font-bold text-white shadow-soft touch-manipulation"
          >
            <IconWhatsApp className="size-5" />
            WhatsApp
          </button>
        </nav>
      </div>
    </header>
  )
}
