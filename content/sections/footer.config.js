/**
 * Footer Section Configuration
 *
 * INSTRUCTIONS:
 * - Replace all placeholder values with your actual information
 * - Update brand name, description, and copyright text
 * - Update social media links and contact information
 * - Customize quick links to match your site structure
 * - Add or remove contact methods as needed
 * - Icons available from @mui/icons-material
 */

export const footerConfig = {
  // Brand Information
  brandName: "YOUR COMPANY",
  brandDescription: "Your company description goes here. This is a great place to briefly describe what you do and what makes you unique.",

  // Copyright and Location
  copyrightText: "Your Company Name",
  location: "Your City, Your Country",

  // Contact Section Title
  title: "GET IN TOUCH",

  // Legacy contact object (optional, for backwards compatibility)
  contact: {
    email: "contact@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: "Your City, Your Country"
  },

  // Quick Links (Navigation)
  quickLinks: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/service' },
    { text: 'Contact', href: '#contactus-section' },
  ],

  // Contact Information & Social Media
  contactInfo: [
    {
      icon: "Facebook",
      type: "social",
      label: "@yourcompany",
      href: "https://facebook.com/yourcompany"
    },
    {
      icon: "Instagram",
      type: "social",
      label: "@yourcompany",
      href: "https://instagram.com/yourcompany"
    },
    {
      icon: "Phone",
      type: "contact",
      label: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: "Email",
      type: "contact",
      label: "contact@yourcompany.com",
      href: "mailto:contact@yourcompany.com"
    }
  ],

  // Optional: Additional contact methods
  // Uncomment and customize as needed:
  // {
  //   icon: "Language",
  //   type: "website",
  //   label: "www.yourcompany.com",
  //   href: "https://www.yourcompany.com"
  // },
  // {
  //   icon: "LinkedIn",
  //   type: "social",
  //   label: "@yourcompany",
  //   href: "https://linkedin.com/company/yourcompany"
  // },
  // {
  //   icon: "Twitter",
  //   type: "social",
  //   label: "@yourcompany",
  //   href: "https://twitter.com/yourcompany"
  // }
};
