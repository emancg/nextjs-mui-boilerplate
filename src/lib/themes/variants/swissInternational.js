/**
 * Swiss / International Style Variant
 *
 * Grid and clarity. Swiss design from 1950s-1970s.
 * Perfect for corporate, documentation, and portfolio websites.
 */

export const swissInternationalVariant = {
  name: 'swissInternational',
  displayName: 'Swiss / International',
  description: 'Grid-based clarity inspired by Swiss design movement',

  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#E50000',
      light: '#FF3333',
      dark: '#CC0000',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E50000',
      light: '#FF3333',
      dark: '#CC0000',
    },
    warning: {
      main: '#FF8C00',
      light: '#FFA333',
      dark: '#CC7000',
    },
    info: {
      main: '#0066CC',
      light: '#3385D6',
      dark: '#0052A3',
    },
    success: {
      main: '#008751',
      light: '#33A374',
      dark: '#006B40',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
      disabled: '#999999',
    },
    divider: '#CCCCCC',
  },

  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
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
      fontWeight: 700,
      fontSize: '0.875rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 0,
  },

  shadows: Array(25).fill('none'),

  custom: {
    animations: {
      intensity: 'none',
      duration: {
        fast: 0.1,
        normal: 0.2,
        slow: 0.3,
      },
      easing: 'linear',
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
      sectionPadding: '96px',
      cardPadding: '32px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
          fontSize: '0.875rem',
          fontWeight: 700,
          transition: 'all 0.2s linear',
        },
        contained: {
          background: '#000000',
          color: '#FFFFFF',
          '&:hover': {
            background: '#E50000',
          },
        },
        outlined: {
          border: '2px solid #000000',
          color: '#000000',
          '&:hover': {
            background: '#000000',
            color: '#FFFFFF',
            border: '2px solid #000000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid #CCCCCC',
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
          backgroundColor: '#FFFFFF',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: 'none',
        },
      },
    },
  },
};
