# Style Variant System

A flexible, centralized theming system that transforms your entire site's visual identity with a single configuration change.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Available Variants](#available-variants)
- [Quick Start](#quick-start)
- [Usage Guide](#usage-guide)
- [Creating Custom Variants](#creating-custom-variants)
- [API Reference](#api-reference)
- [Advanced Topics](#advanced-topics)
- [Best Practices](#best-practices)

---

## Overview

The Style Variant System defines your site's visual personality through a simple global config you can switch anytime. Each variant—like modern, futuristic, classic, minimal, or elegant—sets the tone for **color, typography, spacing, animation intensity, and visual effects**.

### Key Features

- **Instant Transformation**: Switch the entire site's mood by changing one key
- **5 Built-in Variants**: Modern, Futuristic, Minimal, Classic, Elegant
- **MUI Integration**: Seamlessly extends Material-UI theming
- **Animation-Aware**: Framer Motion adapts to variant intensity
- **Persistent**: Saves user's variant choice to localStorage
- **Component-Agnostic**: All 70+ components auto-adapt without code changes
- **Extensible**: Easy to create custom variants

### How It Works

```
Global Variant Config → MUI Theme → Framer Motion → 70+ Components
```

All components read from the centralized theme, automatically adapting their appearance without changing logic or structure.

---

## Architecture

### File Structure

```
src/
├── lib/
│   ├── themes/
│   │   ├── variants/
│   │   │   ├── modern.js          # Modern variant config
│   │   │   ├── futuristic.js      # Futuristic variant
│   │   │   ├── minimal.js         # Minimal variant
│   │   │   ├── classic.js         # Classic variant
│   │   │   └── elegant.js         # Elegant variant
│   │   ├── baseTheme.js           # Shared foundation
│   │   ├── createVariantTheme.js  # Theme builder
│   │   └── index.js               # Exports
│   ├── contexts/
│   │   └── StyleVariantContext.js # State management
│   ├── hooks/
│   │   └── useStyleVariant.js     # Access hook
│   ├── animations/
│   │   └── variantAnimations.js   # Variant-aware animations
│   └── components/
│       └── utility/
│           └── VariantSwitcher/   # Switcher UI
```

### System Flow

1. **StyleVariantProvider** wraps the app (in layout.js)
2. **User selects variant** (via VariantSwitcher or code)
3. **Theme is generated** from variant configuration
4. **MUI ThemeProvider** applies theme globally
5. **All components** auto-adapt via theme
6. **Animations** adjust to variant intensity

---

## Available Variants

### 1. Modern (Default)

**Perfect for:** Tech startups, SaaS products, modern web apps

**Visual Identity:**
- **Colors**: Vibrant indigo & pink
- **Typography**: Inter (sans-serif), bold headlines
- **Shapes**: Rounded corners (12px)
- **Shadows**: Soft, elevated
- **Animations**: Medium intensity, smooth
- **Effects**: Gradients enabled, no glass effect

```jsx
<StyleVariantProvider defaultVariant="modern">
```

---

### 2. Futuristic

**Perfect for:** Gaming, crypto, tech products, cutting-edge brands

**Visual Identity:**
- **Colors**: Neon cyan & magenta on dark background
- **Typography**: Orbitron/Rajdhani (tech fonts), uppercase
- **Shapes**: Sharp edges (2px radius)
- **Shadows**: Glowing neon effects
- **Animations**: High intensity, dramatic
- **Effects**: Glass effect, gradients, particles, neon glow, scanlines

```jsx
<StyleVariantProvider defaultVariant="futuristic">
```

**Special Features:**
- Glowing button animations with sweep effects
- Glassmorphism with backdrop blur
- Cyberpunk-style borders
- Animated scanlines on cards

---

### 3. Minimal

**Perfect for:** Portfolios, editorial content, minimalist brands

**Visual Identity:**
- **Colors**: Pure black & white
- **Typography**: Helvetica Neue (clean sans-serif), light weights
- **Shapes**: No rounded corners (0px)
- **Shadows**: None (flat design)
- **Animations**: Low intensity, subtle
- **Effects**: All effects disabled

```jsx
<StyleVariantProvider defaultVariant="minimal">
```

**Design Philosophy:**
- Focus on content and whitespace
- Maximum negative space
- Monochrome palette
- Ultra-clean typography

---

### 4. Classic

**Perfect for:** Law firms, universities, financial institutions, established brands

**Visual Identity:**
- **Colors**: Deep navy & gold on warm white
- **Typography**: Merriweather/Lora (serif), traditional
- **Shapes**: Subtle rounding (4px)
- **Shadows**: Soft, classic
- **Animations**: Low intensity, dignified
- **Effects**: Shadows only, no modern effects

```jsx
<StyleVariantProvider defaultVariant="classic">
```

**Design Features:**
- Serif headings for authority
- Warm color palette
- Traditional button styles
- Sophisticated spacing

---

### 5. Elegant

**Perfect for:** Fashion, jewelry, luxury goods, premium services

**Visual Identity:**
- **Colors**: Deep brown & gold on warm off-white
- **Typography**: Playfair Display/Lora (elegant serif), italics
- **Shapes**: Soft rounding (8px)
- **Shadows**: Soft, luxurious
- **Animations**: Medium intensity, smooth
- **Effects**: Gradients, blur, shadows

```jsx
<StyleVariantProvider defaultVariant="elegant">
```

**Luxury Features:**
- Italic headings for sophistication
- Gradient backgrounds
- Gold accent color
- Refined spacing and typography

---

## Quick Start

### 1. Basic Setup (Already Done)

The system is already integrated in `src/app/layout.js`:

```jsx
import { StyleVariantProvider } from '@/lib/contexts/StyleVariantContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyleVariantProvider defaultVariant="modern">
          {children}
        </StyleVariantProvider>
      </body>
    </html>
  );
}
```

### 2. Add Variant Switcher to Navigation

```jsx
'use client';

import { AppBar } from '@/lib/components/navigation';
import { VariantSwitcher } from '@/lib/components/utility';

export default function Navigation() {
  return (
    <AppBar
      brand={{ name: "MyApp" }}
      menuItems={[...]}
      // Add VariantSwitcher to AppBar
      endContent={<VariantSwitcher variant="button" showDescription />}
    />
  );
}
```

### 3. Access Variant in Components

```jsx
'use client';

import { useStyleVariant } from '@/lib/hooks/useStyleVariant';

export default function MyComponent() {
  const { currentVariant, isFuturistic, hasParticles } = useStyleVariant();

  return (
    <div>
      {hasParticles && <ParticleBackground />}
      <h1>Current variant: {currentVariant}</h1>
    </div>
  );
}
```

---

## Usage Guide

### Switching Variants Programmatically

```jsx
'use client';

import { useStyleVariant } from '@/lib/hooks/useStyleVariant';

function MyComponent() {
  const { setVariant } = useStyleVariant();

  return (
    <div>
      <button onClick={() => setVariant('futuristic')}>Go Futuristic</button>
      <button onClick={() => setVariant('minimal')}>Go Minimal</button>
      <button onClick={() => setVariant('elegant')}>Go Elegant</button>
    </div>
  );
}
```

### Using VariantSwitcher Component

**Full Button with Label:**
```jsx
<VariantSwitcher
  variant="button"
  buttonVariant="outlined"
  size="medium"
  showDescription={true}
/>
```

**Icon Only (Compact):**
```jsx
<VariantSwitcher
  variant="icon"
  buttonVariant="contained"
  size="small"
/>
```

### Conditional Rendering Based on Variant

```jsx
'use client';

import { useStyleVariant } from '@/lib/hooks/useStyleVariant';

export default function Header() {
  const { isFuturistic, isMinimal, hasNeonGlow } = useStyleVariant();

  return (
    <header>
      {isFuturistic && <NeonLogo />}
      {isMinimal && <SimpleLogo />}
      {hasNeonGlow && <GlowEffect />}
    </header>
  );
}
```

### Accessing Theme Custom Properties

```jsx
'use client';

import { useStyleVariant } from '@/lib/hooks/useStyleVariant';

export default function AnimatedCard() {
  const {
    animationIntensity,    // 'low', 'medium', 'high'
    animationDuration,     // { fast, normal, slow }
    hasGlassEffect,        // boolean
    customSpacing,         // { sectionPadding, cardPadding }
  } = useStyleVariant();

  return (
    <div style={{
      padding: customSpacing.cardPadding,
      backdropFilter: hasGlassEffect ? 'blur(10px)' : 'none',
    }}>
      Content
    </div>
  );
}
```

### Using Variant-Aware Animations

```jsx
'use client';

import { useVariantAnimation } from '@/lib/animations/variantAnimations';
import { motion } from 'framer-motion';

export default function AnimatedBox({ children }) {
  // Animation adapts to variant intensity
  const animation = useVariantAnimation('fadeInUp');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
    >
      {children}
    </motion.div>
  );
}
```

### Using Variant-Aware Hover Effects

```jsx
'use client';

import { useHoverAnimation } from '@/lib/animations/variantAnimations';
import { motion } from 'framer-motion';

export default function HoverCard() {
  const hoverAnimation = useHoverAnimation();

  return (
    <motion.div {...hoverAnimation}>
      Hover me!
    </motion.div>
  );
}
```

---

## Creating Custom Variants

### Step 1: Create Variant Configuration

Create a new file: `src/lib/themes/variants/corporate.js`

```jsx
export const corporateVariant = {
  name: 'corporate',
  displayName: 'Corporate',
  description: 'Professional business design',

  palette: {
    mode: 'light',
    primary: {
      main: '#0066cc',    // Corporate blue
      light: '#3385d6',
      dark: '#004c99',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6600',    // Corporate orange
      light: '#ff8533',
      dark: '#cc5200',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },

  typography: {
    fontFamily: '"Source Sans Pro", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    // ... more typography
  },

  spacing: 8,

  shape: {
    borderRadius: 4,
  },

  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.1)',
    // ... more shadows
  ],

  custom: {
    animations: {
      intensity: 'medium',
      duration: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.5,
      },
    },
    effects: {
      glassEffect: false,
      gradients: false,
      particles: false,
      shadows: true,
    },
    spacing: {
      sectionPadding: '80px',
      cardPadding: '24px',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
      },
    },
    // ... more component overrides
  },
};
```

### Step 2: Register the Variant

Update `src/lib/contexts/StyleVariantContext.js`:

```jsx
import { corporateVariant } from '../themes/variants/corporate';

const variants = {
  modern: modernVariant,
  futuristic: futuristicVariant,
  minimal: minimalVariant,
  classic: classicVariant,
  elegant: elegantVariant,
  corporate: corporateVariant,  // Add your variant
};
```

### Step 3: Export from Themes Index

Update `src/lib/themes/index.js`:

```jsx
export { corporateVariant } from './variants/corporate';
```

### Step 4: Use Your Custom Variant

```jsx
<StyleVariantProvider defaultVariant="corporate">
```

---

## API Reference

### StyleVariantProvider

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | Required | Child components |
| defaultVariant | string | 'modern' | Initial variant |
| enablePersistence | boolean | true | Save to localStorage |

**Example:**
```jsx
<StyleVariantProvider defaultVariant="elegant" enablePersistence={true}>
  {children}
</StyleVariantProvider>
```

---

### useStyleVariant()

Returns an object with:

| Property | Type | Description |
|----------|------|-------------|
| currentVariant | string | Current variant name |
| setVariant | function | Change variant |
| availableVariants | array | List of all variants |
| theme | object | Current MUI theme |
| isFuturistic | boolean | Is futuristic variant active |
| isMinimal | boolean | Is minimal variant active |
| isModern | boolean | Is modern variant active |
| isClassic | boolean | Is classic variant active |
| isElegant | boolean | Is elegant variant active |
| animationIntensity | string | 'low', 'medium', or 'high' |
| animationDuration | object | { fast, normal, slow } |
| animationEasing | string | CSS easing function |
| hasGlassEffect | boolean | Glass effect enabled |
| hasGradients | boolean | Gradients enabled |
| hasParticles | boolean | Particles enabled |
| hasShadows | boolean | Shadows enabled |
| hasBlur | boolean | Blur enabled |
| hasNeonGlow | boolean | Neon glow enabled |
| hasScanlines | boolean | Scanlines enabled |
| customSpacing | object | Custom spacing values |
| variantName | string | Variant identifier |
| variantDisplayName | string | Display name |
| variantDescription | string | Description |

**Example:**
```jsx
const {
  currentVariant,
  setVariant,
  isFuturistic,
  hasParticles,
} = useStyleVariant();
```

---

### VariantSwitcher Component

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'button' | 'button' or 'icon' |
| buttonVariant | string | 'outlined' | MUI button variant |
| size | string | 'medium' | Button size |
| showDescription | boolean | false | Show variant descriptions |
| sx | object | {} | MUI sx styling |

**Examples:**
```jsx
// Full button
<VariantSwitcher variant="button" showDescription />

// Icon only
<VariantSwitcher variant="icon" size="small" />
```

---

### Variant Animation Hooks

#### useVariantAnimation(variantName)

Returns variant-aware animation configuration.

**Parameters:**
- `variantName` (string): Animation name ('fadeInUp', 'scaleIn', etc.)

**Returns:** Animation object for Framer Motion

**Example:**
```jsx
const animation = useVariantAnimation('fadeInUp');

<motion.div variants={animation}>...</motion.div>
```

#### useHoverAnimation()

Returns variant-aware hover animation.

**Example:**
```jsx
const hoverAnimation = useHoverAnimation();

<motion.div {...hoverAnimation}>Hover me</motion.div>
```

#### useAnimationDuration(speed)

Returns animation duration for current variant.

**Parameters:**
- `speed` (string): 'fast', 'normal', or 'slow'

**Returns:** Duration in seconds (number)

---

## Advanced Topics

### Server-Side Rendering Considerations

The variant system is client-side only. Use 'use client' directive:

```jsx
'use client';

import { useStyleVariant } from '@/lib/hooks/useStyleVariant';
```

### Performance Optimization

Variants are memoized and only re-render when changed:

```jsx
const theme = useMemo(() => {
  return createVariantTheme(variants[currentVariant]);
}, [currentVariant]);
```

### Listening to Variant Changes

```jsx
useEffect(() => {
  const handleChange = (event) => {
    console.log('Variant changed:', event.detail.variant);
  };

  window.addEventListener('styleVariantChange', handleChange);

  return () => {
    window.removeEventListener('styleVariantChange', handleChange);
  };
}, []);
```

### Accessing Raw Theme Object

```jsx
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();

  // Access any theme property
  console.log(theme.palette.primary.main);
  console.log(theme.custom.animations.intensity);
}
```

### Dynamic Font Loading

For custom fonts (like Orbitron for Futuristic), add to `layout.js`:

```jsx
import { Orbitron, Playfair_Display } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });
```

---

## Best Practices

### 1. Use Variant Checkers for Conditional Logic

```jsx
// ✅ Good
if (isFuturistic) {
  return <NeonButton />;
}

// ❌ Avoid
if (currentVariant === 'futuristic') {
  return <NeonButton />;
}
```

### 2. Leverage Custom Properties

```jsx
// ✅ Good - Uses variant's custom spacing
<Box sx={{ padding: theme.custom?.spacing?.cardPadding }}>

// ❌ Avoid - Hardcoded values
<Box sx={{ padding: '24px' }}>
```

### 3. Let Components Auto-Adapt

Most components will automatically adapt via theme. Only add variant-specific logic for truly unique features.

### 4. Use Variant-Aware Animations

```jsx
// ✅ Good - Adapts to variant intensity
const animation = useVariantAnimation('fadeInUp');

// ❌ Avoid - Static animation
const animation = { hidden: { opacity: 0, y: 40 }, ... };
```

### 5. Provide Fallbacks

```jsx
const intensity = theme.custom?.animations?.intensity || 'medium';
```

### 6. Test All Variants

Always test your components with all 5 variants to ensure proper adaptation.

---

## Troubleshooting

### Variant not persisting

Check `enablePersistence` is `true`:
```jsx
<StyleVariantProvider enablePersistence={true}>
```

### Hook error: "must be used within StyleVariantProvider"

Ensure `useStyleVariant()` is only used in client components under the provider.

### Animations not adapting

Make sure you're using variant-aware hooks:
```jsx
import { useVariantAnimation } from '@/lib/animations/variantAnimations';
```

### Custom properties undefined

Always provide fallbacks:
```jsx
const spacing = theme.custom?.spacing?.sectionPadding || '80px';
```

---

## Examples

### Complete Page with Variant Support

```jsx
'use client';

import { useStyleVariant } from '@/lib/hooks/useStyleVariant';
import { HeroSection, GridSection, CTABanner } from '@/lib/components';
import AnimatedBox from '@/lib/animations/AnimatedBox';

export default function HomePage() {
  const { isFuturistic, hasParticles, customSpacing } = useStyleVariant();

  return (
    <>
      {hasParticles && <ParticleBackground />}

      <AnimatedBox variant="fadeInUp">
        <HeroSection config={{ title: "Welcome" }} />
      </AnimatedBox>

      <section style={{ padding: customSpacing.sectionPadding }}>
        <GridSection config={{ items: [...] }} />
      </section>

      {isFuturistic && <NeonDivider />}

      <CTABanner config={{ title: "Get Started" }} />
    </>
  );
}
```

---

## Version

**System Version:** 1.0.0
**Last Updated:** 2024
**Compatible With:** Next.js 14, MUI v5, Framer Motion

---

**Made with ❤️ for the Next.js MUI Boilerplate**

For more information, see the [main documentation](./README.md).
