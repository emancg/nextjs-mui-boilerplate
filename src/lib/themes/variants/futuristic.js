/**
 * Futuristic Style Variant
 *
 * High-tech, cyberpunk-inspired design with neon colors and bold animations.
 * Perfect for gaming, tech products, crypto, and cutting-edge brands.
 */

export const futuristicVariant = {
  name: 'futuristic',
  displayName: 'Futuristic',
  description: 'High-tech cyberpunk design with neon effects',

  palette: {
    mode: 'dark',
    primary: {
      main: '#00f0ff', // Cyan
      light: '#5dfdff',
      dark: '#00b8cc',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ff00ff', // Magenta
      light: '#ff5dff',
      dark: '#cc00cc',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff1744',
      light: '#ff4569',
      dark: '#cc0022',
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    info: {
      main: '#00f0ff',
      light: '#5dfdff',
      dark: '#00b8cc',
    },
    success: {
      main: '#00ff9d',
      light: '#5dffbb',
      dark: '#00cc7a',
    },
    background: {
      default: '#0a0e27',
      paper: '#131834',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8b92b0',
      disabled: '#4a5278',
    },
    divider: 'rgba(0, 240, 255, 0.2)',
  },

  typography: {
    fontFamily: 'var(--font-orbitron), var(--font-rajdhani), "Roboto", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '4rem',
      lineHeight: 1.1,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.2,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      letterSpacing: '0.02em',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.35rem',
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.1rem',
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 700,
      fontSize: '0.9rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 2, // Sharp edges for futuristic look
  },

  shadows: [
    'none',
    '0 0 10px rgba(0, 240, 255, 0.3)',
    '0 0 20px rgba(0, 240, 255, 0.4)',
    '0 0 30px rgba(0, 240, 255, 0.5)',
    '0 0 40px rgba(0, 240, 255, 0.6)',
    '0 0 50px rgba(0, 240, 255, 0.7)',
    '0 0 60px rgba(0, 240, 255, 0.8)',
    '0 0 12px rgba(0, 240, 255, 0.35)',
    '0 0 15px rgba(0, 240, 255, 0.4)',
    '0 0 18px rgba(0, 240, 255, 0.45)',
    '0 0 22px rgba(0, 240, 255, 0.5)',
    '0 0 26px rgba(0, 240, 255, 0.55)',
    '0 0 30px rgba(0, 240, 255, 0.6)',
    '0 0 35px rgba(0, 240, 255, 0.65)',
    '0 0 40px rgba(0, 240, 255, 0.7)',
    '0 0 45px rgba(0, 240, 255, 0.75)',
    '0 0 50px rgba(0, 240, 255, 0.8)',
    '0 0 55px rgba(0, 240, 255, 0.85)',
    '0 0 60px rgba(0, 240, 255, 0.9)',
    '0 0 65px rgba(0, 240, 255, 0.92)',
    '0 0 70px rgba(0, 240, 255, 0.94)',
    '0 0 75px rgba(0, 240, 255, 0.96)',
    '0 0 80px rgba(0, 240, 255, 0.98)',
    '0 0 85px rgba(0, 240, 255, 1)',
    '0 0 90px rgba(0, 240, 255, 1)',
  ],

  custom: {
    animations: {
      intensity: 'high',
      duration: {
        fast: 0.15,
        normal: 0.3,
        slow: 0.5,
      },
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Elastic easing
    },
    effects: {
      glassEffect: true,
      gradients: true,
      particles: true,
      shadows: true,
      blur: true,
      neonGlow: true,
      scanlines: true,
    },
    spacing: {
      sectionPadding: '100px',
      cardPadding: '32px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 32px',
          fontSize: '0.9rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: '2px solid #00f0ff',
          background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%)',
          boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover': {
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.6)',
            transform: 'scale(1.05)',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #00f0ff 0%, #ff00ff 100%)',
          border: 'none',
          color: '#000000',
          fontWeight: 900,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          background: 'rgba(19, 24, 52, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 240, 255, 0.2)',
          boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
            animation: 'scanline 3s linear infinite',
          },
          '&:hover': {
            border: '1px solid rgba(0, 240, 255, 0.5)',
            boxShadow: '0 0 50px rgba(0, 240, 255, 0.4)',
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(19, 24, 52, 0.9)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 14, 39, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
          boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: 'rgba(0, 240, 255, 0.3)',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 240, 255, 0.5)',
            },
            '&.Mui-focused': {
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
              '& fieldset': {
                borderColor: '#00f0ff',
              },
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 700,
          letterSpacing: '0.05em',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          backgroundColor: 'rgba(0, 240, 255, 0.1)',
        },
      },
    },
  },
};
