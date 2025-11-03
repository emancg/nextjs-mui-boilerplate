# Next.js MUI Boilerplate - Component Documentation

Welcome to the complete documentation for all reusable components in this Next.js Material-UI boilerplate.

## Overview

This boilerplate includes **70+ reusable components** organized into well-defined categories. All components are built with:

- **Material-UI (MUI) v5** - Component library and styling
- **Next.js 14** - React framework
- **React 18** - UI library
- **React Hook Form + Zod** - Form validation
- **Framer Motion** - Animation library
- **Emotion** - Styled components
- **MUI Icons** - Icon library

## Component Categories

### [Custom Hooks](./custom-hooks.md)

6 custom React hooks for common UI patterns:

- **useMediaQuery** - Responsive breakpoint detection
- **useScrollSpy** - Active section tracking for navigation
- **useIntersectionObserver** - Viewport visibility detection
- **useLocalStorage** - Persistent state management
- **useDebounce** - Value debouncing for performance
- **useCountUp** - Number animation effects

[View Custom Hooks Documentation →](./custom-hooks.md)

---

### [Utility Components](./utility-components.md)

9 fundamental UI building blocks:

- **Container** - Responsive max-width wrapper
- **Avatar** - User profile images/initials
- **Badge** - Notification indicators
- **Chip** - Tags and filters
- **Divider** - Visual separators
- **Icon** - Dynamic icon renderer
- **Section** - Styled section wrapper
- **ThemeToggle** - Light/dark mode switcher
- **VariantSwitcher** - Style variant switcher control

[View Utility Components Documentation →](./utility-components.md)

---

### [Hero Components](./hero-components.md)

5 hero section variants for impactful page headers:

- **HeroSection** - Minimal centered hero
- **HeroCarousel** - Rotating slides with navigation
- **HeroVideo** - Video background hero
- **HeroSplit** - Split layout (image + content)
- **CTABanner** - Call-to-action banner

[View Hero Components Documentation →](./hero-components.md)

---

### [Content Components](./content-components.md)

8 content display components:

- **GridSection** - Icon/image grid for features/services (icon, image, card variants)
- **StatsCounter** - Animated statistics display
- **CallToActionSection** - Conversion-focused section
- **ContentSection** - Generic content wrapper
- **AboutSection** - Company information section
- **ServicesSection** - Services grid display
- **LogoGrid** - Partner/client logo showcase with grayscale hover effect
- **Timeline** - Vertical timeline for milestones/roadmap/history

[View Content Components Documentation →](./content-components.md)

---

### [Navigation Components](./navigation-components.md)

2 essential navigation components:

- **AppBar** - Responsive navigation bar with mobile menu, CTA button, scroll hide/show
- **FooterSection** - Organized footer with links and contact info

[View Navigation Components Documentation →](./navigation-components.md)

---

### [Form Components](./form-components.md)

5 form components with validation:

- **ContactForm** - Full contact form with validation, map integration variant
- **TextField** - Styled text input
- **TextArea** - Multi-line text input
- **NewsletterSignup** - Email subscription form
- **FormInputs** - Additional input components

All forms use **React Hook Form** + **Zod** for validation.

[View Form Components Documentation →](./form-components.md)

---

### [Social Proof, Team & Pricing](./social-team-pricing-components.md)

6 components for trust and conversion:

**Social Proof:**
- **TestimonialCard** - Individual testimonial display
- **TestimonialsCarousel** - Rotating testimonials

**Team:**
- **TeamMemberCard** - Team member profile
- **TeamSection** - Full team grid

**Pricing:**
- **PricingCard** - Pricing plan card
- **PricingTable** - Pricing comparison grid

[View Social Proof, Team & Pricing Documentation →](./social-team-pricing-components.md)

---

### [Media, Interactive, Feedback & SEO](./media-interactive-seo-components.md)

18 components for media, interaction, feedback, and SEO:

**Blog:**
- **BlogCard** - Blog post preview
- **BlogGrid** - Blog posts grid with pagination

**FAQ:**
- **FAQAccordion** - Searchable Q&A accordion

**Media:**
- **ImageGallery** - Photo gallery with lightbox
- **ImageCarousel** - Rotating image carousel
- **VideoSection** - YouTube/Vimeo/MP4 video embed

**Interactive:**
- **Modal** - Dialog/modal component
- **Drawer** - Slide-out drawer/sidebar

**Feedback:**
- **Loading** - Multiple loading indicators
- **ErrorBoundary** - Error catching component
- **NotFound** - Beautiful 404 error page
- **EmptyState** - Generic empty state display
- **Maintenance** - Site maintenance page with countdown timer

**SEO:**
- **SEOHead** - Meta tags management
- **StructuredData** - JSON-LD structured data

[View Media, Interactive, Feedback & SEO Documentation →](./media-interactive-seo-components.md)

---

### [Animation System](./animations.md)

Complete Framer Motion integration with 15+ pre-built animation variants:

**Components:**
- **AnimatedBox** - Easy-to-use animation wrapper component
- **useScrollAnimation** - Custom hook for scroll-triggered animations

**Animation Variants:**
- **Fade**: fadeInUp, fadeInDown, fadeInLeft, fadeInRight, fadeIn
- **Slide**: slideInUp, slideInLeft, slideInRight
- **Scale**: scaleIn, zoomIn, rotateIn
- **Continuous**: float, pulse
- **Stagger**: staggerContainer for sequential animations
- **Hover**: cardHover, buttonHover

**Features:**
- Scroll-triggered animations
- Viewport detection
- Performance optimized
- 15+ pre-built variants
- Easy customization

[View Animation System Documentation →](./animations.md)

---

### [Style Variant System](./style-variants.md)

Flexible theming system that transforms your entire site's visual identity instantly:

**5 Built-in Variants:**
- **Modern** - Clean, contemporary design with vibrant colors
- **Futuristic** - High-tech cyberpunk with neon effects
- **Minimal** - Ultra-clean monochrome design
- **Classic** - Traditional timeless design with serif typography
- **Elegant** - Sophisticated luxurious design

**Components:**
- **StyleVariantProvider** - Global theme provider
- **useStyleVariant** - Hook to access/control variants
- **VariantSwitcher** - UI control for switching variants

**Features:**
- Instant site-wide transformation
- Persistent user preferences (localStorage)
- Auto-adapts all 70+ components
- Animation intensity adapts per variant
- MUI theme integration
- Framer Motion integration
- Custom properties per variant
- Extensible - create your own variants

**Quick Example:**
```jsx
import { StyleVariantProvider } from '@/lib/contexts/StyleVariantContext';
import { VariantSwitcher } from '@/lib/components/utility';

// Wrap your app
<StyleVariantProvider defaultVariant="modern">
  {children}
</StyleVariantProvider>

// Add switcher to navigation
<VariantSwitcher variant="button" showDescription />

// Use in components
const { currentVariant, isFuturistic, setVariant } = useStyleVariant();
```

[View Style Variant System Documentation →](./style-variants.md)

---

## Quick Start Guide

### Importing Components

All components can be imported from their respective paths:

```jsx
// Utility components
import Container from '@/lib/components/utility/Container';
import Avatar from '@/lib/components/utility/Avatar';

// Hero components
import HeroSection from '@/lib/components/hero/HeroSection';

// Form components
import ContactForm from '@/lib/components/forms/ContactForm';

// Custom hooks
import { useMediaQuery, useScrollSpy } from '@/lib/hooks';

// Animations
import AnimatedBox from '@/lib/animations/AnimatedBox';
import { useScrollAnimation } from '@/lib/animations';
```

### Component Usage Pattern

Most components follow a config-driven pattern:

```jsx
<ComponentName
  config={{
    title: "Title",
    description: "Description",
    // Other configuration options
  }}
/>
```

### Common Props

Many components share common props:

- `sx` - MUI sx prop for custom styling
- `variant` - Style variant (card, minimal, outlined, etc.)
- `size` - Size option (small, medium, large)
- `color` - Color option (primary, secondary, error, etc.)

---

## Design Patterns

### Config-Driven Components

Most components accept a `config` prop for easy customization:

```jsx
<HeroSection
  config={{
    title: "Welcome",
    subtitle: "Build amazing things",
    cta: { text: "Get Started", href: "/signup" }
  }}
/>
```

### Multiple Variants

Components typically offer multiple style variants:

```jsx
// Card variant
<TestimonialCard variant="card" testimonial={data} />

// Minimal variant
<TestimonialCard variant="minimal" testimonial={data} />

// Quote variant
<TestimonialCard variant="quote" testimonial={data} />
```

### Responsive Design

All components are responsive using MUI's breakpoint system:

- `xs` - Mobile (0px+)
- `sm` - Small tablets (600px+)
- `md` - Tablets (900px+)
- `lg` - Desktop (1200px+)
- `xl` - Large desktop (1536px+)

### Theme Integration

Components automatically integrate with your MUI theme:

```jsx
// Use theme colors
<Section backgroundColor="primary.main">
  Content
</Section>

// Theme-aware components
<ThemeToggle /> // Switches between light and dark modes
```

---

## Component Statistics

| Category | Count | Description |
|----------|-------|-------------|
| Custom Hooks | 6 | Reusable React hooks |
| Utility | 9 | Basic UI building blocks |
| Hero | 5 | Page header sections |
| Content | 8 | Content display layouts |
| Navigation | 2 | Navigation and footer |
| Forms | 5 | Form inputs and validation |
| Social Proof | 2 | Testimonials |
| Team | 2 | Team member displays |
| Pricing | 2 | Pricing plan displays |
| Blog | 2 | Blog post displays |
| FAQ | 1 | Q&A accordion |
| Media | 3 | Image/video displays |
| Interactive | 2 | Modals and drawers |
| Feedback | 5 | Loading, errors, 404, empty states, maintenance |
| SEO | 2 | Meta tags and structured data |
| Animations | 15+ | Animation variants and components |
| Style Variants | 5 | Complete theme presets (Modern, Futuristic, Minimal, Classic, Elegant) |
| **Total** | **70+** | **Complete component library with flexible theming** |

---

## Key Technologies

### Core Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Material-UI (MUI) v5** - Component library
- **Emotion** - CSS-in-JS styling

### Form Management

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Validation integration

### Animations

- **Framer Motion** - Production-ready animation library
- **Scroll-triggered animations** - Viewport detection
- **15+ pre-built variants** - Ready-to-use animations

### Icons & Design

- **@mui/icons-material** - 2000+ Material icons
- **MUI System** - Responsive design utilities

---

## Best Practices

### 1. Use Config Props

Always prefer the config prop pattern for complex components:

```jsx
// Good
<PricingCard
  config={{
    name: "Pro",
    price: 49,
    features: ["Feature 1", "Feature 2"]
  }}
/>

// Avoid
<PricingCard name="Pro" price={49} features={["Feature 1", "Feature 2"]} />
```

### 2. Leverage Custom Hooks

Use custom hooks for common patterns:

```jsx
// Responsive design
const isMobile = useIsMobile();

// Scroll tracking
const activeSection = useScrollSpy(['section1', 'section2']);

// Viewport detection
const [ref, isVisible] = useIntersectionObserver();

// Persisted state
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### 3. Form Validation

Always use Zod schemas with React Hook Form:

```jsx
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2)
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
});
```

### 4. SEO Optimization

Use SEO components on every page:

```jsx
import SEOHead from '@/lib/components/seo/SEOHead';
import StructuredData from '@/lib/components/seo/StructuredData';

export default function Page() {
  return (
    <>
      <SEOHead
        title="Page Title"
        description="Page description"
        image="/og-image.jpg"
      />
      <StructuredData
        type="Organization"
        data={{ name: "Company", url: "https://example.com" }}
      />
      {/* Page content */}
    </>
  );
}
```

### 5. Loading States

Always provide loading feedback:

```jsx
import { Loading, LoadingButton } from '@/lib/components/feedback/Loading';

// Page loading
{isLoading && <Loading variant="overlay" fullScreen />}

// Button loading
<LoadingButton loading={isSubmitting} onClick={handleSubmit}>
  Submit
</LoadingButton>
```

---

## File Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── utility/          # Basic UI components + VariantSwitcher
│   │   ├── hero/             # Hero sections
│   │   ├── content/          # Content displays
│   │   ├── navigation/       # Nav and footer
│   │   ├── forms/            # Form components
│   │   ├── social-proof/     # Testimonials
│   │   ├── team/             # Team displays
│   │   ├── pricing/          # Pricing displays
│   │   ├── blog/             # Blog components
│   │   ├── faq/              # FAQ accordion
│   │   ├── media/            # Image/video
│   │   ├── interactive/      # Modals/drawers
│   │   ├── feedback/         # Loading/errors/404/empty states
│   │   └── seo/              # SEO components
│   ├── themes/               # Style Variant System
│   │   ├── variants/         # Theme presets (modern, futuristic, minimal, classic, elegant)
│   │   ├── baseTheme.js      # Shared theme foundation
│   │   ├── createVariantTheme.js  # Theme builder
│   │   └── index.js          # Exports
│   ├── contexts/             # React contexts
│   │   └── StyleVariantContext.js  # Variant state management
│   ├── animations/           # Framer Motion animations
│   │   ├── AnimatedBox.js    # Animation wrapper component
│   │   ├── variants.js       # Pre-built animation variants
│   │   ├── variantAnimations.js  # Variant-aware animations
│   │   ├── useScrollAnimation.js  # Scroll animation hook
│   │   └── index.js          # Exports
│   └── hooks/                # Custom React hooks
│       ├── useStyleVariant.js  # Variant access hook
│       └── ...               # Other hooks
└── docs/                     # This documentation
```

---

## Contributing

When adding new components:

1. Follow the existing file structure
2. Use TypeScript or JSDoc for prop types
3. Create component documentation
4. Add usage examples
5. Include multiple variants when appropriate
6. Ensure responsive design
7. Test with both light and dark themes

---

## Support

For questions, issues, or contributions:

- Check individual component documentation
- Review usage examples
- Inspect component source code
- Test in development environment

---

## Version

**Boilerplate Version:** 2.0.0
**Last Updated:** 2024
**Coverage:** 100% of must-have requirements (42/42)

---

## License

This boilerplate and its components are available for use in your projects.

---

**Happy Building!** 🚀

Explore the individual documentation pages to learn more about each component category.
