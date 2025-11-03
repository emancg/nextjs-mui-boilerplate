# Animation System

Framer Motion integration for scroll-triggered and entrance animations.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [AnimatedBox Component](#animatedbox-component)
- [useScrollAnimation Hook](#usescrollanimation-hook)
- [Animation Variants](#animation-variants)
- [Usage Examples](#usage-examples)
- [Manual Integration](#manual-integration)

---

## Overview

The boilerplate includes a complete animation system built on [Framer Motion](https://www.framer.com/motion/), providing:

- **15+ Pre-built Variants**: Ready-to-use animations
- **AnimatedBox Component**: Easiest way to add animations
- **useScrollAnimation Hook**: Custom hook for scroll-triggered animations
- **Scroll Detection**: Animations trigger when elements enter viewport
- **Performance**: Optimized for smooth 60fps animations
- **Type-safe**: Full TypeScript support

**Location:** `src/lib/animations/`

---

## Installation

Framer Motion is already installed in this boilerplate:

```bash
npm install framer-motion
```

---

## AnimatedBox Component

**Location:** `src/lib/animations/AnimatedBox.js`

The easiest way to add animations to your components.

### Usage

```jsx
import AnimatedBox from '@/lib/animations/AnimatedBox';

<AnimatedBox variant="fadeInUp">
  <YourContent />
</AnimatedBox>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | node | Required | Content to animate |
| variant | string | 'fadeInUp' | Animation variant name |
| delay | number | 0 | Animation delay in seconds |
| custom | object | - | Custom animation overrides |
| once | boolean | true | Trigger animation only once |
| amount | number | 0.3 | Amount of element visible before trigger (0-1) |
| ...rest | - | - | Additional props passed to motion.div |

### Examples

**Basic usage:**
```jsx
<AnimatedBox variant="fadeInUp">
  <HeroSection config={{...}} />
</AnimatedBox>
```

**With delay:**
```jsx
<AnimatedBox variant="scaleIn" delay={0.2}>
  <PricingCard plan={{...}} />
</AnimatedBox>
```

**Stagger children:**
```jsx
<AnimatedBox variant="staggerContainer">
  <AnimatedBox variant="fadeInUp" delay={0}>Item 1</AnimatedBox>
  <AnimatedBox variant="fadeInUp" delay={0.1}>Item 2</AnimatedBox>
  <AnimatedBox variant="fadeInUp" delay={0.2}>Item 3</AnimatedBox>
</AnimatedBox>
```

**Custom amount (trigger earlier):**
```jsx
<AnimatedBox variant="slideInLeft" amount={0.1}>
  <ContentSection config={{...}} />
</AnimatedBox>
```

---

## useScrollAnimation Hook

**Location:** `src/lib/animations/useScrollAnimation.js`

Custom hook for scroll-triggered animations with viewport detection.

### Usage

```jsx
import { useScrollAnimation } from '@/lib/animations';

function MyComponent() {
  const { ref, isInView } = useScrollAnimation({
    once: true,
    amount: 0.3
  });

  return (
    <div ref={ref}>
      {isInView && <p>I'm visible!</p>}
    </div>
  );
}
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| once | boolean | true | Trigger only once or every time |
| amount | number | 0.3 | Viewport intersection amount (0-1) |
| margin | string | '-100px 0px' | Margin offset for trigger |

### Return Value

| Property | Type | Description |
|----------|------|-------------|
| ref | React.RefObject | Ref to attach to element |
| isInView | boolean | Whether element is in viewport |

---

## Animation Variants

**Location:** `src/lib/animations/variants.js`

Pre-built animation configurations for common effects.

### Fade Animations

**fadeInUp**: Fade in from bottom
```jsx
<AnimatedBox variant="fadeInUp">
  <Content />
</AnimatedBox>
```

**fadeInDown**: Fade in from top
```jsx
<AnimatedBox variant="fadeInDown">
  <Content />
</AnimatedBox>
```

**fadeInLeft**: Fade in from left
```jsx
<AnimatedBox variant="fadeInLeft">
  <Content />
</AnimatedBox>
```

**fadeInRight**: Fade in from right
```jsx
<AnimatedBox variant="fadeInRight">
  <Content />
</AnimatedBox>
```

**fadeIn**: Simple fade in
```jsx
<AnimatedBox variant="fadeIn">
  <Content />
</AnimatedBox>
```

### Slide Animations

**slideInUp**: Slide in from bottom with spring
```jsx
<AnimatedBox variant="slideInUp">
  <Content />
</AnimatedBox>
```

**slideInLeft**: Slide in from left with spring
```jsx
<AnimatedBox variant="slideInLeft">
  <Content />
</AnimatedBox>
```

**slideInRight**: Slide in from right with spring
```jsx
<AnimatedBox variant="slideInRight">
  <Content />
</AnimatedBox>
```

### Scale & Rotate Animations

**scaleIn**: Scale up animation
```jsx
<AnimatedBox variant="scaleIn">
  <Content />
</AnimatedBox>
```

**zoomIn**: Zoom in from center
```jsx
<AnimatedBox variant="zoomIn">
  <Content />
</AnimatedBox>
```

**rotateIn**: Rotate and fade in
```jsx
<AnimatedBox variant="rotateIn">
  <Content />
</AnimatedBox>
```

### Continuous Animations

**float**: Continuous floating animation
```jsx
<AnimatedBox variant="float">
  <Icon />
</AnimatedBox>
```

**pulse**: Continuous pulse animation
```jsx
<AnimatedBox variant="pulse">
  <Badge />
</AnimatedBox>
```

### Stagger Animation

**staggerContainer**: Stagger children animations
```jsx
<AnimatedBox variant="staggerContainer">
  {items.map((item, i) => (
    <AnimatedBox key={i} variant="fadeInUp" delay={i * 0.1}>
      <Item {...item} />
    </AnimatedBox>
  ))}
</AnimatedBox>
```

### Hover Animations

**cardHover**: Card hover effect (use directly with motion.div)
```jsx
import { motion } from 'framer-motion';
import { cardHover } from '@/lib/animations';

<motion.div whileHover={cardHover.whileHover}>
  <Card />
</motion.div>
```

**buttonHover**: Button hover effect
```jsx
import { motion } from 'framer-motion';
import { buttonHover } from '@/lib/animations';

<motion.button variants={buttonHover}>
  Click Me
</motion.button>
```

---

## Usage Examples

### Animate Hero Section

```jsx
import AnimatedBox from '@/lib/animations/AnimatedBox';
import { HeroSection } from '@/lib/components';

<AnimatedBox variant="fadeInUp">
  <HeroSection config={{
    title: "Welcome to Our Site",
    subtitle: "Build amazing things"
  }} />
</AnimatedBox>
```

### Animate Grid Items with Stagger

```jsx
import AnimatedBox from '@/lib/animations/AnimatedBox';
import { GridSection } from '@/lib/components';

const features = [
  { icon: "Speed", title: "Fast", subtitle: "Lightning fast" },
  { icon: "Security", title: "Secure", subtitle: "Bank-level security" },
  { icon: "Support", title: "24/7 Support", subtitle: "Always here" }
];

<AnimatedBox variant="staggerContainer">
  {features.map((feature, i) => (
    <AnimatedBox key={i} variant="fadeInUp" delay={i * 0.1}>
      <FeatureCard {...feature} />
    </AnimatedBox>
  ))}
</AnimatedBox>
```

### Animate Cards on Scroll

```jsx
import AnimatedBox from '@/lib/animations/AnimatedBox';
import { PricingCard } from '@/lib/components';

const plans = [basicPlan, proPlan, enterprisePlan];

<Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }}>
  {plans.map((plan, i) => (
    <AnimatedBox key={i} variant="scaleIn" delay={i * 0.15}>
      <PricingCard plan={plan} />
    </AnimatedBox>
  ))}
</Box>
```

### Trigger on Scroll (Custom Hook)

```jsx
'use client';

import { useScrollAnimation } from '@/lib/animations';
import { Box, Typography } from '@mui/material';

function ScrollReveal() {
  const { ref, isInView } = useScrollAnimation({
    once: true,
    amount: 0.5
  });

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.6s ease'
      }}
    >
      <Typography variant="h3">
        This appears when scrolled into view
      </Typography>
    </Box>
  );
}
```

### Combine Multiple Animations

```jsx
import AnimatedBox from '@/lib/animations/AnimatedBox';

<AnimatedBox variant="fadeInUp">
  <Box sx={{ textAlign: 'center', py: 8 }}>
    <AnimatedBox variant="scaleIn" delay={0.2}>
      <Typography variant="h2">Welcome</Typography>
    </AnimatedBox>

    <AnimatedBox variant="fadeIn" delay={0.4}>
      <Typography variant="body1">
        Build amazing things with our platform
      </Typography>
    </AnimatedBox>

    <AnimatedBox variant="slideInUp" delay={0.6}>
      <Button variant="contained" size="large">
        Get Started
      </Button>
    </AnimatedBox>
  </Box>
</AnimatedBox>
```

---

## Manual Integration

For advanced use cases, you can use Framer Motion directly.

### Basic Motion Div

```jsx
'use client';

import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <YourContent />
</motion.div>
```

### Using Variants Directly

```jsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  <YourContent />
</motion.div>
```

### Scroll-Triggered with useInView

```jsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function MyComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <YourContent />
    </motion.div>
  );
}
```

### Hover & Tap Effects

```jsx
'use client';

import { motion } from 'framer-motion';

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', stiffness: 400 }}
>
  Click Me
</motion.button>
```

### Exit Animations

```jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Modal />
    </motion.div>
  )}
</AnimatePresence>
```

---

## Best Practices

### 1. Use 'use client' Directive

Framer Motion requires client-side rendering:

```jsx
'use client';

import AnimatedBox from '@/lib/animations/AnimatedBox';
```

### 2. Optimize Performance

- Use `once: true` for most animations (trigger only once)
- Avoid animating expensive properties (use `transform` and `opacity`)
- Use `will-change` CSS for smoother animations

### 3. Accessibility

- Respect `prefers-reduced-motion`:

```jsx
import { useReducedMotion } from 'framer-motion';

function MyComponent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatedBox variant={shouldReduceMotion ? 'fadeIn' : 'fadeInUp'}>
      <Content />
    </AnimatedBox>
  );
}
```

### 4. Stagger with Delay

For lists, use sequential delays:

```jsx
{items.map((item, i) => (
  <AnimatedBox key={i} variant="fadeInUp" delay={i * 0.1}>
    <Item {...item} />
  </AnimatedBox>
))}
```

---

## Complete Variant List

| Variant | Type | Description |
|---------|------|-------------|
| fadeInUp | Fade | Fade in from bottom |
| fadeInDown | Fade | Fade in from top |
| fadeInLeft | Fade | Fade in from left |
| fadeInRight | Fade | Fade in from right |
| fadeIn | Fade | Simple fade in |
| slideInUp | Slide | Slide from bottom with spring |
| slideInLeft | Slide | Slide from left with spring |
| slideInRight | Slide | Slide from right with spring |
| scaleIn | Scale | Scale up from center |
| zoomIn | Scale | Zoom in effect |
| rotateIn | Rotate | Rotate and fade in |
| float | Continuous | Floating animation |
| pulse | Continuous | Pulse animation |
| staggerContainer | Container | Stagger children animations |
| cardHover | Hover | Card hover effect |
| buttonHover | Hover | Button hover effect |

---

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Variants Guide](https://www.framer.com/motion/animation/##variants)
- [Scroll Animations](https://www.framer.com/motion/scroll-animations/)

---

**Last Updated:** 2024
**Framer Motion Version:** Latest
**Total Variants:** 15+
