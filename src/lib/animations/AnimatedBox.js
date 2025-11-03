'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';
import * as variants from './variants';

/**
 * AnimatedBox Component
 *
 * A wrapper component that adds scroll-triggered animations to its children
 *
 * @param {node} children - Content to animate
 * @param {string} variant - Animation variant name (fadeInUp, fadeInLeft, scaleIn, etc.)
 * @param {number} delay - Animation delay in seconds
 * @param {Object} custom - Custom animation overrides
 * @param {boolean} once - Trigger animation only once (default: true)
 * @param {number} amount - Amount of element visible before trigger (0-1, default: 0.3)
 * @param {Object} ...rest - Additional props passed to motion.div
 */
export default function AnimatedBox({
  children,
  variant = 'fadeInUp',
  delay = 0,
  custom,
  once = true,
  amount = 0.3,
  ...rest
}) {
  const { ref, isInView } = useScrollAnimation({ once, amount });

  // Get the animation variant
  const animationVariant = variants[variant] || variants.fadeInUp;

  // Add delay to the variant if specified
  const variantWithDelay = delay > 0 ? {
    ...animationVariant,
    visible: {
      ...animationVariant.visible,
      transition: {
        ...animationVariant.visible.transition,
        delay,
      },
    },
  } : animationVariant;

  // Merge with custom animations if provided
  const finalVariant = custom ? {
    hidden: { ...variantWithDelay.hidden, ...custom.hidden },
    visible: { ...variantWithDelay.visible, ...custom.visible },
  } : variantWithDelay;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={finalVariant}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
