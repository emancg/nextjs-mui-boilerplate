/**
 * Glassmorphism Style Variant
 *
 * Transparency and depth. Contemporary design from 2020+.
 * Perfect for landing pages, modern apps, and creative portfolios.
 */

export const glassmorphismVariant = {
  name: 'glassmorphism',
  displayName: 'Glassmorphism',
  description: 'Transparent glass-like UI with depth and modern aesthetics',

  palette: {
    mode: 'light',
    primary: {
      main: '#6366F1',
      light: '#8B8DF4',
      dark: '#4F52D9',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#E8E8E8',
      contrastText: '#1F2937',
    },
    error: {
      main: '#EF4444',
      light: '#F87171',
      dark: '#DC2626',
    },
    warning: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
    },
    info: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    success: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
    },
    background: {
      default: '#F0F2FF', // Light lavender background instead of gradient
      paper: 'rgba(255, 255, 255, 0.1)',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
    },
    divider: '#E5E7EB',
  },

  typography: {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    h1: {
      fontWeight: 700,
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
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem',
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },

  spacing: 20,

  shape: {
    borderRadius: 16,
  },

  shadows: [
    'none',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 4px 16px rgba(31, 38, 135, 0.25)',
    '0 12px 40px rgba(31, 38, 135, 0.45)',
    '0 16px 48px rgba(31, 38, 135, 0.50)',
    '0 20px 56px rgba(31, 38, 135, 0.55)',
    '0 24px 64px rgba(31, 38, 135, 0.60)',
    '0 28px 72px rgba(31, 38, 135, 0.65)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
    '0 8px 32px rgba(31, 38, 135, 0.37)',
  ],

  custom: {
    animations: {
      intensity: 'high',
      duration: {
        fast: 0.2,
        normal: 0.5,
        slow: 0.9,
      },
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    effects: {
      glassEffect: true,
      gradients: true,
      particles: false,
      shadows: true,
      blur: true,
      noise: false,
      grain: false,
    },
    spacing: {
      sectionPadding: '128px',
      cardPadding: '40px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: '12px 28px',
          fontSize: '0.875rem',
          fontWeight: 700,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0 12px 40px rgba(31, 38, 135, 0.45)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 16px 48px rgba(31, 38, 135, 0.50)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          color: '#1F2937',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
          borderBottom: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 16,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            '& fieldset': {
              border: 'none',
            },
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 12px 40px rgba(31, 38, 135, 0.45)',
            },
            '&.Mui-focused': {
              background: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 16px 48px rgba(31, 38, 135, 0.50)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          color: '#1F2937',
          fontWeight: 700,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0 12px 40px rgba(31, 38, 135, 0.45)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255, 255, 255, 0.18)',
          borderWidth: '1px',
        },
      },
    },
  },
};
