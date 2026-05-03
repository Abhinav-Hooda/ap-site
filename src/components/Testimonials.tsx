import { motion as Motion } from 'framer-motion'
import { testimonials } from '../data/site'
import { SectionLabel } from './SectionLabel'

const EASE = [0.215, 0.61, 0.355, 1] as const

export function Testimonials() {
  return (
    <section
      id="section-testimonials"
      className="border-b border-border bg-background py-24 md:py-32 lg:py-40"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionLabel text="Kind Words" />
        
        <Motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2
            id="testimonials-heading"
            className="font-mulish text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]"
          >
            What Our Clients Say
          </h2>
          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mt-6 h-1 w-24 bg-accent origin-left"
            aria-hidden
          />
        </Motion.div>

        {/* Horizontal scroll for mobile, grid for desktop */}
        <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t, idx) => (
            <Motion.article
              key={t.name}
              initial={{ opacity: 0, y: 80, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: EASE }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative w-[min(100%,22rem)] shrink-0 snap-center border border-border border-t-[2px] border-t-accent bg-surface p-8 shadow-none md:w-full"
            >
              <span
                className="font-playfair absolute -top-4 left-6 text-6xl text-accent opacity-20"
                aria-hidden
              >
                “
              </span>
              <div className="relative z-10">
                <p className="font-inter text-base italic leading-relaxed text-foreground md:text-lg">
                  {t.quote}
                </p>
                <footer className="mt-8 border-t border-border pt-6">
                  <p className="font-mulish text-sm font-bold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-inter mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t.role}
                  </p>
                </footer>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
