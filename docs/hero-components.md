# Hero Components

Hero components are large, prominent sections typically placed at the top of a page to grab user attention.

## Table of Contents

- [HeroSection](#herosection)
- [HeroCarousel](#herocarousel)
- [HeroVideo](#herovideo)
- [HeroSplit](#herosplit)
- [CTABanner](#ctabanner)

---

## HeroSection

**Location:** `src/lib/components/hero/HeroSection/HeroSection.js`

Minimal, clean hero section with centered content and full viewport height.

### Usage

```jsx
import HeroSection from '@/lib/components/hero/HeroSection';

<HeroSection
  config={{
    title: "Welcome to Our Platform",
    subtitle: "Build amazing things with our modern boilerplate",
    cta: {
      text: "Get Started",
      href: "/signup"
    }
  }}
/>
```

### Config Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| title | string | Yes | Main heading text |
| subtitle | string | No | Subheading text |
| cta | object | No | Call-to-action button |
| cta.text | string | Yes (if cta) | Button text |
| cta.href | string | Yes (if cta) | Button link |

### Features

- Full viewport height (100vh minimum)
- Responsive typography with CSS clamp()
- Centered content layout
- White space focused design
- Smooth scroll animations

### Example

```jsx
<HeroSection
  config={{
    title: "Transform Your Business",
    subtitle: "Powerful tools for modern teams",
    cta: {
      text: "Start Free Trial",
      href: "/trial"
    }
  }}
/>
```

---

## HeroCarousel

**Location:** `src/lib/components/hero/HeroCarousel/HeroCarousel.js`

Rotating hero section with multiple slides, navigation, and auto-advance.

### Usage

```jsx
import HeroCarousel from '@/lib/components/hero/HeroCarousel';

<HeroCarousel
  config={{
    slides: [
      {
        title: "Slide 1",
        subtitle: "Description for slide 1",
        backgroundImage: "/images/slide1.jpg",
        ctaButton: {
          text: "Learn More",
          href: "/about"
        }
      },
      {
        title: "Slide 2",
        description: "Detailed description for slide 2",
        backgroundImage: "/images/slide2.jpg",
        ctaButton: {
          text: "Get Started",
          href: "/signup"
        }
      }
    ],
    autoplay: true,
    interval: 5000,
    showArrows: true,
    showIndicators: true,
    overlayOpacity: 0.4
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| slides | array | [] | Array of slide objects |
| autoplay | boolean | true | Auto-advance slides |
| interval | number | 5000 | Time between slides (ms) |
| showArrows | boolean | true | Show navigation arrows |
| showIndicators | boolean | true | Show dot indicators |
| overlayOpacity | number | 0.4 | Background overlay opacity |

### Slide Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| title | string | Yes | Slide heading |
| subtitle | string | No | Slide subheading |
| description | string | No | Longer text description |
| backgroundImage | string | Yes | Image URL |
| ctaButton | object | No | Primary CTA button |
| secondaryCTA | object | No | Secondary CTA button |

### Features

- Auto-rotating slides with configurable interval
- Navigation arrows for manual control
- Dot indicators showing current slide
- Smooth fade transitions
- Responsive image backgrounds
- Multiple CTA buttons per slide
- Customizable overlay opacity

---

## HeroVideo

**Location:** `src/lib/components/hero/HeroVideo/HeroVideo.js`

Hero section with video background and playback controls.

### Usage

```jsx
import HeroVideo from '@/lib/components/hero/HeroVideo';

<HeroVideo
  config={{
    title: "Experience Innovation",
    subtitle: "Watch our platform in action",
    videoUrl: "/videos/hero-video.mp4",
    posterImage: "/images/video-poster.jpg",
    autoplay: true,
    loop: true,
    muted: true,
    overlayOpacity: 0.5,
    ctaButton: {
      text: "Get Started",
      href: "/signup"
    },
    secondaryCTA: {
      text: "Watch Demo",
      href: "/demo"
    }
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Main heading |
| subtitle | string | - | Subheading |
| videoUrl | string | Required | Video file URL |
| posterImage | string | - | Placeholder image |
| autoplay | boolean | true | Auto-play video |
| loop | boolean | true | Loop video |
| muted | boolean | true | Mute audio |
| overlayOpacity | number | 0.5 | Overlay darkness (0-1) |
| ctaButton | object | - | Primary CTA |
| secondaryCTA | object | - | Secondary CTA |

### Features

- Full-screen video background
- Play/pause/mute controls
- Poster image placeholder
- Content overlay with opacity control
- Multiple CTA buttons
- Responsive video scaling
- Keyboard controls

### Best Practices

- Keep videos under 5MB for performance
- Use poster images for better initial load
- Provide muted autoplay for better UX
- Use MP4 format for broad browser support

---

## HeroSplit

**Location:** `src/lib/components/hero/HeroSplit/HeroSplit.js`

Split layout hero with image on one side and content on the other.

### Usage

```jsx
import HeroSplit from '@/lib/components/hero/HeroSplit';

<HeroSplit
  config={{
    title: "Build Faster",
    subtitle: "Modern Development",
    description: "Our boilerplate includes everything you need to start building production-ready applications.",
    image: "/images/hero-image.jpg",
    imagePosition: "right",
    ctaButton: {
      text: "Get Started",
      href: "/signup"
    },
    secondaryCTA: {
      text: "View Documentation",
      href: "/docs"
    },
    backgroundColor: "#f5f5f5"
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | Required | Main heading |
| subtitle | string | - | Subheading |
| description | string | - | Longer description text |
| image | string | Required | Image URL |
| imagePosition | 'left' \| 'right' | 'right' | Image placement |
| ctaButton | object | - | Primary CTA |
| secondaryCTA | object | - | Secondary CTA |
| backgroundColor | string | - | Background color |

### Features

- 50/50 split layout on desktop
- Configurable image position (left/right)
- Responsive stack on mobile
- Multiple CTA buttons
- Custom background colors
- Text content with heading hierarchy

### Layout

- Desktop: 6 columns for image, 6 for content
- Mobile: Stacked layout (image on top)
- Responsive grid using MUI Grid system

---

## CTABanner

**Location:** `src/lib/components/hero/CTABanner/CTABanner.js`

Call-to-action banner section for conversions and important announcements.

### Usage

```jsx
import CTABanner from '@/lib/components/hero/CTABanner';

<CTABanner
  config={{
    title: "Ready to Get Started?",
    description: "Join thousands of users already building with our platform.",
    primaryCTA: {
      text: "Start Free Trial",
      href: "/trial"
    },
    secondaryCTA: {
      text: "Contact Sales",
      href: "/contact"
    },
    variant: "solid",
    backgroundColor: "primary.main"
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | Required | Banner heading |
| description | string | - | Banner description |
| primaryCTA | object | - | Primary button |
| secondaryCTA | object | - | Secondary button |
| variant | 'solid' \| 'outlined' \| 'minimal' \| 'image' | 'solid' | Banner style |
| backgroundColor | string | 'primary.main' | Background color |

### Variants

**solid**: Full-width colored background
```jsx
<CTABanner
  config={{
    variant: "solid",
    backgroundColor: "primary.main"
  }}
/>
```

**outlined**: Border with transparent background
```jsx
<CTABanner
  config={{
    variant: "outlined"
  }}
/>
```

**minimal**: Clean, minimal styling
```jsx
<CTABanner
  config={{
    variant: "minimal"
  }}
/>
```

**image**: Background image support
```jsx
<CTABanner
  config={{
    variant: "image",
    backgroundImage: "/images/cta-bg.jpg"
  }}
/>
```

### Features

- Multiple style variants
- Full-width or contained layouts
- Support for multiple CTAs
- Customizable colors
- Responsive text sizing
- Background image support (image variant)

### Use Cases

- End of page conversion prompts
- Newsletter signups
- Product launch announcements
- Event registrations
- Free trial promotions
