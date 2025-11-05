/**
 * Theme System - Central Exports
 *
 * Exports all theme variants and utilities
 */

// Original variant configurations
export { modernVariant } from './variants/modern';
export { futuristicVariant } from './variants/futuristic';
export { minimalVariant } from './variants/minimal';
export { classicVariant } from './variants/classic';
export { elegantVariant } from './variants/elegant';

// New variant configurations from web_design_styles_improved.json
export { minimalismVariant } from './variants/minimalism';
export { classicElegantVariant } from './variants/classicElegant';
export { swissInternationalVariant } from './variants/swissInternational';
export { modernismVariant } from './variants/modernism';
export { brutalismVariant } from './variants/brutalism';
export { neomorphismVariant } from './variants/neomorphism';
export { glassmorphismVariant } from './variants/glassmorphism';
export { materialDesignVariant } from './variants/materialDesign';
export { memphisVariant } from './variants/memphis';
export { darkModeVariant } from './variants/darkMode';
export { retroVintageVariant } from './variants/retroVintage';
export { cyberpunkVariant } from './variants/cyberpunk';
export { ecoOrganicVariant } from './variants/ecoOrganic';
export { y2kVariant } from './variants/y2k';
export { grungeVariant } from './variants/grunge';
export { filmCinematicVariant } from './variants/filmCinematic';
export { healthWellnessVariant } from './variants/healthWellness';
export { nonprofitNgoVariant } from './variants/nonprofitNgo';

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
