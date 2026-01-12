# Architecture Map: Hotel Booking Website

## Core Technical Patterns & Hierarchy

### 1. NAVIGATION ARCHITECTURE

#### Header Structure (Top → Bottom)
```
┌─────────────────────────────────────────────────┐
│ Top Bar (stm-header__row_top)                   │
│  - Phone links (tel:)                           │
│  - Address link                                 │
│  - Social icons (Facebook, Instagram, TripAdvisor) │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ Center Bar (stm-header__row_center)             │
│  - Logo (centered, link to home)                │
│  - Navigation Menu (horizontal)                 │
│  - CTA Button ("Book Now" - external link)      │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ Booking Widget (sticky/embedded)                │
│  - Date picker (check-in/check-out)             │
│  - Guest selector                               │
│  - Promo code input                             │
│  - "Check Rates" button                         │
└─────────────────────────────────────────────────┘
```

#### Navigation Menu Items
- HOME (/)
- About Us (/about-us-hotels-in-sydney/)
- ATTRACTIONS (/sydney-attractions/)
- ACCOMMODATION (/sydney-hotel-accommodation/)
- Location (/sydney-hotel-location/)
- Contact Us (/sydney-hotels-contact-us/)
- REVIEWS (/reviews/)
- Sydney Events (/sydney-events/)

**Pattern**: Flat navigation structure, no nested dropdowns

---

### 2. COMPONENT HIERARCHY

#### Page Structure
```
stm-site (root container)
├── skip-link (accessibility)
├── site-header
│   ├── stm-header
│   │   ├── stm-header__row_top (top bar)
│   │   ├── stm-header__row_center (logo + nav)
│   │   └── stm-header__row_bottom (booking widget)
│   └── Navigation Menu
│
├── main#content
│   ├── Hero Section (RS Module/RevSlider)
│   ├── Room Selection Section
│   │   ├── Filter Tabs (Deluxe/Standard)
│   │   └── Room Cards Grid
│   │       ├── Room Image
│   │       ├── Room Title
│   │       ├── Room Details (capacity, bed type)
│   │       ├── Price Display
│   │       └── CTA Button
│   │
│   ├── Location Benefits Section
│   │   ├── Transport Options (Train, Bus, Light Rail)
│   │   └── Location Cards
│   │
│   ├── Features/Why Choose Section
│   │   ├── Feature Icons Grid
│   │   │   ├── Icon
│   │   │   ├── Title
│   │   │   └── "Read More" expandable content
│   │
│   ├── Gallery Section (Carousel)
│   │   ├── Image Grid
│   │   └── Navigation Controls (prev/next)
│   │
│   ├── Promotional Offers Section
│   │   ├── Offer Cards
│   │   │   ├── Heading (e.g., "Stay 3 Nights")
│   │   │   ├── Savings Badge ($15, $70, etc.)
│   │   │   └── CTA Link
│   │
│   ├── Customer Reviews Section (Testimonials)
│   │   ├── Review Cards (Carousel)
│   │   │   ├── Star Rating
│   │   │   ├── Review Text
│   │   │   ├── Avatar Image
│   │   │   └── Author Name
│   │
│   └── Information Grid Section
│       ├── Feature Icons with Headings
│       └── Map Embed
│
└── footer (contentinfo)
    ├── Quick Links (navigation)
    ├── Affiliate Hotel Section
    ├── Gallery Widget
    ├── Contact Information
    │   ├── Address
    │   ├── Phone Numbers
    │   └── Email
    └── Newsletter Signup
        └── Email Input + Submit Button
```

#### Key Component Patterns

**1. Booking Widget Component**
- **Location**: Sticky header or embedded in content
- **Fields**: 
  - Date range picker (check-in/check-out)
  - Guest counter
  - Children counter
  - Promo code input
- **Action**: External redirect to booking platform

**2. Room Card Component**
```typescript
interface RoomCard {
  type: 'deluxe' | 'standard';
  title: string;
  capacity: {
    guests: number;
    children?: number;
  };
  beds: string; // "1 Queen", "1 Queen + 1 Single"
  price: number;
  image: string;
  link: string;
}
```

**3. Feature Icon Component**
- Icon (font-based or SVG)
- Title (heading)
- Description (expandable via "Read More")
- Optional link/action

**4. Testimonial/Review Component**
- Star rating display (5 stars visual)
- Review text (truncated with ellipsis)
- Avatar image
- Author name
- Styling: Quote marks via pseudo-elements

**5. Gallery Component**
- Image grid/carousel
- Lightbox functionality (lightGallery library)
- Navigation controls
- Image counter ("1 of 18")

**6. Promotional Offer Card**
- Heading (h3)
- Savings badge (superscript/subscript styling)
- Call-to-action link

---

### 3. ROUTING ARCHITECTURE

#### URL Structure
```
/ (homepage)
├── /about-us-hotels-in-sydney/
├── /sydney-attractions/
├── /sydney-hotel-accommodation/
├── /sydney-hotel-location/
├── /sydney-hotels-contact-us/
├── /reviews/
├── /sydney-events/
├── /book-now-hotel-marco-polo-sydney-accommodation/
├── /hotel-accommodation-2/
├── /attractions/
├── /hotel-sydney-gift-voucher/
├── /contact-hotels-sydney/
├── /sydney-hotels-terms-and-conditions/
└── /privacy-policy/
```

#### Query Parameters
- `?room_type=deluxe` - Filters room display
- `?room_type=standard` - Filters room display

**Pattern**: Flat URL structure, SEO-friendly slugs, query params for filtering

#### External Routing
- Booking: External redirect to `bookings12.rmscloud.com` (third-party booking system)
- Booking button links are external URLs, not internal routes

---

### 4. STYLING ARCHITECTURE

#### CSS Architecture
**Framework**: Custom theme (hotello/hotello-child) with WPBakery Page Builder

**Naming Convention**: BEM-like with prefixes
- `stm-*` - Theme-specific components
- `stm-header__*` - Header components
- `stm-iconbox_*` - Icon box components
- `stm-testimonials_*` - Testimonial components
- `vc_*` - Visual Composer/WPBakery classes
- `owl-*` - Owl Carousel classes
- `lg-*` - lightGallery classes

#### Layout Patterns

**1. Container System**
```css
.container {
  max-width: 1200px; /* inferred */
  margin: 0 auto;
  padding: 0 15px;
}
```

**2. Grid System**
- Flexbox-based layouts
- CSS Grid for complex layouts
- Responsive breakpoints:
  - Mobile: < 550px
  - Tablet: < 768px
  - Desktop: > 768px

**3. Header Layout**
```css
stm-header {
  position: relative;
  width: 100%;
}

stm-header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

stm-header__cell_left,
stm-header__cell_center,
stm-header__cell_right {
  flex: 1;
}
```

**4. Component Styling Patterns**

**Button Component**
```css
.btn {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 2px;
  text-align: center;
  transition: all 0.3s ease;
}

.btn_primary {
  background-color: var(--primary-color);
  color: #fff;
}

.btn_icon-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
```

**Card Component**
```css
.card {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

**Icon Box Component**
```css
.stm-iconbox_style_1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.stm-iconbox__icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.stm-iconbox__text {
  width: 100%;
}
```

#### Color System
- Primary: #1863DC (blue)
- Secondary: #0056A7 (darker blue)
- Text: #212121 (dark gray)
- Background: #ffffff (white)
- Accent: Custom theme colors

#### Typography Hierarchy
- H1: 18-24px, bold
- H2: 18px, bold
- H3: 16px, bold
- Body: 14-16px, regular
- Small: 12-14px

#### Responsive Patterns
```css
/* Mobile-first approach */
@media (max-width: 550px) {
  .hidden-mobile { display: none; }
  .stm-header__row {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .hidden-tablet { display: none; }
}
```

---

### 5. INTERACTION PATTERNS

#### 1. Navigation Interactions
- **Mobile Menu**: Hamburger menu (implied, not visible in snapshot)
- **Smooth Scroll**: Skip to content link (#content anchor)
- **Active States**: Menu items likely highlight on current page

#### 2. Booking Widget Interaction
```javascript
// Pseudo-code pattern
bookingWidget.onSubmit(() => {
  const params = {
    checkin: datePicker.checkin,
    checkout: datePicker.checkout,
    guests: guestCounter.value,
    children: childrenCounter.value,
    promo: promoCodeInput.value
  };
  
  window.location.href = 
    `https://bookings12.rmscloud.com/Search/Index/${hotelId}/1/?${queryString}`;
});
```

#### 3. Room Filtering
```javascript
// URL-based filtering
const urlParams = new URLSearchParams(window.location.search);
const roomType = urlParams.get('room_type'); // 'deluxe' or 'standard'

// Filter display based on roomType
roomCards.filter(room => room.type === roomType);
```

#### 4. Expandable Content ("Read More")
- **Pattern**: Click to expand/collapse content
- **Implementation**: JavaScript toggle or CSS :target pseudo-class
- **Visual**: "Read More" link that expands inline content

#### 5. Gallery/Carousel Interactions
- **Library**: Owl Carousel
- **Controls**: 
  - Previous/Next arrows (visible on hover)
  - Dot pagination
  - Touch/swipe support
- **Lightbox**: lightGallery for full-screen image viewing

#### 6. Testimonials Carousel
- **Auto-play**: Possible (not confirmed)
- **Navigation**: Dot indicators
- **Layout**: Horizontal scroll with multiple items visible

#### 7. Form Interactions
- **Newsletter Signup**: 
  - Email validation
  - Submit button with icon
  - Inline form (no modal)
  
- **Promo Code Input**:
  - Inline in booking widget
  - Validation on submit

#### 8. Modal/Dialog Patterns
- **Cookie Consent**: Modal overlay (Cookie Law Info plugin)
- **Booking**: External redirect (no modal)
- **Gallery Lightbox**: Modal overlay for images

#### 9. Scroll Interactions
- **Sticky Header**: Header remains fixed on scroll (likely)
- **Scroll Reveal**: Possible animations on scroll (not confirmed)

#### 10. Hover States
- **Cards**: Lift/scale effect
- **Buttons**: Opacity change or background shift
- **Images**: Overlay effects
- **Links**: Color change/underline

---

### 6. DATA ARCHITECTURE

#### Content Structure

**Room Data**
```typescript
interface Room {
  id: string;
  type: 'deluxe' | 'standard';
  name: string;
  capacity: {
    adults: number;
    children?: number;
  };
  beds: string;
  price: number;
  image: string;
  amenities: string[];
}
```

**Testimonial Data**
```typescript
interface Testimonial {
  id: string;
  rating: number; // 1-5
  text: string;
  author: string;
  avatar?: string;
}
```

**Feature Data**
```typescript
interface Feature {
  id: string;
  icon: string; // Font icon class or SVG
  title: string;
  description: string;
  expandable?: boolean;
  link?: string;
}
```

**Offer Data**
```typescript
interface Offer {
  id: string;
  title: string;
  savings: number;
  savingsType: 'fixed' | 'per_night';
  conditions: string;
  link: string;
}
```

---

### 7. EXTERNAL INTEGRATIONS

#### Third-Party Services
1. **Booking System**: RMS Cloud (bookings12.rmscloud.com)
2. **Analytics**: Google Analytics (UA-54245378-1, G-2HBG976E4C)
3. **Ads**: Google Ads (AW-987801350)
4. **Tag Manager**: Google Tag Manager (GTM-WR5ND28)
5. **Cookie Consent**: Cookie Law Info plugin
6. **Popup Management**: MyPopUps
7. **Image Optimization**: WP Rocket (lazy loading, CDN)

#### Booking Flow
```
User Input → Booking Widget → External Redirect → 
RMS Cloud Booking Platform → Payment Processing
```

---

### 8. PERFORMANCE PATTERNS

#### Optimization Strategies
1. **Lazy Loading**: Images and scripts
2. **CDN**: Asset delivery
3. **Caching**: WP Rocket plugin
4. **Minification**: CSS/JS minification
5. **Image Optimization**: WebP format, responsive images
6. **Code Splitting**: Conditional script loading

#### Asset Loading
- **Critical CSS**: Inline in `<head>`
- **Non-critical CSS**: Deferred/async
- **JavaScript**: Deferred loading for non-critical scripts
- **Images**: Lazy loading with intersection observer

---

### 9. ACCESSIBILITY PATTERNS

#### Semantic HTML
- `<header>`, `<main>`, `<footer>`, `<nav>`
- `<article>`, `<section>`, `<aside>`
- Skip to content link
- ARIA labels on interactive elements

#### Keyboard Navigation
- Tab order: logical flow
- Focus indicators: visible outlines
- Skip links: skip repetitive content

#### Screen Reader Support
- Alt text on images
- Semantic headings (h1-h6 hierarchy)
- ARIA attributes where needed

---

### 10. RECOMMENDED IMPLEMENTATION APPROACH

#### For Next.js/React Clone

**Component Structure**
```
components/
├── Header/
│   ├── TopBar.tsx
│   ├── Navigation.tsx
│   ├── Logo.tsx
│   └── BookingWidget.tsx
├── Sections/
│   ├── Hero.tsx
│   ├── RoomGrid.tsx
│   ├── LocationBenefits.tsx
│   ├── Features.tsx
│   ├── Gallery.tsx
│   ├── Offers.tsx
│   └── Testimonials.tsx
├── UI/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── IconBox.tsx
│   ├── RoomCard.tsx
│   └── TestimonialCard.tsx
└── Footer/
    ├── FooterNav.tsx
    ├── ContactInfo.tsx
    └── Newsletter.tsx
```

**Routing**
```typescript
// app/ directory structure (Next.js App Router)
app/
├── page.tsx (home)
├── about-us/
│   └── page.tsx
├── attractions/
│   └── page.tsx
├── accommodation/
│   └── page.tsx
├── location/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── reviews/
│   └── page.tsx
└── events/
    └── page.tsx
```

**State Management**
- Local state for UI (expand/collapse, filters)
- URL params for room filtering
- External redirect for booking

**Styling Approach**
- Tailwind CSS (already in package.json)
- CSS Modules for component-specific styles
- Utility-first approach for rapid development

---

### Key Takeaways for Cloning

1. **Flat Navigation**: Simple, no nested menus
2. **Card-Based Layout**: All content in card containers
3. **External Booking**: Booking is external redirect, not internal flow
4. **Filter by URL**: Room filtering via query params
5. **Expandable Content**: "Read More" pattern for long content
6. **Carousel/Slider**: Multiple carousels for gallery and testimonials
7. **Sticky Header**: Header stays visible on scroll
8. **Mobile-First**: Responsive design with mobile considerations
9. **BEM-like Naming**: Consistent CSS class naming
10. **Component Reusability**: Icon boxes, cards, buttons as reusable components
