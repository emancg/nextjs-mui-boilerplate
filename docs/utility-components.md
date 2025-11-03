# Utility Components

Utility components provide fundamental UI building blocks used throughout the application.

## Table of Contents

- [Container](#container)
- [Avatar](#avatar)
- [Badge](#badge)
- [Chip](#chip)
- [Divider](#divider)
- [Icon](#icon)
- [Section](#section)
- [ThemeToggle](#themetoggle)

---

## Container

**Location:** `src/lib/components/utility/Container/Container.js`

Responsive max-width content wrapper that centers content and adds padding.

### Usage

```jsx
import Container from '@/lib/components/utility/Container';

function MyPage() {
  return (
    <Container maxWidth="lg">
      <h1>Page Content</h1>
      <p>This content is centered and has responsive padding.</p>
    </Container>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| maxWidth | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| false | 'lg' | Maximum width of the container |
| disableGutters | boolean | false | Remove horizontal padding |
| sx | object | - | MUI sx prop for custom styling |
| children | node | - | Content to display |

### Max Width Values

- `xs`: 444px
- `sm`: 600px
- `md`: 900px
- `lg`: 1200px
- `xl`: 1536px
- `false`: No max-width constraint

---

## Avatar

**Location:** `src/lib/components/utility/Avatar/Avatar.js`

Display user profile images or initials fallback.

### Usage

```jsx
import Avatar from '@/lib/components/utility/Avatar';

// With image
<Avatar src="/images/user.jpg" alt="John Doe" />

// With initials
<Avatar>JD</Avatar>

// Different sizes
<Avatar size="small" src="/images/user.jpg" />
<Avatar size="large" src="/images/user.jpg" />

// Different variants
<Avatar variant="rounded" src="/images/user.jpg" />
<Avatar variant="square" src="/images/user.jpg" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | - | Image source URL |
| alt | string | - | Alt text for image |
| variant | 'circular' \| 'rounded' \| 'square' | 'circular' | Shape of the avatar |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Size of the avatar |
| children | node | - | Fallback content (e.g., initials) |
| sx | object | - | MUI sx prop for custom styling |

### Sizes

- `small`: 32px × 32px
- `medium`: 40px × 40px
- `large`: 56px × 56px

---

## Badge

**Location:** `src/lib/components/utility/Badge/Badge.js`

Small label or notification indicator that appears on top of another component.

### Usage

```jsx
import Badge from '@/lib/components/utility/Badge';
import { Icon } from '@mui/icons-material';

// Notification badge
<Badge badgeContent={4} color="error">
  <Icon>mail</Icon>
</Badge>

// Dot badge
<Badge variant="dot" color="success">
  <Icon>notifications</Icon>
</Badge>

// Max value
<Badge badgeContent={100} max={99} color="primary">
  <Icon>inbox</Icon>
</Badge>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| badgeContent | node | - | Content to display in badge |
| color | 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success' | 'primary' | Badge color |
| variant | 'standard' \| 'dot' | 'standard' | Badge variant |
| invisible | boolean | false | Hide the badge |
| max | number | 99 | Max number to display |
| anchorOrigin | object | - | Badge position configuration |
| children | node | - | Element to attach badge to |

### Anchor Origin

Position the badge using `anchorOrigin`:

```jsx
<Badge
  badgeContent={4}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right'
  }}
>
  <Icon>shopping_cart</Icon>
</Badge>
```

---

## Chip

**Location:** `src/lib/components/utility/Chip/Chip.js`

Compact element for tags, categories, or filters.

### Usage

```jsx
import Chip from '@/lib/components/utility/Chip';

// Basic chip
<Chip label="Tag" />

// With icon
<Chip label="Delete" icon="delete" onDelete={() => {}} />

// Clickable
<Chip label="Filter" onClick={() => {}} clickable />

// Different colors
<Chip label="Success" color="success" />
<Chip label="Warning" color="warning" variant="outlined" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Text to display |
| color | 'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success' | 'default' | Chip color |
| variant | 'filled' \| 'outlined' | 'filled' | Chip style variant |
| size | 'small' \| 'medium' | 'medium' | Chip size |
| icon | string \| node | - | Icon name (MUI icon) or element |
| onDelete | function | - | Callback for delete action |
| onClick | function | - | Callback for click action |
| clickable | boolean | false | Make chip clickable |

### Icon Support

Supports MUI icon names as strings:

```jsx
<Chip label="Home" icon="home" />
<Chip label="Star" icon="star" />
```

---

## Divider

**Location:** `src/lib/components/utility/Divider/Divider.js`

Visual separator line component.

### Usage

```jsx
import Divider from '@/lib/components/utility/Divider';

// Horizontal divider
<Divider />

// Vertical divider
<Divider orientation="vertical" />

// With text
<Divider textAlign="center">OR</Divider>
```

### Props

Accepts all MUI Divider props including:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | Divider orientation |
| textAlign | 'left' \| 'center' \| 'right' | 'center' | Text alignment for text dividers |
| sx | object | - | MUI sx prop for custom styling |

---

## Icon

**Location:** `src/lib/components/utility/Icon/Icon.js`

Dynamic MUI icon renderer that accepts icon names as strings.

### Usage

```jsx
import Icon from '@/lib/components/utility/Icon';

<Icon name="home" />
<Icon name="search" color="primary" />
<Icon name="settings" fontSize="large" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | - | MUI icon name (e.g., 'home', 'search') |
| color | string | - | Icon color |
| fontSize | 'small' \| 'medium' \| 'large' | 'medium' | Icon size |

### Available Icons

Uses @mui/icons-material. Common icons include:

- Navigation: `home`, `menu`, `arrow_back`, `arrow_forward`
- Actions: `search`, `settings`, `delete`, `edit`, `add`
- Communication: `mail`, `phone`, `message`, `chat`
- Social: `facebook`, `twitter`, `linkedin`, `instagram`
- Content: `content_copy`, `content_paste`, `save`, `print`

For a full list, see: [MUI Icons](https://mui.com/material-ui/material-icons/)

---

## Section

**Location:** `src/lib/components/utility/Section/Section.js`

Styled section wrapper with background options and spacing.

### Usage

```jsx
import Section from '@/lib/components/utility/Section';

// Basic section
<Section id="about">
  <h2>About Us</h2>
  <p>Content here...</p>
</Section>

// With background color
<Section backgroundColor="primary.main">
  <h2>Featured Section</h2>
</Section>

// With background image
<Section
  backgroundImage="/images/hero-bg.jpg"
  backgroundSize="cover"
>
  <h2>Hero Section</h2>
</Section>

// Custom padding
<Section padding="120px 0">
  <h2>Custom Spacing</h2>
</Section>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | Section ID for anchor linking |
| backgroundColor | string | - | Background color (theme color or hex) |
| backgroundImage | string | - | Background image URL |
| backgroundSize | string | 'cover' | CSS background-size value |
| padding | string | '80px 0' | Section padding |
| minHeight | string | - | Minimum section height |
| sx | object | - | MUI sx prop for custom styling |
| children | node | - | Section content |

### Background Blend Modes

Supports background images with color overlays through sx prop:

```jsx
<Section
  backgroundImage="/bg.jpg"
  sx={{
    backgroundBlendMode: 'multiply',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }}
>
  Content
</Section>
```

---

## ThemeToggle

**Location:** `src/lib/components/utility/ThemeToggle/ThemeToggle.js`

Toggle button for switching between light and dark themes.

### Usage

```jsx
import ThemeToggle from '@/lib/components/utility/ThemeToggle';

// In your navigation or settings
<ThemeToggle />

// Custom size
<ThemeToggle size="small" />

// Icon button variant
<ThemeToggle variant="icon" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'icon' \| 'text' | 'icon' | Button variant |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| sx | object | - | MUI sx prop for custom styling |

### Features

- Automatically uses `useThemeMode` hook
- Shows appropriate icon (sun/moon)
- Includes tooltip with current mode
- Persists theme preference in localStorage
- Smooth transitions between themes

### Theme Integration

Ensure your app is wrapped with the ThemeProvider:

```jsx
import { ThemeProvider } from '@/lib/theme/ThemeProvider';

function App({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```
