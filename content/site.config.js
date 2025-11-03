/**
 * Site Configuration
 *
 * Global site settings, metadata, and branding for Luxe Studio
 */

export const siteConfig = {
  // Site Information
  name: 'Luxe Studio',
  tagline: 'Where Elegance Meets Excellence',
  description: 'Premium design and consulting services for discerning clients who value sophistication, quality, and timeless elegance.',
  url: 'https://luxestudio.example.com',

  // Contact Information
  contact: {
    email: 'hello@luxestudio.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Madison Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10016',
      country: 'United States',
      full: '123 Madison Avenue, New York, NY 10016',
    },
  },

  // Social Media
  social: {
    twitter: 'https://twitter.com/luxestudio',
    linkedin: 'https://linkedin.com/company/luxestudio',
    instagram: 'https://instagram.com/luxestudio',
    facebook: 'https://facebook.com/luxestudio',
    pinterest: 'https://pinterest.com/luxestudio',
  },

  // SEO
  seo: {
    title: 'Luxe Studio | Premium Design & Consulting Services',
    description: 'Elevate your brand with sophisticated design and strategic consulting. Luxe Studio delivers excellence through timeless elegance.',
    keywords: ['luxury design', 'premium consulting', 'elegant branding', 'sophisticated design', 'high-end services', 'luxury consulting'],
    ogImage: '/images/og-image.jpg',
  },

  // Business Information
  business: {
    founded: '2020',
    employees: '15-20',
    industries: ['Design', 'Consulting', 'Branding', 'Strategy'],
    certifications: ['ISO 9001', 'Design Excellence Award'],
  },

  // Features
  features: {
    newsletter: true,
    blog: true,
    portfolio: true,
    testimonials: true,
    team: true,
    pricing: true,
  },
};
