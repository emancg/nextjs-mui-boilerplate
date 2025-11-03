/**
 * Variant Switcher Component
 *
 * UI control for switching between style variants.
 * Can be used in navigation bar, settings panel, or footer.
 */

'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckIcon from '@mui/icons-material/Check';
import { useStyleVariant } from '../../../hooks/useStyleVariant';

/**
 * VariantSwitcher Component
 *
 * @param {Object} props
 * @param {string} props.variant - Button variant: 'button', 'icon', 'menu' (default: 'button')
 * @param {string} props.buttonVariant - MUI button variant (default: 'outlined')
 * @param {string} props.size - Button size (default: 'medium')
 * @param {boolean} props.showDescription - Show variant descriptions (default: false)
 * @param {Object} props.sx - Additional MUI sx styling
 */
export default function VariantSwitcher({
  variant = 'button',
  buttonVariant = 'outlined',
  size = 'medium',
  showDescription = false,
  sx = {},
}) {
  const { currentVariant, setVariant, availableVariants, variantDisplayName } = useStyleVariant();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (variantName) => {
    setVariant(variantName);
    handleClose();
  };

  // Icon-only variant
  if (variant === 'icon') {
    return (
      <Box sx={sx}>
        <Button
          onClick={handleClick}
          variant={buttonVariant}
          size={size}
          sx={{
            minWidth: 'auto',
            padding: '8px',
          }}
          aria-label="Change style variant"
        >
          <PaletteIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {availableVariants.map((v) => (
            <MenuItem
              key={v.name}
              onClick={() => handleSelect(v.name)}
              selected={v.name === currentVariant}
            >
              <ListItemIcon>
                {v.name === currentVariant && <CheckIcon />}
              </ListItemIcon>
              <ListItemText>
                <Typography variant="body2">{v.displayName}</Typography>
                {showDescription && (
                  <Typography variant="caption" color="text.secondary">
                    {v.description}
                  </Typography>
                )}
              </ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  }

  // Full button variant (default)
  return (
    <Box sx={sx}>
      <Button
        onClick={handleClick}
        startIcon={<PaletteIcon />}
        variant={buttonVariant}
        size={size}
      >
        Style: {variantDisplayName}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            minWidth: showDescription ? 280 : 200,
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="caption" color="text.secondary" textTransform="uppercase">
            Style Variants
          </Typography>
        </Box>
        <Divider />
        {availableVariants.map((v) => (
          <MenuItem
            key={v.name}
            onClick={() => handleSelect(v.name)}
            selected={v.name === currentVariant}
            sx={{ py: showDescription ? 1.5 : 1 }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              {v.name === currentVariant && <CheckIcon fontSize="small" />}
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" fontWeight={v.name === currentVariant ? 600 : 400}>
                {v.displayName}
              </Typography>
              {showDescription && (
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                  {v.description}
                </Typography>
              )}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
