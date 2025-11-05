/**
 * Eco / Organic Style Variant
 *
 * Nature-inspired harmony. Sustainable design from 2010s+.
 * Perfect for sustainability, organic products, and environmental NGOs.
 */

export const ecoOrganicVariant = {
  name: 'ecoOrganic',
  displayName: 'Eco / Organic',
  description: 'Nature-inspired harmony with sustainable aesthetics',

  palette: {
    mode: 'light',
    primary: {
      main: '#4A7C59',
      light: '#6B9E7C',
      dark: '#3A6147',
      contrastText: '#F5F5DC',
    },
    secondary: {
      main: '#D4A574',
      light: '#E8C9A1',
      dark: '#B8935F',
      contrastText: '#2E3A23',
    },
    error: {
      main: '#A1887F',
      light: '#BCAAA4',
      dark: '#8D6E63',
    },
    warning: {
      main: '#FFB74D',
      light: '#FFCA7A',
      dark: '#E5A343',
    },
    info: {
      main: '#4DB6AC',
      light: '#78C9C0',
      dark: '#45A39A',
    },
    success: {
      main: '#66BB6A',
      light: '#8ACC8D',
      dark: '#5DA860',
    },
    background: {
      default: '#F5F5DC',
      paper: '#FEFEF5',
    },
    text: {
      primary: '#2E3A23',
      secondary: '#5A6B4D',
      disabled: '#9AA88D',
    },
    divider: '#C8D5B9',
  },

  typography: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '0em',
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

  spacing: 14,

  shape: {
    borderRadius: 16,
  },

  shadows: [
    'none',
    '0 2px 8px rgba(46, 58, 35, 0.08)',
    '0 4px 12px rgba(46, 58, 35, 0.1)',
    '0 6px 16px rgba(46, 58, 35, 0.12)',
    '0 8px 20px rgba(46, 58, 35, 0.14)',
    '0 10px 24px rgba(46, 58, 35, 0.16)',
    '0 12px 28px rgba(46, 58, 35, 0.18)',
    '0 14px 32px rgba(46, 58, 35, 0.20)',
    '0 4px 10px rgba(46, 58, 35, 0.1)',
    '0 6px 14px rgba(46, 58, 35, 0.1)',
    '0 8px 18px rgba(46, 58, 35, 0.1)',
    '0 10px 22px rgba(46, 58, 35, 0.1)',
    '0 12px 26px rgba(46, 58, 35, 0.1)',
    '0 14px 30px rgba(46, 58, 35, 0.1)',
    '0 16px 34px rgba(46, 58, 35, 0.1)',
    '0 18px 38px rgba(46, 58, 35, 0.1)',
    '0 20px 42px rgba(46, 58, 35, 0.1)',
    '0 22px 46px rgba(46, 58, 35, 0.1)',
    '0 24px 50px rgba(46, 58, 35, 0.1)',
    '0 26px 54px rgba(46, 58, 35, 0.1)',
    '0 28px 58px rgba(46, 58, 35, 0.1)',
    '0 30px 62px rgba(46, 58, 35, 0.1)',
    '0 32px 66px rgba(46, 58, 35, 0.1)',
    '0 34px 70px rgba(46, 58, 35, 0.1)',
    '0 36px 74px rgba(46, 58, 35, 0.1)',
  ],

  custom: {
    animations: {
      intensity: 'low',
      duration: {
        fast: 0.3,
        normal: 0.6,
        slow: 1.0,
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
      grain: true,
    },
    spacing: {
      sectionPadding: '112px',
      cardPadding: '36px',
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
          transition: 'all 0.6s ease',
        },
        contained: {
          background: '#4A7C59',
          color: '#F5F5DC',
          boxShadow: '0 4px 12px rgba(74, 124, 89, 0.3)',
          '&:hover': {
            background: '#6B9E7C',
            boxShadow: '0 6px 16px rgba(74, 124, 89, 0.4)',
            transform: 'translateY(-2px) scale(1.02)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: 'none',
          boxShadow: '0 4px 12px rgba(46, 58, 35, 0.1)',
          transition: 'all 0.6s ease',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(46, 58, 35, 0.15)',
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
          backgroundColor: 'rgba(245, 245, 220, 0.9)',
          backdropFilter: 'blur(8px)',
          color: '#2E3A23',
          boxShadow: '0 2px 8px rgba(46, 58, 35, 0.08)',
          borderBottom: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.4s ease',
            '& fieldset': {
              borderColor: '#8BA888',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#5C7A3E',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 12px rgba(92, 122, 62, 0.15)',
              '& fieldset': {
                borderColor: '#5C7A3E',
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
          backgroundColor: '#8BA888',
          color: '#FFFFFF',
          fontWeight: 500,
          border: '2px solid #5C7A3E',
          transition: 'all 0.4s ease',
          '&:hover': {
            backgroundColor: '#5C7A3E',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(92, 122, 62, 0.2)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#8BA888',
          borderWidth: '1px',
        },
      },
    },
  },
};
