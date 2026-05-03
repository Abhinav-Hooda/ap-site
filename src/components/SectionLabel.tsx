import { motion as Motion } from 'framer-motion'

const EASE = [0.215, 0.61, 0.355, 1] as const

type SectionLabelProps = {
  text: string
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <Motion.div 
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-6 flex items-center gap-4"
    >
      <Motion.span
        initial={{ scaleX: 0.85, rotate: 0 }}
        whileInView={{ scaleX: 1, rotate: -2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        className="h-px flex-1 bg-border origin-left"
        aria-hidden
      />
      <span className="font-inter text-xs font-bold uppercase tracking-[0.15em] text-accent">
        {text}
      </span>
      <Motion.span
        initial={{ scaleX: 0.85, rotate: 0 }}
        whileInView={{ scaleX: 1, rotate: 2 }}
        transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        className="h-px flex-1 bg-border origin-right"
        aria-hidden
      />
    </Motion.div>
  )
}
