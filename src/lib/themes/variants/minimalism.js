/**
 * Minimalism Style Variant
 *
 * Form follows function. Modernist design focused on essential elements.
 * Perfect for portfolio, editorial, and brand websites.
 */

export const minimalismVariant = {
  name: 'minimalism',
  displayName: 'Minimalism',
  description: 'Form follows function - modernist essential design',

  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#4A4A4A',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#E5E5E5',
      contrastText: '#000000',
    },
    error: {
      main: '#000000',
      light: '#4A4A4A',
      dark: '#000000',
    },
    warning: {
      main: '#666666',
      light: '#808080',
      dark: '#4A4A4A',
    },
    info: {
      main: '#1A1A1A',
      light: '#4A4A4A',
      dark: '#000000',
    },
    success: {
      main: '#2D2D2D',
      light: '#4A4A4A',
      dark: '#1A1A1A',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#737373',
      disabled: '#BDBDBD',
    },
    divider: '#E5E5E5',
  },

  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: '4.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 300,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 300,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 300,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 300,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.5,
      fontWeight: 300,
    },
    button: {
      fontWeight: 300,
      fontSize: '0.875rem',
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },

  spacing: 16,

  shape: {
    borderRadius: 0,
  },

  shadows: Array(25).fill('none'),

  custom: {
    animations: {
      intensity: 'minimal',
      duration: {
        fast: 0.15,
        normal: 0.3,
        slow: 0.5,
      },
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    },
    effects: {
      glassEffect: false,
      gradients: false,
      particles: false,
      shadows: false,
      blur: false,
      noise: false,
      grain: false,
    },
    spacing: {
      sectionPadding: '128px',
      cardPadding: '48px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
          fontSize: '0.875rem',
          fontWeight: 300,
          border: '1px solid #000000',
          background: 'transparent',
          color: '#000000',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: '#000000',
            color: '#FFFFFF',
          },
        },
        contained: {
          background: '#000000',
          color: '#FFFFFF',
          '&:hover': {
            background: '#FFFFFF',
            color: '#000000',
            border: '1px solid #000000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
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
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid #E5E5E5',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': {
              borderColor: '#E5E5E5',
            },
            '&:hover fieldset': {
              borderColor: '#000000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000000',
            },
          },
        },
      },
    },
  },
};
