# Quick Start Guide

## 🚀 Immediate Next Steps

### 1. Add Your Images

The site is ready but needs images. Add your venue photos to `/public/images/`:

**Required images:**
```
/public/images/
├── hero.jpg                  # Home page hero (1920x1080px)
├── about-hero.jpg           # About page hero (1920x1080px)
├── about-preview.jpg        # About preview on home (800x800px)
├── history.jpg              # History section (1200x900px)
├── venue-hero.jpg           # Venue page hero (1920x1080px)
├── venue-main.jpg           # Main hall photo (800x600px)
├── venue-gallery.jpg        # Gallery space (800x600px)
├── venue-lounge.jpg         # Lounge area (800x600px)
├── venue-terrace.jpg        # Outdoor terrace (800x600px)
├── venue-stage.jpg          # Performance stage (800x600px)
├── venue-backstage.jpg      # Backstage facilities (800x600px)
├── events-hero.jpg          # Events page hero (1920x1080px)
├── event-1.jpg through event-6.jpg  # Event images (1200x900px)
├── gallery-1.jpg through gallery-3.jpg  # Featured gallery (800x1000px)
└── contact-hero.jpg         # Contact page hero (1920x1080px)
```

### 2. Customize Branding

**Update colors** in `tailwind.config.ts`:
- Change `brand` colors for your neutral palette
- Change `accent` colors for your highlight color

**Update text content**:
- Logo: `components/layout/Header.tsx` (line 20)
- Site name: `app/layout.tsx` (line 14)
- Footer text: `components/layout/Footer.tsx`
- All page content in respective `/app/**/page.tsx` files

### 3. Set Up Contact Form

Choose a contact form service:

**Option A: Formspree** (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update `app/contact/page.tsx`:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option B: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Follow EmailJS React documentation to integrate

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (auto-configured for Next.js)
5. Add custom domain in Vercel settings

## 📝 Content Checklist

- [ ] Replace all placeholder images
- [ ] Update site name and logo
- [ ] Customize color scheme
- [ ] Update About page content
- [ ] Add real venue specifications
- [ ] Update contact information
- [ ] Add real event data
- [ ] Set up contact form service
- [ ] Update footer social media links
- [ ] Configure SEO metadata

## 🎨 Customization

### Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  brand: { /* Your neutral colors */ },
  accent: { /* Your highlight colors */ }
}
```

### Typography

Global styles are in `app/globals.css`. Utility classes:
- `heading-xl`, `heading-lg`, `heading-md`, `heading-sm`
- `body-lg`, `body-md`
- `section-padding`, `container-width`

### Components

All components in `/components/` are customizable:
- **Hero**: Height, overlay, content
- **Section**: Background, spacing
- **ImageGrid**: Columns, gaps, aspect ratios
- **Button**: Variants, sizes

## 🔧 Common Tasks

### Add a New Page

1. Create `/app/new-page/page.tsx`
2. Add route to Header: `components/layout/Header.tsx`
3. Add metadata for SEO

### Change Layout

Edit `app/layout.tsx` for global layout changes.

### Add Analytics

1. Get Google Analytics ID
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add GA script to `app/layout.tsx`

### Modify Menu

Edit navigation array in `components/layout/Header.tsx`:
```typescript
const navigation = [
  { name: "Home", href: "/" },
  // Add more items
];
```

## 📦 Build & Deploy

**Development:**
```bash
npm run dev
```

**Production build:**
```bash
npm run build
```

**Preview production:**
```bash
npm run start
```

## 🆘 Troubleshooting

**Images not showing:**
- Check file paths match exactly (case-sensitive)
- Ensure images are in `/public/images/`

**Build fails:**
- Run `npm run lint` to check for errors
- Fix any TypeScript or ESLint issues

**Styling issues:**
- Clear `.next` cache: `rm -rf .next`
- Rebuild: `npm run build`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
