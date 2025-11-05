/**
 * Grunge / Distressed Style Variant
 *
 * Raw authenticity. Alternative culture from 1990s.
 * Perfect for bands, promos, and merch stores.
 */

export const grungeVariant = {
  name: 'grunge',
  displayName: 'Grunge / Distressed',
  description: 'Raw authenticity inspired by 1990s alternative culture',

  palette: {
    mode: 'dark',
    primary: {
      main: '#3E2723',
      light: '#5D4037',
      dark: '#1B0000',
      contrastText: '#EFEBE9',
    },
    secondary: {
      main: '#D84315',
      light: '#FF6F3F',
      dark: '#BF360C',
      contrastText: '#EFEBE9',
    },
    error: {
      main: '#BF360C',
      light: '#E64A19',
      dark: '#A62D09',
    },
    warning: {
      main: '#E65100',
      light: '#FF6F00',
      dark: '#CC4700',
    },
    info: {
      main: '#4E342E',
      light: '#6D4C41',
      dark: '#3E2723',
    },
    success: {
      main: '#558B2F',
      light: '#7CB342',
      dark: '#4A7A29',
    },
    background: {
      default: '#212121',
      paper: '#2E2E2E',
    },
    text: {
      primary: '#EFEBE9',
      secondary: '#BCAAA4',
      disabled: '#8D6E63',
    },
    divider: '#4E342E',
  },

  typography: {
    fontFamily: 'var(--font-special-elite), "Courier New", monospace',
    h1: {
      fontWeight: 400,
      fontSize: '3.25rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    h2: {
      fontWeight: 400,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '0.01em',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: 1.4,
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
      fontWeight: 400,
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
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },

  spacing: 12,

  shape: {
    borderRadius: 2,
  },

  shadows: Array(25).fill('none'),

  custom: {
    animations: {
      intensity: 'low',
      duration: {
        fast: 0.2,
        normal: 0.4,
        slow: 0.7,
      },
      easing: 'ease-out',
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
      cardPadding: '24px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '12px 24px',
          fontSize: '0.875rem',
          fontWeight: 400,
          border: '2px solid #EFEBE9',
          background: 'transparent',
          color: '#EFEBE9',
          transition: 'all 0.4s ease-out',
          '&:hover': {
            background: '#3E2723',
            borderColor: '#D84315',
            color: '#EFEBE9',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          border: '2px solid #4E342E',
          boxShadow: 'none',
          backgroundColor: '#2E2E2E',
          transition: 'all 0.4s ease-out',
          '&:hover': {
            borderColor: '#D84315',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#2E2E2E',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2E2E2E',
          color: '#EFEBE9',
          boxShadow: 'none',
          borderBottom: '2px solid #4E342E',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            color: '#EFEBE9',
            transition: 'none',
            '& fieldset': {
              borderColor: '#6D4C41',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#8D6E63',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#A1887F',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: '#4E342E',
          color: '#EFEBE9',
          border: '2px solid #6D4C41',
          fontWeight: 700,
          textTransform: 'uppercase',
          '&:hover': {
            backgroundColor: '#6D4C41',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#6D4C41',
          borderWidth: '2px',
        },
      },
    },
  },
};
