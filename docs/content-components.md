# Content Components

Content components help you display information in various layouts and formats.

## Table of Contents

- [GridSection](#gridsection)
- [StatsCounter](#statscounter)
- [CallToActionSection](#calltoactionsection)
- [ContentSection](#contentsection)
- [AboutSection](#aboutsection)
- [ServicesSection](#servicessection)
- [LogoGrid](#logogrid)
- [Timeline](#timeline)

---

## GridSection

**Location:** `src/lib/components/content/GridSection/GridSection.js`

Clean grid display with icons and descriptions, perfect for features or services.

### Usage

```jsx
import GridSection from '@/lib/components/content/GridSection';

<GridSection
  config={{
    title: "Our Features",
    id: "features",
    layout: {
      columns: {
        md: 3
      }
    },
    items: [
      {
        icon: "speed",
        title: "Fast Performance",
        subtitle: "Optimized for speed",
        iconColor: "primary"
      },
      {
        icon: "security",
        title: "Secure",
        subtitle: "Enterprise-grade security",
        iconColor: "secondary"
      },
      {
        icon: "support",
        title: "24/7 Support",
        subtitle: "Always here to help",
        iconColor: "green"
      }
    ]
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Section heading |
| id | string | - | Section ID for anchors |
| variant | string | 'icon' | Display variant: 'icon', 'image', or 'card' |
| backgroundColor | string | '#FFFFFF' | Background color |
| layout.columns.md | number | 3 | Columns on desktop (2, 3, or 4) |
| items | array | [] | Array of grid items |

### Item Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| icon | string | Conditional | MUI icon name (required for 'icon' and 'card' variants) |
| image | string | Conditional | Image URL (required for 'image' variant) |
| title | string | Yes | Item heading |
| subtitle | string | Yes | Item description |
| iconColor | string | 'primary' | Icon color (primary, secondary, green, gold) - for icon variants |

### Variants

**icon** (default): Icons with circular background
```jsx
<GridSection
  config={{
    variant: "icon",
    items: [
      { icon: "Speed", title: "Fast", subtitle: "Lightning fast performance" }
    ]
  }}
/>
```

**image**: Images instead of icons
```jsx
<GridSection
  config={{
    variant: "image",
    items: [
      { image: "/images/service1.jpg", title: "Web Development", subtitle: "Custom solutions" }
    ]
  }}
/>
```

**card**: Cards with elevated styling and hover effects
```jsx
<GridSection
  config={{
    variant: "card",
    backgroundColor: "#f5f5f5",
    items: [
      { icon: "Security", title: "Secure", subtitle: "Enterprise-grade security" }
    ]
  }}
/>
```

### Features

- Responsive grid layout
- Icon support with custom colors
- Image variant for visual content
- Card variant with hover effects
- 2, 3, or 4 column layouts
- Mobile-friendly (2 cols on small screens)
- Automatic spacing and alignment
- Background color customization

---

## StatsCounter

**Location:** `src/lib/components/content/StatsCounter/StatsCounter.js`

Animated statistics/metrics display using count-up animation.

### Usage

```jsx
import StatsCounter from '@/lib/components/content/StatsCounter';

<StatsCounter
  config={{
    title: "Our Impact",
    animationDuration: 2000,
    layout: "grid",
    backgroundColor: "primary.main",
    stats: [
      {
        number: 10000,
        label: "Active Users",
        suffix: "+",
        icon: "people"
      },
      {
        number: 500,
        label: "Projects Completed",
        prefix: "",
        suffix: "+",
        icon: "work"
      },
      {
        number: 99,
        label: "Customer Satisfaction",
        suffix: "%",
        icon: "star"
      },
      {
        number: 24,
        label: "Support",
        suffix: "/7",
        icon: "support"
      }
    ]
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Section heading |
| stats | array | [] | Array of stat objects |
| animationDuration | number | 2000 | Animation duration (ms) |
| layout | 'row' \| 'grid' | 'grid' | Layout style |
| backgroundColor | string | - | Background color |

### Stat Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| number | number | Yes | Target number |
| label | string | Yes | Stat label/description |
| suffix | string | - | Text after number (e.g., '+', '%') |
| prefix | string | - | Text before number (e.g., '$') |
| icon | string | - | MUI icon name |

### Features

- Animated count-up using `useCountUp` hook
- Triggers on scroll visibility
- Supports prefix/suffix (%, +, $, etc.)
- Icon support
- Two layout options: row or grid
- Custom animation duration
- Background color customization

---

## CallToActionSection

**Location:** `src/lib/components/content/CallToActionSection/CallToActionSection.js`

Conversion-focused content section with multiple CTAs.

### Usage

```jsx
import CallToActionSection from '@/lib/components/content/CallToActionSection';

<CallToActionSection
  config={{
    title: "Ready to Transform Your Business?",
    subtitle: "Join thousands of satisfied customers today",
    id: "cta",
    buttons: [
      {
        text: "Get Started",
        href: "/signup",
        variant: "contained"
      },
      {
        text: "Learn More",
        href: "/about",
        variant: "outlined"
      }
    ],
    background: {
      color: "primary.main",
      image: "/images/cta-bg.jpg"
    }
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | Required | Main heading |
| subtitle | string | - | Subheading |
| id | string | - | Section ID |
| buttons | array | [] | Array of button objects |
| background | object | - | Background configuration |

### Background Object

| Property | Type | Description |
|----------|------|-------------|
| color | string | Background color |
| image | string | Background image URL |

### Button Object

| Property | Type | Description |
|----------|------|-------------|
| text | string | Button text |
| href | string | Button link |
| variant | 'contained' \| 'outlined' \| 'text' | Button style |

### Features

- Multiple button support
- Background image with overlay
- Text shadow for readability
- Hover effects
- Responsive text sizing
- Centered content layout

---

## ContentSection

**Location:** `src/lib/components/content/ContentSection/ContentSection.js`

Generic content display wrapper for flexible content layouts.

### Usage

```jsx
import ContentSection from '@/lib/components/content/ContentSection';

<ContentSection
  config={{
    title: "About Our Platform",
    content: "Rich content here..."
  }}
/>
```

### Features

- Flexible configuration
- Supports various content layouts
- Rich text support
- Custom content rendering

---

## AboutSection

**Location:** `src/lib/components/content/AboutSection/AboutSection.js`

Structured section for displaying company or product information.

### Usage

```jsx
import AboutSection from '@/lib/components/content/AboutSection';

<AboutSection
  config={{
    title: "About Us",
    description: "We are a team of passionate developers...",
    image: "/images/about-us.jpg"
  }}
/>
```

### Features

- Image and text layout options
- Structured organization information
- Responsive layout
- Multiple layout variants

---

## ServicesSection

**Location:** `src/lib/components/content/ServicesSection/ServicesSection.js`

Display services or product offerings in a grid layout.

### Usage

```jsx
import ServicesSection from '@/lib/components/content/ServicesSection';

<ServicesSection
  config={{
    title: "Our Services",
    services: [
      {
        title: "Web Development",
        description: "Custom web applications",
        image: "/images/service1.jpg"
      },
      {
        title: "Mobile Apps",
        description: "iOS and Android development",
        image: "/images/service2.jpg"
      }
    ]
  }}
/>
```

### Features

- Grid layout for service items
- Image, title, and description support
- Responsive design
- Hover effects

---

## LogoGrid

**Location:** `src/lib/components/content/LogoGrid/LogoGrid.js`

Display partner, client, or integration logos with automatic grayscale hover effect.

### Usage

```jsx
import LogoGrid from '@/lib/components/content/LogoGrid';

<LogoGrid
  config={{
    title: "Trusted by Industry Leaders",
    subtitle: "Our Partners",
    logos: [
      {
        src: "/logos/company1.png",
        alt: "Company 1",
        href: "https://company1.com"
      },
      {
        src: "/logos/company2.png",
        alt: "Company 2"
      },
      {
        src: "/logos/company3.png",
        alt: "Company 3",
        href: "https://company3.com"
      }
    ],
    columns: 4,
    grayscale: true,
    backgroundColor: "#f5f5f5"
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Section heading |
| subtitle | string | - | Section subtitle |
| logos | array | [] | Array of logo objects |
| columns | number | 4 | Number of columns (2-6) |
| grayscale | boolean | true | Apply grayscale filter |
| backgroundColor | string | - | Background color |

### Logo Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| src | string | Yes | Logo image URL |
| alt | string | No | Alt text for logo |
| href | string | No | Optional link URL |

### Features

- **Grayscale Hover Effect**: Logos are grayscale by default, color on hover
- **Responsive Grid**: Automatically adjusts for mobile (2 cols) and desktop
- **Optional Links**: Logos can be clickable with external links
- **Configurable Columns**: Support for 2, 3, 4, 5, or 6 column layouts
- **Theme Integration**: Works with light and dark themes
- **Scale on Hover**: Logos scale up slightly on hover

### Column Options

```jsx
// 6 logos per row
columns: 6

// 4 logos per row (default)
columns: 4

// 3 logos per row
columns: 3
```

### Disable Grayscale

```jsx
<LogoGrid
  config={{
    logos: [...],
    grayscale: false  // Show logos in full color
  }}
/>
```

---

## Timeline

**Location:** `src/lib/components/content/Timeline/Timeline.js`

Vertical timeline for displaying milestones, product roadmap, or company history.

### Usage

```jsx
import Timeline from '@/lib/components/content/Timeline';

<Timeline
  config={{
    title: "Our Journey",
    subtitle: "Company Milestones",
    variant: "default",
    items: [
      {
        date: "Q1 2024",
        title: "Product Launch",
        description: "Successfully launched version 1.0 to the public",
        icon: "RocketLaunch",
        status: "completed"
      },
      {
        date: "Q2 2024",
        title: "Mobile App Release",
        description: "Native mobile applications for iOS and Android",
        icon: "PhoneIphone",
        status: "current"
      },
      {
        date: "Q3 2024",
        title: "International Expansion",
        description: "Launching in 10 new countries",
        icon: "Public",
        status: "upcoming"
      }
    ]
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Section heading |
| subtitle | string | - | Section subtitle |
| items | array | [] | Array of timeline items |
| variant | 'default' \| 'alternating' | 'default' | Timeline layout |
| backgroundColor | string | - | Background color |

### Item Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| date | string | Yes | Date or time label |
| title | string | Yes | Milestone title |
| description | string | Yes | Milestone description |
| icon | string | No | MUI icon name |
| status | string | No | 'completed', 'current', 'upcoming' |

### Variants

**default**: Left-aligned timeline
```jsx
<Timeline config={{ variant: "default", items: [...] }} />
```

**alternating**: Alternating left/right layout (desktop only)
```jsx
<Timeline config={{ variant: "alternating", items: [...] }} />
```

### Status Colors

- **completed**: Green checkmark
- **current**: Blue (primary color)
- **upcoming**: Gray

### Features

- Vertical timeline with connecting line
- Status-based color coding
- Icon support for each milestone
- Status badges (Completed, In Progress, Upcoming)
- Hover effects on timeline items
- Responsive design (stacks on mobile)
- Alternating layout option for desktop
- Customizable background color
