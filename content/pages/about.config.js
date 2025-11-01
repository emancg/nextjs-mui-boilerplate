/**
 * About Page Configuration
 *
 * Defines the composition of sections on the about page
 */

import { aboutConfig, aboutConfigCentered } from '../sections/about.config';
import { statsConfig } from '../sections/stats.config';
import { testimonialsConfig } from '../sections/testimonials.config';
import { ctaConfig } from '../sections/cta.config';
import { footerConfig } from '../sections/footer.config';

// Hero config for About page
const aboutHeroConfig = {
  title: "About Your Company Name",
  subtitle: "Discover the story behind Your Company Name",
  cta: {
    text: "Contact Us",
    href: "/contact"
  },
};

export const aboutPageConfig = {
  title: "About",
  background: {
    image: null // No background image - minimal clean design
  },
  sections: [
    {
      id: "hero-container",
      type: 'hero',
      config: aboutHeroConfig,
      containerProps: {
        sx: { mt: 8 }
      }
    },
    {
      id: "about-section",
      type: 'about',
      config: aboutConfig
    },
    {
      id: "mission-section",
      type: 'about',
      config: aboutConfigCentered
    },
    {
      id: "stats-section",
      type: 'stats',
      config: statsConfig
    },
    {
      id: "testimonials-section",
      type: 'testimonials',
      config: testimonialsConfig
    },
    {
      id: "cta-section",
      type: 'cta',
      config: ctaConfig
    },
    {
      id: "contactus-section",
      type: 'footer',
      config: footerConfig
    }
  ]
};
