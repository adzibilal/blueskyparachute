import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const products = [
    { name: 'Skydiving Parachutes', path: '/product/skydiving-parachutes' },
    { name: 'Static Line Parachutes', path: '/product/static-line-parachutes' },
    { name: 'Emergency Parachutes', path: '/product/emergency-parachutes' },
    { name: 'Declaration Parachutes', path: '/product/declaration-parachutes' },
    { name: 'Cargo Parachutes', path: '/product/cargo-parachutes' },
    { name: "Airborne Troop's Parachute", path: '/product/airborne-troop-s-parachute' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo-master.png" alt="Blue Sky Parachute" className="h-12 w-auto" />
          </Link>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''} hidden md:flex items-center space-x-8`}>
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/manufacturing" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              Manufacturing
            </Link>
            
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 flex items-center space-x-1"
                onClick={toggleProducts}
              >
                <span>Products</span>
                <span className={`transform transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ${
                isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      setIsProductsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/services" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          <button 
            className="md:hidden flex flex-col space-y-1 p-2" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            type="button"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/manufacturing" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Manufacturing
            </Link>
            
            <div className="px-3 py-2">
              <button 
                className="text-gray-700 hover:text-primary-600 font-medium flex items-center space-x-1 w-full text-left"
                onClick={toggleProducts}
              >
                <span>Products</span>
                <span className={`transform transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div className={`mt-2 space-y-1 ${isProductsOpen ? 'block' : 'hidden'}`}>
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded transition-colors duration-200"
                    onClick={() => {
                      setIsProductsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/services" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
