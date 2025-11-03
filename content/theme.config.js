/**
 * Theme Configuration
 *
 * Brand colors, typography, and design tokens for Luxe Studio
 */

export const themeConfig = {
  // Brand identity
  brand: {
    name: "Luxe Studio",
    logo: {
      icon: "Diamond", // MUI icon name from @mui/icons-material
      text: "LUXE STUDIO"
    }
  },

  // Elegant Luxury Color Palette
  colors: {
    // Primary: Rich Espresso Brown
    primary: {
      main: '#1a1110',      // Rich Espresso Brown
      light: '#3d2e2a',     // Light Brown
      dark: '#0d0807',      // Dark Brown
      contrast: '#ffffff'
    },

    // Secondary: Luxurious Gold
    secondary: {
      main: '#d4af37',      // Luxurious Gold
      light: '#e4c968',     // Light Gold
      dark: '#b8941f',      // Dark Gold
      contrast: '#000000'
    },

    // Success: Sophisticated Green
    success: {
      main: '#2f855a',      // Green
      light: '#48bb78',     // Light green
      dark: '#276749',      // Dark green
    },

    // Neutral: Warm Elegant Tones
    neutral: {
      main: '#fcfaf7',      // Sophisticated warm white
      light: '#ffffff',     // Pure white
      dark: '#e8e1d8',      // Warm divider
    }
  },

  // Typography - Elegant Serif
  typography: {
    fontFamily: 'Playfair Display',  // Elegant serif for sophistication
    headingFamily: 'Playfair Display',
    bodyFamily: 'Lora',
    buttonFamily: 'Montserrat',
    fontWeights: ['400', '500', '600', '700']
  },

  // Layout settings - Refined spacing
  layout: {
    maxWidth: 'lg',
    spacing: 8,
    borderRadius: {
      small: 4,
      medium: 8,
      large: 12,
      xlarge: 16
    }
  },

  // Animation settings - Smooth and refined
  animations: {
    duration: {
      fast: '300ms',
      normal: '500ms',
      slow: '800ms'
    },
    easing: {
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  }
};
