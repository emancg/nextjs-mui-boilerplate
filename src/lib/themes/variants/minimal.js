/**
 * Minimal Style Variant
 *
 * Ultra-clean, monochrome design focused on content and whitespace.
 * Perfect for portfolios, editorial content, and minimalist brands.
 */

export const minimalVariant = {
  name: 'minimal',
  displayName: 'Minimal',
  description: 'Ultra-clean monochrome design with focus on content',

  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#424242',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#f5f5f5',
      contrastText: '#000000',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
    },
    info: {
      main: '#616161',
      light: '#757575',
      dark: '#424242',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
    divider: '#e0e0e0',
  },

  typography: {
    fontFamily: '"Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 300,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
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
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8,
      fontWeight: 300,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
      fontWeight: 300,
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 0, // No rounded corners for minimal aesthetic
  },

  shadows: Array(25).fill('none'), // No shadows

  custom: {
    animations: {
      intensity: 'low',
      duration: {
        fast: 0.15,
        normal: 0.25,
        slow: 0.35,
      },
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Smooth, subtle
    },
    effects: {
      glassEffect: false,
      gradients: false,
      particles: false,
      shadows: false,
      blur: false,
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
          borderRadius: 0,
          padding: '12px 24px',
          fontSize: '0.875rem',
          fontWeight: 500,
          letterSpacing: '0.05em',
          border: '1px solid #000000',
          background: 'transparent',
          color: '#000000',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: '#000000',
            color: '#ffffff',
          },
        },
        contained: {
          background: '#000000',
          color: '#ffffff',
          border: '1px solid #000000',
          '&:hover': {
            background: '#ffffff',
            color: '#000000',
          },
        },
        outlined: {
          border: '1px solid #000000',
          color: '#000000',
          '&:hover': {
            background: '#000000',
            color: '#ffffff',
            border: '1px solid #000000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid #e0e0e0',
          boxShadow: 'none',
          transition: 'border-color 0.2s ease',
          '&:hover': {
            borderColor: '#000000',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none',
        },
        elevation1: {
          border: '1px solid #e0e0e0',
        },
        elevation2: {
          border: '1px solid #e0e0e0',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': {
              borderColor: '#e0e0e0',
              borderWidth: 1,
            },
            '&:hover fieldset': {
              borderColor: '#000000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000000',
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 500,
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          border: '1px solid #000000',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#000000',
        },
      },
    },
  },
};
