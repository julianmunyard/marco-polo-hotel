# Hotel Booking Website Clone

An exact clone of the hotel booking website architecture, built with Next.js 16, React 19, and Tailwind CSS.

## Features

### Layout Components
- **Header**: Sticky header with top bar, navigation menu, and booking widget
- **Navigation**: Responsive menu with mobile hamburger
- **Booking Widget**: Date picker, guest selection, and promo code input
- **Footer**: Quick links, contact info, gallery, and newsletter signup

### Page Sections
- **Hero Section**: Welcome message and value proposition
- **Rooms Section**: Filterable room listings (Deluxe/Standard)
- **Location Section**: Transport options and accessibility info
- **Features Section**: Icon-based feature grid with expandable descriptions
- **Gallery Section**: Image gallery with lightbox functionality
- **Offers Section**: Promotional pricing cards
- **Testimonials Section**: Customer review carousel
- **Info Grid Section**: Nearby amenities and services

### Routing
All pages from the original site:
- `/` - Homepage
- `/about-us-hotels-in-sydney` - About page
- `/sydney-attractions` - Attractions listing
- `/sydney-hotel-accommodation` - Room listings
- `/sydney-hotel-location` - Location details
- `/sydney-hotels-contact-us` - Contact information
- `/reviews` - Customer testimonials
- `/sydney-events` - Events calendar

### Key Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Room filtering by URL query params (`?room_type=deluxe`)
- ✅ External booking integration (redirects to booking system)
- ✅ Expandable content sections
- ✅ Image gallery with lightbox
- ✅ Testimonial carousel
- ✅ SEO-friendly URLs
- ✅ Accessible navigation (skip links, ARIA labels)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   └── [routes]/            # Additional pages
├── components/
│   ├── layout/              # Header, Footer, Navigation
│   ├── sections/            # Page sections
│   └── ui/                  # Reusable UI components
├── data/                    # Mock data files
└── public/                  # Static assets
```

## Technologies Used

- **Next.js 16.1.1** - React framework
- **React 19.2.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **CSS Modules** - Component styling

## Component Architecture

### Layout Components
- `Header.tsx` - Main header container
- `TopBar.tsx` - Contact info and social links
- `Navigation.tsx` - Main navigation menu
- `BookingWidget.tsx` - Booking form
- `Footer.tsx` - Footer with links and contact info

### UI Components
- `Button.tsx` - Reusable button component
- `RoomCard.tsx` - Room listing card
- `IconBox.tsx` - Feature icon box with expandable content
- `TestimonialCard.tsx` - Customer review card

### Section Components
- `HeroSection.tsx` - Welcome section
- `RoomsSection.tsx` - Room listings with filters
- `LocationSection.tsx` - Transport options
- `FeaturesSection.tsx` - Feature grid
- `GallerySection.tsx` - Image gallery
- `OffersSection.tsx` - Promotional offers
- `TestimonialsSection.tsx` - Review carousel
- `InfoGridSection.tsx` - Nearby amenities

## Data Structure

Mock data is organized in `/data`:
- `rooms.ts` - Room listings
- `testimonials.ts` - Customer reviews
- `features.ts` - Hotel features
- `offers.ts` - Promotional offers

## Styling

Uses Tailwind CSS with custom CSS variables for theming:
- Primary color: `#1863DC`
- Text color: `#212121`
- Responsive breakpoints: mobile-first approach

## Booking Integration

The booking widget redirects to an external booking system:
- URL: `https://bookings12.rmscloud.com/Search/Index/[ID]/`
- Parameters: check-in, check-out, guests, children, promo code

## License

This is a clone project for educational purposes.
