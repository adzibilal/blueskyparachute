# Blue Sky Parachute - Project Structure

## Overview
Website resmi PT Langit Biru Parasut (Blue Sky Parachute) - perusahaan manufaktur parasut militer dan rekreasi.

## Tech Stack
- **Frontend**: React 19.1.1
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS3 dengan responsive design
- **Language**: JavaScript (ES6+)

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── button/          # Button component
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   └── index.js
│   ├── footer/          # Footer component
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   └── index.js
│   ├── header/          # Header component
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   └── index.js
│   ├── image-slider/    # Image slider component
│   │   ├── ImageSlider.jsx
│   │   ├── ImageSlider.css
│   │   └── index.js
│   ├── navigation/      # Navigation component
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   └── index.js
│   ├── product-card/    # Product card component
│   │   ├── ProductCard.jsx
│   │   ├── ProductCard.css
│   │   └── index.js
│   └── index.js         # Export all components
├── pages/               # Page components
│   ├── home/           # Home page
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   └── index.js
│   ├── about/          # About page
│   │   ├── AboutPage.jsx
│   │   ├── AboutPage.css
│   │   └── index.js
│   ├── manufacturing/  # Manufacturing page
│   │   ├── ManufacturingPage.jsx
│   │   ├── ManufacturingPage.css
│   │   └── index.js
│   ├── services/       # Services page
│   │   ├── ServicesPage.jsx
│   │   ├── ServicesPage.css
│   │   └── index.js
│   ├── contact/        # Contact page
│   │   ├── ContactPage.jsx
│   │   ├── ContactPage.css
│   │   └── index.js
│   ├── products/       # Product pages
│   │   ├── SkydivingParachutesPage.jsx
│   │   ├── StaticLineParachutesPage.jsx
│   │   ├── EmergencyParachutesPage.jsx
│   │   ├── DeclarationParachutesPage.jsx
│   │   ├── CargoParachutesPage.jsx
│   │   ├── AirborneTroopParachutesPage.jsx
│   │   └── ProductPage.css
│   └── index.js        # Export all pages
├── assets/             # Static assets
│   ├── images/         # Image files
│   ├── fonts/          # Font files
│   └── styles/         # Global styles
├── services/           # API services (future)
├── utils/              # Utility functions (future)
├── App.jsx             # Main App component
├── App.css             # Global styles
├── Routes.jsx          # Routing configuration
└── main.jsx            # Application entry point
```

## Pages & Routes

### Main Pages
- `/` - Home page
- `/about` - About Us
- `/manufacturing` - Manufacturing
- `/services` - Services
- `/contact` - Contact Us

### Product Pages
- `/product/skydiving-parachutes` - Skydiving Parachutes
- `/product/static-line-parachutes` - Static Line Parachutes
- `/product/emergency-parachutes` - Emergency Parachutes
- `/product/declaration-parachutes` - Declaration Parachutes
- `/product/cargo-parachutes` - Cargo Parachutes
- `/product/airborne-troop-s-parachute` - Airborne Troop's Parachute

## Components

### Core Components
- **Header**: Site header with navigation
- **Footer**: Site footer with links and contact info
- **Navigation**: Main navigation menu with dropdown
- **Button**: Reusable button component with variants
- **ProductCard**: Product display card
- **ImageSlider**: Image carousel component

### Component Features
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and keyboard navigation
- **TypeScript Ready**: Prepared for TypeScript migration
- **Modular CSS**: Component-scoped styling

## Styling Approach

### CSS Architecture
- **Component-scoped CSS**: Each component has its own CSS file
- **Global Styles**: Common styles in App.css
- **Responsive Design**: Mobile-first with breakpoints
- **CSS Variables**: Consistent color scheme and spacing

### Design System
- **Colors**: Blue theme (#1e3a8a, #3b82f6)
- **Typography**: System fonts with proper hierarchy
- **Spacing**: Consistent margin and padding system
- **Components**: Reusable UI patterns

## Development

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Organization
- **Single Responsibility**: Each component has one purpose
- **Reusability**: Components are designed for reuse
- **Maintainability**: Clear file structure and naming
- **Scalability**: Easy to add new pages and components

## Content Management

### Content Sources
- **CONTENT_PER_PAGE.md**: Detailed content specifications
- **Component Props**: Configurable content through props
- **Image Assets**: Placeholder images ready for replacement

### Content Updates
- Update component props for text changes
- Replace placeholder images in `/public/images/`
- Modify CSS for styling changes
- Add new routes in `Routes.jsx`

## Future Enhancements

### Planned Features
- **CMS Integration**: Content management system
- **Multi-language**: Indonesian and English support
- **SEO Optimization**: Meta tags and structured data
- **Performance**: Image optimization and lazy loading
- **Analytics**: Google Analytics integration
- **Contact Form**: Backend form processing

### Technical Improvements
- **TypeScript**: Type safety and better development experience
- **Testing**: Unit and integration tests
- **PWA**: Progressive Web App features
- **Performance**: Code splitting and optimization
- **Accessibility**: Enhanced ARIA support

## Deployment

### Production Build
```bash
npm run build
```

### Static Hosting
The build creates static files that can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

### Environment Variables
Create `.env` file for environment-specific configurations:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_contact_email
```

## Support

For technical support or questions about the website structure, please refer to the component documentation or contact the development team.





