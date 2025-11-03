/**
 * Navigation Configuration
 *
 * Main menu, footer menu, and navigation structure for Luxe Studio
 */

export const navigationConfig = {
  // Main navigation menu
  mainMenu: [
    {
      label: 'Home',
      href: '/',
      type: 'page'
    },
    {
      label: 'About',
      href: '/about',
      type: 'page'
    },
    {
      label: 'Services',
      href: '/services',
      type: 'page'
    },
    {
      label: 'Portfolio',
      href: '/portfolio',
      type: 'page'
    },
    {
      label: 'Team',
      href: '/team',
      type: 'page'
    },
    {
      label: 'Pricing',
      href: '/pricing',
      type: 'page'
    },
    {
      label: 'Blog',
      href: '/blog',
      type: 'page'
    },
    {
      label: 'Contact',
      href: '/contact',
      type: 'page'
    }
  ],

  // Footer menu sections
  footerMenu: {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ],
    services: [
      { label: 'Design Services', href: '/services' },
      { label: 'Consulting', href: '/services' },
      { label: 'Branding', href: '/services' },
      { label: 'Strategy', href: '/services' }
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Case Studies', href: '/portfolio' },
      { label: 'Pricing', href: '/pricing' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' }
    ]
  }
};
