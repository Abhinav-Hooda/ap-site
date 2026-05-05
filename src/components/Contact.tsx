import { motion as Motion } from 'framer-motion'
import { type FormEvent, useState } from 'react'
import { interestOptions, site } from '../data/site'
import { openWhatsApp } from '../lib/whatsapp'
import { IconFacebook, IconInstagram, IconX } from './icons'
import { SectionLabel } from './SectionLabel'

const EASE = [0.215, 0.61, 0.355, 1] as const

const socialClass =
  'flex size-11 items-center justify-center rounded-full border border-black/5 glass-dark text-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-soft touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

export function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState<string>(interestOptions[0])
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const msg = `Hi, I'm ${name}. Phone: ${phone}. Interested in: ${interest}. Message: ${message}`
    openWhatsApp(msg)
  }

  return (
    <section
      id="section-contact"
      className="bg-background py-24 md:py-32 lg:py-40"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionLabel text="Contact" />
        
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <h2
            id="contact-heading"
            className="font-mulish text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]"
          >
            Get In Touch
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-accent" aria-hidden />
        </Motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <h3 className="font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Contact details
            </h3>
            <ul className="font-inter mt-8 space-y-6 text-base text-muted-foreground">
              <li className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/5 text-accent" aria-hidden>📞</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-60">Phone</p>
                  <a
                    className="text-foreground font-semibold underline decoration-accent/20 underline-offset-4 transition-all hover:text-accent hover:decoration-accent"
                    href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/5 text-accent" aria-hidden>📧</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-60">Email</p>
                  <a
                    className="text-foreground font-semibold underline decoration-accent/20 underline-offset-4 transition-all hover:text-accent hover:decoration-accent"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/5 text-accent" aria-hidden>📍</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-60">Address</p>
                  <p className="text-foreground font-semibold leading-relaxed">
                    {site.address}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              {[
                { href: site.social.instagram, icon: <IconInstagram className="size-5" />, label: 'Instagram' },
                { href: site.social.facebook, icon: <IconFacebook className="size-5" />, label: 'Facebook' },
                { href: site.social.twitter, icon: <IconX className="size-5" />, label: 'X (Twitter)' }
              ].map((social, idx) => (
                <Motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.4 + idx * 0.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label={social.label}
                >
                  {social.icon}
                </Motion.a>
              ))}
            </div>
          </Motion.div>

          <Motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="glass p-8 rounded-[2.5rem] shadow-soft border border-white/20"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="font-inter mb-2 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="enquiry-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="font-inter h-12 w-full rounded-2xl border border-black/5 bg-white/50 px-4 text-base text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/40 focus:border-accent/30 focus:bg-white focus:shadow-soft"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="font-inter mb-2 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="font-inter h-12 w-full rounded-2xl border border-black/5 bg-white/50 px-4 text-base text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/40 focus:border-accent/30 focus:bg-white focus:shadow-soft"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="enquiry-interest"
                  className="font-inter mb-2 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Property interest
                </label>
                <div className="relative">
                  <select
                    id="enquiry-interest"
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="font-inter h-12 w-full appearance-none rounded-2xl border border-black/5 bg-white/50 px-4 text-base text-foreground outline-none transition-all duration-300 focus:border-accent/30 focus:bg-white focus:shadow-soft"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="font-inter mb-2 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="font-inter min-h-[8rem] w-full resize-y rounded-2xl border border-black/5 bg-white/50 px-4 py-3 text-base text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/40 focus:border-accent/30 focus:bg-white focus:shadow-soft"
                  placeholder="Tell us what you are looking for"
                />
              </div>
              <Motion.button
                whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-glow)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="font-inter min-h-12 w-full rounded-2xl bg-accent py-3 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-accent-strong shadow-soft touch-manipulation"
              >
                Send on WhatsApp
              </Motion.button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
