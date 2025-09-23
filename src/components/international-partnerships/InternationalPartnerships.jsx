import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

const InternationalPartnerships = () => {
  // State for image zoom modal
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  // Handle ESC key for closing zoom modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isImageZoomed) {
        setIsImageZoomed(false);
      }
    };

    if (isImageZoomed) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isImageZoomed]);

  // All Partners data with country codes
  const partnersData = [
    { no: 1, country: "Canada", countryCode: "CA", type: "Cargo Parachutes" },
    { no: 2, country: "Bangladesh", countryCode: "BD", type: "Static Line & Freefall Parachutes" },
    { no: 3, country: "Oman", countryCode: "OM", type: "Static Line, Freefall & Cargo Parachutes" },
    { no: 4, country: "UAE", countryCode: "AE", type: "Cargo Parachutes" },
    { no: 5, country: "Egypt", countryCode: "EG", type: "Cargo Parachutes" },
    { no: 6, country: "Turkey", countryCode: "TR", type: "Cargo Parachutes" },
    { no: 7, country: "Bahrain", countryCode: "BH", type: "Cargo Parachutes" },
    { no: 8, country: "Malaysia", countryCode: "MY", type: "Cargo Parachutes" },
    { no: 9, country: "Australia", countryCode: "AU", type: "Cargo & Static Line Parachutes" },
    { no: 10, country: "United States", countryCode: "US", type: "Freefall Parachute Startrac 2.0" },
    { no: 11, country: "Vietnam", countryCode: "VN", type: "Static Line, Freefall & Cargo Parachutes" },
    { no: 12, country: "Philippines", countryCode: "PH", type: "Freefall Parachutes" },
    { no: 13, country: "South Africa", countryCode: "ZA", type: "Static Line, Freefall & Cargo Parachutes" },
    { no: 14, country: "South Korea", countryCode: "KR", type: "Static Line & Freefall Parachutes" },
    { no: 15, country: "Nigeria", countryCode: "NG", type: "Cargo & Static Line Parachutes" },
    { no: 16, country: "Thailand", countryCode: "TH", type: "Static Line, Freefall & Cargo Parachutes" },
    { no: 17, country: "Qatar", countryCode: "QA", type: "Cargo Parachutes" }
  ];


  return (
    <>
      {/* International Partnership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-primary-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              International Partnerships
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Discover our global reach and trusted partnerships across multiple countries
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Distribution Map - 75% width on large screens */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden h-96 lg:h-[500px] cursor-pointer group relative">
                <img
                  src="/images/distribution-maps-new.png"
                  alt="Blue Sky Parachute Global Distribution Map"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onClick={() => setIsImageZoomed(true)}
                />
                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Country List - 25% width on large screens */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-96 lg:h-[500px] flex flex-col">
                <div className="p-6 pb-4 flex-shrink-0">
                  <h3 className="text-xl font-bold text-primary-800 text-center">
                    Partner Countries
                  </h3>
                </div>
                
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 pb-4">
                  <div className="space-y-3">
                    {partnersData.map((partner) => (
                      <motion.div
                        key={partner.no}
                        className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all duration-300 group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.href = '/gallery'}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: partner.no * 0.03, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-6 rounded overflow-hidden shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow">
                            <ReactCountryFlag
                              countryCode={partner.countryCode}
                              svg
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                              title={partner.country}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-primary-800 text-sm group-hover:text-blue-900 transition-colors mb-1">
                              {partner.country}
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed group-hover:text-blue-700 transition-colors">
                              {partner.type}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {isImageZoomed && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsImageZoomed(false)}
        >
          <motion.div
            className="relative max-w-7xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/images/distribution-maps.png"
              alt="Blue Sky Parachute Global Distribution Map - Zoomed"
              className="w-full h-full object-contain rounded-lg"
            />
            {/* Close button */}
            <button
              onClick={() => setIsImageZoomed(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              Click outside or press ESC to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default InternationalPartnerships;
