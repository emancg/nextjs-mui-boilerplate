/**
 * Y2K / Early Internet Style Variant
 *
 * Digital optimism. Design from late 1990s-early 2000s.
 * Perfect for nostalgic brands, music festivals, and pop culture.
 */

export const y2kVariant = {
  name: 'y2k',
  displayName: 'Y2K / Early Internet',
  description: 'Digital optimism inspired by late 90s-early 2000s internet culture',

  palette: {
    mode: 'light',
    primary: {
      main: '#00BFFF',
      light: '#87CEEB',
      dark: '#0099CC',
      contrastText: '#000080',
    },
    secondary: {
      main: '#FF69B4',
      light: '#FF9ED4',
      dark: '#E55CA0',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF1493',
      light: '#FF5BAF',
      dark: '#E51284',
    },
    warning: {
      main: '#FFD700',
      light: '#FFE54D',
      dark: '#E5C200',
    },
    info: {
      main: '#00CED1',
      light: '#5DE3E5',
      dark: '#00B8BB',
    },
    success: {
      main: '#7FFF00',
      light: '#ADFF5C',
      dark: '#72E500',
    },
    background: {
      default: '#E6E6FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000080',
      secondary: '#4169E1',
      disabled: '#9999CC',
    },
    divider: '#B0C4DE',
  },

  typography: {
    fontFamily: '"Arial Black", "Comic Sans MS", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
    h2: {
      fontWeight: 900,
      fontSize: '2.625rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em',
    },
    h3: {
      fontWeight: 900,
      fontSize: '1.875rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 900,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 900,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 900,
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
      fontWeight: 900,
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 20,
  },

  shadows: [
    'none',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(0, 191, 255, 0.5)',
    '0 3px 0px rgba(0, 0, 128, 0.3), 0 0 15px rgba(0, 191, 255, 0.4)',
    '0 5px 0px rgba(0, 0, 128, 0.3), 0 0 25px rgba(0, 191, 255, 0.6)',
    '0 6px 0px rgba(0, 0, 128, 0.3), 0 0 30px rgba(0, 191, 255, 0.7)',
    '0 7px 0px rgba(0, 0, 128, 0.3), 0 0 35px rgba(0, 191, 255, 0.8)',
    '0 8px 0px rgba(0, 0, 128, 0.3), 0 0 40px rgba(0, 191, 255, 0.9)',
    '0 9px 0px rgba(0, 0, 128, 0.3), 0 0 45px rgba(0, 191, 255, 1)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
    '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(255, 105, 180, 0.5)',
  ],

  custom: {
    animations: {
      intensity: 'high',
      duration: {
        fast: 0.15,
        normal: 0.4,
        slow: 0.8,
      },
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    effects: {
      glassEffect: true,
      gradients: true,
      particles: false,
      shadows: true,
      blur: true,
      noise: false,
      grain: false,
    },
    spacing: {
      sectionPadding: '72px',
      cardPadding: '24px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '12px 32px',
          fontSize: '0.875rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #00BFFF 0%, #FF69B4 100%)',
          color: '#FFFFFF',
          border: '2px solid #000080',
          boxShadow: '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(0, 191, 255, 0.5)',
          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          '&:hover': {
            background: 'linear-gradient(135deg, #87CEEB 0%, #FF9ED4 100%)',
            boxShadow: '0 6px 0px rgba(0, 0, 128, 0.3), 0 0 30px rgba(0, 191, 255, 0.8)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '2px solid #00BFFF',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #E6E6FA 100%)',
          boxShadow: '0 4px 0px rgba(0, 0, 128, 0.3), 0 0 20px rgba(0, 191, 255, 0.4)',
          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          '&:hover': {
            boxShadow: '0 6px 0px rgba(0, 0, 128, 0.3), 0 0 30px rgba(0, 191, 255, 0.6)',
            transform: 'translateY(-4px) scale(1.02)',
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
          background: 'linear-gradient(90deg, #00BFFF 0%, #FF69B4 100%)',
          color: '#FFFFFF',
          boxShadow: '0 4px 0px rgba(0, 0, 128, 0.3)',
          borderBottom: 'none',
        },
      },
    },
  },
};
