import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ManufacturingPage from './pages/manufacturing';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';
import GalleryPage from './pages/gallery/GalleryPage';
import CertificatePage from './pages/certificate/CertificatePage';

// Import new product pages
import TroopBackParachutePage from './pages/products/TroopBackParachutePage';
import PersonalReserveParachutePage from './pages/products/PersonalReserveParachutePage';
import FreefallParachutePage from './pages/products/FreefallParachutePage';
import CargoParachutePage from './pages/products/CargoParachutePage';

// Import layout components
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';

const AppRoutes = () => {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* New Product Pages */}
            <Route path="/product/troop-back-parachute" element={<TroopBackParachutePage />} />
            <Route path="/product/personal-reserve-parachute" element={<PersonalReserveParachutePage />} />
            <Route path="/product/freefall-parachute" element={<FreefallParachutePage />} />
            <Route path="/product/cargo-parachute" element={<CargoParachutePage />} />
            
            {/* 404 Page - You can create a NotFoundPage component later */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;




