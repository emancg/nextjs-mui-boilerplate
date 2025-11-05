/**
 * Dark Mode Style Variant
 *
 * Reduced eye strain and focus. Contemporary design from 2019+.
 * Perfect for developer tools, night mode apps, and gaming.
 */

export const darkModeVariant = {
  name: 'darkMode',
  displayName: 'Dark Mode',
  description: 'Reduced eye strain with focused dark aesthetic',

  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',
      light: '#E1BEE7',
      dark: '#9A67EA',
      contrastText: '#000000',
    },
    secondary: {
      main: '#03DAC6',
      light: '#5DE3D5',
      dark: '#02AE9E',
      contrastText: '#000000',
    },
    error: {
      main: '#CF6679',
      light: '#DC8B9A',
      dark: '#B85161',
    },
    warning: {
      main: '#FFB74D',
      light: '#FFCA7A',
      dark: '#E5A343',
    },
    info: {
      main: '#82B1FF',
      light: '#A8C7FF',
      dark: '#6F9CE5',
    },
    success: {
      main: '#00C853',
      light: '#5DFF8F',
      dark: '#00A343',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#E1E1E1',
      secondary: '#A0A0A0',
      disabled: '#707070',
    },
    divider: '#3A3A3A',
  },

  typography: {
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
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
      fontWeight: 600,
      fontSize: '0.875rem',
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },

  spacing: 12,

  shape: {
    borderRadius: 8,
  },

  shadows: [
    'none',
    '0 2px 4px rgba(0, 0, 0, 0.4)',
    '0 4px 8px rgba(0, 0, 0, 0.5)',
    '0 6px 12px rgba(0, 0, 0, 0.55)',
    '0 8px 16px rgba(0, 0, 0, 0.60)',
    '0 10px 20px rgba(0, 0, 0, 0.65)',
    '0 12px 24px rgba(0, 0, 0, 0.70)',
    '0 14px 28px rgba(0, 0, 0, 0.75)',
    '0 4px 10px rgba(0, 0, 0, 0.5)',
    '0 6px 14px rgba(0, 0, 0, 0.5)',
    '0 8px 18px rgba(0, 0, 0, 0.5)',
    '0 10px 22px rgba(0, 0, 0, 0.5)',
    '0 12px 26px rgba(0, 0, 0, 0.5)',
    '0 14px 30px rgba(0, 0, 0, 0.5)',
    '0 16px 34px rgba(0, 0, 0, 0.5)',
    '0 18px 38px rgba(0, 0, 0, 0.5)',
    '0 20px 42px rgba(0, 0, 0, 0.5)',
    '0 22px 46px rgba(0, 0, 0, 0.5)',
    '0 24px 50px rgba(0, 0, 0, 0.5)',
    '0 26px 54px rgba(0, 0, 0, 0.5)',
    '0 28px 58px rgba(0, 0, 0, 0.5)',
    '0 30px 62px rgba(0, 0, 0, 0.5)',
    '0 32px 66px rgba(0, 0, 0, 0.5)',
    '0 34px 70px rgba(0, 0, 0, 0.5)',
    '0 36px 74px rgba(0, 0, 0, 0.5)',
  ],

  custom: {
    animations: {
      intensity: 'medium',
      duration: {
        fast: 0.15,
        normal: 0.3,
        slow: 0.5,
      },
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    },
    effects: {
      glassEffect: false,
      gradients: true,
      particles: false,
      shadows: true,
      blur: true,
      noise: false,
      grain: true,
    },
    spacing: {
      sectionPadding: '96px',
      cardPadding: '24px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 28px',
          fontSize: '0.875rem',
          fontWeight: 600,
          transition: 'all 0.3s ease',
        },
        contained: {
          background: '#BB86FC',
          color: '#000000',
          boxShadow: '0 4px 12px rgba(187, 134, 252, 0.4)',
          '&:hover': {
            background: '#E1BEE7',
            boxShadow: '0 6px 16px rgba(187, 134, 252, 0.6)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: 'none',
          backgroundColor: '#1E1E1E',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#252525',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1E1E1E',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          color: '#E1E1E1',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
          borderBottom: '1px solid #3A3A3A',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            color: '#E1E1E1',
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: '#3A3A3A',
            },
            '&:hover fieldset': {
              borderColor: '#90CAF9',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 12px rgba(144, 202, 249, 0.2)',
              '& fieldset': {
                borderColor: '#90CAF9',
              },
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#252525',
          color: '#E1E1E1',
          border: '1px solid #3A3A3A',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#90CAF9',
            color: '#0D0D0D',
            boxShadow: '0 2px 8px rgba(144, 202, 249, 0.3)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#3A3A3A',
        },
      },
    },
  },
};
