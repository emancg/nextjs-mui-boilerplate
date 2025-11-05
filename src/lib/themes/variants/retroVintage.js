/**
 * Retro / Vintage Style Variant
 *
 * Nostalgia and warmth. Design inspired by 1960s-1990s.
 * Perfect for lifestyle blogs, cafes & restaurants, and vintage shops.
 */

export const retroVintageVariant = {
  name: 'retroVintage',
  displayName: 'Retro / Vintage',
  description: 'Nostalgic warmth inspired by 1960s-1990s design',

  palette: {
    mode: 'light',
    primary: {
      main: '#D4A574',
      light: '#E8C9A1',
      dark: '#B8935F',
      contrastText: '#3E2723',
    },
    secondary: {
      main: '#E85D75',
      light: '#F08391',
      dark: '#CF5368',
      contrastText: '#FFF8E1',
    },
    error: {
      main: '#D64045',
      light: '#E06C70',
      dark: '#C1373B',
    },
    warning: {
      main: '#FABC3C',
      light: '#FBD070',
      dark: '#E0A735',
    },
    info: {
      main: '#5EAAA8',
      light: '#85BFBD',
      dark: '#549896',
    },
    success: {
      main: '#7FB069',
      light: '#9FC489',
      dark: '#729E5E',
    },
    background: {
      default: '#FFF8E1',
      paper: '#FFFEF7',
    },
    text: {
      primary: '#3E2723',
      secondary: '#6D4C41',
      disabled: '#A1887F',
    },
    divider: '#D7CCC8',
  },

  typography: {
    fontFamily: '"Courier New", "American Typewriter", serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.25rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.375rem',
      lineHeight: 1.3,
      letterSpacing: '0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.4,
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
      fontWeight: 700,
      fontSize: '0.875rem',
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
    },
  },

  spacing: 16,

  shape: {
    borderRadius: 12,
  },

  shadows: [
    'none',
    '4px 4px 0px #3E2723',
    '3px 3px 0px #3E2723',
    '5px 5px 0px #3E2723',
    '6px 6px 0px #3E2723',
    '7px 7px 0px #3E2723',
    '8px 8px 0px #3E2723',
    '9px 9px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
    '4px 4px 0px #3E2723',
  ],

  custom: {
    animations: {
      intensity: 'low',
      duration: {
        fast: 0.25,
        normal: 0.5,
        slow: 0.8,
      },
      easing: 'ease-in-out',
    },
    effects: {
      glassEffect: false,
      gradients: false,
      particles: false,
      shadows: true,
      blur: false,
      noise: true,
      grain: true,
    },
    spacing: {
      sectionPadding: '80px',
      cardPadding: '28px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '14px 32px',
          fontSize: '0.875rem',
          fontWeight: 700,
          border: '2px solid #3E2723',
          transition: 'all 0.5s ease-in-out',
        },
        contained: {
          background: '#D4A574',
          color: '#3E2723',
          boxShadow: '4px 4px 0px #3E2723',
          '&:hover': {
            background: '#E8C9A1',
            boxShadow: '6px 6px 0px #3E2723',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '2px solid #3E2723',
          boxShadow: '4px 4px 0px #3E2723',
          transition: 'all 0.5s ease-in-out',
          '&:hover': {
            boxShadow: '6px 6px 0px #3E2723',
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
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#D4A574',
          color: '#3E2723',
          boxShadow: '0 4px 0px #3E2723',
          borderBottom: '2px solid #3E2723',
        },
      },
    },
  },
};
