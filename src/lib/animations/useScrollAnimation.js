'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 *
 * @param {Object} options - Animation options
 * @param {boolean} options.once - Trigger animation only once (default: true)
 * @param {number} options.amount - Amount of element that should be visible (0-1, default: 0.3)
 * @param {number} options.margin - Margin before triggering (default: '-100px')
 *
 * @returns {Object} - { ref, isInView }
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once !== false,
    amount: options.amount || 0.3,
    margin: options.margin || '-100px 0px',
  });

  return { ref, isInView };
}

/**
 * Get animation controls for scroll-triggered elements
 *
 * @param {boolean} isInView - Whether element is in view
 * @returns {Object} - Animation controls for motion components
 */
export function getAnimationControls(isInView) {
  return {
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants: {},
  };
}
