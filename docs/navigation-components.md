# Navigation Components

Navigation components help users move through your application.

## Table of Contents

- [AppBar](#appbar)
- [FooterSection](#footersection)

---

## AppBar

**Location:** `src/lib/components/navigation/AppBar/AppBar.js`

Responsive navigation bar with logo, menu items, and mobile hamburger menu.

### Usage

```jsx
import AppBar from '@/lib/components/navigation/AppBar';

<AppBar
  brand={{
    name: "MyApp",
    logo: {
      icon: "rocket_launch",
      text: true
    }
  }}
  menuItems={[
    { label: "Home", href: "/", type: "link" },
    { label: "About", href: "/about", type: "link" },
    { label: "Services", href: "/services", type: "link" },
    { label: "Contact", href: "/contact", type: "link" }
  ]}
  themeColors={{
    background: "background.paper",
    text: "text.primary"
  }}
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| brand | object | Yes | Brand configuration |
| menuItems | array | Yes | Array of menu items |
| themeColors | object | No | Color customization |
| ctaButton | object | No | Call-to-action button configuration |
| hideOnScroll | boolean | No | Hide AppBar when scrolling down (default: false) |
| elevateOnScroll | boolean | No | Add elevation shadow on scroll (default: true) |

### Brand Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | string | Yes | Brand name |
| logo | object | No | Logo configuration |
| logo.icon | string | No | MUI icon name |
| logo.text | boolean | No | Show text with icon |

### Menu Item Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| label | string | Yes | Menu item label |
| href | string | Yes | Link destination |
| type | string | Yes | Item type (usually 'link') |

### Theme Colors Object

| Property | Type | Description |
|----------|------|-------------|
| background | string | AppBar background color |
| text | string | Text color |

### CTA Button Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| text | string | Yes | Button text |
| href | string | Yes | Button link destination |
| variant | 'contained' \| 'outlined' | No | Button style variant (default: 'contained') |

### Features

- **Responsive Design**: Desktop horizontal menu, mobile hamburger
- **Logo Support**: Icon-based logos with MUI icons
- **Smooth Scrolling**: Automatic smooth scroll to anchors
- **Mobile Menu**: Drawer-style mobile navigation
- **Theme Integration**: Supports theme colors
- **Dynamic Icons**: Icon resolution from MUI icons
- **CTA Button**: Optional call-to-action button (desktop + mobile)
- **Scroll Behavior**: Hide on scroll down / show on scroll up
- **Elevation on Scroll**: Optional shadow when scrolling

### Desktop Layout

- Horizontal menu bar
- Logo/brand on the left
- Menu items on the right
- Transparent background option

### Mobile Layout

- Hamburger menu button
- Slide-out drawer
- Stacked menu items
- Full-width mobile menu

### Example with Custom Theme

```jsx
<AppBar
  brand={{
    name: "TechCorp",
    logo: {
      icon: "computer",
      text: true
    }
  }}
  menuItems={[
    { label: "Products", href: "#products", type: "link" },
    { label: "Solutions", href: "#solutions", type: "link" },
    { label: "Pricing", href: "#pricing", type: "link" },
    { label: "Contact", href: "#contact", type: "link" }
  ]}
  themeColors={{
    background: "primary.main",
    text: "white"
  }}
/>
```

### Example with CTA Button and Scroll Behavior

```jsx
<AppBar
  brand={{
    name: "MyStartup",
    logo: {
      icon: "rocket_launch",
      text: true
    }
  }}
  menuItems={[
    { label: "Features", href: "#features", type: "link" },
    { label: "Pricing", href: "#pricing", type: "link" },
    { label: "About", href: "#about", type: "link" }
  ]}
  ctaButton={{
    text: "Get Started",
    href: "/signup",
    variant: "contained"
  }}
  hideOnScroll={true}
  elevateOnScroll={true}
/>
```

**Features shown in example:**
- CTA button appears on desktop menu bar and in mobile drawer
- AppBar hides when scrolling down
- AppBar shows when scrolling up
- Shadow/elevation added when page is scrolled

---

## FooterSection

**Location:** `src/lib/components/navigation/FooterSection/FooterSection.js`

Minimal clean footer with organized sections for links, contact info, and social media.

### Usage

```jsx
import FooterSection from '@/lib/components/navigation/FooterSection';

<FooterSection
  config={{
    brandName: "MyApp",
    brandDescription: "Building the future of web development",
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ],
    contactInfo: [
      { type: "social", label: "LinkedIn", href: "https://linkedin.com/company/myapp", icon: "linkedin" },
      { type: "social", label: "Twitter", href: "https://twitter.com/myapp", icon: "twitter" },
      { type: "contact", label: "hello@myapp.com", href: "mailto:hello@myapp.com", icon: "email" },
      { type: "contact", label: "+1 (555) 123-4567", href: "tel:+15551234567", icon: "phone" }
    ],
    location: "San Francisco, CA",
    copyrightText: "All rights reserved"
  }}
/>
```

### Config Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| brandName | string | Yes | Company/brand name |
| brandDescription | string | No | Short brand description |
| quickLinks | array | No | Array of link objects |
| contactInfo | array | No | Array of contact items |
| location | string | No | Physical location |
| copyrightText | string | No | Copyright text |

### Quick Link Object

| Property | Type | Description |
|----------|------|-------------|
| label | string | Link text |
| href | string | Link destination |

### Contact Info Object

| Property | Type | Description |
|----------|------|-------------|
| type | 'social' \| 'contact' | Contact type |
| label | string | Display text |
| href | string | Link URL |
| icon | string | MUI icon name |

### Features

- **Organized Sections**: Brand, quick links, contact info
- **Social Links**: Icons for social media
- **Contact Information**: Email and phone with icons
- **Dynamic Copyright**: Auto-updates year
- **Responsive Layout**: Stacks on mobile
- **Icon Support**: MUI icons for all links

### Layout Structure

The footer is divided into three main sections:

1. **Brand Section**: Company name and description
2. **Quick Links**: Navigation links
3. **Contact Section**: Social and contact information

### Example with Full Configuration

```jsx
<FooterSection
  config={{
    brandName: "TechStartup",
    brandDescription: "Innovation through technology",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ],
    contactInfo: [
      {
        type: "social",
        label: "Facebook",
        href: "https://facebook.com/techstartup",
        icon: "facebook"
      },
      {
        type: "social",
        label: "LinkedIn",
        href: "https://linkedin.com/company/techstartup",
        icon: "linkedin"
      },
      {
        type: "social",
        label: "Twitter",
        href: "https://twitter.com/techstartup",
        icon: "twitter"
      },
      {
        type: "contact",
        label: "info@techstartup.com",
        href: "mailto:info@techstartup.com",
        icon: "email"
      },
      {
        type: "contact",
        label: "+1 (800) 555-0123",
        href: "tel:+18005550123",
        icon: "phone"
      }
    ],
    location: "New York, NY",
    copyrightText: "All rights reserved. TechStartup Inc."
  }}
/>
```

### Styling

- Clean, minimal design
- Responsive grid layout
- Icon-based links with hover effects
- Copyright section with dynamic year
- Flexible spacing and typography
