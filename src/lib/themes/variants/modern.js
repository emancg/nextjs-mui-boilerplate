/**
 * Modern Style Variant
 *
 * Clean, contemporary design with vibrant colors and smooth animations.
 * Perfect for tech startups, SaaS products, and modern web applications.
 */

export const modernVariant = {
  name: 'modern',
  displayName: 'Modern',
  description: 'Clean, contemporary design with vibrant colors',

  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1', // Indigo
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ec4899', // Pink
      light: '#f472b6',
      dark: '#db2777',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
      disabled: '#9ca3af',
    },
    divider: '#e5e7eb',
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      fontSize: '0.95rem',
      letterSpacing: '0.02em',
    },
  },

  spacing: 8, // 8px base unit

  shape: {
    borderRadius: 12, // Rounded corners
  },

  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
    '0 6px 12px 0 rgba(0, 0, 0, 0.1)',
    '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
    '0 10px 20px 0 rgba(0, 0, 0, 0.12)',
    '0 12px 24px 0 rgba(0, 0, 0, 0.12)',
    '0 14px 28px 0 rgba(0, 0, 0, 0.14)',
    '0 16px 32px 0 rgba(0, 0, 0, 0.14)',
    '0 18px 36px 0 rgba(0, 0, 0, 0.16)',
    '0 20px 40px 0 rgba(0, 0, 0, 0.16)',
    '0 22px 44px 0 rgba(0, 0, 0, 0.18)',
    '0 24px 48px 0 rgba(0, 0, 0, 0.18)',
    '0 26px 52px 0 rgba(0, 0, 0, 0.2)',
    '0 28px 56px 0 rgba(0, 0, 0, 0.2)',
    '0 30px 60px 0 rgba(0, 0, 0, 0.22)',
    '0 32px 64px 0 rgba(0, 0, 0, 0.22)',
    '0 34px 68px 0 rgba(0, 0, 0, 0.24)',
    '0 36px 72px 0 rgba(0, 0, 0, 0.24)',
  ],

  // Custom properties for animations and effects
  custom: {
    animations: {
      intensity: 'medium', // low, medium, high
      duration: {
        fast: 0.2,
        normal: 0.4,
        slow: 0.6,
      },
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    effects: {
      glassEffect: false,
      gradients: true,
      particles: false,
      shadows: true,
      blur: false,
    },
    spacing: {
      sectionPadding: '80px',
      cardPadding: '24px',
    },
  },

  // Component-specific overrides
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.95rem',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 8px 16px rgba(99, 102, 241, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        },
        elevation2: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'translateY(-1px)',
            },
            '&.Mui-focused': {
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 8px rgba(99, 102, 241, 0.15)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
};
