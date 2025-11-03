/**
 * Classic Style Variant
 *
 * Traditional, timeless design with serif typography and rich colors.
 * Perfect for law firms, universities, financial institutions, and established brands.
 */

export const classicVariant = {
  name: 'classic',
  displayName: 'Classic',
  description: 'Traditional timeless design with serif typography',

  palette: {
    mode: 'light',
    primary: {
      main: '#1a237e', // Deep Navy Blue
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#b8860b', // Dark Goldenrod
      light: '#eeba4c',
      dark: '#845600',
      contrastText: '#000000',
    },
    error: {
      main: '#b71c1c',
      light: '#d32f2f',
      dark: '#7f0000',
    },
    warning: {
      main: '#e65100',
      light: '#ff6f00',
      dark: '#ac1900',
    },
    info: {
      main: '#01579b',
      light: '#0277bd',
      dark: '#002f6c',
    },
    success: {
      main: '#1b5e20',
      light: '#2e7d32',
      dark: '#003300',
    },
    background: {
      default: '#fdfdf8', // Warm white
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
      disabled: '#9e9e9e',
    },
    divider: '#d4c5a9', // Warm divider
  },

  typography: {
    fontFamily: '"Merriweather", "Georgia", "Times New Roman", serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
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
      fontFamily: '"Lora", "Georgia", serif',
      fontSize: '1.0625rem', // 17px for better readability
      lineHeight: 1.8,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: '"Lora", "Georgia", serif',
      fontSize: '0.9375rem',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Merriweather", "Georgia", serif',
      fontWeight: 700,
      fontSize: '0.875rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 4, // Subtle rounding
  },

  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.08)',
    '0 4px 8px rgba(0,0,0,0.12)',
    '0 8px 16px rgba(0,0,0,0.15)',
    '0 12px 24px rgba(0,0,0,0.18)',
    '0 16px 32px rgba(0,0,0,0.20)',
    '0 20px 40px rgba(0,0,0,0.22)',
  ],

  custom: {
    animations: {
      intensity: 'low',
      duration: {
        fast: 0.25,
        normal: 0.4,
        slow: 0.6,
      },
      easing: 'cubic-bezier(0.4, 0, 0.6, 1)', // Dignified easing
    },
    effects: {
      glassEffect: false,
      gradients: false,
      particles: false,
      shadows: true,
      blur: false,
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
          borderRadius: 4,
          padding: '12px 32px',
          fontSize: '0.875rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.6, 1)',
        },
        contained: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: '1px solid #d4c5a9',
          boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.6, 1)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            transform: 'translateY(-2px)',
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
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a237e',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            '& fieldset': {
              borderColor: '#d4c5a9',
              borderWidth: 1,
            },
            '&:hover fieldset': {
              borderColor: '#b8860b',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1a237e',
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 600,
          fontSize: '0.8125rem',
          letterSpacing: '0.04em',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#d4c5a9',
        },
      },
    },
  },
};
