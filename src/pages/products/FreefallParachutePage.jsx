import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO";
import Button from "../../components/button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FreefallParachutePage = () => {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Sections animation
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const specifications = [
    { label: "Lift/Drag Ratio", value: "2.5 to 1" },
    { label: "Span", value: "22.5 ft." },
    { label: "Chord", value: "11.1 ft." },
    { label: "Area", value: "245 Sq. ft." },
    { label: "Max. suspended weight", value: "269 lbs" },
    { label: "Forward speed", value: "18 - 22 mph" },
    { label: "Rate of descent", value: "" },
    { label: "Full Flight", value: "16 - 20 ft./sec" },
    { label: "50% Brakes", value: "8 to 12 ft./sec." },
    { label: "100% Brakes", value: "2 to 8 ft./sec." },
    { label: "Fully Flared Landing Touchdown", value: "0 to 2 ft./sec. (if executed properly)" },
    { label: "Canopy cloth", value: "F-111 (1.1oz Ripstop Nylon)" },
    { label: "Suspension Lines", value: "900 lbs. Dacron Line" },
    { label: "Max Jump Altitudes (Exit from plane)", value: "35,000 ft AGL" },
    { label: "Max Jump Speed (Exit from plane)", value: "160 KIAS" },
    { label: "Deployment Altitude (Recommended)", value: "Max 20,000 ft AGL, Min 2,000 ft AGL" },
    { label: "Deployment Velocity Range", value: "130-150 KIAS" },
  ];

  const availableSizes = [
    { size: "245", file: "/pdf/LBP Startrac 2.0 FREEFALL 245.pdf", fileName: "LBP Startrac 2.0 FREEFALL 245.pdf" },
    { size: "265", file: "/pdf/LBP Startrac 2.0 FREEFALL 265.pdf", fileName: "LBP Startrac 2.0 FREEFALL 265.pdf" },
    { size: "290", file: "/pdf/LBP Startrac 2.0 FREEFALL 290.pdf", fileName: "LBP Startrac 2.0 FREEFALL 290.pdf" },
    { size: "320", file: "/pdf/LBP Startrac 2.0 FREEFALL 320.pdf", fileName: "LBP Startrac 2.0 FREEFALL 320.pdf" },
  ];

  const features = [
    "Full pilot control for precision maneuvers",
    "Structured wing design for optimal performance",
    "Responsive steering lines for directional control",
    "High safety standards for skydiving",
    "Ram-air design for best lift and glide ratio",
    "High-quality F-111 Ripstop Nylon material",
    "900 lbs Dacron suspension lines for maximum strength",
    "Available in 4 sizes: 245, 265, 290, 320 sq ft"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="LBP Startrac 2.0 Freefall Parachute"
        description="LBP Startrac 2.0 Freefall Parachute - Freefall parachute for sports and recreation with full control for canopy pilots. Available in sizes 245, 265, 290, and 320 sq ft."
        keywords="freefall parachute, LBP Startrac 2.0, skydiving parachute, sport parachute, ram-air parachute, recreational parachute, canopy pilot"
        url="/product/freefall-parachute"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 pt-32 pb-16">
        <div className="container mx-auto">
          <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                LBP Startrac 2.0
              </motion.h1>
              <motion.p 
                className="text-xl mb-4 text-primary-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Freefall Parachute
              </motion.p>
              <motion.p 
                className="text-lg mb-8 text-primary-200 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Freefall parachute for sports and recreation with full control for canopy pilots. 
                Ram-air design with high performance for optimal skydiving experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => handleDownload(availableSizes[0].file, availableSizes[0].fileName)}
                  className="bg-primary-500 hover:bg-primary-600 text-white mb-4"
                >
                  Download Brochure PDF (245 sq ft)
                </Button>
                <div className="text-left">
                  <p className="text-primary-200 text-sm mb-3">Other sizes available:</p>
                  <div className="flex gap-3 justify-left">
                    {availableSizes.slice(1).map((size) => (
                      <Button 
                        key={size.size}
                        variant="primary" 
                        size="small"
                        onClick={() => handleDownload(size.file, size.fileName)}
                        className="border-white text-white hover:bg-white "
                      >
                        {size.size} sq ft
                      </Button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <img 
                  src="/images/products/freefall.png" 
                  alt="LBP Startrac 2.0 Freefall Parachute"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto">
          <div ref={addToSectionsRef} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 text-center">
              Startrac 245 Specifications
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-600 font-medium text-sm">{spec.label}:</span>
                    <span className="text-primary-800 font-semibold text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div ref={addToSectionsRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="container mx-auto text-center">
          <div ref={addToSectionsRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Next Jump?
            </h2>
            <p className="text-xl mb-8 text-primary-200 max-w-3xl mx-auto">
              Contact us for detailed specifications, sizing guidance, and custom requirements for your skydiving needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="outline" 
                size="large"
                onClick={() => window.location.href = '/contact'}
                className="border-white text-white hover:bg-white hover:text-primary-800"
              >
                Contact Sales Team
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <p className="text-primary-200 w-full mb-4">Download All Sizes:</p>
              {availableSizes.map((size) => (
                <Button 
                  key={size.size}
                  variant="secondary" 
                  size="small"
                  onClick={() => handleDownload(size.file, size.fileName)}
                  className="bg-secondary-500 hover:bg-secondary-600"
                >
                  {size.size} sq ft
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreefallParachutePage;
