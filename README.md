# Next.js + MUI Boilerplate

A comprehensive, production-ready Next.js boilerplate with Material-UI (MUI), featuring 60+ reusable components, dark mode support, SEO optimization, and a config-driven architecture.

Perfect for quickly bootstrapping modern web applications with a professional foundation.

---

## 📋 Quick Setup Checklist

After cloning this template, customize it for your project:

1. **Update package.json**: Change `name`, `description`, and `repository` URL
2. **Configure site settings**: Edit `content/site.config.js` with your company info
3. **Customize theme**: Update `content/theme.config.js` with your brand colors and logo
4. **Update navigation**: Modify `content/navigation.config.js` with your menu structure
5. **Replace content**: Update all section configs in `content/sections/`
6. **Add your images**: Replace placeholder images in `/public` with your own
7. **Set up environment**: Create `.env.local` with your environment variables

See detailed instructions in the [Usage Guide](#-usage-guide) section below.

---

## ✨ Features

### 📦 **60+ Production-Ready Components**
- **8 Utility Components**: Container, Section, Badge, Chip, Avatar, Icon, Divider, ThemeToggle
- **5 Hero Variants**: Full-screen, Split, Video, Carousel, CTA Banner
- **8 Content Sections**: About, Grid, Services, Footer, Stats Counter, Testimonials
- **4 Form Components**: TextField, TextArea, ContactForm, NewsletterSignup (with React Hook Form + Zod validation)
- **4 Interactive Components**: Modal, ConfirmModal, Drawer, FilterDrawer
- **8 Feedback Components**: Loading states, Error boundaries, 404/500 pages
- **2 SEO Components**: SEOHead, StructuredData (with 7 schema.org helpers)
- Plus: Blog, FAQ, Team, Pricing, Media components

### ⚙️ **Config-Driven Architecture**
- All content separated into `/content` configuration files
- Easy to update without touching code
- Ready for CMS integration (Payload CMS planned)

### 🌙 **Dark Mode Built-in**
- Full dark/light theme system
- Theme persistence with localStorage
- Smooth theme transitions
- ThemeToggle component included

### 🔍 **SEO Optimized**
- Open Graph meta tags
- Twitter Cards
- JSON-LD structured data (Organization, LocalBusiness, Product, Article, Event, FAQ, Breadcrumbs)
- Canonical URLs and robots meta

### 📱 **Fully Responsive**
- Mobile-first design
- MUI breakpoints (xs, sm, md, lg, xl)
- Responsive navigation with hamburger menu

### ⚡ **Performance Features**
- Next.js 14+ App Router
- Server-side rendering
- Optimized font loading (Roboto from Google Fonts)
- Code splitting ready

### 🎨 **Material-UI Integration**
- MUI v5 components
- Customizable theme system
- Styled components with `styled()` API
- Responsive grid system

### 🛠️ **Developer Experience**
- TypeScript-ready (currently JavaScript)
- 7 custom hooks (useMediaQuery, useScrollSpy, useIntersectionObserver, useLocalStorage, useDebounce, useCountUp, useThemeMode)
- Clear project structure
- Comprehensive error handling

---

## 📁 Project Structure

```
your-project/
├── content/                    # 📝 Content Layer (business-specific)
│   ├── site.config.js         # Site metadata, contact, social
│   ├── theme.config.js        # Brand colors, fonts, logo
│   ├── navigation.config.js   # Menu structure
│   ├── sections/              # Section content configs
│   │   ├── hero.config.js
│   │   ├── services.config.js
│   │   ├── whyChooseUs.config.js
│   │   ├── footer.config.js
│   │   ├── contact.config.js
│   │   ├── cta.config.js
│   │   ├── testimonials.config.js
│   │   ├── stats.config.js
│   │   └── about.config.js
│   ├── pages/                 # Page compositions
│   │   ├── home.config.js
│   │   ├── about.config.js
│   │   ├── expeditions.config.js
│   │   └── contact.config.js
│   └── services/              # Service detail configs
│       └── servicesDetail.config.js
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.js          # Root layout with theme
│   │   ├── page.js            # Home page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── expeditions/       # Expeditions page
│   │   ├── services/[slug]/   # Dynamic service pages
│   │   ├── not-found.js       # 404 error page
│   │   ├── error.js           # 500 error page
│   │   └── global-error.js    # Root error handler
│   │
│   └── lib/                   # 🔧 Boilerplate Layer (reusable)
│       ├── components/        # All components
│       │   ├── utility/       # Container, Section, Badge, etc.
│       │   ├── hero/          # Hero variants
│       │   ├── content/       # Content sections
│       │   ├── navigation/    # AppBar, Footer
│       │   ├── forms/         # Form components
│       │   ├── social-proof/  # Testimonials
│       │   ├── team/          # Team components
│       │   ├── pricing/       # Pricing tables
│       │   ├── blog/          # Blog components
│       │   ├── faq/           # FAQ accordion
│       │   ├── media/         # Gallery, Carousel, Video
│       │   ├── seo/           # SEO components
│       │   ├── interactive/   # Modal, Drawer
│       │   └── feedback/      # Loading, Error components
│       ├── theme/             # Theme system
│       │   ├── createAppTheme.js
│       │   ├── ThemeProvider.js
│       │   └── themeDefaults.js
│       ├── hooks/             # Custom React hooks
│       │   ├── useMediaQuery.js
│       │   ├── useScrollSpy.js
│       │   ├── useIntersectionObserver.js
│       │   ├── useLocalStorage.js
│       │   ├── useDebounce.js
│       │   └── useCountUp.js
│       └── utils/             # Utility functions
│           └── validation.js  # Zod schemas
│
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-mui-boilerplate.git
cd nextjs-mui-boilerplate

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📖 Usage Guide

### 1. **Updating Content**

All content is in the `/content` directory. To customize for your project:

**Site Information:**
```javascript
// content/site.config.js
export const siteConfig = {
  name: "Your Site Name",
  tagline: "Your Tagline",
  description: "Your description",
  contact: {
    email: "your@email.com",
    phone: "+1234567890"
  }
};
```

**Theme/Branding:**
```javascript
// content/theme.config.js
export const themeConfig = {
  colors: {
    primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0' },
    secondary: { main: '#dc004e', light: '#e33371', dark: '#9a0036' }
  }
};
```

### 2. **Using Components**

All components are exported from `@/lib/components`:

```javascript
import { HeroSection, Container, Modal, SEOHead } from '@/lib/components';

export default function MyPage() {
  return (
    <>
      <SEOHead config={{
        title: "My Page",
        description: "Page description",
        ogImage: "/image.jpg"
      }} />

      <Container>
        <HeroSection config={heroConfig} />
      </Container>
    </>
  );
}
```

### 3. **Dark Mode**

**Enable in layout.js:**
```javascript
import { ThemeProvider } from '@/lib/theme';
import { themeConfig } from '@/content/theme.config';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider themeConfig={themeConfig} defaultMode="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Add toggle button:**
```javascript
import { ThemeToggle } from '@/lib/components';

<AppBar>
  <ThemeToggle />
</AppBar>
```

### 4. **Forms with Validation**

```javascript
import { ContactForm } from '@/lib/components';

const contactConfig = {
  title: "Get in Touch",
  submitEndpoint: "/api/contact",
  variant: "card" // 'inline', 'section', 'card'
};

<ContactForm config={contactConfig} />
```

Custom validation:
```javascript
// src/lib/utils/validation.js
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});
```

### 5. **SEO Setup**

**Page-level SEO:**
```javascript
import { SEOHead } from '@/lib/components';

<SEOHead config={{
  title: "Page Title",
  description: "Page description",
  keywords: "keyword1, keyword2",
  ogImage: "/og-image.jpg",
  ogUrl: "https://yoursite.com/page",
  canonical: "https://yoursite.com/page"
}} />
```

**Structured Data:**
```javascript
import { StructuredData, generateOrganizationSchema } from '@/lib/components';

const orgSchema = generateOrganizationSchema({
  name: "Your Company",
  url: "https://yoursite.com",
  logo: "https://yoursite.com/logo.png",
  description: "Company description"
});

<StructuredData config={orgSchema} />
```

### 6. **Custom Hooks**

```javascript
import { useThemeMode, useMediaQuery, useCountUp } from '@/lib/hooks';

function MyComponent() {
  const { mode, toggleTheme } = useThemeMode();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const count = useCountUp(1000, 2000, true);

  return <div>Count: {count}</div>;
}
```

---

## 🎨 Component Variants

Many components support multiple visual variants:

### Hero Components
- `HeroSection` - Full-screen hero with CTA
- `HeroSplit` - Split layout (image + content)
- `HeroVideo` - Video background
- `HeroCarousel` - Rotating hero slides
- `CTABanner` - Call-to-action (gradient, solid, outlined, image)

### Modal Sizes
```javascript
<Modal size="small|medium|large|fullscreen" />
```

### Loading Variants
```javascript
<Loading variant="spinner|linear|skeleton|overlay|dots" />
```

### Form Variants
```javascript
<ContactForm variant="inline|section|card" />
<NewsletterSignup variant="inline|centered|card" />
```

---

## 📚 API Reference

### Key Components

#### SEOHead
```javascript
<SEOHead config={{
  title: string,
  description: string,
  keywords: string,
  ogTitle?: string,
  ogDescription?: string,
  ogImage?: string,
  ogUrl?: string,
  ogType?: 'website' | 'article',
  twitterCard?: 'summary' | 'summary_large_image',
  canonical?: string,
  robots?: string,
  alternateLanguages?: Array<{hrefLang: string, href: string}>
}} />
```

#### Modal
```javascript
<Modal
  open={boolean}
  onClose={() => void}
  title={string}
  size="small|medium|large|fullscreen"
  variant="default|centered|side"
  showCloseButton={boolean}
  closeOnBackdropClick={boolean}
>
  {children}
</Modal>
```

#### ThemeProvider
```javascript
<ThemeProvider
  themeConfig={themeConfig}
  defaultMode="light|dark"
  storageKey="theme-mode"
>
  {children}
</ThemeProvider>
```

---

## 🧪 Testing

```bash
# Run tests (setup in progress)
npm test

# Run tests in watch mode
npm test -- --watch
```

---

## 📦 Dependencies

### Core
- **next**: ^14.0.0
- **react**: ^18.0.0
- **@mui/material**: ^5.14.0
- **@emotion/react**: ^11.11.0
- **@emotion/styled**: ^11.11.0

### Forms & Validation
- **react-hook-form**: ^7.48.0
- **zod**: ^3.22.0
- **@hookform/resolvers**: ^3.3.0

### Icons
- **@mui/icons-material**: ^5.14.0

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_API_URL=https://api.yoursite.com
```

### Theme Customization

Edit `content/theme.config.js` to customize colors, fonts, and spacing:

```javascript
export const themeConfig = {
  colors: {
    primary: { main: '#yourcolor', light: '#...', dark: '#...' },
    secondary: { main: '#yourcolor', light: '#...', dark: '#...' }
  },
  typography: {
    fontFamily: 'Roboto' // or your custom font
  },
  layout: {
    maxWidth: 'lg', // xs, sm, md, lg, xl
    spacing: 8
  }
};
```

---

## 🗺️ Roadmap

- [x] **Phase 1-3**: Foundation, Core Components, Testing
- [x] **Phase 4**: Pages & Dynamic Routes
- [x] **Phase 5-10**: All Section Components (Hero, Content, Forms, Blog, FAQ, Team, Pricing, Media)
- [x] **Phase 11**: Advanced Features (SEO, Interactive, Feedback, Dark Mode, Error Pages)
- [ ] **Phase 12**: Final Polish & Optimization
  - [ ] Performance optimization
  - [ ] Accessibility audit
  - [ ] Comprehensive documentation
  - [ ] Component testing
- [ ] **Phase 13**: CMS Integration
  - [ ] Payload CMS setup
  - [ ] Content migration to CMS
  - [ ] Admin dashboard

---

## 📄 License

MIT License - feel free to use this boilerplate for your projects.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Material-UI](https://mui.com/)
- Form validation with [Zod](https://zod.dev/) and [React Hook Form](https://react-hook-form.com/)

---

## 💬 Support

For questions or issues, please open an issue on GitHub or contact the team.

---

**Built with ❤️ for developers who want to ship fast**
