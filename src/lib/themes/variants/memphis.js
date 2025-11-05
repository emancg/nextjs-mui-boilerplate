/**
 * Memphis Style Variant
 *
 * Playful chaos and color. Postmodern design from 1980s.
 * Perfect for creative agencies, events, and youth brands.
 */

export const memphisVariant = {
  name: 'memphis',
  displayName: 'Memphis',
  description: 'Playful chaos and vibrant colors inspired by 1980s postmodern design',

  palette: {
    mode: 'light',
    primary: {
      main: '#FF6B6B',
      light: '#FFA07A',
      dark: '#E55D5D',
      contrastText: '#FFFEF7',
    },
    secondary: {
      main: '#FFD93D',
      light: '#FFE570',
      dark: '#CCAD31',
      contrastText: '#2D3047',
    },
    error: {
      main: '#FF6B9D',
      light: '#FF8FB3',
      dark: '#E5608E',
    },
    warning: {
      main: '#FFB84D',
      light: '#FFCB7A',
      dark: '#E5A643',
    },
    info: {
      main: '#4ECDC4',
      light: '#78DAD3',
      dark: '#45B8AF',
    },
    success: {
      main: '#6BCF7F',
      light: '#8FD99F',
      dark: '#5FBA72',
    },
    background: {
      default: '#FFFEF7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3047',
      secondary: '#5C5C7A',
      disabled: '#9999AA',
    },
    divider: '#E8B4F1',
  },

  typography: {
    fontFamily: '"Comic Sans MS", "Marker Felt", cursive',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '0.01em',
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
      fontSize: '1.125rem',
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
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },

  spacing: 12,

  shape: {
    borderRadius: 8,
  },

  shadows: [
    'none',
    '8px 8px 0px #2D3047',
    '6px 6px 0px #2D3047',
    '10px 10px 0px #2D3047',
    '12px 12px 0px #2D3047',
    '14px 14px 0px #2D3047',
    '16px 16px 0px #2D3047',
    '18px 18px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
    '8px 8px 0px #2D3047',
  ],

  custom: {
    animations: {
      intensity: 'very-high',
      duration: {
        fast: 0.3,
        normal: 0.6,
        slow: 1.2,
      },
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    effects: {
      glassEffect: false,
      gradients: true,
      particles: false,
      shadows: true,
      blur: false,
      noise: true,
      grain: false,
    },
    spacing: {
      sectionPadding: '80px',
      cardPadding: '32px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '14px 32px',
          fontSize: '0.875rem',
          fontWeight: 700,
          border: '3px solid #2D3047',
          transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          '&:hover': {
            transform: 'rotate(-2deg)',
            boxShadow: '10px 10px 0px #2D3047',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '3px solid #2D3047',
          boxShadow: '8px 8px 0px #2D3047',
          transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          '&:hover': {
            transform: 'rotate(1deg)',
            boxShadow: '12px 12px 0px #2D3047',
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
          backgroundColor: '#FF6B6B',
          color: '#FFFEF7',
          boxShadow: '0 4px 0px #2D3047',
          borderBottom: 'none',
        },
      },
    },
  },
};
