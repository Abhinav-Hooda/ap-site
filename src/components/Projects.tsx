import { motion as Motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'

const EASE = [0.215, 0.61, 0.355, 1] as const

const projectLogos = [
  { name: 'HL City', src: '/logos/hl-city.png' },
  { name: 'Parsvnath', src: '/logos/logo-parsvnaths.png' },
  { name: 'NV City', src: '/logos/nv-city.jpg' },
  { name: 'Omaxe Green Valley', src: '/logos/omaxe-green-valley.png' },
  { name: 'Omaxe', src: '/logos/omaxe.webp' },
  { name: 'Suncity', src: '/logos/suncity.svg' },
  { name: 'HUDA', src: '/logos/huda.svg' },
  { name: 'IMT', src: '/logos/imt.png' },
]

export function Projects() {
  return (
    <section
      id="section-properties"
      className="border-b border-border bg-surface py-24 md:py-32 lg:py-40"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
        <SectionLabel text="Portfolio" />

        <Motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2
            id="projects-heading"
            className="font-mulish text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]"
          >
            We Deal in These Places & Projects
          </h2>
          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mx-auto mt-6 h-1 w-24 bg-accent"
            aria-hidden
          />
          <p className="font-inter mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            Partnering with the most trusted developers and prime locations in Rohtak and surrounding areas.
          </p>
        </Motion.div>

        {/* Logo Grid */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {projectLogos.map((logo, idx) => (
            <Motion.div 
              key={logo.name} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1, ease: EASE }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative aspect-square glass rounded-3xl flex items-center justify-center p-10 transition-all duration-300 hover:shadow-soft border border-white/20"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`}
                className="max-h-full max-w-full object-contain filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 dark:grayscale-0 dark:opacity-100"
              />
              <div className="absolute bottom-6 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="glass-dark px-3 py-1 rounded-full font-inter text-[10px] font-bold uppercase tracking-widest text-accent">
                  {logo.name}
                </span>
              </div>
            </Motion.div>
          ))}
        </div>
        <Motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-inter text-sm font-medium text-muted-foreground">
            And many more upcoming residential & commercial townships.
          </p>
        </Motion.div>
      </div>
    </section>
  )
}
