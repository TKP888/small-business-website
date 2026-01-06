# Small Business Website

A modern, responsive business website built with Next.js for Vercoe Property Maintenance, a property maintenance and construction services company based in Bristol and South Gloucestershire. The website provides a comprehensive platform for showcasing services, displaying completed projects, managing customer reviews, and facilitating quote requests.

## Project Overview

This website serves as the primary digital presence for Vercoe Property Maintenance, offering visitors an intuitive way to learn about services, view past work, read customer testimonials, and request quotes. Built with modern web technologies, the site emphasises performance, accessibility, and user experience across all devices.

The website is designed to be easily maintainable and scalable, with a planned admin interface that will allow non-technical users to manage content without requiring code changes.

## Technology Stack

- **Framework:** Next.js 15 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Image Optimisation:** Next.js Image component
- **Deployment:** Ready for Vercel or similar platforms

## Features

### Home Page

The homepage features a hero section with a call-to-action, an overview of services displayed in a responsive grid layout, and a customer reviews carousel. The services section provides quick access to detailed service pages, while the reviews component showcases customer testimonials with a smooth carousel interface.

### Services Section

- **Services Listing Page:** Displays all available services in a responsive grid (1 column on mobile, 2 on tablet, 3 on desktop). Each service card shows a preview image, service name, and truncated description with a hover effect.
- **Individual Service Pages:** Dynamic routing generates dedicated pages for each service using slug-based URLs. Each service page includes:
  - Full service description
  - Service-specific imagery
  - Call-to-action buttons for quotes and contact
  - Consistent navigation back to all services

Services are managed through a centralised data file (`lib/services.ts`) that defines service information including name, slug, description, and associated images.

### Projects Section

The projects page showcases completed work through interactive project cards. Each card displays:

- Project title and category
- Short description preview
- Primary project image

On hover (desktop) or tap (mobile), cards reveal an overlay containing:

- Full project description
- Image carousel with navigation arrows and dot indicators
- Smooth transitions between images

**Note:** The projects section is currently in development. The page displays placeholder content with sample projects. Real project data and images will be added as the feature is completed.

### About Page

The about page provides information about the business owner, Lewis, including:

- Professional profile image
- Business background and experience
- Service areas and expertise
- Commitment to customer care
- Customer reviews section integrated at the bottom

### Contact Page

The contact page includes:

- Embedded Google Maps showing business location
- Contact information cards for phone, email, and address
- Direct links for phone calls and email composition
- Consistent navigation and footer

### Quote Request Form

A comprehensive quote request form with the following features:

- Form validation for all required fields
- UK postcode lookup integration using the postcodes.io API
- Address autocomplete functionality
- Real-time error handling and user feedback
- Responsive design optimised for mobile devices

**Note:** The quote form is fully functional in terms of validation and user interaction, but form submissions are not currently being sent to a backend service. The submission endpoint is pending a decision on the preferred method of handling quote requests (email service, database storage, third-party integration, etc.).

### Customer Reviews

The reviews component features:

- Rotating carousel of customer testimonials
- Star ratings display
- Customer names and locations
- Navigation arrows and dot indicators
- Smooth transitions between reviews
- Responsive design for all screen sizes

Reviews are currently managed through a static data array in the Reviews component. This will be migrated to the admin interface once implemented.

### Navigation and Layout

- **Sticky Header:** Navigation bar remains visible while scrolling
- **Responsive Menu:** Mobile-friendly hamburger menu with dropdown functionality
- **Services Dropdown:** Quick access to all services from the main navigation
- **Footer:** Comprehensive footer with quick links, contact information, and social media links

## Current Status

### Completed Features

- Home page with hero section and services overview
- Complete services section with listing and individual pages
- About page with business information
- Contact page with map integration
- Quote request form with validation and postcode lookup
- Customer reviews carousel
- Responsive design across all pages

### In Development

- **Projects Section:** The projects page is functional but currently displays placeholder content. The interactive card system with hover overlays and image carousels is complete, but real project data and images need to be added.

- **Quote Form Submission:** The quote request form includes full client-side functionality including validation and postcode lookup. However, form submissions are not currently being processed. The backend integration is pending a decision on the preferred submission method.

## Planned Features

### Admin Interface

A comprehensive admin interface is planned that will allow authorized users to manage website content without requiring any code changes. The admin interface will include:

- **Content Management:** Add, edit, and delete services, projects, and reviews through an intuitive web interface
- **Image Management:** Upload and manage images for services and projects
- **Review Management:** Add new customer reviews, edit existing ones, and remove outdated testimonials
- **Service Management:** Create new service pages, update descriptions, and manage service images
- **Project Management:** Add completed projects with descriptions, images, and categorization
- **User Authentication:** Secure login system to protect admin functionality

This feature will enable the business owner to keep the website content up-to-date independently, adding new services, showcasing recent projects, and maintaining customer reviews without developer intervention.

## Project Structure

```
small-business-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page component
│   ├── contact/
│   │   └── page.tsx           # Contact page with map
│   ├── projects/
│   │   └── page.tsx           # Projects listing page
│   ├── quote/
│   │   └── page.tsx           # Quote request form
│   ├── services/
│   │   ├── [slug]/
│   │   │   └── page.tsx       # Dynamic service detail pages
│   │   └── page.tsx           # Services listing page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout component
│   └── page.tsx                # Home page
├── components/
│   ├── Footer.tsx              # Footer component
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Homepage hero section
│   ├── ProjectCard.tsx           # Project card with overlay
│   ├── Reviews.tsx               # Reviews carousel
│   └── Services.tsx              # Services grid component
├── lib/
│   ├── projects.ts              # Projects data and types
│   └── services.ts               # Services data and types
├── public/
│   ├── services/                # Service images
│   └── [other assets]           # Logos, hero images, etc.
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Installation and Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation Steps

1. Clone the repository:

```bash
git clone [repository-url]
cd small-business-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Development

### Key Technologies

- **Next.js 15:** React framework with server-side rendering and static site generation
- **TypeScript:** Type-safe JavaScript for improved development experience
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development
- **React Hooks:** State management and side effects in functional components

### Data Management

Currently, content is managed through TypeScript data files:

- `lib/services.ts` - Service definitions and helper functions
- `lib/projects.ts` - Project data and types
- `components/Reviews.tsx` - Reviews data array

These will be migrated to a database or CMS backend when the admin interface is implemented.

### Styling Approach

The project uses Tailwind CSS for styling with a consistent design system:

- Primary color: Purple (purple-950 for backgrounds)
- Accent color: Blue (blue-600 for links and CTAs)
- Responsive breakpoints: Mobile-first approach
- Consistent spacing and typography scales

## Future Enhancements

- Admin interface for content management
- Blog or news section for company updates

## License

This project is proprietary and developed for Vercoe Property Maintenance.
