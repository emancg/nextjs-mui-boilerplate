/**
 * Theme System - Central Exports
 *
 * Exports all theme variants and utilities
 */

// Variant configurations
export { modernVariant } from './variants/modern';
export { futuristicVariant } from './variants/futuristic';
export { minimalVariant } from './variants/minimal';
export { classicVariant } from './variants/classic';
export { elegantVariant } from './variants/elegant';

// Theme builder and utilities
export {
  createVariantTheme,
  getAnimationDuration,
  isEffectEnabled,
  getAnimationIntensity,
  getCustomSpacing,
} from './createVariantTheme';

// Base theme
export { baseTheme } from './baseTheme';
