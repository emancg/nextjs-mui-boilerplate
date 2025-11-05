/**
 * Cyberpunk / Futuristic Style Variant
 *
 * High-tech dystopia. Sci-fi inspired design from 1980s+.
 * Perfect for gaming, tech startups, and entertainment.
 */

export const cyberpunkVariant = {
  name: 'cyberpunk',
  displayName: 'Cyberpunk / Futuristic',
  description: 'High-tech dystopian aesthetic with neon vibes',

  palette: {
    mode: 'dark',
    primary: {
      main: '#00FFFF',
      light: '#7FFFD4',
      dark: '#00CED1',
      contrastText: '#0A0A0F',
    },
    secondary: {
      main: '#FF00FF',
      light: '#FF66FF',
      dark: '#CC00CC',
      contrastText: '#0A0A0F',
    },
    error: {
      main: '#FF1744',
      light: '#FF5370',
      dark: '#E50F35',
    },
    warning: {
      main: '#FFC107',
      light: '#FFD54F',
      dark: '#E5AD06',
    },
    info: {
      main: '#00E5FF',
      light: '#66EDFF',
      dark: '#00CCE5',
    },
    success: {
      main: '#39FF14',
      light: '#70FF53',
      dark: '#33E512',
    },
    background: {
      default: '#0A0A0F',
      paper: '#16161F',
    },
    text: {
      primary: '#00FFFF',
      secondary: '#9C27B0',
      disabled: '#4A4A5A',
    },
    divider: '#1A1A2E',
  },

  typography: {
    fontFamily: 'var(--font-orbitron), var(--font-rajdhani), monospace',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
      textTransform: 'uppercase',
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
      fontSize: '0.8125rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 0,
  },

  shadows: [
    'none',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 15px rgba(0, 255, 255, 0.6)',
    '0 0 20px rgba(0, 255, 255, 0.7)',
    '0 0 25px rgba(0, 255, 255, 0.8)',
    '0 0 30px rgba(0, 255, 255, 0.9)',
    '0 0 35px rgba(0, 255, 255, 1)',
    '0 0 40px rgba(0, 255, 255, 1)',
    '0 0 10px rgba(255, 0, 255, 0.5)',
    '0 0 15px rgba(255, 0, 255, 0.6)',
    '0 0 20px rgba(255, 0, 255, 0.7)',
    '0 0 25px rgba(255, 0, 255, 0.8)',
    '0 0 30px rgba(255, 0, 255, 0.9)',
    '0 0 35px rgba(255, 0, 255, 1)',
    '0 0 40px rgba(255, 0, 255, 1)',
    '0 0 45px rgba(255, 0, 255, 1)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
    '0 0 10px rgba(0, 255, 255, 0.5)',
  ],

  custom: {
    animations: {
      intensity: 'extreme',
      duration: {
        fast: 0.1,
        normal: 0.2,
        slow: 0.4,
      },
      easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
    },
    effects: {
      glassEffect: true,
      gradients: true,
      particles: false,
      shadows: true,
      blur: true,
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
          borderRadius: 0,
          padding: '12px 28px',
          fontSize: '0.875rem',
          fontWeight: 700,
          border: '2px solid #00FFFF',
          background: 'transparent',
          color: '#00FFFF',
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
          transition: 'all 0.2s ease',
          '&:hover': {
            background: '#00FFFF',
            color: '#0A0A0F',
            boxShadow: '0 0 20px rgba(0, 255, 255, 1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid #00FFFF',
          backgroundColor: '#16161F',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 0 25px rgba(0, 255, 255, 0.6)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#16161F',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(22, 22, 31, 0.8)',
          backdropFilter: 'blur(10px)',
          color: '#00FFFF',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
          borderBottom: '1px solid #00FFFF',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            border: '2px solid #00FFFF',
            color: '#00FFFF',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
            transition: 'all 0.2s ease',
            '& fieldset': {
              border: 'none',
            },
            '&:hover': {
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
            },
            '&.Mui-focused': {
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
              border: '2px solid #FF00FF',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid #00FFFF',
          backgroundColor: 'transparent',
          color: '#00FFFF',
          fontWeight: 700,
          boxShadow: '0 0 8px rgba(0, 255, 255, 0.3)',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: '#00FFFF',
            color: '#0A0A0F',
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#00FFFF',
          borderWidth: '1px',
          boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
        },
      },
    },
  },
};
