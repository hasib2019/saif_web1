# SAIF Landing Page

A professional landing page for SAIF Service Resources Limited built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Menu**: Professional navigation with mobile-friendly hamburger menu
- **Banner Carousel**: Auto-playing banner carousel with manual navigation
- **Services Section**: Interactive services showcase with detailed view
- **Partners Carousel**: Auto-scrolling partner logos with responsive grid
- **Professional Footer**: Complete footer with company info and links

## Image Requirements

### Logo
- **Company Logo**: 48x48px (recommended)
- **Location**: Replace placeholder in Header.js

### Banner Carousel Images
- **Banner 1**: 800x400px
- **Banner 2**: 800x400px  
- **Banner 3**: 800x400px
- **Location**: `/public/banner1.jpg`, `/public/banner2.jpg`, `/public/banner3.jpg`

### Service Images
- **Embroidery**: 300x200px
- **Textile**: 300x200px
- **Pharmaceutical**: 300x200px
- **Agri-tech**: 300x200px
- **Location**: `/public/embroidery.jpg`, `/public/textile.jpg`, `/public/pharmaceutical.jpg`, `/public/agritech.jpg`

### Partner Logos
- **Standard Size**: 120x60px each
- **Partners**: LECTRA, Mathis, Tiger Wing, OSHIMA, PantaRei, SANTACRUZ, etc.
- **Location**: `/public/` folder with naming convention: `{partner-name}-logo.png`

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Add Images**:
   - Place all required images in the `/public/` folder
   - Update image paths in components if needed

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**:
   - Navigate to `http://localhost:3000`

## Project Structure

```
saif-app/
├── components/
│   ├── Header.js              # Navigation header with responsive menu
│   ├── BannerCarousel.js      # Hero banner with auto-sliding carousel
│   ├── ServicesSection.js     # Interactive services showcase
│   ├── PartnersCarousel.js    # Partner logos carousel
│   └── Footer.js              # Complete footer section
├── pages/
│   ├── index.js               # Main landing page
│   └── _app.js                # Next.js app configuration
├── styles/
│   └── globals.css            # Global styles and animations
└── public/                    # Static assets and images
```

## Customization

### Colors
- **Primary**: Red (#DC2626)
- **Secondary**: Gray (#374151)
- **Background**: White (#FFFFFF)
- **Text**: Dark Gray (#111827)

### Typography
- **Font**: System UI font stack for optimal performance
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Components Overview

### Header
- Sticky navigation with company branding
- Responsive menu (hamburger on mobile)
- Search functionality
- Active state indicators

### Banner Carousel
- Auto-playing slides (5-second intervals)
- Manual navigation arrows
- Dot indicators
- Responsive content positioning

### Services Section
- Grid layout with hover effects
- Detailed service information
- Interactive selection
- Feature highlights

### Partners Carousel
- Auto-scrolling partner logos
- Responsive grid (2-5 items per view)
- Smooth transitions
- Partnership statistics

### Footer
- Company information
- Quick links navigation
- Contact details
- Social media links

## Performance Features

- **Optimized Images**: Next.js Image component for automatic optimization
- **Lazy Loading**: Components load as needed
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: CSS transitions and transforms
- **SEO Optimized**: Proper meta tags and semantic HTML

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

The landing page is built with modern React patterns and follows Next.js best practices. All components are modular and reusable, making it easy to maintain and extend.

For questions or customization needs, please refer to the component files or contact the development team.
