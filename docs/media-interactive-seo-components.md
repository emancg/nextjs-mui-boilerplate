# Media, Interactive, Feedback & SEO Components

Components for media display, user interaction, feedback, and search engine optimization.

## Table of Contents

### Blog
- [BlogCard](#blogcard)
- [BlogGrid](#bloggrid)

### FAQ
- [FAQAccordion](#faqaccordion)

### Media
- [ImageGallery](#imagegallery)
- [ImageCarousel](#imagecarousel)
- [VideoSection](#videosection)

### Interactive
- [Modal](#modal)
- [Drawer](#drawer)

### Feedback
- [Loading](#loading)
- [ErrorBoundary](#errorboundary)
- [NotFound](#notfound)
- [EmptyState](#emptystate)
- [Maintenance](#maintenance)

### SEO
- [SEOHead](#seohead)
- [StructuredData](#structureddata)

---

## Blog Components

### BlogCard

**Location:** `src/lib/components/blog/BlogCard/BlogCard.js`

Display blog post preview with metadata.

#### Usage

```jsx
import BlogCard from '@/lib/components/blog/BlogCard';

<BlogCard
  post={{
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    slug: "/blog/getting-started-nextjs",
    image: "/images/blog/nextjs.jpg",
    author: {
      name: "John Doe",
      avatar: "/images/authors/john.jpg"
    },
    date: "2024-01-15",
    category: "Tutorial",
    readTime: "5 min read"
  }}
  variant="card"
/>
```

#### Post Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| title | string | Yes | Post title |
| excerpt | string | Yes | Short description |
| slug | string | Yes | Post URL slug |
| image | string | No | Featured image URL |
| author | object | No | Author information |
| date | string | Yes | Publication date (ISO format) |
| category | string | No | Post category |
| readTime | string | No | Estimated read time |

#### Author Object

| Property | Type | Description |
|----------|------|-------------|
| name | string | Author name |
| avatar | string | Author photo URL |

#### Variants

**card**: Standard card with image on top
```jsx
<BlogCard variant="card" post={data} />
```

**list**: Horizontal list layout
```jsx
<BlogCard variant="list" post={data} />
```

**minimal**: Minimal text-focused layout
```jsx
<BlogCard variant="minimal" post={data} />
```

#### Features

- Category chip
- Author avatar
- Read time indicator
- Date formatting with locale support
- Image with object-fit
- Text truncation (ellipsis)
- Click to navigate to post

---

### BlogGrid

**Location:** `src/lib/components/blog/BlogGrid/BlogGrid.js`

Grid layout for multiple blog posts with optional pagination.

#### Usage

```jsx
import BlogGrid from '@/lib/components/blog/BlogGrid';

<BlogGrid
  config={{
    title: "Latest Articles",
    posts: [
      { title: "Post 1", excerpt: "...", slug: "/post-1", date: "2024-01-15" },
      { title: "Post 2", excerpt: "...", slug: "/post-2", date: "2024-01-14" }
    ],
    showPagination: true,
    postsPerPage: 9
  }}
/>
```

#### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Section heading |
| posts | array | [] | Array of blog posts |
| showPagination | boolean | false | Enable pagination |
| postsPerPage | number | 9 | Posts displayed per page |
| columns | number | 3 | Grid columns |
| variant | string | 'card' | Card variant for posts |

#### Features

- Responsive grid layout
- Multiple card variants support
- Automatic spacing
- **Pagination**: Automatic page splitting with navigation
- **Smooth Scrolling**: Auto-scroll to top on page change
- **Category Filtering**: Works with category filters
- **Page Controls**: First, previous, next, last buttons

#### Pagination Example

```jsx
<BlogGrid
  config={{
    title: "All Blog Posts",
    posts: allPosts, // Array of 50+ posts
    showPagination: true,
    postsPerPage: 6,
    columns: 3,
    variant: "card"
  }}
/>
```

---

## FAQ Component

### FAQAccordion

**Location:** `src/lib/components/faq/FAQAccordion/FAQAccordion.js`

Expandable question and answer accordion with search functionality.

#### Usage

```jsx
import FAQAccordion from '@/lib/components/faq/FAQAccordion';

<FAQAccordion
  config={{
    title: "Frequently Asked Questions",
    searchable: true,
    allowMultiple: false,
    variant: "outlined",
    faqs: [
      {
        question: "How do I get started?",
        answer: "Simply sign up for an account and follow our onboarding guide.",
        category: "Getting Started"
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers.",
        category: "Billing"
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes, you can cancel your subscription at any time with no penalties.",
        category: "Billing"
      }
    ]
  }}
/>
```

#### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Section heading |
| faqs | array | [] | Array of FAQ objects |
| allowMultiple | boolean | false | Allow multiple open accordions |
| searchable | boolean | false | Enable search functionality |
| variant | 'outlined' \| 'filled' \| 'minimal' | 'outlined' | Accordion style |

#### FAQ Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| question | string | Yes | The question text |
| answer | string | Yes | The answer text |
| category | string | No | FAQ category for grouping |

#### Variants

**outlined**: Border with transparent background
```jsx
<FAQAccordion config={{ variant: "outlined" }} />
```

**filled**: Solid background
```jsx
<FAQAccordion config={{ variant: "filled" }} />
```

**minimal**: Clean, minimal styling
```jsx
<FAQAccordion config={{ variant: "minimal" }} />
```

#### Features

- Search functionality with filtering
- Single or multiple accordion open modes
- Category support
- Search highlights matching questions/answers
- Smooth expand/collapse animations
- Keyboard navigation

---

## Media Components

### ImageGallery

**Location:** `src/lib/components/media/ImageGallery/ImageGallery.js`

Photo gallery with lightbox viewer.

#### Usage

```jsx
import ImageGallery from '@/lib/components/media/ImageGallery';

<ImageGallery
  config={{
    title: "Our Portfolio",
    layout: "grid",
    columns: 3,
    lightbox: true,
    images: [
      {
        src: "/images/gallery/image1.jpg",
        alt: "Project 1",
        caption: "Modern web design",
        category: "Web"
      },
      {
        src: "/images/gallery/image2.jpg",
        alt: "Project 2",
        caption: "Mobile app interface",
        category: "Mobile"
      }
    ]
  }}
/>
```

#### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Gallery heading |
| images | array | [] | Array of image objects |
| layout | 'grid' \| 'masonry' | 'grid' | Gallery layout |
| columns | 2 \| 3 \| 4 | 3 | Number of columns |
| lightbox | boolean | true | Enable lightbox viewer |

#### Image Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| src | string | Yes | Image URL |
| alt | string | Yes | Alt text |
| caption | string | No | Image caption |
| category | string | No | Image category |

#### Features

- Grid and masonry layouts
- Full-screen lightbox viewer
- Navigation arrows in lightbox
- Image captions
- Hover overlay effects
- Category filtering
- Responsive columns

---

### ImageCarousel

**Location:** `src/lib/components/media/ImageCarousel/ImageCarousel.js`

Rotating image carousel with controls.

#### Usage

```jsx
import ImageCarousel from '@/lib/components/media/ImageCarousel';

<ImageCarousel
  config={{
    images: [
      { src: "/images/slide1.jpg", alt: "Slide 1" },
      { src: "/images/slide2.jpg", alt: "Slide 2" }
    ],
    autoplay: true,
    interval: 4000
  }}
/>
```

#### Features

- Auto-advancing with controls
- Navigation arrows
- Dot indicators
- Configurable interval
- Smooth transitions

---

### VideoSection

**Location:** `src/lib/components/media/VideoSection/VideoSection.js`

Responsive video embed component supporting YouTube, Vimeo, and direct MP4.

#### Usage

```jsx
import VideoSection from '@/lib/components/media/VideoSection';

// YouTube
<VideoSection
  config={{
    title: "Product Demo",
    description: "Watch our product in action",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoType: "youtube",
    aspectRatio: "16/9",
    autoplay: false,
    controls: true
  }}
/>

// Direct MP4
<VideoSection
  config={{
    videoUrl: "/videos/demo.mp4",
    videoType: "mp4",
    controls: true
  }}
/>
```

#### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Section heading |
| description | string | - | Section description |
| videoUrl | string | Required | Video URL |
| videoType | 'youtube' \| 'vimeo' \| 'mp4' | auto-detected | Video type |
| aspectRatio | '16/9' \| '4/3' \| '1/1' | '16/9' | Video aspect ratio |
| autoplay | boolean | false | Auto-play video |
| controls | boolean | true | Show video controls |

#### Features

- YouTube, Vimeo, and MP4 support
- Auto-detection of video type
- Responsive aspect ratios
- Auto-generated embed URLs
- Shadow and border radius styling
- Full control over playback

---

## Interactive Components

### Modal

**Location:** `src/lib/components/interactive/Modal/Modal.js`

Reusable modal/dialog component with multiple variants.

#### Usage

```jsx
import Modal from '@/lib/components/interactive/Modal';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Modal Title"
        size="medium"
        showCloseButton={true}
        closeOnBackdropClick={true}
        variant="default"
      >
        <p>Modal content goes here...</p>
      </Modal>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | Required | Modal open state |
| onClose | function | Required | Close callback |
| children | node | Required | Modal content |
| title | string | - | Modal title |
| size | 'small' \| 'medium' \| 'large' \| 'fullscreen' | 'medium' | Modal size |
| showCloseButton | boolean | true | Show close button |
| closeOnBackdropClick | boolean | true | Close on backdrop click |
| variant | 'default' \| 'centered' \| 'side' | 'default' | Modal variant |
| sx | object | - | Custom styles |

#### Sizes

- `small`: 400px width
- `medium`: 600px width
- `large`: 900px width
- `fullscreen`: Full viewport

#### ConfirmModal Sub-component

```jsx
import { ConfirmModal } from '@/lib/components/interactive/Modal';

<ConfirmModal
  open={confirmOpen}
  onClose={() => setConfirmOpen(false)}
  onConfirm={handleConfirm}
  title="Confirm Action"
  message="Are you sure you want to proceed?"
  confirmText="Yes, proceed"
  cancelText="Cancel"
  confirmColor="error"
/>
```

#### Features

- Fade transitions
- Backdrop overlay
- Close button
- Multiple size options
- Configurable close behavior
- ConfirmModal for confirmations
- Keyboard support (ESC to close)

---

### Drawer

**Location:** `src/lib/components/interactive/Drawer/Drawer.js`

Slide-out drawer/sidebar panel.

#### Usage

```jsx
import Drawer from '@/lib/components/interactive/Drawer';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer</button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        side="right"
        width="400px"
        title="Drawer Title"
      >
        <p>Drawer content goes here...</p>
      </Drawer>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | Required | Drawer open state |
| onClose | function | Required | Close callback |
| side | 'left' \| 'right' \| 'top' \| 'bottom' | 'right' | Slide direction |
| width | string | '300px' | Drawer width (left/right) |
| children | node | Required | Drawer content |
| title | string | - | Drawer title |

#### Features

- Slide from any side
- Configurable width/height
- Close button and backdrop
- Smooth transitions

---

## Feedback Components

### Loading

**Location:** `src/lib/components/feedback/Loading/Loading.js`

Multiple loading state indicators.

#### Usage

```jsx
import Loading, { LoadingButton, PageLoader, ContentLoader }
  from '@/lib/components/feedback/Loading';

// Spinner
<Loading variant="spinner" size="large" text="Loading..." />

// Linear progress
<Loading variant="linear" />

// Skeleton
<Loading variant="skeleton" skeletonCount={3} />

// Full-screen overlay
<Loading variant="overlay" fullScreen />

// Dots
<Loading variant="dots" />

// Loading Button
<LoadingButton loading={isLoading} onClick={handleClick}>
  Submit
</LoadingButton>

// Page Loader
<PageLoader loading={isLoading} />

// Content Loader (Skeleton)
<ContentLoader variant="article" />
```

#### Variants

| Variant | Description |
|---------|-------------|
| spinner | Circular spinner |
| linear | Linear progress bar |
| skeleton | Skeleton placeholder |
| overlay | Full overlay with spinner |
| dots | Bouncing dots |

#### LoadingButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| loading | boolean | false | Loading state |
| children | node | Required | Button text |
| ...rest | - | - | All Button props |

#### Features

- Multiple loading variants
- LoadingButton component
- Full-page loading overlay
- Skeleton loaders
- Configurable sizes
- Loading text support

---

### ErrorBoundary

**Location:** `src/lib/components/feedback/ErrorBoundary/ErrorBoundary.js`

React error boundary for catching component errors.

#### Usage

```jsx
import ErrorBoundary from '@/lib/components/feedback/ErrorBoundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

#### Features

- Catches React component errors
- Displays fallback UI
- Error logging capability
- Prevents app crashes

---

### NotFound

**Location:** `src/lib/components/feedback/NotFound/NotFound.js`

Beautiful 404 error page with gradient background and animations.

#### Usage

```jsx
import { NotFound } from '@/lib/components';

// Basic usage
<NotFound />

// Custom usage
<NotFound
  title="Page Not Found"
  message="The page you're looking for doesn't exist."
  action={{
    text: "Contact Us",
    href: "/contact"
  }}
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'Page Not Found' | Error title |
| message | string | Default message | Error description |
| action | object | - | Optional secondary action button |
| action.text | string | - | Button text |
| action.href | string | - | Button link |

#### Features

- **Gradient Background**: Eye-catching gradient using theme colors
- **Large Error Code**: Prominent "404" display
- **Animated Icon**: Rotating error indicator icon
- **Primary Action**: "Go Home" button (always shown)
- **Secondary Action**: Optional custom button
- **Responsive Design**: Mobile-friendly layout
- **Theme Integration**: Matches your MUI theme

#### Page Usage

```jsx
// src/app/not-found.js
import { NotFound } from '@/lib/components';

export default function NotFoundPage() {
  return (
    <NotFound
      title="404 - Page Not Found"
      message="The page you're looking for doesn't exist or has been moved."
    />
  );
}
```

---

### EmptyState

**Location:** `src/lib/components/feedback/EmptyState/EmptyState.js`

Generic empty state display for when there's no data to show.

#### Usage

```jsx
import { EmptyState } from '@/lib/components';

// Basic usage
<EmptyState
  icon="InboxOutlined"
  title="No messages"
  description="You don't have any messages yet."
/>

// With action button
<EmptyState
  icon="FolderOffOutlined"
  title="No files found"
  description="Upload your first file to get started."
  action={{
    text: "Upload File",
    onClick: () => handleUpload()
  }}
  variant="card"
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | string | 'InboxOutlined' | MUI icon name |
| title | string | 'No data available' | Empty state title |
| description | string | Default message | Empty state description |
| action | object | - | Optional action button |
| action.text | string | - | Button text |
| action.onClick | function | - | Button click handler |
| action.href | string | - | Button link (alternative to onClick) |
| variant | string | 'default' | Display variant |
| sx | object | - | Custom MUI sx styling |

#### Variants

**default**: Clean, minimal styling
```jsx
<EmptyState variant="default" />
```

**minimal**: Extra compact version
```jsx
<EmptyState variant="minimal" />
```

**card**: Card-style with dashed border
```jsx
<EmptyState variant="card" />
```

#### Use Cases

- Empty tables or lists
- No search results
- Empty shopping carts
- No notifications
- Uninitialized states
- Deleted/cleared data

#### Features

- **Icon Support**: Any MUI icon
- **Customizable Text**: Title and description
- **Optional Action**: Button with onClick or href
- **Multiple Variants**: Different styling options
- **Theme Integration**: Uses theme colors
- **Responsive**: Works on all screen sizes

---

### Maintenance

**Location:** `src/lib/components/feedback/Maintenance/Maintenance.js`

Site maintenance page with optional countdown timer and animated rotating icon.

#### Usage

```jsx
import { Maintenance } from '@/lib/components';

// Basic usage
<Maintenance
  title="Site Under Maintenance"
  message="We're upgrading our systems. We'll be back soon!"
/>

// With countdown timer
<Maintenance
  title="Scheduled Maintenance"
  message="Our site is currently offline for scheduled maintenance."
  estimatedTime="2024-12-31T18:00:00"
  contactEmail="support@example.com"
  showRefresh={true}
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'Site Under Maintenance' | Page title |
| message | string | Default message | Description message |
| estimatedTime | Date \| string | - | Estimated completion time |
| showProgress | boolean | true | Show progress bar |
| contactEmail | string | - | Support email |
| showRefresh | boolean | true | Show refresh button |

#### Features

- **Animated Icon**: Rotating gear icon
- **Countdown Timer**: Live countdown to estimated completion (hours:minutes:seconds)
- **Progress Bar**: Loading progress indicator
- **Contact Support**: Email button
- **Refresh Button**: Manual page refresh option
- **Gradient Background**: Warning-themed gradient
- **Responsive**: Mobile-friendly design
- **Auto-Update**: Countdown updates every second

#### Countdown Timer

Displays remaining time in hours, minutes, and seconds:

```jsx
<Maintenance
  estimatedTime={new Date(Date.now() + 3600000)} // 1 hour from now
/>
```

Or with ISO date string:

```jsx
<Maintenance
  estimatedTime="2024-12-25T15:00:00"
  title="Holiday Maintenance"
  message="We're performing scheduled maintenance and will be back online soon."
/>
```

---

## SEO Components

### SEOHead

**Location:** `src/lib/components/seo/SEOHead/SEOHead.js`

Dynamic meta tag management for SEO.

#### Usage

```jsx
import SEOHead from '@/lib/components/seo/SEOHead';

<SEOHead
  title="Home | My Website"
  description="Welcome to my website. Discover amazing products and services."
  keywords="web development, react, next.js"
  author="John Doe"
  image="https://mywebsite.com/og-image.jpg"
  url="https://mywebsite.com"
  type="website"
/>
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| title | string | Page title |
| description | string | Meta description |
| keywords | string | Meta keywords |
| author | string | Content author |
| image | string | Open Graph image URL |
| url | string | Canonical URL |
| type | string | Open Graph type (website, article, etc.) |

#### Features

- Open Graph tags for social sharing
- Twitter card support
- Canonical URL
- Meta description and keywords
- Dynamic title management

---

### StructuredData

**Location:** `src/lib/components/seo/StructuredData/StructuredData.js`

JSON-LD structured data for search engines.

#### Usage

```jsx
import StructuredData from '@/lib/components/seo/StructuredData';

// Person schema
<StructuredData
  type="Person"
  data={{
    name: "John Doe",
    jobTitle: "Software Engineer",
    url: "https://johndoe.com",
    sameAs: [
      "https://twitter.com/johndoe",
      "https://linkedin.com/in/johndoe"
    ]
  }}
/>

// Organization schema
<StructuredData
  type="Organization"
  data={{
    name: "My Company",
    url: "https://mycompany.com",
    logo: "https://mycompany.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "Customer Service"
    }
  }}
/>

// Article schema
<StructuredData
  type="Article"
  data={{
    headline: "Article Title",
    author: {
      "@type": "Person",
      name: "John Doe"
    },
    datePublished: "2024-01-15",
    image: "https://example.com/article-image.jpg"
  }}
/>
```

#### Supported Schema Types

- **Person**: Individual profile
- **Organization**: Company/organization
- **Article**: Blog posts/articles
- **Product**: Product listings

#### Features

- JSON-LD format
- Multiple schema types
- Automatic script injection
- SEO-friendly markup
