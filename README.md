# Venue Website

A modern, static branding website for a cultural venue built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

This is a clean, visual-first corporate website designed for a cultural venue/brand. The site features:

- **Static Site Generation (SSG)** - Fast, SEO-friendly pages
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Clean Architecture** - Easy to maintain and extend
- **No Backend** - Pure frontend static site
- **Vercel-Ready** - Optimized for deployment

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)
- **Forms:** External service (Formspree/EmailJS recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

Build the static site:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── venue/             # Venue page
│   ├── events/            # Events page
│   └── contact/           # Contact page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   └── ui/                # Reusable UI components
│       ├── Hero.tsx       # Hero section
│       ├── Section.tsx    # Section wrapper
│       ├── ImageGrid.tsx  # Image grid component
│       └── Button.tsx     # Button component
├── public/
│   └── images/            # Image assets
└── tailwind.config.ts     # Tailwind configuration
```

## Pages

- **Home (/)** - Hero with featured content and CTAs
- **About (/about)** - Mission, history, values, team
- **Venue (/venue)** - Facilities, specifications, amenities
- **Events (/events)** - Upcoming events calendar
- **Contact (/contact)** - Contact form and information

## Design System

### Colors

The site uses a neutral dark branding palette defined in `tailwind.config.ts`:

- **Brand colors:** `brand-50` to `brand-900` (neutral grays)
- **Accent colors:** `accent-50` to `accent-900` (warm gold/amber)

### Typography

- **Headings:** Custom utility classes (`heading-xl`, `heading-lg`, etc.)
- **Body text:** Responsive text sizes with generous line-height
- **Font:** Inter (system font stack)

### Components

All components are built with reusability and customization in mind:

- **Hero:** Configurable height, overlay, and content
- **Section:** Background and spacing variants
- **ImageGrid:** Flexible columns, gaps, and aspect ratios
- **Button:** Multiple variants and sizes

## Adding Images

1. Add your images to `/public/images/`
2. Reference them in components using `/images/filename.jpg`
3. See `/public/images/.gitkeep` for recommended image specifications

### Required Images

- Hero images for each page
- Gallery images for home page
- Event images for events page
- Venue photos for venue page

## Customization

### Branding

1. **Colors:** Edit `tailwind.config.ts` to change the color palette
2. **Logo:** Update the "VENUE" text in `components/layout/Header.tsx`
3. **Content:** Edit page content in respective files under `/app/`
4. **Metadata:** Update SEO info in `app/layout.tsx` and individual pages

### Contact Form Integration

The contact form in `/app/contact/page.tsx` is ready for integration:

**Option 1: Formspree**
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
```tsx
// Install: npm install @emailjs/browser
// Follow EmailJS React documentation
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Domain setup in Vercel dashboard

### Alternative Static Hosting

Since this is a static site (SSG), you can also deploy to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Build output is in `/out` directory after running `npm run build`.

## Performance

- Static generation for fast page loads
- Image optimization disabled (required for static export)
- Minimal JavaScript bundle
- No external dependencies for styling

## SEO

- Metadata configured in `layout.tsx` and individual pages
- Semantic HTML structure
- Descriptive alt text for images
- Clean URL structure

## Future Enhancements

Consider adding:

- CMS integration (Contentful, Sanity, etc.)
- Blog section
- Event ticket integration
- Image gallery lightbox
- Newsletter integration
- Analytics (Google Analytics, Plausible)
- Performance monitoring

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This is a freelance project. Update license information as needed.
