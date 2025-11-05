/**
 * Health / Wellness Style Variant
 *
 * Calming, trustworthy. Wellness branding from 2010s+.
 * Perfect for clinics, wellness brands, and health apps.
 */

export const healthWellnessVariant = {
  name: 'healthWellness',
  displayName: 'Health / Wellness',
  description: 'Calming and trustworthy design for health and wellness',

  palette: {
    mode: 'light',
    primary: {
      main: '#7CB9E8',
      light: '#A8D5E8',
      dark: '#5A9BC7',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#98D8C8',
      light: '#BCE5DC',
      dark: '#7AC2B0',
      contrastText: '#263238',
    },
    error: {
      main: '#E57373',
      light: '#EF9A9A',
      dark: '#D66565',
    },
    warning: {
      main: '#FFB74D',
      light: '#FFCA7A',
      dark: '#E5A343',
    },
    info: {
      main: '#64B5F6',
      light: '#90CAF9',
      dark: '#5AA3DD',
    },
    success: {
      main: '#81C784',
      light: '#A5D6A7',
      dark: '#73B376',
    },
    background: {
      default: '#FAFBFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#263238',
      secondary: '#546E7A',
      disabled: '#90A4AE',
    },
    divider: '#CFD8DC',
  },

  typography: {
    fontFamily: 'var(--font-source-sans-pro), var(--font-open-sans), sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.125rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.625rem',
      lineHeight: 1.4,
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
      fontWeight: 600,
      fontSize: '0.875rem',
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },

  spacing: 16,

  shape: {
    borderRadius: 24,
  },

  shadows: [
    'none',
    '0 2px 8px rgba(38, 50, 56, 0.08)',
    '0 4px 12px rgba(38, 50, 56, 0.1)',
    '0 6px 16px rgba(38, 50, 56, 0.12)',
    '0 8px 20px rgba(38, 50, 56, 0.14)',
    '0 10px 24px rgba(38, 50, 56, 0.16)',
    '0 12px 28px rgba(38, 50, 56, 0.18)',
    '0 14px 32px rgba(38, 50, 56, 0.20)',
    '0 4px 10px rgba(38, 50, 56, 0.1)',
    '0 6px 14px rgba(38, 50, 56, 0.1)',
    '0 8px 18px rgba(38, 50, 56, 0.1)',
    '0 10px 22px rgba(38, 50, 56, 0.1)',
    '0 12px 26px rgba(38, 50, 56, 0.1)',
    '0 14px 30px rgba(38, 50, 56, 0.1)',
    '0 16px 34px rgba(38, 50, 56, 0.1)',
    '0 18px 38px rgba(38, 50, 56, 0.1)',
    '0 20px 42px rgba(38, 50, 56, 0.1)',
    '0 22px 46px rgba(38, 50, 56, 0.1)',
    '0 24px 50px rgba(38, 50, 56, 0.1)',
    '0 26px 54px rgba(38, 50, 56, 0.1)',
    '0 28px 58px rgba(38, 50, 56, 0.1)',
    '0 30px 62px rgba(38, 50, 56, 0.1)',
    '0 32px 66px rgba(38, 50, 56, 0.1)',
    '0 34px 70px rgba(38, 50, 56, 0.1)',
    '0 36px 74px rgba(38, 50, 56, 0.1)',
  ],

  custom: {
    animations: {
      intensity: 'gentle',
      duration: {
        fast: 0.25,
        normal: 0.5,
        slow: 0.9,
      },
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    effects: {
      glassEffect: false,
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
          borderRadius: 24,
          padding: '12px 32px',
          fontSize: '0.875rem',
          fontWeight: 600,
          transition: 'all 0.5s ease',
        },
        contained: {
          background: '#7CB9E8',
          color: '#FFFFFF',
          boxShadow: '0 4px 12px rgba(124, 185, 232, 0.3)',
          '&:hover': {
            background: '#A8D5E8',
            boxShadow: '0 6px 16px rgba(124, 185, 232, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: 'none',
          boxShadow: '0 4px 12px rgba(38, 50, 56, 0.1)',
          transition: 'all 0.5s ease',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(38, 50, 56, 0.15)',
            transform: 'translateY(-4px) scale(1.01)',
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
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          color: '#263238',
          boxShadow: '0 2px 8px rgba(38, 50, 56, 0.08)',
          borderBottom: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
            '& fieldset': {
              borderColor: '#B2DFDB',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#26A69A',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 12px rgba(38, 166, 154, 0.15)',
              '& fieldset': {
                borderColor: '#26A69A',
              },
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: '#B2DFDB',
          color: '#263238',
          fontWeight: 500,
          transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
          '&:hover': {
            backgroundColor: '#26A69A',
            color: '#FFFFFF',
            transform: 'translateY(-2px) scale(1.02)',
            boxShadow: '0 4px 12px rgba(38, 166, 154, 0.2)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#B2DFDB',
          borderWidth: '1px',
        },
      },
    },
  },
};
