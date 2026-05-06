import { animate, motion as Motion, useInView, useMotionValue, useTransform, useScroll } from 'framer-motion'
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
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section
      ref={ref}
      id="section-about"
      className="relative border-b border-border bg-background py-24 md:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <Motion.img
          src="/bg-about-img.png"
          alt=""
          style={{ y, scale: 1.4 }}
          className="h-full w-full object-cover object-center dark:opacity-20 transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <SectionLabel text="Our Story" />

        <div className="text-center max-w-4xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2
              id="about-heading"
              className="font-mulish text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {about.heading}
            </h2>
            <div className="mt-6 h-1 w-20 bg-accent mx-auto" aria-hidden />

            <div className="mt-12 space-y-6 text-center">
              <p className="font-inter text-xl leading-relaxed text-foreground md:text-2xl font-medium">
                {about.body.split('. ')[0]}.
              </p>
              <p className="font-inter text-base leading-relaxed text-muted-foreground md:text-lg max-w-3xl mx-auto">
                {about.body.split('. ').slice(1).join('. ')}
              </p>
            </div>
          </Motion.div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto items-stretch">
          {stats.map((s, idx) => (
            <Motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: EASE }}
              className="flex flex-col items-center justify-start bg-surface/50 backdrop-blur-sm p-6 sm:p-8 rounded-[2.5rem] border border-border/50 text-center transition-all duration-300 hover:shadow-soft hover:-translate-y-1 h-full sm:min-h-[280px]"
            >
              <p className="font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-accent h-4">
                {s.label}
              </p>
              <div className="flex-1 flex flex-col items-center justify-center my-4 sm:my-0">
                <p className="font-mulish text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
                  <CountUp value={s.value} />
                </p>
              </div>
              <p className="font-inter mt-2 sm:mt-4 text-sm text-muted-foreground leading-relaxed">
                {s.label === 'Years of Experience' && 'Of deep-rooted local expertise in Rohtak real estate.'}
                {s.label === 'Happy Clients' && 'Families and businesses who found their perfect space with us.'}
                {s.label === 'Coverage' && 'Serving the heart of Haryana with transparency and trust.'}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
