import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ManufacturingPage = () => {
  // Refs for animations
  const heroContentRef = useRef(null);
  const sectionsRef = useRef([]);

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
      <section className="relative h-screen min-h-[600px] bg-camo overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-army-900/70 z-10"></div>

        {/* Hero Content */}
        <div
          ref={heroContentRef}
          className="absolute z-20 inset-0 flex items-center justify-center text-center opacity-0"
        >
          <div className="container">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              Manufacturing
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Superior Manufacturing Excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Manufacturing Process</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              At Superior Manufacturing, quality and delivery are our top priorities. Our dedicated team personally manufactures, inspects, tests, and packages each product we create, ensuring the highest standards are met at every step. We take great pride in the trust the armed forces have placed in us for decades.
            </p>
            <p className="text-lg leading-relaxed text-earth-300">
              As a build-to-print manufacturer, we proudly maintain a current ISO 9001 registration. This certification reflects our commitment to maintaining the highest quality standards in all our manufacturing processes.
            </p>
          </div>

          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Quality Control</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              Adhering to international safety standards, we ensure that all textile products and raw materials used in our manufacturing processes meet client specifications. Items such as packs, harnesses, canopies, and deployment bags are crafted in strict accordance with the latest international government designs and specifications.
            </p>
            <p className="text-lg leading-relaxed text-earth-300">
              We maintain stringent quality and manufacturing standards to guarantee the superior quality of every item, irrespective of size or complexity. Every product undergoes rigorous testing at multiple stages of production.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Equipment & Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">State-of-the-Art Machinery</h3>
                <p className="text-base leading-relaxed text-earth-200">We utilize the latest manufacturing equipment and technology to ensure precision and efficiency in every product we create.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Quality Testing Facilities</h3>
                <p className="text-base leading-relaxed text-earth-200">Our in-house testing facilities allow us to verify the quality and reliability of every parachute before it leaves our facility.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Materials</h3>
                <p className="text-base leading-relaxed text-earth-200">We use only the highest quality materials that meet or exceed international standards for strength, durability, and performance.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Precision Manufacturing</h3>
                <p className="text-base leading-relaxed text-earth-200">Our skilled technicians ensure that every component is manufactured to exact specifications with meticulous attention to detail.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Manufacturing Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Military Parachutes</h3>
                <p className="text-base leading-relaxed text-earth-200">We manufacture military parachutes and ancillary items for our international customers, adhering to the same strict standards as those for the Indonesian Military.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Commercial Sewing Services</h3>
                <p className="text-base leading-relaxed text-earth-200">Serving the Indonesian Military and a global clientele, we provide industrial and commercial sewing services tailored to meet diverse needs.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Custom Manufacturing</h3>
                <p className="text-base leading-relaxed text-earth-200">We can customize our manufacturing processes to meet specific client requirements and specifications.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Build-to-Print</h3>
                <p className="text-base leading-relaxed text-earth-200">As a build-to-print manufacturer, we can produce products according to exact client specifications and blueprints.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Certifications */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Facility</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              Our 2,500 square-meter facilities are located in Bandung, West Java, Indonesia. This strategic location allows us to coordinate efficient shipments to destinations around the globe while maintaining close relationships with our local suppliers and partners.
            </p>
            <p className="text-lg leading-relaxed text-earth-300">
              The facility is equipped with modern manufacturing equipment, quality control laboratories, and testing facilities. We maintain a clean, organized, and efficient production environment that ensures consistent quality and timely delivery.
            </p>
          </div>

          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Compliance & Certifications</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-6">
              All of our products comply with the Indonesian Department of Commerce Export Administration Regulations, FAA, and NATO Commercial and Government Entity Code – 1370Z. We maintain strict adherence to international standards and regulations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">ISO 9001</h3>
                <p className="text-sm leading-relaxed text-earth-200">Quality Management System Certification</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">FAA Compliance</h3>
                <p className="text-sm leading-relaxed text-earth-200">Federal Aviation Administration Standards</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">NATO Standards</h3>
                <p className="text-sm leading-relaxed text-earth-200">NATO Commercial and Government Entity Code</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Export Regulations</h3>
                <p className="text-sm leading-relaxed text-earth-200">Indonesian Department of Commerce Compliance</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-army-800 via-army-700 to-army-600 text-white py-20 text-center">
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
              Ready to Experience Superior Manufacturing?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact us for a customized quote to meet your specific manufacturing requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage;





