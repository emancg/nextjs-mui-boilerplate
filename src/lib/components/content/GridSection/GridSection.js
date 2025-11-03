'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as MuiIcons from '@mui/icons-material';

/**
 * Minimal Clean GridSection Component
 *
 * Display content items in a clean grid with icons or images
 *
 * @param {Object} config - Configuration object
 * @param {string} config.title - Section title
 * @param {string} config.id - Section ID for anchors
 * @param {Array} config.items - Array of grid items
 * @param {string} config.items[].title - Item title
 * @param {string} config.items[].subtitle - Item description
 * @param {string} config.items[].icon - MUI icon name (icon variant)
 * @param {string} config.items[].image - Image URL (image variant)
 * @param {string} config.items[].iconColor - Icon color
 * @param {Object} config.layout - Layout configuration
 * @param {number} config.layout.columns.md - Columns on desktop (3 or 4)
 * @param {string} config.variant - Display variant: 'icon', 'image', 'card'
 * @param {string} config.backgroundColor - Background color
 */

const SectionContainer = styled(Box)(({ theme, bgcolor }) => ({
  padding: theme.spacing(12, 2),
  backgroundColor: bgcolor || '#FFFFFF',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 2),
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(6),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

const GridItem = styled(Box)(({ theme, variant }) => ({
  textAlign: 'center',
  padding: theme.spacing(4, 2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ...(variant === 'card' && {
    backgroundColor: 'white',
    borderRadius: theme.spacing(2),
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      transform: 'translateY(-4px)',
    },
  }),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),

  '& svg': {
    fontSize: '2.5rem',
  },
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.25rem',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

const ItemDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.7,
  fontSize: '0.9375rem',
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '200px',
  height: '150px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export default function GridSection({ config }) {
  if (!config || !config.items) {
    return null;
  }

  const variant = config.variant || 'icon';

  return (
    <SectionContainer id={config.id} bgcolor={config.backgroundColor}>
      <Container maxWidth="lg">
        <SectionHeader>
          <SectionTitle variant="h2" component="h2">
            {config.title || 'Features'}
          </SectionTitle>
        </SectionHeader>

        <Grid container spacing={4}>
          {config.items.map((item, index) => {
            const IconComponent = MuiIcons[item.icon] || MuiIcons.Star;

            // Determine icon color
            const getIconColor = () => {
              if (item.iconColor === 'primary') return '#2196F3';
              if (item.iconColor === 'secondary') return '#FF6B6B';
              if (item.iconColor === 'green') return '#4CAF50';
              if (item.iconColor === 'gold') return '#FFC107';
              return '#2196F3'; // default
            };

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={config.layout?.columns?.md === 3 ? 3 : 4}
                key={index}
              >
                <GridItem variant={variant}>
                  {/* Image variant */}
                  {variant === 'image' && item.image && (
                    <ImageWrapper>
                      <img src={item.image} alt={item.title} />
                    </ImageWrapper>
                  )}

                  {/* Icon variant (default) */}
                  {(variant === 'icon' || variant === 'card') && item.icon && (
                    <IconWrapper>
                      <IconComponent sx={{ color: getIconColor() }} />
                    </IconWrapper>
                  )}

                  <ItemTitle variant="h6" component="h3">
                    {item.title}
                  </ItemTitle>

                  <ItemDescription variant="body2">
                    {item.subtitle}
                  </ItemDescription>
                </GridItem>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </SectionContainer>
  );
}
