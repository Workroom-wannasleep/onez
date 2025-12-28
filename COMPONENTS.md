# Component Documentation

## Layout Components

### Header (`components/layout/Header.tsx`)

Responsive navigation header with mobile menu.

**Features:**
- Fixed position with backdrop blur
- Active route highlighting
- Mobile hamburger menu
- Smooth transitions

**Customization:**
```tsx
// Update navigation items
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // Add more...
];

// Update logo text (line 20)
<Link href="/" className="...">
  YOUR LOGO
</Link>
```

---

### Footer (`components/layout/Footer.tsx`)

Three-column footer with links and contact info.

**Features:**
- Quick links section
- Contact information
- Social media icons
- Responsive grid layout

**Customization:**
```tsx
// Update contact info (lines 50-60)
// Update social links (lines 65+)
// Modify link structure in Quick Links section
```

---

## UI Components

### Hero (`components/ui/Hero.tsx`)

Full-width hero section with background image and overlay.

**Props:**
- `title` (string, required) - Main heading
- `subtitle` (string, optional) - Subheading text
- `imageSrc` (string, required) - Background image path
- `imageAlt` (string, required) - Image alt text
- `height` ("small" | "medium" | "large" | "full", default: "large")
- `overlay` (boolean, default: true) - Dark gradient overlay
- `children` (ReactNode, optional) - Additional content (CTAs, etc.)

**Usage:**
```tsx
<Hero
  title="Welcome"
  subtitle="Discover something amazing"
  imageSrc="/images/hero.jpg"
  imageAlt="Hero image"
  height="full"
>
  <Button href="/events">View Events</Button>
</Hero>
```

---

### Section (`components/ui/Section.tsx`)

Wrapper component for page sections with consistent spacing.

**Props:**
- `children` (ReactNode, required) - Section content
- `background` ("dark" | "darker" | "accent", default: "dark")
- `spacing` ("small" | "medium" | "large", default: "large")
- `className` (string, optional) - Additional classes

**Usage:**
```tsx
<Section spacing="large" background="darker">
  <h2>Section Title</h2>
  <p>Content...</p>
</Section>
```

**Spacing values:**
- Small: `py-12 px-6`
- Medium: `py-16 px-6 md:py-20`
- Large: `py-16 px-6 md:py-24 lg:py-32`

---

### ImageGrid (`components/ui/ImageGrid.tsx`)

Responsive grid of images with hover effects.

**Props:**
- `images` (ImageGridItem[], required) - Array of image objects
- `columns` (2 | 3 | 4, default: 3) - Number of columns
- `gap` ("small" | "medium" | "large", default: "medium")
- `aspectRatio` ("square" | "portrait" | "landscape", default: "square")

**ImageGridItem interface:**
```typescript
{
  src: string;         // Image path
  alt: string;         // Alt text
  title?: string;      // Optional overlay title
  description?: string; // Optional overlay description
}
```

**Usage:**
```tsx
const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Gallery image",
    title: "Event Name",
    description: "Event description"
  },
  // More images...
];

<ImageGrid
  images={images}
  columns={3}
  gap="large"
  aspectRatio="portrait"
/>
```

**Features:**
- Hover scale animation
- Optional overlay with title/description
- Responsive grid layout

---

### Button (`components/ui/Button.tsx`)

Versatile button component supporting links and click handlers.

**Props:**
- `children` (ReactNode, required) - Button text/content
- `href` (string, optional) - Link destination (renders as Link)
- `onClick` (function, optional) - Click handler (renders as button)
- `variant` ("primary" | "secondary" | "outline", default: "primary")
- `size` ("small" | "medium" | "large", default: "medium")
- `className` (string, optional) - Additional classes

**Usage:**
```tsx
// As a link
<Button href="/contact" variant="primary" size="large">
  Contact Us
</Button>

// As a button
<Button onClick={() => alert('Clicked!')} variant="secondary">
  Click Me
</Button>

// Outline variant
<Button href="/about" variant="outline">
  Learn More
</Button>
```

**Variants:**
- Primary: Accent background
- Secondary: Dark background
- Outline: Border only

**Sizes:**
- Small: `px-4 py-2 text-sm`
- Medium: `px-6 py-3 text-base`
- Large: `px-8 py-4 text-lg`

---

## Styling Utilities

Global utility classes defined in `app/globals.css`:

### Typography
```css
.heading-xl    /* 4xl-6xl, bold */
.heading-lg    /* 3xl-5xl, bold */
.heading-md    /* 2xl-4xl, semibold */
.heading-sm    /* xl-2xl, semibold */
.body-lg       /* lg-xl, relaxed */
.body-md       /* base-lg, relaxed */
```

### Layout
```css
.section-padding  /* py-16 px-6 md:py-24 lg:py-32 */
.container-width  /* max-w-7xl mx-auto */
```

---

## Creating New Components

### Pattern to Follow

```tsx
interface ComponentProps {
  // Define all props with types
  title: string;
  optional?: boolean;
  children?: React.ReactNode;
}

export default function Component({
  title,
  optional = false,
  children,
}: ComponentProps) {
  return (
    <div className="your-classes">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

### Best Practices

1. **TypeScript First**: Always define prop interfaces
2. **Default Values**: Provide sensible defaults
3. **Responsive**: Use Tailwind responsive classes (md:, lg:)
4. **Accessibility**: Include ARIA labels where needed
5. **Reusability**: Make components flexible with props
6. **Documentation**: Comment complex logic

---

## Component Composition Examples

### Landing Section
```tsx
<Section spacing="large" background="dark">
  <div className="text-center mb-16">
    <h2 className="heading-lg text-brand-50 mb-6">
      Section Title
    </h2>
    <p className="body-lg text-brand-200 max-w-3xl mx-auto">
      Description text
    </p>
  </div>

  <ImageGrid images={images} columns={3} />
</Section>
```

### Two-Column Content
```tsx
<Section spacing="large" background="darker">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="heading-md mb-6">Title</h2>
      <p className="body-md mb-6">Content...</p>
      <Button href="/link">CTA</Button>
    </div>
    <div className="aspect-square bg-brand-700">
      <img src="/path" alt="..." />
    </div>
  </div>
</Section>
```

### CTA Section
```tsx
<Section spacing="medium" background="accent">
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="heading-md mb-6">CTA Title</h2>
    <p className="body-md mb-8">Description...</p>
    <Button href="/action" variant="primary" size="large">
      Take Action
    </Button>
  </div>
</Section>
```

---

## Extending Components

### Adding New Props

```tsx
// Before
interface ButtonProps {
  variant?: "primary" | "secondary";
}

// After - add new variant
interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
}

// Add styling
const variantClasses = {
  primary: "bg-accent-500...",
  secondary: "bg-brand-700...",
  ghost: "bg-transparent border-2...", // New!
};
```

### Creating Variants

```tsx
// Create specialized version
import Section from "@/components/ui/Section";

export default function FeatureSection({ children }) {
  return (
    <Section spacing="large" background="darker">
      <div className="container-width">
        {children}
      </div>
    </Section>
  );
}
```

This keeps your code DRY while maintaining flexibility.
