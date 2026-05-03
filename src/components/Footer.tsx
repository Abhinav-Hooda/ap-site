import { motion as Motion } from 'framer-motion'
import { site } from '../data/site'
import { IconFacebook, IconInstagram, IconX } from './icons'

const EASE = [0.215, 0.61, 0.355, 1] as const

function scrollToSection(id: string) {
  document.getElementById(`section-${id}`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const quick = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'properties', label: 'Properties' },
  { id: 'contact', label: 'Contact' },
] as const

const linkClass =
  'font-inter text-sm text-muted-foreground transition-colors hover:text-accent'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-5 md:flex-row md:justify-between md:px-8">
        <Motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-sm"
        >
          <p className="font-mulish text-xl font-bold text-foreground">{site.name}</p>
          <p className="font-mulish mt-3 text-sm italic leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
        >
          <p className="font-inter text-xs font-bold uppercase tracking-[0.15em] text-accent">
            Quick links
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {quick.map((item) => (
              <li key={item.id}>
                <a
                  href={`#section-${item.id}`}
                  className={linkClass}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
        >
          <p className="font-inter text-xs font-bold uppercase tracking-[0.15em] text-accent">
            Social
          </p>
          <div className="mt-4 flex gap-3">
            {[
              { href: site.social.instagram, icon: <IconInstagram className="size-6" />, label: 'Instagram' },
              { href: site.social.facebook, icon: <IconFacebook className="size-6" />, label: 'Facebook' },
              { href: site.social.twitter, icon: <IconX className="size-6" />, label: 'X' }
            ].map((social) => (
              <Motion.a
                key={social.label}
                whileHover={{ y: -4, color: 'var(--color-accent)' }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </Motion.a>
            ))}
          </div>
        </Motion.div>
      </div>

      <Motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mx-auto mt-12 max-w-5xl border-t border-border px-5 pt-8 md:px-8"
      >
        <p className="font-inter text-center text-sm text-muted-foreground">
          © 2026 {site.name}. All rights reserved.
        </p>
      </Motion.div>
    </footer>
  )
}
