# Project Structure

## Directory Organization

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── forms/          # Form components
│   ├── ui/             # Basic UI components (buttons, inputs, etc.)
│   └── sections/       # Page sections
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Contact.tsx     # Contact/booking page
│   └── Education.tsx   # Education page
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── assets/             # Static assets
│   └── images/         # Images and icons
├── index.css           # Global styles and Tailwind directives
└── main.tsx            # Application entry point
```

## Component Structure

### Layout Components
- `Header.tsx` - Navigation header
- `Footer.tsx` - Site footer
- `Layout.tsx` - Main layout wrapper

### Form Components
- `ContactForm.tsx` - Contact form
- `BookingForm.tsx` - Consultation booking form
- `AuditForm.tsx` - AI audit request form

### UI Components
- `Button.tsx` - Reusable button component
- `Input.tsx` - Form input component
- `Card.tsx` - Content card component
- `Modal.tsx` - Modal component

### Section Components
- `Hero.tsx` - Hero section
- `Services.tsx` - Services showcase
- `Testimonials.tsx` - Client testimonials
- `CTA.tsx` - Call-to-action sections

## Design System

### Colors (Monochrome Palette)
- `primary` - #000000 (Black)
- `secondary` - #ffffff (White)
- `accent` - #404040 (Dark Gray)
- `muted` - #808080 (Medium Gray)
- `light` - #f5f5f5 (Light Gray)

### Typography
- Font Family: Inter (Google Fonts)
- Font Weights: 100-900 available
- Clean, modern sans-serif aesthetic

### Components Classes
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.section-container` - Container with max-width and padding
- `.text-gradient` - Gradient text effect 