import { animate, motion as Motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { about, stats } from '../data/site'
import { SectionLabel } from './SectionLabel'

const EASE = [0.215, 0.61, 0.355, 1] as const

function CountUp({ value }: { value: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  
  // Parse numeric part (e.g., "25+" -> 25)
  const digits = value.replace(/[^0-9]/g, '')
  const hasDigits = digits.length > 0
  const numericValue = hasDigits ? parseInt(digits, 10) : 0
  const suffix = value.replace(/[0-9]/g, '')
  
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView && hasDigits) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: 'easeOut',
      })
      return controls.stop
    }
  }, [isInView, count, numericValue, hasDigits])

  if (!hasDigits) {
    return <span>{value}</span>
  }

  return (
    <span ref={ref}>
      <Motion.span>{rounded}</Motion.span>
      {suffix}
    </span>
  )
}

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
            {/* Ambient Background Glow */}
            <Motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="absolute -inset-10 bg-accent/5 blur-[80px] rounded-full" 
              aria-hidden="true" 
            />
            
            <div className="relative grid gap-4">
              {stats.map((s, idx) => (
                <Motion.div 
                  key={s.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: EASE }}
                  className="glass p-8 rounded-3xl transition-all duration-300 hover:shadow-soft group border border-white/20"
                >
                  <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    {s.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="font-mulish mt-3 text-5xl font-bold tracking-tighter text-foreground md:text-6xl">
                      <CountUp value={s.value} />
                    </p>
                  </div>
                  <p className="font-inter mt-4 text-sm text-muted-foreground leading-relaxed">
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
