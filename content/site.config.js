/**
 * Site Configuration
 *
 * Global site settings, metadata, and branding
 * Customize this file with your company information
 */

export const siteConfig = {
  // Site Information
  name: 'Your Company',
  tagline: 'Build something amazing',
  description: 'A modern web application built with Next.js and Material-UI',
  url: 'https://yourdomain.com',

  // Contact Information
  contact: {
    email: 'hello@yourcompany.com',
    phone: '+1 (555) 000-0000',
    address: {
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94102',
      country: 'United States',
      full: '123 Main Street, San Francisco, CA 94102',
    },
  },

  // Social Media
  social: {
    twitter: 'https://twitter.com/yourcompany',
    linkedin: 'https://linkedin.com/company/yourcompany',
    instagram: 'https://instagram.com/yourcompany',
    facebook: 'https://facebook.com/yourcompany',
    github: 'https://github.com/yourcompany',
  },

  // SEO
  seo: {
    title: 'Your Company | Modern Web Solutions',
    description: 'Build amazing web experiences with our modern Next.js and Material-UI boilerplate. Fast, accessible, and beautifully designed.',
    keywords: ['web development', 'nextjs', 'material-ui', 'react', 'modern web', 'boilerplate'],
    ogImage: '/images/og-image.jpg',
  },

  // Business Information
  business: {
    founded: '2024',
    employees: '10-50',
    industries: ['Technology', 'Web Development', 'Software', 'Design'],
    certifications: [],
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
