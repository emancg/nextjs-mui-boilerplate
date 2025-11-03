/**
 * Elegant Style Variant
 *
 * Sophisticated, luxurious design with refined colors and subtle animations.
 * Perfect for fashion, jewelry, luxury goods, and premium services.
 */

export const elegantVariant = {
  name: 'elegant',
  displayName: 'Elegant',
  description: 'Sophisticated luxurious design with refined aesthetics',

  palette: {
    mode: 'light',
    primary: {
      main: '#1a1110', // Rich Espresso Brown
      light: '#3d2e2a',
      dark: '#0d0807',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d4af37', // Luxurious Gold
      light: '#e4c968',
      dark: '#b8941f',
      contrastText: '#000000',
    },
    error: {
      main: '#9b2c2c',
      light: '#c53030',
      dark: '#742a2a',
    },
    warning: {
      main: '#c05621',
      light: '#dd6b20',
      dark: '#9c4221',
    },
    info: {
      main: '#5a5a5a',
      light: '#7a7a7a',
      dark: '#3a3a3a',
    },
    success: {
      main: '#2f855a',
      light: '#48bb78',
      dark: '#276749',
    },
    background: {
      default: '#fcfaf7', // Sophisticated warm white
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1110',
      secondary: '#5a4f4a',
      disabled: '#b8b0a8',
    },
    divider: '#e8e1d8',
  },

  typography: {
    fontFamily: 'var(--font-playfair-display), "Playfair Display", "Georgia", serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      fontStyle: 'italic',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.375rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: 'var(--font-lora), "Lora", "Georgia", serif',
      fontSize: '1.0625rem',
      lineHeight: 1.8,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: 'var(--font-lora), "Lora", "Georgia", serif',
      fontSize: '0.9375rem',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: 'var(--font-montserrat), "Montserrat", "Helvetica", sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 8, // Soft, elegant rounding
  },

  shadows: [
    'none',
    '0 2px 8px rgba(26, 17, 16, 0.08)',
    '0 4px 12px rgba(26, 17, 16, 0.12)',
    '0 8px 20px rgba(26, 17, 16, 0.15)',
    '0 12px 28px rgba(26, 17, 16, 0.18)',
    '0 16px 36px rgba(26, 17, 16, 0.20)',
    '0 20px 44px rgba(26, 17, 16, 0.22)',
    '0 24px 52px rgba(26, 17, 16, 0.24)',
    '0 4px 14px rgba(26, 17, 16, 0.1)',
    '0 6px 18px rgba(26, 17, 16, 0.12)',
    '0 8px 22px rgba(26, 17, 16, 0.14)',
    '0 10px 26px rgba(26, 17, 16, 0.16)',
    '0 12px 30px rgba(26, 17, 16, 0.18)',
    '0 14px 34px rgba(26, 17, 16, 0.2)',
    '0 16px 38px rgba(26, 17, 16, 0.22)',
    '0 18px 42px rgba(26, 17, 16, 0.24)',
    '0 20px 46px rgba(26, 17, 16, 0.26)',
    '0 22px 50px rgba(26, 17, 16, 0.28)',
    '0 24px 54px rgba(26, 17, 16, 0.3)',
    '0 26px 58px rgba(26, 17, 16, 0.32)',
    '0 28px 62px rgba(26, 17, 16, 0.34)',
    '0 30px 66px rgba(26, 17, 16, 0.36)',
    '0 32px 70px rgba(26, 17, 16, 0.38)',
    '0 34px 74px rgba(26, 17, 16, 0.4)',
    '0 36px 78px rgba(26, 17, 16, 0.42)',
  ],

  custom: {
    animations: {
      intensity: 'medium',
      duration: {
        fast: 0.3,
        normal: 0.5,
        slow: 0.8,
      },
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth, elegant
    },
    effects: {
      glassEffect: false,
      gradients: true,
      particles: false,
      shadows: true,
      blur: true,
    },
    spacing: {
      sectionPadding: '100px',
      cardPadding: '36px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '14px 36px',
          fontSize: '0.875rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        contained: {
          background: 'linear-gradient(135deg, #1a1110 0%, #3d2e2a 100%)',
          boxShadow: '0 4px 12px rgba(26, 17, 16, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #3d2e2a 0%, #1a1110 100%)',
            boxShadow: '0 8px 24px rgba(26, 17, 16, 0.35)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#d4af37',
          color: '#1a1110',
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(212, 175, 55, 0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #e8e1d8',
          boxShadow: '0 8px 20px rgba(26, 17, 16, 0.12)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #fcfaf7 100%)',
          '&:hover': {
            boxShadow: '0 16px 40px rgba(26, 17, 16, 0.18)',
            transform: 'translateY(-4px)',
            borderColor: '#d4af37',
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
          boxShadow: '0 2px 8px rgba(26, 17, 16, 0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 12px rgba(26, 17, 16, 0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1a1110',
          boxShadow: '0 2px 12px rgba(26, 17, 16, 0.08)',
          borderBottom: '1px solid #e8e1d8',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: '#e8e1d8',
              borderWidth: 1,
            },
            '&:hover fieldset': {
              borderColor: '#d4af37',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#d4af37',
              borderWidth: 2,
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 12px rgba(212, 175, 55, 0.15)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          fontSize: '0.8125rem',
          letterSpacing: '0.05em',
          border: '1px solid #d4af37',
          backgroundColor: 'rgba(212, 175, 55, 0.08)',
          color: '#1a1110',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#e8e1d8',
        },
      },
    },
  },
};
