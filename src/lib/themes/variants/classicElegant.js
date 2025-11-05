/**
 * Classic / Elegant Style Variant
 *
 * Refined hierarchy and craft. Classical print-inspired design.
 * Perfect for luxury brands, editorial, and institutions.
 */

export const classicElegantVariant = {
  name: 'classicElegant',
  displayName: 'Classic / Elegant',
  description: 'Refined hierarchy and craft inspired by classical design',

  palette: {
    mode: 'light',
    primary: {
      main: '#1A1A1A',
      light: '#4F4F4F',
      dark: '#0A0A0A',
      contrastText: '#FAF8F5',
    },
    secondary: {
      main: '#B8860B',
      light: '#D4A637',
      dark: '#8B6914',
      contrastText: '#1A1A1A',
    },
    error: {
      main: '#8B2E2E',
      light: '#A85252',
      dark: '#6B1F1F',
    },
    warning: {
      main: '#8B6914',
      light: '#B8941F',
      dark: '#6B4F0A',
    },
    info: {
      main: '#2C4F6F',
      light: '#4A7BA3',
      dark: '#1E3A54',
    },
    success: {
      main: '#2F5233',
      light: '#4A7549',
      dark: '#1E3621',
    },
    background: {
      default: '#FAF8F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#595959',
      disabled: '#B8B8B8',
    },
    divider: '#D4C5B9',
  },

  typography: {
    fontFamily: 'var(--font-cormorant-garamond), Garamond, Baskerville, "Times New Roman", serif',
    h1: {
      fontWeight: 400,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    h2: {
      fontWeight: 400,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '0.01em',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.8,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    button: {
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },

  spacing: 12,

  shape: {
    borderRadius: 4,
  },

  shadows: [
    'none',
    '0 2px 4px rgba(26, 26, 26, 0.08)',
    '0 4px 8px rgba(26, 26, 26, 0.12)',
    '0 6px 12px rgba(26, 26, 26, 0.15)',
    '0 8px 16px rgba(26, 26, 26, 0.18)',
    '0 10px 20px rgba(26, 26, 26, 0.20)',
    '0 12px 24px rgba(26, 26, 26, 0.22)',
    '0 14px 28px rgba(26, 26, 26, 0.24)',
    '0 4px 10px rgba(26, 26, 26, 0.1)',
    '0 6px 14px rgba(26, 26, 26, 0.12)',
    '0 8px 18px rgba(26, 26, 26, 0.14)',
    '0 10px 22px rgba(26, 26, 26, 0.16)',
    '0 12px 26px rgba(26, 26, 26, 0.18)',
    '0 14px 30px rgba(26, 26, 26, 0.2)',
    '0 16px 34px rgba(26, 26, 26, 0.22)',
    '0 18px 38px rgba(26, 26, 26, 0.24)',
    '0 20px 42px rgba(26, 26, 26, 0.26)',
    '0 22px 46px rgba(26, 26, 26, 0.28)',
    '0 24px 50px rgba(26, 26, 26, 0.3)',
    '0 26px 54px rgba(26, 26, 26, 0.32)',
    '0 28px 58px rgba(26, 26, 26, 0.34)',
    '0 30px 62px rgba(26, 26, 26, 0.36)',
    '0 32px 66px rgba(26, 26, 26, 0.38)',
    '0 34px 70px rgba(26, 26, 26, 0.4)',
    '0 36px 74px rgba(26, 26, 26, 0.42)',
  ],

  custom: {
    animations: {
      intensity: 'low',
      duration: {
        fast: 0.2,
        normal: 0.4,
        slow: 0.8,
      },
      easing: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
    },
    effects: {
      glassEffect: false,
      gradients: false,
      particles: false,
      shadows: true,
      blur: false,
      noise: false,
      grain: true,
    },
    spacing: {
      sectionPadding: '100px',
      cardPadding: '42px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '14px 32px',
          fontSize: '0.875rem',
          fontWeight: 400,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          transition: 'all 0.4s ease',
        },
        outlined: {
          border: '1px solid #1A1A1A',
          color: '#1A1A1A',
          '&:hover': {
            background: '#1A1A1A',
            color: '#FAF8F5',
            border: '1px solid #1A1A1A',
          },
        },
        contained: {
          background: '#1A1A1A',
          color: '#FAF8F5',
          boxShadow: '0 4px 12px rgba(26, 26, 26, 0.2)',
          '&:hover': {
            background: '#4F4F4F',
            boxShadow: '0 6px 16px rgba(26, 26, 26, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: '1px solid #D4C5B9',
          boxShadow: '0 4px 12px rgba(26, 26, 26, 0.1)',
          transition: 'all 0.4s ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(26, 26, 26, 0.15)',
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
        elevation1: {
          boxShadow: '0 2px 4px rgba(26, 26, 26, 0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 8px rgba(26, 26, 26, 0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#1A1A1A',
          boxShadow: '0 2px 8px rgba(26, 26, 26, 0.08)',
          borderBottom: '1px solid #D4C5B9',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            transition: 'all 0.4s ease',
            '& fieldset': {
              borderColor: '#D4C5B9',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: '#1A1A1A',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 12px rgba(26, 26, 26, 0.1)',
              '& fieldset': {
                borderColor: '#1A1A1A',
                borderWidth: '2px',
              },
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: '1px solid #D4C5B9',
          backgroundColor: '#FAF8F5',
          color: '#1A1A1A',
          fontWeight: 400,
          letterSpacing: '0.02em',
          transition: 'all 0.4s ease',
          '&:hover': {
            backgroundColor: '#1A1A1A',
            color: '#FAF8F5',
            boxShadow: '0 2px 8px rgba(26, 26, 26, 0.15)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#D4C5B9',
          borderWidth: '1px',
        },
      },
    },
  },
};
