'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as MuiIcons from '@mui/icons-material';

/**
 * EmptyState Component
 *
 * Generic empty state display for when there's no data to show
 *
 * @param {string} icon - MUI icon name
 * @param {string} title - Empty state title
 * @param {string} description - Empty state description
 * @param {Object} action - Action button config
 * @param {string} action.text - Button text
 * @param {string} action.onClick - Button click handler
 * @param {string} action.href - Button link (alternative to onClick)
 * @param {string} variant - Display variant: 'default', 'minimal', 'card'
 * @param {Object} sx - Additional MUI sx styling
 */

const Container = styled(Box)(({ theme, variant }) => {
  const baseStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(6, 3),
    minHeight: 300,
  };

  const variantStyles = {
    default: {
      ...baseStyles,
    },
    minimal: {
      ...baseStyles,
      padding: theme.spacing(4, 2),
      minHeight: 200,
    },
    card: {
      ...baseStyles,
      backgroundColor: theme.palette.grey[50],
      borderRadius: theme.spacing(2),
      border: `2px dashed ${theme.palette.divider}`,
    },
  };

  return variantStyles[variant] || variantStyles.default;
});

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& svg': {
    fontSize: '4rem',
    color: theme.palette.text.secondary,
    opacity: 0.5,
  },
}));

export default function EmptyState({
  icon = 'InboxOutlined',
  title = 'No data available',
  description = 'There is nothing to display at the moment.',
  action,
  variant = 'default',
  sx = {}
}) {
  // Resolve icon
  const IconComponent = MuiIcons[icon] || MuiIcons.InboxOutlined;

  return (
    <Container variant={variant} sx={sx}>
      <IconWrapper>
        <IconComponent />
      </IconWrapper>

      <Typography
        variant="h6"
        component="h3"
        sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3, maxWidth: 400 }}
      >
        {description}
      </Typography>

      {action && (
        <Button
          variant="contained"
          onClick={action.onClick}
          href={action.href}
          sx={{
            px: 4,
            py: 1.25,
            fontWeight: 600,
            textTransform: 'none',
          }}
        >
          {action.text}
        </Button>
      )}
    </Container>
  );
}
