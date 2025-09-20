import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CargoParachutesPage = () => {
  // Refs for animations
  const heroContentRef = useRef(null);
  const sectionsRef = useRef([]);

  // Download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/cargo-parachutes.docx';
    link.download = 'cargo-parachutes.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Setup animations
  useEffect(() => {
    // Hero content animation
    if (heroContentRef.current) {
      gsap.fromTo(
        heroContentRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    // Scroll-triggered animations for sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Helper function to add section refs
  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-camo overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-900/70 z-10"></div>

        {/* Hero Content */}
        <div
          ref={heroContentRef}
          className="absolute z-20 inset-0 flex items-center justify-center text-center opacity-0"
        >
          <div className="container">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              Cargo Parachutes
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Parachutes for cargo delivery
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-primary-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Product Image */}
            <motion.div 
              className="bg-primary-700 p-8 rounded-2xl shadow-lg border border-primary-700 h-max"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/products/cargo.png" 
                alt="Cargo Parachute" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>

            {/* Product Info */}
            <div className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Function and Applications</h2>
              <p className="text-lg leading-relaxed text-secondary-300 mb-8">
                Cargo parachutes ensure safe delivery of valuable goods to land. Used by all branches of the Indonesian Armed Forces, this cargo delivery system is designed to transport light to heavy goods, including ammunition and vehicles, to critical drop zones.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Capacity 100-10,000 pounds</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">For all branches of Indonesian Armed Forces</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Ammunition delivery</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Drop to critical zones</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Light to heavy goods</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Vehicles and equipment</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large" >
                  Request Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="large" 
                  className="border-white text-white hover:bg-white hover:text-primary-800"
                  onClick={handleDownload}
                >
                  Download Specifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Load Capacity</h3>
                <p className="text-sm leading-relaxed text-secondary-200">100 to 10,000 pounds</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Users</h3>
                <p className="text-sm leading-relaxed text-secondary-200">Indonesian Armed Forces</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Application</h3>
                <p className="text-sm leading-relaxed text-secondary-200">Light to heavy goods delivery</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Drop Zone</h3>
                <p className="text-sm leading-relaxed text-secondary-200">Drop to critical zones</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white py-20 text-center">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Need Cargo Delivery Solutions?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact us to get special offers for cargo parachutes with capacity according to your needs.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CargoParachutesPage;





