import { motion as Motion } from 'framer-motion'
import { hero, site } from '../data/site'
import { openWhatsApp } from '../lib/whatsapp'

const EASE = [0.215, 0.61, 0.355, 1] as const
const HERO_SPRING = { type: 'spring' as const, stiffness: 220, damping: 14 }

export function Hero({ isDark }: { isDark: boolean }) {
  const words = hero.headline.split(' ')
  const line1 = words.slice(0, 4).join(' ')
  const line2 = words.slice(4).join(' ')

  return (
    <section
      id="section-home"
      className="relative flex min-h-[95svh] items-center justify-center overflow-hidden border-b border-border bg-background"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 w-full">
        <img
          src={isDark ? '/img-bg-dark.png' : '/bg-image-ap.png'}
          alt=""
          className="h-full w-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/40 transition-colors duration-300" />
      </div>

      <Motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center md:px-8 md:py-32 lg:py-40 md:-translate-y-20"
      >
        <Motion.p 
          initial={{ opacity: 0, scale: 0.6, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...HERO_SPRING, delay: 0.1 }}
          className="font-inter mb-6 text-xs font-bold uppercase tracking-[0.2em] text-accent inline-block"
        >
          {site.cityTag}
        </Motion.p>
        
        <h1 id="hero-heading" className="font-mulish mx-auto max-w-4xl text-[2.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-foreground md:text-5xl lg:text-7xl overflow-hidden">
          <Motion.span 
            className="block"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            {line1}
          </Motion.span>
          <Motion.span 
            className="block"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          >
            {line2}
          </Motion.span>
        </h1>

        <Motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          className="font-inter mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {hero.subheadline}
        </Motion.p>

        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={() =>
              document
                .getElementById('section-properties')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            className="w-full max-w-[280px] sm:w-auto min-h-11 rounded-none bg-accent px-8 py-3 font-inter text-sm font-bold tracking-wide text-white transition-all duration-200 hover:bg-accent-strong touch-manipulation"
          >
            View Properties
          </button>
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="w-full max-w-[280px] sm:w-auto min-h-11 rounded-none border border-foreground bg-transparent px-8 py-3 font-inter text-sm font-bold tracking-wide text-foreground transition-all duration-200 hover:border-accent hover:bg-surface/80 hover:text-accent touch-manipulation backdrop-blur-sm"
          >
            Contact Us on WhatsApp
          </button>
        </Motion.div>
      </Motion.div>
    </section>
  )
}
