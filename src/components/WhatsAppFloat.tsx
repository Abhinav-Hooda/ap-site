import { motion as Motion } from 'framer-motion'
import { openWhatsApp } from '../lib/whatsapp'
import { IconWhatsApp } from './icons'

export function WhatsAppFloat() {
  return (
    <Motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 22,
        delay: 1.2 // Show after hero animations
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-strong touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:right-8"
      title="Chat with us"
      aria-label="Chat with us on WhatsApp"
    >
      <IconWhatsApp className="size-7" />
    </Motion.button>
  )
}
