import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { openWhatsApp } from '../lib/whatsapp'
import { IconWhatsApp } from './icons'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'properties', label: 'Properties' },
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
      {/* Top Bar */}
      <div className="hidden w-full bg-[#0B1021] text-gray-300 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs md:px-8">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneDisplay.replace(/\\s|-/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium">Follow us:</span>
            <div className="flex items-center gap-3">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
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
