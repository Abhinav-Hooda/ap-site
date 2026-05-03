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

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  const onScroll = useCallback(() => {
    if (ticking.current) return
    ticking.current = true
    requestAnimationFrame(() => {
      const y = window.scrollY
      const delta = y - lastY.current
      
      setScrolled(y > 20)
      
      if (y > 120 && delta > 6) setHidden(true)
      else if (delta < -6) setHidden(false)
      if (y < 64) setHidden(false)
      
      lastY.current = y
      ticking.current = false
    })
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <Motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ 
        y: hidden ? -100 : 0, 
        opacity: 1,
        scale: scrolled ? 0.98 : 1,
      }}
      transition={hidden ? { duration: 0.2, ease: 'easeOut' as const } : { duration: 0.6, ease: EASE, scale: NAV_SPRING }}
      className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-transform duration-200 ease-out"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#section-home"
          className="font-mulish text-lg font-bold tracking-tight text-foreground md:text-xl"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
            setMenuOpen(false)
          }}
        >
          {site.name}
        </Motion.a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item, idx) => (
            <Motion.a
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05, ease: EASE }}
              href={`#section-${item.id}`}
              className="touch-manipulation font-inter text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:text-accent"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
            >
              {item.label}
            </Motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => openWhatsApp()}
            className="hidden min-h-11 items-center gap-2 rounded-none bg-accent px-4 py-2.5 font-inter text-sm font-bold tracking-wide text-white transition-all duration-200 hover:bg-accent-strong md:inline-flex touch-manipulation"
          >
            <IconWhatsApp className="size-5" />
            WhatsApp
          </Motion.button>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-none border border-foreground bg-transparent p-2 font-inter text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent md:hidden touch-manipulation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            {menuOpen ? (
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-border bg-background md:hidden ${
          menuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        } transition-all duration-200 ease-out`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-4"
          aria-label="Mobile"
          inert={!menuOpen ? true : undefined}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#section-${item.id}`}
              className="min-h-11 py-3 font-inter text-sm font-medium tracking-wide text-foreground touch-manipulation"
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
            className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-none bg-accent px-4 py-3 font-inter text-sm font-bold text-white touch-manipulation"
          >
            <IconWhatsApp className="size-5" />
            WhatsApp
          </button>
        </nav>
      </div>
    </Motion.header>
  )
}
