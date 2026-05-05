export const site = {
  name: 'Abhinav Properties',
  tagline: 'Real estate consultant in Rohtak, Haryana',
  cityTag: 'Sector-33A, Rohtak',
  /** Replace Xs with digits — wa.me expects country code + number, no + */
  whatsappPhone: '919416436253',
  phoneDisplay: '+91-9416436253',
  email: 'info@abhinavproperties.com',
  address: 'House no - 126, Block B, Parsvnath city, Sector-33A, Rohtak, Haryana 124021',
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://x.com/',
  },
} as const

export const hero = {
  headline: 'Your Trusted Partner for Finding the Right Property',
  subheadline: 'Residential Plots · Flats · Commercial Properties',
} as const

export const about = {
  heading: 'About Abhinav Properties',
  body: `At Abhinav Properties, we bring over 25 years of experience and the trust of more than 1000 happy clients. We understand that finding the right property can feel overwhelming, and that’s why we take the time to truly understand your needs and concerns. Whether you are looking for a home or a business space, we focus on guiding you to the best possible choice. Our aim is simple to make the entire process easy, transparent, and stress free for you.`,
} as const

export const stats = [
  { icon: '🏠', label: 'Years of Experience', value: '25+' },
  { icon: '👥', label: 'Happy Clients', value: '1000+' },
  { icon: '📍', label: 'Coverage', value: 'Rohtak & Nearby Areas' },
] as const

export type ListingCategory = 'residential' | 'commercial'

export type PropertyListing = {
  id: string
  title: string
  category: ListingCategory
  badge: string
  location: string
  price: string
}

export const properties: PropertyListing[] = [
  {
    id: '1',
    title: '200 sq yd Plot',
    category: 'residential',
    badge: 'Residential Plot',
    location: 'Sunaria, Rohtak',
    price: '₹28 Lakh',
  },
  {
    id: '2',
    title: '2BHK Flat',
    category: 'residential',
    badge: 'Residential Flat',
    location: 'Model Town, Rohtak',
    price: '₹45 Lakh',
  },
  {
    id: '3',
    title: 'Commercial Shop',
    category: 'commercial',
    badge: 'Commercial',
    location: 'Rohtak City',
    price: '₹55 Lakh',
  },
  {
    id: '4',
    title: '100 sq yd Plot',
    category: 'residential',
    badge: 'Residential Plot',
    location: 'Asthal Bohar',
    price: '₹15 Lakh',
  },
  {
    id: '5',
    title: '3BHK Flat',
    category: 'residential',
    badge: 'Residential Flat',
    location: 'Civil Lines, Rohtak',
    price: '₹65 Lakh',
  },
  {
    id: '6',
    title: 'Office Space',
    category: 'commercial',
    badge: 'Commercial Office',
    location: 'Delhi Bypass, Rohtak',
    price: '₹80 Lakh',
  },
]

export const testimonials = [
  {
    quote:
      'Abhinav Properties helped us find the perfect plot in Sunaria. Very trustworthy and transparent.',
    name: 'Rajesh Kumar',
    role: 'Plot Buyer',
  },
  {
    quote:
      'Smooth process from start to registry. Highly recommended for anyone looking in Rohtak.',
    name: 'Priya Sharma',
    role: 'Flat Buyer',
  },
  {
    quote:
      'Found our commercial space quickly. They know every corner of Rohtak.',
    name: 'Vikas Gupta',
    role: 'Commercial Buyer',
  },
] as const

export const interestOptions = [
  'Residential Plot',
  'Flat / Apartment',
  'Commercial Property',
  'General Enquiry',
] as const
