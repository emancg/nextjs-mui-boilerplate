# Custom Hooks

This boilerplate includes 6 custom React hooks that provide reusable logic for common UI patterns.

## Table of Contents

- [useMediaQuery](#usemediaquery)
- [useScrollSpy](#usescrollspy)
- [useIntersectionObserver](#useintersectionobserver)
- [useLocalStorage](#uselocalstorage)
- [useDebounce](#usedebounce)
- [useCountUp](#usecountup)

---

## useMediaQuery

**Location:** `src/lib/hooks/useMediaQuery.js`

Responsive design hook to detect screen size changes and breakpoints.

### Usage

```jsx
import { useMediaQuery, useIsMobile, useIsTablet, useIsDesktop } from '@/lib/hooks/useMediaQuery';

function MyComponent() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  // Custom breakpoint
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

### API

**Parameters:**
- `query` (string): Media query string (e.g., '(max-width: 600px)')

**Returns:** boolean indicating if media query matches

### Predefined Hooks

- `useIsMobile()` - Detects mobile devices
- `useIsTablet()` - Detects tablet devices
- `useIsDesktop()` - Detects desktop devices

---

## useScrollSpy

**Location:** `src/lib/hooks/useScrollSpy.js`

Tracks which section is currently visible in the viewport, useful for highlighting active navigation items.

### Usage

```jsx
import { useScrollSpy } from '@/lib/hooks/useScrollSpy';

function Navigation() {
  const activeSection = useScrollSpy(['home', 'about', 'services', 'contact'], 100);

  return (
    <nav>
      <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
      <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
      <a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a>
      <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
    </nav>
  );
}
```

### API

**Parameters:**
- `sectionIds` (string[]): Array of section IDs to track
- `offset` (number): Offset from top in pixels (default: 0)

**Returns:** string - ID of the currently active section

---

## useIntersectionObserver

**Location:** `src/lib/hooks/useIntersectionObserver.js`

Detects when an element enters or exits the viewport using the Intersection Observer API.

### Usage

```jsx
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

function LazyImage({ src, alt }) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  return (
    <div ref={ref}>
      {isIntersecting && <img src={src} alt={alt} />}
    </div>
  );
}
```

### API

**Parameters:**
- `options` (object): Intersection Observer options
  - `threshold` (number | number[]): Visibility percentage to trigger (0-1)
  - `rootMargin` (string): Margin around root element
  - `root` (Element): Root element to observe relative to

**Returns:** [ref, isIntersecting, entry]
- `ref`: Ref to attach to the observed element
- `isIntersecting`: Boolean indicating if element is in viewport
- `entry`: IntersectionObserverEntry object

### Use Cases

- Lazy loading images
- Triggering scroll animations
- Infinite scroll pagination
- View tracking analytics

---

## useLocalStorage

**Location:** `src/lib/hooks/useLocalStorage.js`

Persists state in browser's localStorage with automatic JSON serialization.

### Usage

```jsx
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

function ThemePreference() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
```

### API

**Parameters:**
- `key` (string): localStorage key
- `initialValue` (any): Initial value if key doesn't exist

**Returns:** [storedValue, setValue]
- `storedValue`: Current value from localStorage
- `setValue`: Function to update the value

### Features

- Automatic JSON serialization/deserialization
- Handles localStorage errors gracefully
- Synchronizes across tabs/windows
- SSR-safe (checks for window object)

### Use Cases

- Theme persistence
- User preferences
- Form data persistence
- Shopping cart state
- Authentication tokens

---

## useDebounce

**Location:** `src/lib/hooks/useDebounce.js`

Debounces a value with a configurable delay, useful for optimizing expensive operations.

### Usage

```jsx
import { useDebounce } from '@/lib/hooks/useDebounce';
import { useState, useEffect } from 'react';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // API call with debounced value
      fetch(`/api/search?q=${debouncedSearchTerm}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### API

**Parameters:**
- `value` (any): Value to debounce
- `delay` (number): Delay in milliseconds (default: 500)

**Returns:** Debounced value

### Use Cases

- Search inputs
- API calls
- Form validation
- Resize handlers
- Scroll handlers

---

## useCountUp

**Location:** `src/lib/hooks/useCountUp.js`

Animates a number from 0 to a target value with an ease-out animation.

### Usage

```jsx
import { useCountUp } from '@/lib/hooks/useCountUp';

function StatCard({ label, value }) {
  const count = useCountUp(value, 2000, true);

  return (
    <div>
      <h2>{Math.floor(count)}</h2>
      <p>{label}</p>
    </div>
  );
}
```

### API

**Parameters:**
- `end` (number): Target number to count to
- `duration` (number): Animation duration in milliseconds (default: 2000)
- `start` (boolean): Whether to start the animation (default: false)

**Returns:** Current animated value (number)

### Features

- Ease-out animation function
- Configurable duration
- Can be triggered on scroll/visibility
- Supports decimals

### Use Cases

- Statistics counters
- Progress displays
- Achievement numbers
- Metric dashboards
