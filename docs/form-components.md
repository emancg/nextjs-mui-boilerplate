# Form Components

Form components provide validated inputs and complete form solutions.

## Table of Contents

- [ContactForm](#contactform)
- [TextField](#textfield)
- [TextArea](#textarea)
- [NewsletterSignup](#newslettersignup)

---

## ContactForm

**Location:** `src/lib/components/forms/ContactForm/ContactForm.js`

Full-featured contact form with validation using React Hook Form and Zod.

### Usage

```jsx
import ContactForm from '@/lib/components/forms/ContactForm';

<ContactForm
  config={{
    title: "Get in Touch",
    description: "Have a question? We'd love to hear from you.",
    submitEndpoint: "/api/contact",
    showSubject: true,
    variant: "section",
    onSubmit: async (data) => {
      console.log("Form submitted:", data);
      // Custom submission logic
    }
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Form heading |
| description | string | - | Form description |
| submitEndpoint | string | - | API endpoint for submission |
| onSubmit | function | - | Custom submit handler |
| showSubject | boolean | false | Show subject field |
| variant | 'inline' \| 'section' \| 'card' \| 'with-map' | 'section' | Form style variant |
| mapConfig | object | - | Map configuration (for 'with-map' variant) |

### Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| name | text | Yes | Min 2 characters |
| email | email | Yes | Valid email format |
| phone | tel | No | Optional phone number |
| subject | text | Conditional | Required if showSubject=true |
| message | textarea | Yes | Min 10 characters |

### Map Config Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| embedUrl | string | - | Google Maps embed URL |
| address | string | - | Address text to display below map |
| position | 'left' \| 'right' | 'right' | Map position in layout |

### Variants

**section**: Full-width section layout
```jsx
<ContactForm
  config={{
    variant: "section",
    title: "Contact Us"
  }}
/>
```

**card**: Card-style with border and padding
```jsx
<ContactForm
  config={{
    variant: "card",
    title: "Send Message"
  }}
/>
```

**inline**: Compact inline layout
```jsx
<ContactForm
  config={{
    variant: "inline"
  }}
/>
```

**with-map**: Side-by-side layout with Google Maps embed
```jsx
<ContactForm
  config={{
    variant: "with-map",
    title: "Get in Touch",
    mapConfig: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18...",
      address: "350 5th Ave, New York, NY 10118, USA",
      position: "right" // or "left"
    }
  }}
/>
```

### Features

- **Validation**: Client-side validation with Zod schema
- **Error Messages**: Field-specific error display
- **Loading State**: Submit button loading indicator
- **Success Message**: Success feedback after submission
- **API Integration**: Automatic fetch to submitEndpoint
- **Custom Handler**: Support for custom onSubmit logic
- **React Hook Form**: Full React Hook Form integration
- **Map Integration**: Google Maps embed support (with-map variant)
- **Responsive Layout**: Form and map stack on mobile devices

### Form Data Structure

```typescript
{
  name: string,
  email: string,
  phone?: string,
  subject?: string,
  message: string
}
```

### API Endpoint Example

```javascript
// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body;

    // Process form data
    // Send email, save to database, etc.

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
```

### Getting Google Maps Embed URL

To use the `with-map` variant, you need a Google Maps embed URL:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click the "Share" button
4. Click the "Embed a map" tab
5. Copy the `src` URL from the iframe code
6. Use this URL in `mapConfig.embedUrl`

**Example URL format:**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.947...
```

**Full example:**
```jsx
<ContactForm
  config={{
    variant: "with-map",
    title: "Visit Our Office",
    description: "We'd love to meet you in person",
    mapConfig: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185368459395!3d40.74844097932881",
      address: "123 Main Street, New York, NY 10001",
      position: "right"
    },
    submitEndpoint: "/api/contact"
  }}
/>
```

### Map Position Options

**Map on right (default):**
```jsx
mapConfig: {
  position: "right"
}
```

**Map on left:**
```jsx
mapConfig: {
  position: "left"
}
```

---

## TextField

**Location:** `src/lib/components/forms/inputs/TextField/TextField.js`

Styled text input wrapper compatible with React Hook Form.

### Usage

```jsx
import TextField from '@/lib/components/forms/inputs/TextField';
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <form>
      <TextField
        label="Email"
        type="email"
        error={errors.email?.message}
        required
        {...register('email')}
      />
    </form>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Input label |
| error | string | - | Error message to display |
| required | boolean | false | Mark field as required |
| type | string | 'text' | Input type (text, email, tel, etc.) |
| placeholder | string | - | Placeholder text |
| ...rest | - | - | All other MUI TextField props |

### Features

- **React Hook Form Compatible**: Uses forwardRef
- **Full Width**: 100% width by default
- **Error Display**: Shows validation errors
- **Hover Animation**: Border color changes on hover
- **Required Indicator**: Asterisk for required fields
- **Consistent Styling**: Matches theme

### Supported Input Types

- `text` - Standard text input
- `email` - Email input with validation
- `password` - Password input (masked)
- `tel` - Telephone number
- `url` - URL input
- `number` - Numeric input
- `search` - Search input

---

## TextArea

**Location:** `src/lib/components/forms/inputs/TextArea/TextArea.js`

Multi-line text input wrapper for longer content.

### Usage

```jsx
import TextArea from '@/lib/components/forms/inputs/TextArea';
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, formState: { errors } } = useForm();

  return (
    <form>
      <TextArea
        label="Message"
        rows={4}
        maxRows={8}
        error={errors.message?.message}
        required
        placeholder="Enter your message..."
        {...register('message')}
      />
    </form>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Input label |
| error | string | - | Error message to display |
| required | boolean | false | Mark field as required |
| rows | number | 4 | Minimum number of rows |
| maxRows | number | - | Maximum rows before scrolling |
| placeholder | string | - | Placeholder text |
| ...rest | - | - | All other MUI TextField props |

### Features

- **Multiline**: Expandable text area
- **Auto-resize**: Grows with content (up to maxRows)
- **React Hook Form Compatible**: Uses forwardRef
- **Error Display**: Shows validation errors
- **Consistent Styling**: Matches TextField styling

---

## NewsletterSignup

**Location:** `src/lib/components/forms/NewsletterSignup/NewsletterSignup.js`

Email subscription form with validation.

### Usage

```jsx
import NewsletterSignup from '@/lib/components/forms/NewsletterSignup';

<NewsletterSignup
  config={{
    title: "Stay Updated",
    description: "Subscribe to our newsletter for the latest updates",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    submitEndpoint: "/api/newsletter",
    variant: "centered",
    onSubmit: async (data) => {
      console.log("Subscribed:", data.email);
    }
  }}
/>
```

### Config Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | - | Form heading |
| description | string | - | Form description |
| placeholder | string | 'Enter your email' | Input placeholder |
| buttonText | string | 'Subscribe' | Submit button text |
| submitEndpoint | string | - | API endpoint for submission |
| onSubmit | function | - | Custom submit handler |
| variant | 'inline' \| 'centered' \| 'card' | 'inline' | Form layout variant |

### Variants

**inline**: Horizontal input + button layout
```jsx
<NewsletterSignup
  config={{
    variant: "inline",
    title: "Newsletter"
  }}
/>
```

**centered**: Centered vertical layout
```jsx
<NewsletterSignup
  config={{
    variant: "centered",
    title: "Stay Connected"
  }}
/>
```

**card**: Card-style with padding and border
```jsx
<NewsletterSignup
  config={{
    variant: "card",
    title: "Get Updates"
  }}
/>
```

### Features

- **Email Validation**: Validates email format with Zod
- **React Hook Form**: Form state management
- **Success Message**: Shows confirmation after submission
- **Loading State**: Button loading indicator
- **Icon Integration**: Email icon in input field
- **API Integration**: Automatic POST to endpoint

### Form Data Structure

```typescript
{
  email: string
}
```

### API Endpoint Example

```javascript
// pages/api/newsletter.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Add to mailing list (Mailchimp, SendGrid, etc.)

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
```

### Use Cases

- Newsletter subscriptions
- Email list building
- Product updates signup
- Blog notifications
- Event announcements

---

## Form Validation

All form components use **Zod** for schema validation and **React Hook Form** for form state management.

### Example Zod Schema

```javascript
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters')
});
```

### Integration with React Hook Form

```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```
