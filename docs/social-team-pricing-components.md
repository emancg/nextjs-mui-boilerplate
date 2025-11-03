# Social Proof, Team & Pricing Components

Components for displaying testimonials, team members, and pricing plans.

## Table of Contents

### Social Proof
- [TestimonialCard](#testimonialcard)
- [TestimonialsCarousel](#testimonialscarousel)

### Team
- [TeamMemberCard](#teammembercard)
- [TeamSection](#teamsection)

### Pricing
- [PricingCard](#pricingcard)
- [PricingTable](#pricingtable)

---

## Social Proof Components

### TestimonialCard

**Location:** `src/lib/components/social-proof/TestimonialCard/TestimonialCard.js`

Display individual customer testimonials with ratings and author information.

#### Usage

```jsx
import TestimonialCard from '@/lib/components/social-proof/TestimonialCard';

<TestimonialCard
  testimonial={{
    quote: "This product has transformed our business!",
    author: "John Doe",
    role: "CEO",
    company: "TechCorp",
    avatar: "/images/john.jpg",
    rating: 5
  }}
  variant="card"
/>
```

#### Testimonial Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| quote | string | Yes | Testimonial text |
| author | string | Yes | Author name |
| role | string | No | Author job title |
| company | string | No | Company name |
| avatar | string | No | Avatar image URL |
| rating | number | No | Star rating (1-5) |

#### Variants

**card**: Card with border and shadow
```jsx
<TestimonialCard variant="card" testimonial={data} />
```

**quote**: Large quote icon decoration
```jsx
<TestimonialCard variant="quote" testimonial={data} />
```

**minimal**: Clean, minimalist style
```jsx
<TestimonialCard variant="minimal" testimonial={data} />
```

#### Features

- Star rating display (1-5 stars)
- Avatar with initials fallback
- Quote icon decoration (quote variant)
- Author section with role and company
- Responsive typography
- Multiple style variants

---

### TestimonialsCarousel

**Location:** `src/lib/components/social-proof/TestimonialsCarousel/TestimonialsCarousel.js`

Auto-rotating carousel of multiple testimonials.

#### Usage

```jsx
import TestimonialsCarousel from '@/lib/components/social-proof/TestimonialsCarousel';

<TestimonialsCarousel
  config={{
    title: "What Our Customers Say",
    testimonials: [
      {
        quote: "Amazing service!",
        author: "Jane Smith",
        role: "Marketing Director",
        company: "StartupXYZ",
        rating: 5
      },
      {
        quote: "Highly recommended!",
        author: "Bob Johnson",
        role: "CTO",
        company: "DevCorp",
        rating: 5
      }
    ],
    autoplay: true,
    interval: 5000,
    showArrows: true,
    showIndicators: true
  }}
/>
```

#### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Section heading |
| testimonials | array | [] | Array of testimonial objects |
| autoplay | boolean | true | Auto-advance slides |
| interval | number | 5000 | Time between slides (ms) |
| showArrows | boolean | true | Show navigation arrows |
| showIndicators | boolean | true | Show dot indicators |

#### Features

- Auto-rotating with configurable interval
- Navigation arrows for manual control
- Dot indicators
- Responsive design
- Smooth transitions
- Grid/carousel layout options

---

## Team Components

### TeamMemberCard

**Location:** `src/lib/components/team/TeamMemberCard/TeamMemberCard.js`

Display individual team member information.

#### Usage

```jsx
import TeamMemberCard from '@/lib/components/team/TeamMemberCard';

<TeamMemberCard
  member={{
    name: "Sarah Johnson",
    role: "Lead Developer",
    bio: "10+ years of experience in web development",
    photo: "/images/sarah.jpg",
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahj",
      github: "https://github.com/sjohnson",
      email: "sarah@company.com"
    }
  }}
  variant="card"
/>
```

#### Member Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | string | Yes | Member name |
| role | string | Yes | Job title/role |
| bio | string | No | Short biography |
| photo | string | No | Photo URL |
| social | object | No | Social media links |

#### Social Object

| Property | Type | Description |
|----------|------|-------------|
| linkedin | string | LinkedIn profile URL |
| twitter | string | Twitter profile URL |
| github | string | GitHub profile URL |
| email | string | Email address |

#### Variants

**card**: Card with border and padding
```jsx
<TeamMemberCard variant="card" member={data} />
```

**overlay**: Image with overlay on hover
```jsx
<TeamMemberCard variant="overlay" member={data} />
```

**minimal**: Clean, minimal style
```jsx
<TeamMemberCard variant="minimal" member={data} />
```

#### Features

- Avatar-based image display
- Social media links (LinkedIn, Twitter, GitHub, Email)
- Hover effects (overlay fade-in)
- Multiple style variants
- Responsive design

---

### TeamSection

**Location:** `src/lib/components/team/TeamSection/TeamSection.js`

Display full team grid with multiple team members.

#### Usage

```jsx
import TeamSection from '@/lib/components/team/TeamSection';

<TeamSection
  config={{
    title: "Meet Our Team",
    description: "Talented individuals working together",
    members: [
      {
        name: "Sarah Johnson",
        role: "Lead Developer",
        photo: "/images/sarah.jpg",
        social: { linkedin: "...", github: "..." }
      },
      {
        name: "Mike Chen",
        role: "Designer",
        photo: "/images/mike.jpg",
        social: { twitter: "...", linkedin: "..." }
      }
      // More members...
    ]
  }}
/>
```

#### Features

- Responsive grid layout
- Multiple member cards
- Configurable member data
- Consistent spacing

---

## Pricing Components

### PricingCard

**Location:** `src/lib/components/pricing/PricingCard/PricingCard.js`

Display individual pricing plan with features and CTA.

#### Usage

```jsx
import PricingCard from '@/lib/components/pricing/PricingCard';

<PricingCard
  plan={{
    name: "Professional",
    price: 49,
    period: "month",
    currency: "$",
    description: "Perfect for growing teams",
    features: [
      "Up to 10 users",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations"
    ],
    cta: {
      text: "Get Started",
      href: "/signup?plan=pro"
    },
    highlighted: true
  }}
  variant="card"
/>
```

#### Plan Object Props

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| name | string | Yes | Plan name |
| price | number | Yes | Price amount |
| period | string | Yes | Billing period (month, year) |
| currency | string | Yes | Currency symbol ($, €, etc.) |
| description | string | No | Plan description |
| features | array | Yes | Array of feature strings |
| cta | object | Yes | Call-to-action button |
| highlighted | boolean | No | Highlight this plan |

#### CTA Object

| Property | Type | Description |
|----------|------|-------------|
| text | string | Button text |
| href | string | Button link |

#### Variants

**card**: Standard card style
```jsx
<PricingCard variant="card" plan={data} />
```

**bordered**: Card with prominent border
```jsx
<PricingCard variant="bordered" plan={data} />
```

**gradient**: Gradient background
```jsx
<PricingCard variant="gradient" plan={data} />
```

#### Features

- Checkmark feature list
- Popular/highlighted badge
- Price formatting with currency
- Multiple style variants
- Elevated styling for highlighted plans
- Feature list with icons
- Responsive design

#### Example with Multiple Plans

```jsx
<Grid container spacing={3}>
  <Grid item xs={12} md={4}>
    <PricingCard plan={basicPlan} />
  </Grid>
  <Grid item xs={12} md={4}>
    <PricingCard plan={proPlan} highlighted />
  </Grid>
  <Grid item xs={12} md={4}>
    <PricingCard plan={enterprisePlan} />
  </Grid>
</Grid>
```

---

### PricingTable

**Location:** `src/lib/components/pricing/PricingTable/PricingTable.js`

Display multiple pricing plans in a comparison grid.

#### Usage

```jsx
import PricingTable from '@/lib/components/pricing/PricingTable';

<PricingTable
  config={{
    title: "Choose Your Plan",
    description: "Select the perfect plan for your needs",
    plans: [
      {
        name: "Starter",
        price: 9,
        period: "month",
        features: ["Feature 1", "Feature 2"]
      },
      {
        name: "Pro",
        price: 49,
        period: "month",
        features: ["All Starter features", "Feature 3", "Feature 4"],
        highlighted: true
      },
      {
        name: "Enterprise",
        price: 99,
        period: "month",
        features: ["All Pro features", "Feature 5", "Feature 6"]
      }
    ]
  }}
/>
```

#### Features

- Multiple pricing cards in grid
- Comparison layout
- Feature matrix support
- Responsive grid layout
- Highlighted recommended plan
