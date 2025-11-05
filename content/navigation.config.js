/**
 * Navigation Configuration
 *
 * Main menu, footer menu, and navigation structure
 * Customize this file to add or remove navigation items
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
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ],
    services: [
      { label: 'Services', href: '/services' },
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Solutions', href: '/solutions' }
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' }
    ]
  }
};
