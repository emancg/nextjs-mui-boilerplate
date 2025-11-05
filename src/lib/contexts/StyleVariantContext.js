/**
 * Style Variant Context
 *
 * Provides global access to style variant configuration and theme switching.
 * Wraps the application with MUI ThemeProvider and manages variant state.
 */

'use client';

import { createContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createVariantTheme } from '../themes/createVariantTheme';

// Import all variant configurations
import { modernVariant } from '../themes/variants/modern';
import { futuristicVariant } from '../themes/variants/futuristic';
import { minimalVariant } from '../themes/variants/minimal';
import { classicVariant } from '../themes/variants/classic';
import { elegantVariant } from '../themes/variants/elegant';
import { minimalismVariant } from '../themes/variants/minimalism';
import { classicElegantVariant } from '../themes/variants/classicElegant';
import { swissInternationalVariant } from '../themes/variants/swissInternational';
import { modernismVariant } from '../themes/variants/modernism';
import { brutalismVariant } from '../themes/variants/brutalism';
import { neomorphismVariant } from '../themes/variants/neomorphism';
import { glassmorphismVariant } from '../themes/variants/glassmorphism';
import { materialDesignVariant } from '../themes/variants/materialDesign';
import { memphisVariant } from '../themes/variants/memphis';
import { darkModeVariant } from '../themes/variants/darkMode';
import { retroVintageVariant } from '../themes/variants/retroVintage';
import { cyberpunkVariant } from '../themes/variants/cyberpunk';
import { ecoOrganicVariant } from '../themes/variants/ecoOrganic';
import { y2kVariant } from '../themes/variants/y2k';
import { grungeVariant } from '../themes/variants/grunge';
import { filmCinematicVariant } from '../themes/variants/filmCinematic';
import { healthWellnessVariant } from '../themes/variants/healthWellness';
import { nonprofitNgoVariant } from '../themes/variants/nonprofitNgo';

// Registry of all available style variants
const variants = {
  // Original variants
  modern: modernVariant,
  futuristic: futuristicVariant,
  minimal: minimalVariant,
  classic: classicVariant,
  elegant: elegantVariant,
  // New variants from web_design_styles_improved.json
  minimalism: minimalismVariant,
  classicElegant: classicElegantVariant,
  swissInternational: swissInternationalVariant,
  modernism: modernismVariant,
  brutalism: brutalismVariant,
  neomorphism: neomorphismVariant,
  glassmorphism: glassmorphismVariant,
  materialDesign: materialDesignVariant,
  memphis: memphisVariant,
  darkMode: darkModeVariant,
  retroVintage: retroVintageVariant,
  cyberpunk: cyberpunkVariant,
  ecoOrganic: ecoOrganicVariant,
  y2k: y2kVariant,
  grunge: grungeVariant,
  filmCinematic: filmCinematicVariant,
  healthWellness: healthWellnessVariant,
  nonprofitNgo: nonprofitNgoVariant,
};

// Create Context
export const StyleVariantContext = createContext({
  currentVariant: 'modern',
  setVariant: () => {},
  availableVariants: [],
  theme: null,
});

/**
 * Style Variant Provider Component
 *
 * @param {Object} props
 * @param {ReactNode} props.children - Child components
 * @param {string} props.defaultVariant - Initial variant (default: 'modern')
 * @param {boolean} props.enablePersistence - Save variant to localStorage (default: true)
 */
export function StyleVariantProvider({
  children,
  defaultVariant = 'modern',
  enablePersistence = true,
}) {
  const [currentVariant, setCurrentVariantState] = useState(defaultVariant);
  const [isClient, setIsClient] = useState(false);

  // Mark as client-side after mount (prevents hydration mismatch)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    if (!isClient || !enablePersistence) return;

    const saved = localStorage.getItem('styleVariant');
    if (saved && variants[saved]) {
      setCurrentVariantState(saved);
    }
  }, [isClient, enablePersistence]);

  // Function to change variant
  const setVariant = (variantName) => {
    if (!variants[variantName]) {
      console.warn(`Style variant "${variantName}" not found. Available variants:`, Object.keys(variants));
      return;
    }

    setCurrentVariantState(variantName);

    // Save to localStorage if persistence is enabled
    if (enablePersistence && typeof window !== 'undefined') {
      localStorage.setItem('styleVariant', variantName);
    }

    // Dispatch custom event for other components to listen to
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('styleVariantChange', {
        detail: { variant: variantName }
      }));
    }
  };

  // Create theme based on current variant (memoized for performance)
  const theme = useMemo(() => {
    return createVariantTheme(variants[currentVariant]);
  }, [currentVariant]);

  // Available variants list for UI selectors
  const availableVariants = useMemo(() => {
    return Object.keys(variants).map(key => ({
      name: key,
      displayName: variants[key].displayName,
      description: variants[key].description,
    }));
  }, []);

  // Context value
  const contextValue = {
    currentVariant,
    setVariant,
    availableVariants,
    theme,
  };

  return (
    <StyleVariantContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyleVariantContext.Provider>
  );
}
