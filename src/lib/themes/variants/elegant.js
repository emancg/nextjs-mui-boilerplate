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
      main: '#2c1810', // Deep Brown
      light: '#5a3929',
      dark: '#1a0f09',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c9a961', // Gold
      light: '#d4ba7e',
      dark: '#a68943',
      contrastText: '#000000',
    },
    error: {
      main: '#8b0000',
      light: '#a52a2a',
      dark: '#5c0000',
    },
    warning: {
      main: '#b8860b',
      light: '#daa520',
      dark: '#886608',
    },
    info: {
      main: '#4a5568',
      light: '#718096',
      dark: '#2d3748',
    },
    success: {
      main: '#2f855a',
      light: '#48bb78',
      dark: '#22543d',
    },
    background: {
      default: '#faf8f5', // Warm off-white
      paper: '#ffffff',
    },
    text: {
      primary: '#2d2420',
      secondary: '#5a534d',
      disabled: '#a8a29e',
    },
    divider: '#e5dfd8',
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
    '0 2px 8px rgba(44, 24, 16, 0.08)',
    '0 4px 12px rgba(44, 24, 16, 0.12)',
    '0 8px 20px rgba(44, 24, 16, 0.15)',
    '0 12px 28px rgba(44, 24, 16, 0.18)',
    '0 16px 36px rgba(44, 24, 16, 0.20)',
    '0 20px 44px rgba(44, 24, 16, 0.22)',
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
          background: 'linear-gradient(135deg, #2c1810 0%, #5a3929 100%)',
          boxShadow: '0 4px 12px rgba(44, 24, 16, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5a3929 0%, #2c1810 100%)',
            boxShadow: '0 8px 24px rgba(44, 24, 16, 0.35)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: '#c9a961',
          color: '#2c1810',
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(201, 169, 97, 0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #e5dfd8',
          boxShadow: '0 8px 20px rgba(44, 24, 16, 0.12)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #faf8f5 100%)',
          '&:hover': {
            boxShadow: '0 16px 40px rgba(44, 24, 16, 0.18)',
            transform: 'translateY(-4px)',
            borderColor: '#c9a961',
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
          boxShadow: '0 2px 8px rgba(44, 24, 16, 0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 12px rgba(44, 24, 16, 0.12)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#2c1810',
          boxShadow: '0 2px 12px rgba(44, 24, 16, 0.08)',
          borderBottom: '1px solid #e5dfd8',
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
              borderColor: '#e5dfd8',
              borderWidth: 1,
            },
            '&:hover fieldset': {
              borderColor: '#c9a961',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#c9a961',
              borderWidth: 2,
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 12px rgba(201, 169, 97, 0.15)',
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
          border: '1px solid #c9a961',
          backgroundColor: 'rgba(201, 169, 97, 0.08)',
          color: '#2c1810',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#e5dfd8',
        },
      },
    },
  },
};
