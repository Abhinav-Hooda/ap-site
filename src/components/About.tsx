import { motion as Motion } from 'framer-motion'
import { about, stats } from '../data/site'
import { SectionLabel } from './SectionLabel'

const EASE = [0.215, 0.61, 0.355, 1] as const

export function About() {
  return (
    <section
      id="section-about"
      className="border-b border-border bg-background py-24 md:py-32 lg:py-40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionLabel text="Our Story" />
        
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          <Motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col justify-center"
          >
            <h2
              id="about-heading"
              className="font-mulish text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {about.heading}
            </h2>
            <Motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="mt-6 h-1 w-20 bg-accent origin-left"
              aria-hidden
            />
            <div className="mt-10 space-y-6">
              <p className="font-inter text-lg leading-relaxed text-foreground md:text-xl font-medium">
                {about.body.split('. ')[0]}.
              </p>
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg">
                {about.body.split('. ').slice(1).join('. ')}
              </p>
            </div>
          </Motion.div>

          <div className="relative">
            {/* Geometric pattern background */}
            <Motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="absolute -inset-4 border border-border" 
              aria-hidden="true" 
            />
            
            <div className="relative flex flex-col gap-px bg-border border border-border shadow-none overflow-hidden">
              {stats.map((s, idx) => (
                <Motion.div 
                  key={s.label}
                  initial={{ opacity: 0, x: 80, rotate: idx % 2 === 0 ? 3 : -3 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: EASE }}
                  className="bg-surface p-10 transition-colors duration-300 hover:bg-muted group"
                >
                  <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {s.label}
                  </p>
                  <Motion.p 
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 14, delay: idx * 0.12 + 0.2 }}
                    className="font-mulish mt-3 text-5xl font-bold tracking-tighter text-foreground md:text-6xl"
                  >
                    {s.value}
                  </Motion.p>
                  <p className="font-inter mt-4 text-sm text-muted-foreground">
                    {s.label === 'Years of Experience' && 'Of deep-rooted local expertise in Rohtak real estate.'}
                    {s.label === 'Happy Clients' && 'Families and businesses who found their perfect space with us.'}
                    {s.label === 'Coverage' && 'Serving the heart of Haryana with transparency and trust.'}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
