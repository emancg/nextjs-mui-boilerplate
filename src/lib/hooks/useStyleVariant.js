/**
 * useStyleVariant Hook
 *
 * Custom hook to access and control the current style variant.
 * Provides helper methods and convenient access to theme custom properties.
 */

'use client';

import { useContext } from 'react';
import { StyleVariantContext } from '../contexts/StyleVariantContext';
import { useTheme } from '@mui/material/styles';

/**
 * Hook to access style variant context and theme
 * @returns {Object} Variant context with helper methods
 */
export function useStyleVariant() {
  const context = useContext(StyleVariantContext);
  const theme = useTheme();

  if (!context) {
    throw new Error('useStyleVariant must be used within StyleVariantProvider');
  }

  return {
    // Core context values
    currentVariant: context.currentVariant,
    setVariant: context.setVariant,
    availableVariants: context.availableVariants,
    theme: context.theme,

    // Variant type checkers (for conditional rendering)
    isFuturistic: context.currentVariant === 'futuristic',
    isMinimal: context.currentVariant === 'minimal',
    isModern: context.currentVariant === 'modern',
    isClassic: context.currentVariant === 'classic',
    isElegant: context.currentVariant === 'elegant',

    // Animation properties (from theme.custom)
    animationIntensity: theme.custom?.animations?.intensity || 'medium',
    animationDuration: theme.custom?.animations?.duration || {
      fast: 0.2,
      normal: 0.4,
      slow: 0.6,
    },
    animationEasing: theme.custom?.animations?.easing || 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Effect flags (from theme.custom)
    hasGlassEffect: theme.custom?.effects?.glassEffect || false,
    hasGradients: theme.custom?.effects?.gradients || false,
    hasParticles: theme.custom?.effects?.particles || false,
    hasShadows: theme.custom?.effects?.shadows !== false, // Default true
    hasBlur: theme.custom?.effects?.blur || false,
    hasNeonGlow: theme.custom?.effects?.neonGlow || false,
    hasScanlines: theme.custom?.effects?.scanlines || false,

    // Custom spacing (from theme.custom)
    customSpacing: theme.custom?.spacing || {},

    // Metadata
    variantName: theme.variantName,
    variantDisplayName: theme.variantDisplayName,
    variantDescription: theme.variantDescription,
  };
}

/**
 * Hook to listen for variant changes
 * @param {Function} callback - Function to call when variant changes
 */
export function useVariantChangeListener(callback) {
  useEffect(() => {
    const handleVariantChange = (event) => {
      callback(event.detail.variant);
    };

    window.addEventListener('styleVariantChange', handleVariantChange);

    return () => {
      window.removeEventListener('styleVariantChange', handleVariantChange);
    };
  }, [callback]);
}
