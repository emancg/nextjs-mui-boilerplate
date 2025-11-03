/**
 * Variant-Aware Animations
 *
 * Adapts Framer Motion animations based on the current style variant.
 * Different variants can have different animation intensities and durations.
 */

'use client';

import { useTheme } from '@mui/material/styles';

/**
 * Animation intensity multipliers
 * Controls how "dramatic" animations are based on variant settings
 */
const INTENSITY_MULTIPLIERS = {
  low: {
    distance: 0.5,   // 50% of original distance
    duration: 0.8,   // 80% of original duration (faster)
    scale: 0.98,     // Subtle scale changes
  },
  medium: {
    distance: 1,     // 100% of original distance
    duration: 1,     // 100% of original duration
    scale: 1.05,     // Moderate scale changes
  },
  high: {
    distance: 1.5,   // 150% of original distance
    duration: 1.2,   // 120% of original duration (slower for impact)
    scale: 1.15,     // Dramatic scale changes
  },
};

/**
 * Hook to get variant-aware animation configuration
 * @param {string} baseVariantName - Name of base animation (e.g., 'fadeInUp')
 * @returns {Object} Animation variant configuration for Framer Motion
 */
export function useVariantAnimation(baseVariantName) {
  const theme = useTheme();
  const intensity = theme.custom?.animations?.intensity || 'medium';
  const duration = theme.custom?.animations?.duration || {};
  const easing = theme.custom?.animations?.easing || 'cubic-bezier(0.4, 0, 0.2, 1)';

  const multiplier = INTENSITY_MULTIPLIERS[intensity] || INTENSITY_MULTIPLIERS.medium;

  // Adapt animations based on variant
  const adaptedAnimations = {
    fadeInUp: {
      hidden: {
        opacity: 0,
        y: 40 * multiplier.distance,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: (duration.normal || 0.4) * multiplier.duration,
          ease: easing,
        },
      },
    },

    fadeInDown: {
      hidden: {
        opacity: 0,
        y: -40 * multiplier.distance,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: (duration.normal || 0.4) * multiplier.duration,
          ease: easing,
        },
      },
    },

    fadeInLeft: {
      hidden: {
        opacity: 0,
        x: -40 * multiplier.distance,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: (duration.normal || 0.4) * multiplier.duration,
          ease: easing,
        },
      },
    },

    fadeInRight: {
      hidden: {
        opacity: 0,
        x: 40 * multiplier.distance,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: (duration.normal || 0.4) * multiplier.duration,
          ease: easing,
        },
      },
    },

    scaleIn: {
      hidden: {
        opacity: 0,
        scale: 1 - (multiplier.scale - 1),
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: (duration.normal || 0.4) * multiplier.duration,
          ease: easing,
        },
      },
    },

    slideInUp: {
      hidden: {
        opacity: 0,
        y: 60 * multiplier.distance,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100 * (2 - multiplier.duration), // More dramatic = less stiff
          damping: 20,
        },
      },
    },

    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1 * multiplier.duration,
          delayChildren: 0.1,
        },
      },
    },
  };

  // Return the adapted animation or null if not found
  return adaptedAnimations[baseVariantName] || null;
}

/**
 * Get hover animation configuration based on variant
 * @returns {Object} Hover animation configuration
 */
export function useHoverAnimation() {
  const theme = useTheme();
  const intensity = theme.custom?.animations?.intensity || 'medium';
  const multiplier = INTENSITY_MULTIPLIERS[intensity] || INTENSITY_MULTIPLIERS.medium;

  return {
    whileHover: {
      scale: multiplier.scale,
      transition: {
        duration: theme.custom?.animations?.duration?.fast || 0.2,
      },
    },
    whileTap: {
      scale: 0.95,
    },
  };
}

/**
 * Get button hover animation based on variant
 * @returns {Object} Button hover configuration
 */
export function useButtonHoverAnimation() {
  const theme = useTheme();
  const intensity = theme.custom?.animations?.intensity || 'medium';

  if (intensity === 'low') {
    return {
      whileHover: {
        y: -1,
        transition: { duration: 0.15 },
      },
    };
  }

  if (intensity === 'high') {
    return {
      whileHover: {
        scale: 1.05,
        y: -4,
        transition: { duration: 0.3 },
      },
    };
  }

  // Medium (default)
  return {
    whileHover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  };
}

/**
 * Get card hover animation based on variant
 * @returns {Object} Card hover configuration
 */
export function useCardHoverAnimation() {
  const theme = useTheme();
  const intensity = theme.custom?.animations?.intensity || 'medium';
  const multiplier = INTENSITY_MULTIPLIERS[intensity];

  return {
    whileHover: {
      y: -4 * multiplier.distance,
      transition: {
        duration: theme.custom?.animations?.duration?.normal || 0.3,
      },
    },
  };
}

/**
 * Helper to get animation duration from theme
 * @param {string} speed - 'fast', 'normal', or 'slow'
 * @returns {number} Duration in seconds
 */
export function useAnimationDuration(speed = 'normal') {
  const theme = useTheme();
  const durations = theme.custom?.animations?.duration || {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
  };

  return durations[speed] || durations.normal;
}
