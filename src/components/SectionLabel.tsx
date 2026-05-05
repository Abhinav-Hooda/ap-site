import { motion as Motion } from 'framer-motion'

const EASE = [0.215, 0.61, 0.355, 1] as const

type SectionLabelProps = {
  text: string
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <Motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-8 flex items-center justify-center gap-6"
    >
      <div className="h-px w-8 bg-accent/20" aria-hidden />
      <div className="glass-dark px-6 py-2 rounded-full border border-black/5 shadow-soft">
        <span className="font-inter text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
          {text}
        </span>
      </div>
      <div className="h-px w-8 bg-accent/20" aria-hidden />
    </Motion.div>
  )
}
