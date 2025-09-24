import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Certificate', path: '/certificate' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const products = [
    { name: 'Static Parachutes', path: '/product/static-parachutes' },
    { name: 'Emergency Parachute', path: '/product/personal-reserve-parachute' },
    { name: 'Freefall Parachute', path: '/product/freefall-parachute' },
    { name: 'Cargo Parachutes', path: '/product/cargo-parachute' }
  ];

  return (
    <footer className="bg-primary-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-accent-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-accent-500 pb-2 inline-block">
              Products
            </h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.path}>
                  <Link 
                    to={product.path} 
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 block py-1"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b-2 border-accent-500 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <strong className="text-white text-sm font-semibold block mb-1">Address:</strong>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Jakarta Office:</strong><br />
                    Jl. Ki Mangunsarkoro No.1 Menteng, Kota Jakarta Pusat, Jakarta, Indonesia.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Factory:</strong><br />
                    Jl. Cilampeni No. 10 – Kopo – Katapang – Bandung – West Java – Indonesia – 40921
                  </p>
                </div>
              </div>
              <div>
                <strong className="text-white text-sm font-semibold block mb-1">Phone:</strong>
                <p className="text-gray-300 text-sm">
                  <a 
                    href="tel:+628112182888" 
                    className="text-white hover:text-gray-200 transition-colors duration-300"
                  >
                    +62-811-218-2888
                  </a>
                  {' / '}
                  <a 
                    href="tel:+628111088787" 
                    className="text-white hover:text-gray-200 transition-colors duration-300"
                  >
                    +62-811-108-8787
                  </a>
                </p>
              </div>
              <div>
                <strong className="text-white text-sm font-semibold block mb-1">Email:</strong>
                <p className="text-gray-300 text-sm">
                  <a 
                    href="mailto:info@blueskyparachute.com" 
                    className="text-white hover:text-gray-200 transition-colors duration-300"
                  >
                    info@blueskyparachute.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <img 
              src="/logo-master.png" 
              alt="Blue Sky Parachute" 
              className="h-10 w-auto"
            />
          </div>
          <p className="text-gray-400 text-sm">
            © Copyright {currentYear}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
