/**
 * Film / Cinematic Style Variant
 *
 * Frame-based storytelling. Cinematic web design from 2010s+.
 * Perfect for film promotions, cinemas, and festivals.
 */

export const filmCinematicVariant = {
  name: 'filmCinematic',
  displayName: 'Film / Cinematic',
  description: 'Frame-based storytelling with dramatic cinematic aesthetics',

  palette: {
    mode: 'dark',
    primary: {
      main: '#1C1C1E',
      light: '#2C2C2E',
      dark: '#000000',
      contrastText: '#F5F5F7',
    },
    secondary: {
      main: '#FFD700',
      light: '#FFE54D',
      dark: '#E5C200',
      contrastText: '#000000',
    },
    error: {
      main: '#FF453A',
      light: '#FF7066',
      dark: '#E53E32',
    },
    warning: {
      main: '#FF9F0A',
      light: '#FFB84D',
      dark: '#E58F09',
    },
    info: {
      main: '#0A84FF',
      light: '#5DA8FF',
      dark: '#0975E5',
    },
    success: {
      main: '#34C759',
      light: '#66D685',
      dark: '#2FB350',
    },
    background: {
      default: '#000000',
      paper: '#1C1C1E',
    },
    text: {
      primary: '#F5F5F7',
      secondary: '#98989D',
      disabled: '#636366',
    },
    divider: '#38383A',
  },

  typography: {
    fontFamily: '"Playfair Display", Georgia, serif',
    h1: {
      fontWeight: 700,
      fontSize: '4.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },

  spacing: 24,

  shape: {
    borderRadius: 2,
  },

  shadows: [
    'none',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 6px 18px rgba(0, 0, 0, 0.6)',
    '0 10px 30px rgba(0, 0, 0, 0.8)',
    '0 12px 36px rgba(0, 0, 0, 0.85)',
    '0 14px 42px rgba(0, 0, 0, 0.9)',
    '0 16px 48px rgba(0, 0, 0, 0.95)',
    '0 18px 54px rgba(0, 0, 0, 1)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
    '0 8px 24px rgba(0, 0, 0, 0.7)',
  ],

  custom: {
    animations: {
      intensity: 'cinematic',
      duration: {
        fast: 0.4,
        normal: 0.8,
        slow: 1.6,
      },
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
    effects: {
      glassEffect: false,
      gradients: true,
      particles: false,
      shadows: true,
      blur: true,
      noise: true,
      grain: true,
    },
    spacing: {
      sectionPadding: '160px',
      cardPadding: '48px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '16px 40px',
          fontSize: '0.875rem',
          fontWeight: 700,
          background: 'transparent',
          border: '1px solid #F5F5F7',
          color: '#F5F5F7',
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          '&:hover': {
            background: '#F5F5F7',
            color: '#000000',
            borderColor: '#F5F5F7',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          border: 'none',
          backgroundColor: '#1C1C1E',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          '&:hover': {
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.85)',
            transform: 'translateY(-8px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1C1C1E',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
          backdropFilter: 'blur(10px)',
          color: '#F5F5F7',
          boxShadow: 'none',
          borderBottom: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            color: '#F5F5F7',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            '& fieldset': {
              borderColor: '#3A3A3C',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: '#FFD700',
            },
            '&.Mui-focused': {
              boxShadow: '0 8px 24px rgba(255, 215, 0, 0.15)',
              '& fieldset': {
                borderColor: '#FFD700',
              },
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          backgroundColor: '#2C2C2E',
          color: '#F5F5F7',
          border: '1px solid #3A3A3C',
          fontWeight: 500,
          letterSpacing: '0.05em',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: '#FFD700',
            color: '#1C1C1E',
            boxShadow: '0 8px 24px rgba(255, 215, 0, 0.3)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#3A3A3C',
          borderWidth: '1px',
        },
      },
    },
  },
};
