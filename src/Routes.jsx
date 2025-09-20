import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/home';
import AboutPage from './pages/about';
import ManufacturingPage from './pages/manufacturing';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';

// Import product pages
import SkydivingParachutesPage from './pages/products/SkydivingParachutesPage';
import StaticLineParachutesPage from './pages/products/StaticLineParachutesPage';
import EmergencyParachutesPage from './pages/products/EmergencyParachutesPage';
import DeclarationParachutesPage from './pages/products/DeclarationParachutesPage';
import CargoParachutesPage from './pages/products/CargoParachutesPage';
import AirborneTroopParachutesPage from './pages/products/AirborneTroopParachutesPage';

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
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Product Pages */}
            <Route path="/product/skydiving-parachutes" element={<SkydivingParachutesPage />} />
            <Route path="/product/static-line-parachutes" element={<StaticLineParachutesPage />} />
            <Route path="/product/emergency-parachutes" element={<EmergencyParachutesPage />} />
            <Route path="/product/declaration-parachutes" element={<DeclarationParachutesPage />} />
            <Route path="/product/cargo-parachutes" element={<CargoParachutesPage />} />
            <Route path="/product/airborne-troop-s-parachute" element={<AirborneTroopParachutesPage />} />
            
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




