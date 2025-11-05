/**
 * Nonprofit / NGO Style Variant
 *
 * Cause-first clarity and empathy. Cause-driven design.
 * Perfect for fundraising, advocacy, and awareness campaigns.
 */

export const nonprofitNgoVariant = {
  name: 'nonprofitNgo',
  displayName: 'Nonprofit / NGO',
  description: 'Cause-first clarity with empathetic design',

  palette: {
    mode: 'light',
    primary: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFA726',
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EF5350',
      light: '#E57373',
      dark: '#D84B48',
    },
    warning: {
      main: '#FFCA28',
      light: '#FFD54F',
      dark: '#E5B625',
    },
    info: {
      main: '#42A5F5',
      light: '#64B5F6',
      dark: '#3B95DD',
    },
    success: {
      main: '#66BB6A',
      light: '#81C784',
      dark: '#5DA860',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
      disabled: '#9E9E9E',
    },
    divider: '#BDBDBD',
  },

  typography: {
    fontFamily: 'var(--font-nunito), var(--font-lato), sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
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
      fontSize: '1.0625rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
  },

  spacing: 16,

  shape: {
    borderRadius: 8,
  },

  shadows: [
    'none',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 4px 8px rgba(0, 0, 0, 0.12)',
    '0 6px 12px rgba(0, 0, 0, 0.14)',
    '0 8px 16px rgba(0, 0, 0, 0.16)',
    '0 10px 20px rgba(0, 0, 0, 0.18)',
    '0 12px 24px rgba(0, 0, 0, 0.20)',
    '0 14px 28px rgba(0, 0, 0, 0.22)',
    '0 4px 10px rgba(0, 0, 0, 0.12)',
    '0 6px 14px rgba(0, 0, 0, 0.12)',
    '0 8px 18px rgba(0, 0, 0, 0.12)',
    '0 10px 22px rgba(0, 0, 0, 0.12)',
    '0 12px 26px rgba(0, 0, 0, 0.12)',
    '0 14px 30px rgba(0, 0, 0, 0.12)',
    '0 16px 34px rgba(0, 0, 0, 0.12)',
    '0 18px 38px rgba(0, 0, 0, 0.12)',
    '0 20px 42px rgba(0, 0, 0, 0.12)',
    '0 22px 46px rgba(0, 0, 0, 0.12)',
    '0 24px 50px rgba(0, 0, 0, 0.12)',
    '0 26px 54px rgba(0, 0, 0, 0.12)',
    '0 28px 58px rgba(0, 0, 0, 0.12)',
    '0 30px 62px rgba(0, 0, 0, 0.12)',
    '0 32px 66px rgba(0, 0, 0, 0.12)',
    '0 34px 70px rgba(0, 0, 0, 0.12)',
    '0 36px 74px rgba(0, 0, 0, 0.12)',
  ],

  custom: {
    animations: {
      intensity: 'medium',
      duration: {
        fast: 0.2,
        normal: 0.4,
        slow: 0.7,
      },
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
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
      sectionPadding: '96px',
      cardPadding: '32px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '0.875rem',
          fontWeight: 700,
          transition: 'all 0.4s ease',
        },
        contained: {
          background: '#2E7D32',
          color: '#FFFFFF',
          boxShadow: '0 4px 8px rgba(46, 125, 50, 0.3)',
          '&:hover': {
            background: '#4CAF50',
            boxShadow: '0 6px 12px rgba(46, 125, 50, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
          transition: 'all 0.4s ease',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.16)',
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
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid #BDBDBD',
        },
      },
    },
  },
};
