import { motion as Motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'

const EASE = [0.215, 0.61, 0.355, 1] as const

const services = [
  {
    title: 'Residential Properties',
    description: 'Find verified residential plots, flats, builder floors, and family homes in prime locations.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Commercial Spaces',
    description: 'Explore shops, office spaces, SCO plots, and commercial investments with high growth potential.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l.5-2.5A2 2 0 0 1 5.5 3h13a2 2 0 0 1 2 1.5L21 7" />
        <path d="M4 21V10" />
        <path d="M20 21V10" />
        <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
      </svg>
    ),
  },
  {
    title: 'Property Consultation',
    description: 'Get expert guidance on pricing, investment opportunities, documentation, and market trends.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M12 18v-6" />
        <path d="M9 15h6" />
      </svg>
    ),
  },
  {
    title: 'Buy • Sell • Invest',
    description: 'Whether you\'re purchasing your first property or expanding your portfolio, we simplify every step.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section 
      className="relative bg-background py-24 md:py-32 transition-colors duration-300 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Image with Smooth Top Transition */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="/service-img.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-20 dark:opacity-30 transition-opacity duration-300"
          aria-hidden="true"
        />
        {/* Whitish Blur Gradient for smooth transition */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-x-0 top-0 h-48 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none z-[2]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <SectionLabel text="Our Services" />
          
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2
              id="services-heading"
              className="mt-4 font-mulish text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem] uppercase"
            >
              Complete Real Estate Solutions
            </h2>
            <div className="mx-auto mt-6 h-1 w-20 bg-accent" aria-hidden />
            <p className="font-inter mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Helping you buy, sell, invest, and manage properties with confidence across Rohtak and nearby areas.
            </p>
          </Motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <Motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
              className="flex flex-col items-start text-left p-6 sm:p-8 glass backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-accent/30 hover:shadow-soft group"
            >
              <div className="mb-4 sm:mb-6 flex size-12 items-center justify-center rounded-xl bg-accent/5 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="font-mulish text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="font-inter mt-2 sm:mt-3 text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
