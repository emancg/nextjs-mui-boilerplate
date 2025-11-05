/**
 * Theme Configuration
 *
 * Brand colors, typography, and design tokens
 * Customize this file to match your brand identity
 */

export const themeConfig = {
  // Brand identity
  brand: {
    name: "Your Company",
    logo: {
      icon: "Star", // MUI icon name from @mui/icons-material
      text: "YOUR COMPANY"
    }
  },

  // Brand Color Palette
  // Customize these colors to match your brand
  colors: {
    // Primary brand color
    primary: {
      main: '#6366f1',      // Indigo
      light: '#818cf8',     // Light Indigo
      dark: '#4f46e5',      // Dark Indigo
      contrast: '#ffffff'
    },

    // Secondary accent color
    secondary: {
      main: '#ec4899',      // Pink
      light: '#f472b6',     // Light Pink
      dark: '#db2777',      // Dark Pink
      contrast: '#ffffff'
    },

    // Success state color
    success: {
      main: '#10b981',      // Green
      light: '#34d399',     // Light green
      dark: '#059669',      // Dark green
    },

    // Neutral background colors
    neutral: {
      main: '#f9fafb',      // Light gray
      light: '#ffffff',     // Pure white
      dark: '#e5e7eb',      // Gray divider
    }
  },

  // Typography settings
  // These will be overridden by the active variant
  typography: {
    fontFamily: 'Inter',
    headingFamily: 'Inter',
    bodyFamily: 'Inter',
    buttonFamily: 'Inter',
    fontWeights: ['400', '500', '600', '700', '800']
  },

  // Layout settings
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

  // Animation settings
  animations: {
    duration: {
      fast: '200ms',
      normal: '400ms',
      slow: '600ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  }
};
