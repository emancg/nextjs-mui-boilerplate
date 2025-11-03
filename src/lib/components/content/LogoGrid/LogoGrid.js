'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '../../utility/Container';
import Link from 'next/link';

/**
 * LogoGrid Component
 *
 * Grid of partner/client/integration logos with grayscale hover effect
 *
 * @param {Object} config - Configuration object
 * @param {string} config.title - Section title
 * @param {string} config.subtitle - Section subtitle (optional)
 * @param {Array} config.logos - Array of logo objects
 * @param {string} config.logos[].src - Logo image source
 * @param {string} config.logos[].alt - Logo alt text
 * @param {string} config.logos[].href - Logo link (optional)
 * @param {number} config.columns - Number of columns (2-6, default: 4)
 * @param {boolean} config.grayscale - Apply grayscale filter (default: true)
 * @param {string} config.backgroundColor - Background color
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme, bgcolor }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: bgcolor || 'transparent',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const LogoBox = styled(Box)(({ theme, grayscale }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  height: '100%',
  minHeight: 120,
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '& img': {
    maxWidth: '100%',
    maxHeight: 80,
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    filter: grayscale ? 'grayscale(100%)' : 'none',
    opacity: grayscale ? 0.6 : 1,
    transition: 'all 0.3s ease',
  },

  '&:hover img': {
    filter: 'grayscale(0%)',
    opacity: 1,
    transform: 'scale(1.05)',
  },
}));

const LogoLink = styled(Link)({
  textDecoration: 'none',
  display: 'block',
  height: '100%',
});

export default function LogoGrid({ config, sx = {} }) {
  if (!config || !config.logos || config.logos.length === 0) {
    return null;
  }

  const {
    title,
    subtitle,
    logos,
    columns = 4,
    grayscale = true,
    backgroundColor,
  } = config;

  // Calculate grid columns based on config
  const gridColumns = {
    xs: 6, // 2 columns on mobile
    sm: columns >= 4 ? 4 : 6, // Adjust for small screens
    md: 12 / columns, // Dynamic columns on desktop
  };

  return (
    <SectionContainer bgcolor={backgroundColor} sx={sx}>
      <Container maxWidth="lg">
        {subtitle && (
          <Typography
            variant="overline"
            align="center"
            sx={{
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: 1.5,
              display: 'block',
              marginBottom: 1,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {title && (
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            {title}
          </Typography>
        )}

        <Grid container spacing={2}>
          {logos.map((logo, index) => (
            <Grid item {...gridColumns} key={index}>
              {logo.href ? (
                <LogoLink
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoBox grayscale={grayscale}>
                    <img src={logo.src} alt={logo.alt || `Logo ${index + 1}`} />
                  </LogoBox>
                </LogoLink>
              ) : (
                <LogoBox grayscale={grayscale}>
                  <img src={logo.src} alt={logo.alt || `Logo ${index + 1}`} />
                </LogoBox>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
}
