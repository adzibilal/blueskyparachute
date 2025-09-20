# Blue Sky Parachute Website

Website resmi PT Langit Biru Parasut (Blue Sky Parachute) - perusahaan manufaktur parasut militer dan rekreasi.

## 🚀 Quick Start

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

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── button/         # Button component
│   ├── footer/         # Footer component
│   ├── header/         # Header component
│   ├── image-slider/   # Image slider component
│   ├── navigation/     # Navigation component
│   └── product-card/   # Product card component
├── pages/              # Page components
│   ├── home/          # Home page
│   ├── about/         # About page
│   ├── manufacturing/ # Manufacturing page
│   ├── services/      # Services page
│   ├── contact/       # Contact page
│   └── products/      # Product pages
├── assets/            # Static assets
├── App.jsx            # Main App component
├── App.css            # Global styles
└── Routes.jsx         # Routing configuration
```

## 🎯 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern UI/UX** - Clean and professional design
- ✅ **SEO Ready** - Optimized for search engines
- ✅ **Fast Loading** - Optimized performance
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **Multi-page** - Complete website with all sections

## 📄 Pages

### Main Pages
- **Home** (`/`) - Landing page with hero section and product overview
- **About** (`/about`) - Company information and values
- **Manufacturing** (`/manufacturing`) - Manufacturing process and capabilities
- **Services** (`/services`) - Services offered by the company
- **Contact** (`/contact`) - Contact form and information

### Product Pages
- **Skydiving Parachutes** (`/product/skydiving-parachutes`)
- **Static Line Parachutes** (`/product/static-line-parachutes`)
- **Emergency Parachutes** (`/product/emergency-parachutes`)
- **Declaration Parachutes** (`/product/declaration-parachutes`)
- **Cargo Parachutes** (`/product/cargo-parachutes`)
- **Airborne Troop's Parachute** (`/product/airborne-troop-s-parachute`)

## 🎨 Design System

### Colors
- Primary: `#1e3a8a` (Dark Blue)
- Secondary: `#3b82f6` (Blue)
- Accent: `#10b981` (Green)
- Text: `#1f2937` (Dark Gray)
- Background: `#f8fafc` (Light Gray)

### Typography
- Font Family: System fonts (San Francisco, Segoe UI, etc.)
- Headings: 600 weight
- Body: 400 weight
- Line Height: 1.6-1.8

## 🛠️ Customization

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `src/Routes.jsx`
3. Update navigation in `src/components/navigation/Navigation.jsx`

### Updating Content
1. Edit component files directly
2. Update images in `public/images/`
3. Modify CSS files for styling changes

### Adding New Components
1. Create component folder in `src/components/`
2. Add component files (JSX, CSS, index.js)
3. Export in `src/components/index.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use semantic HTML
- Implement proper accessibility

### File Naming
- Components: PascalCase (e.g., `ProductCard.jsx`)
- Files: kebab-case (e.g., `product-card.css`)
- Folders: kebab-case (e.g., `product-card/`)

## 📦 Dependencies

### Core
- **React** 19.1.1 - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server

### Development
- **ESLint** - Code linting
- **@vitejs/plugin-react** - React plugin for Vite

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The build creates static files that can be deployed to:
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use GitHub Actions
- **AWS S3** - Upload the `dist` folder

### Environment Variables
Create `.env` file for environment-specific configurations:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_contact_email
```

## 📋 TODO

### Content Updates
- [ ] Replace placeholder images with actual photos
- [ ] Add company logo
- [ ] Update contact information
- [ ] Add real product specifications

### Features
- [ ] Contact form backend integration
- [ ] Multi-language support (Indonesian/English)
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Performance optimization

### Technical
- [ ] Add TypeScript support
- [ ] Implement unit tests
- [ ] Add error boundaries
- [ ] Implement lazy loading
- [ ] Add PWA features

## 📞 Support

For technical support or questions about the website:
- Check the component documentation
- Review the project structure
- Contact the development team

## 📄 License

This project is proprietary software owned by PT Langit Biru Parasut.

---

**Blue Sky Parachute** - Leading the Way in Military and Recreational Parachutes