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
import { modernVariant } from '../themes/variants/modern';
import { futuristicVariant } from '../themes/variants/futuristic';
import { minimalVariant } from '../themes/variants/minimal';
import { classicVariant } from '../themes/variants/classic';
import { elegantVariant } from '../themes/variants/elegant';

// Registry of all available style variants
const variants = {
  modern: modernVariant,
  futuristic: futuristicVariant,
  minimal: minimalVariant,
  classic: classicVariant,
  elegant: elegantVariant,
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
