/**
 * Brutalism Style Variant
 *
 * Raw honesty and anti-design. Digital brutalism from 2010s+.
 * Perfect for experimental, artist portfolios, and anti-corporate brands.
 */

export const brutalismVariant = {
  name: 'brutalism',
  displayName: 'Brutalism',
  description: 'Raw honesty and anti-design digital aesthetic',

  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#1A1A1A',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00FF00',
      light: '#33FF33',
      dark: '#00CC00',
      contrastText: '#000000',
    },
    error: {
      main: '#FF0000',
      light: '#FF3333',
      dark: '#CC0000',
    },
    warning: {
      main: '#FFFF00',
      light: '#FFFF33',
      dark: '#CCCC00',
    },
    info: {
      main: '#00FFFF',
      light: '#33FFFF',
      dark: '#00CCCC',
    },
    success: {
      main: '#00FF00',
      light: '#33FF33',
      dark: '#00CC00',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#808080',
      disabled: '#C0C0C0',
    },
    divider: '#000000',
  },

  typography: {
    fontFamily: '"Courier New", Courier, monospace',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '0',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      letterSpacing: '0',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 700,
      fontSize: '0.875rem',
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
      letterSpacing: '0',
      textTransform: 'uppercase',
    },
  },

  spacing: 4,

  shape: {
    borderRadius: 0,
  },

  shadows: Array(25).fill('none'),

  custom: {
    animations: {
      intensity: 'none',
      duration: {
        fast: 0,
        normal: 0,
        slow: 0,
      },
      easing: 'linear',
    },
    effects: {
      glassEffect: false,
      gradients: false,
      particles: false,
      shadows: false,
      blur: false,
      noise: true,
      grain: true,
    },
    spacing: {
      sectionPadding: '64px',
      cardPadding: '16px',
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
          border: '3px solid #000000',
          background: 'transparent',
          color: '#000000',
          transition: 'none',
          '&:hover': {
            background: '#000000',
            color: '#00FF00',
          },
        },
        outlined: {
          border: '3px solid #000000',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '3px solid #000000',
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
          borderBottom: '3px solid #000000',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            border: '3px solid #000000',
            transition: 'none',
            '& fieldset': {
              border: 'none',
            },
            '&:hover': {
              backgroundColor: '#F0F0F0',
            },
            '&.Mui-focused': {
              backgroundColor: '#00FF00',
              color: '#000000',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '2px solid #000000',
          backgroundColor: '#FFFFFF',
          color: '#000000',
          fontWeight: 700,
          '&:hover': {
            backgroundColor: '#00FF00',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#000000',
          borderWidth: '2px',
        },
      },
    },
  },
};
