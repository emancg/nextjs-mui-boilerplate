/**
 * Modernism Style Variant
 *
 * Functionality and clarity. Modernist design from 1900s-1970s.
 * Perfect for tech startups, professional services, and SaaS.
 */

export const modernismVariant = {
  name: 'modernism',
  displayName: 'Modernism',
  description: 'Functional clarity inspired by modernist movement',

  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1E',
      light: '#555555',
      dark: '#0D0D0D',
      contrastText: '#F5F5F5',
    },
    secondary: {
      main: '#FFD700',
      light: '#FFE14D',
      dark: '#CCAC00',
      contrastText: '#1E1E1E',
    },
    error: {
      main: '#C62828',
      light: '#E53935',
      dark: '#B71C1C',
    },
    warning: {
      main: '#F57C00',
      light: '#FF9800',
      dark: '#E65100',
    },
    info: {
      main: '#1976D2',
      light: '#42A5F5',
      dark: '#1565C0',
    },
    success: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#BDBDBD',
    },
    divider: '#BDBDBD',
  },

  typography: {
    fontFamily: 'var(--font-quicksand), Futura, "Century Gothic", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.625rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.875rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
  },

  spacing: 10,

  shape: {
    borderRadius: 2,
  },

  shadows: [
    'none',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 4px 8px rgba(0, 0, 0, 0.12)',
    '0 6px 12px rgba(0, 0, 0, 0.15)',
    '0 8px 16px rgba(0, 0, 0, 0.18)',
    '0 10px 20px rgba(0, 0, 0, 0.20)',
    '0 12px 24px rgba(0, 0, 0, 0.22)',
    '0 14px 28px rgba(0, 0, 0, 0.24)',
    '0 4px 10px rgba(0, 0, 0, 0.1)',
    '0 6px 14px rgba(0, 0, 0, 0.12)',
    '0 8px 18px rgba(0, 0, 0, 0.14)',
    '0 10px 22px rgba(0, 0, 0, 0.16)',
    '0 12px 26px rgba(0, 0, 0, 0.18)',
    '0 14px 30px rgba(0, 0, 0, 0.2)',
    '0 16px 34px rgba(0, 0, 0, 0.22)',
    '0 18px 38px rgba(0, 0, 0, 0.24)',
    '0 20px 42px rgba(0, 0, 0, 0.26)',
    '0 22px 46px rgba(0, 0, 0, 0.28)',
    '0 24px 50px rgba(0, 0, 0, 0.3)',
    '0 26px 54px rgba(0, 0, 0, 0.32)',
    '0 28px 58px rgba(0, 0, 0, 0.34)',
    '0 30px 62px rgba(0, 0, 0, 0.36)',
    '0 32px 66px rgba(0, 0, 0, 0.38)',
    '0 34px 70px rgba(0, 0, 0, 0.4)',
    '0 36px 74px rgba(0, 0, 0, 0.42)',
  ],

  custom: {
    animations: {
      intensity: 'low',
      duration: {
        fast: 0.15,
        normal: 0.35,
        slow: 0.6,
      },
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    effects: {
      glassEffect: false,
      gradients: false,
      particles: false,
      shadows: true,
      blur: false,
      noise: false,
      grain: false,
    },
    spacing: {
      sectionPadding: '120px',
      cardPadding: '40px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '12px 28px',
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'all 0.35s ease',
        },
        contained: {
          background: '#1E1E1E',
          color: '#F5F5F5',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            background: '#555555',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          border: 'none',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
          transition: 'all 0.35s ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#212121',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          borderBottom: 'none',
        },
      },
    },
  },
};
