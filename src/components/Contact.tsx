import { motion as Motion } from 'framer-motion'
import { type FormEvent, useState } from 'react'
import { interestOptions, site } from '../data/site'
import { openWhatsApp } from '../lib/whatsapp'
import { IconFacebook, IconInstagram, IconX } from './icons'
import { SectionLabel } from './SectionLabel'

const EASE = [0.215, 0.61, 0.355, 1] as const

const socialClass =
  'flex size-11 items-center justify-center rounded-none border border-border text-foreground transition-colors duration-200 hover:border-accent hover:text-accent touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

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
      className="border-b border-border bg-background py-24 md:py-32 lg:py-40"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionLabel text="Contact" />
        
        <Motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2
            id="contact-heading"
            className="font-mulish text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]"
          >
            Get In Touch
          </h2>
          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mt-4 h-px w-24 bg-accent origin-left"
            aria-hidden
          />
        </Motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <h3 className="font-inter text-xs font-bold uppercase tracking-[0.15em] text-accent">
              Contact details
            </h3>
            <ul className="font-inter mt-6 space-y-4 text-base text-muted-foreground">
              <li>
                <span className="text-foreground" aria-hidden>📞 </span>
                Phone:{' '}
                <a
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="text-foreground" aria-hidden>📧 </span>
                Email:{' '}
                <a
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="text-foreground" aria-hidden>📍 </span>
                Address: {site.address}
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { href: site.social.instagram, icon: <IconInstagram className="size-5" />, label: 'Instagram' },
                { href: site.social.facebook, icon: <IconFacebook className="size-5" />, label: 'Facebook' },
                { href: site.social.twitter, icon: <IconX className="size-5" />, label: 'X (Twitter)' }
              ].map((social, idx) => (
                <Motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
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
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="border border-border bg-surface p-6 shadow-none md:p-8"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="font-inter mb-2 block text-sm font-medium text-foreground"
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
                  className="font-inter h-12 w-full rounded-none border border-border bg-transparent px-3 text-base text-foreground outline-none transition-colors duration-150 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-0"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="font-inter mb-2 block text-sm font-medium text-foreground"
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
                  className="font-inter h-12 w-full rounded-none border border-border bg-transparent px-3 text-base text-foreground outline-none transition-colors duration-150 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-0"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="enquiry-interest"
                  className="font-inter mb-2 block text-sm font-medium text-foreground"
                >
                  Property interest
                </label>
                <select
                  id="enquiry-interest"
                  name="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="font-inter h-12 w-full rounded-none border border-border bg-transparent px-3 text-base text-foreground outline-none transition-colors duration-150 focus:border-accent focus:ring-0"
                >
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="enquiry-message"
                  className="font-inter mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="font-inter min-h-[7rem] w-full resize-y rounded-none border border-border bg-transparent px-3 py-3 text-base text-foreground outline-none transition-colors duration-150 placeholder:text-muted-foreground/60 focus:border-accent focus:ring-0"
                  placeholder="Tell us what you are looking for"
                />
              </div>
              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="font-inter min-h-11 w-full rounded-none bg-dark py-3 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-black touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark"
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
