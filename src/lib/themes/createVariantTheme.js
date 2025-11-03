/**
 * Variant Theme Builder
 *
 * Creates a complete MUI theme by merging base theme with a specific variant.
 * Handles deep merging of configuration and attaches custom properties.
 */

import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { baseTheme } from './baseTheme';

/**
 * Creates a MUI theme from a style variant
 * @param {Object} variant - Style variant configuration object
 * @returns {Object} Complete MUI theme with custom properties
 */
export function createVariantTheme(variant) {
  // Deep merge base theme with variant config
  const mergedConfig = deepmerge(baseTheme, {
    palette: variant.palette,
    typography: variant.typography,
    spacing: variant.spacing,
    shape: variant.shape,
    shadows: variant.shadows,
    components: variant.components,
  });

  // Create MUI theme with merged configuration
  const theme = createTheme(mergedConfig);

  // Attach custom properties to theme
  // These are accessible via theme.custom in components
  theme.custom = variant.custom;

  // Attach variant metadata
  theme.variantName = variant.name;
  theme.variantDisplayName = variant.displayName;
  theme.variantDescription = variant.description;

  return theme;
}

/**
 * Helper function to get animation duration based on variant and speed
 * @param {Object} theme - MUI theme object
 * @param {string} speed - 'fast', 'normal', or 'slow'
 * @returns {number} Duration in seconds
 */
export function getAnimationDuration(theme, speed = 'normal') {
  const durations = theme.custom?.animations?.duration;

  if (!durations) {
    // Fallback values if not defined
    const defaults = { fast: 0.2, normal: 0.4, slow: 0.6 };
    return defaults[speed] || defaults.normal;
  }

  return durations[speed] || durations.normal || 0.4;
}

/**
 * Helper function to check if an effect is enabled
 * @param {Object} theme - MUI theme object
 * @param {string} effectName - Name of the effect to check
 * @returns {boolean} Whether the effect is enabled
 */
export function isEffectEnabled(theme, effectName) {
  return theme.custom?.effects?.[effectName] || false;
}

/**
 * Helper function to get animation intensity
 * @param {Object} theme - MUI theme object
 * @returns {string} 'low', 'medium', or 'high'
 */
export function getAnimationIntensity(theme) {
  return theme.custom?.animations?.intensity || 'medium';
}

/**
 * Helper function to get custom spacing value
 * @param {Object} theme - MUI theme object
 * @param {string} key - Spacing key (e.g., 'sectionPadding', 'cardPadding')
 * @returns {string} Spacing value
 */
export function getCustomSpacing(theme, key) {
  return theme.custom?.spacing?.[key] || theme.spacing(8);
}
