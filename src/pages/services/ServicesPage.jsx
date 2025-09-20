import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
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
              Services
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Comprehensive Parachute Solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-16 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Services</h2>
            <p className="text-lg leading-relaxed text-earth-300">
              PT Langit Biru Parasut provides comprehensive parachute manufacturing and related services to military and civilian customers worldwide. Our expertise spans decades of experience in the defense industry, ensuring that every service we provide meets the highest standards of quality and reliability.
            </p>
          </div>

          {/* Services Grid */}
          <div
            ref={addToSectionsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            <motion.div 
              className="bg-army-700 p-8 rounded-2xl shadow-lg border border-army-700 transition-all duration-300 hover:bg-army-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-white mb-4">Manufacturing Services</h3>
              </div>
              <p className="text-earth-300 mb-6 leading-relaxed">We manufacture a wide range of parachutes including military, recreational, emergency, and cargo parachutes using state-of-the-art equipment and processes.</p>
              <ul className="space-y-2">
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Military parachutes</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Recreational parachutes</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Emergency parachutes</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Cargo parachutes</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Custom designs</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-army-700 p-8 rounded-2xl shadow-lg border border-army-700 transition-all duration-300 hover:bg-army-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-white mb-4">Repair & Maintenance</h3>
              </div>
              <p className="text-earth-300 mb-6 leading-relaxed">Our skilled technicians provide comprehensive repair and maintenance services for all types of parachutes and related equipment.</p>
              <ul className="space-y-2">
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Parachute inspection</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Repair services</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Maintenance programs</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Safety checks</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Recertification</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-army-700 p-8 rounded-2xl shadow-lg border border-army-700 transition-all duration-300 hover:bg-army-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🧪</div>
                <h3 className="text-xl font-semibold text-white mb-4">Testing & Quality Control</h3>
              </div>
              <p className="text-earth-300 mb-6 leading-relaxed">We provide rigorous testing and quality control services to ensure every product meets international safety standards.</p>
              <ul className="space-y-2">
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Material testing</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Load testing</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Safety inspections</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Quality assurance</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Certification support</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-army-700 p-8 rounded-2xl shadow-lg border border-army-700 transition-all duration-300 hover:bg-army-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-white mb-4">Consulting Services</h3>
              </div>
              <p className="text-earth-300 mb-6 leading-relaxed">Our experts provide consulting services to help clients select the right parachute solutions for their specific needs.</p>
              <ul className="space-y-2">
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Product selection</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Technical consultation</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Custom design</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Training programs</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Compliance guidance</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-army-700 p-8 rounded-2xl shadow-lg border border-army-700 transition-all duration-300 hover:bg-army-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold text-white mb-4">Logistics & Shipping</h3>
              </div>
              <p className="text-earth-300 mb-6 leading-relaxed">We coordinate efficient shipments to destinations around the globe, ensuring timely delivery of all products.</p>
              <ul className="space-y-2">
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Global shipping</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Customs handling</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Documentation</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Tracking services</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Insurance coverage</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-army-700 p-8 rounded-2xl shadow-lg border border-army-700 transition-all duration-300 hover:bg-army-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-white mb-4">Training & Support</h3>
              </div>
              <p className="text-earth-300 mb-6 leading-relaxed">We provide comprehensive training and support services to ensure proper use and maintenance of our products.</p>
              <ul className="space-y-2">
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">User training</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Maintenance training</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Technical support</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Documentation</li>
                <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Ongoing support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial & Commercial Sewing Services */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-16 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Industrial & Commercial Sewing Services</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              Serving the Indonesian Military and a global clientele, we provide industrial and commercial sewing services tailored to meet diverse needs. Our state-of-the-art sewing facilities and skilled technicians can handle a wide range of textile manufacturing requirements.
            </p>
            <p className="text-lg leading-relaxed text-earth-300">
              Contact us for a customized quote to meet your specific requirements. We work closely with our clients to understand their needs and provide solutions that exceed expectations.
            </p>
          </div>

          {/* Why Choose Our Services */}
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Why Choose Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Decades of Experience</h3>
                <p className="text-base leading-relaxed text-earth-200">We have been manufacturing parachutes for the better part of a century, with extensive experience serving military and civilian customers.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">International Standards</h3>
                <p className="text-base leading-relaxed text-earth-200">All our services comply with international standards including FAA, NATO, and Indonesian Department of Commerce regulations.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
                <p className="text-base leading-relaxed text-earth-200">We maintain ISO 9001 certification and implement rigorous quality control processes throughout all our services.</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Global Reach</h3>
                <p className="text-base leading-relaxed text-earth-200">With facilities in Indonesia and a sales office in Canada, we can serve customers worldwide with efficient logistics.</p>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Whether you're in the market for a long- or short-term contract, we're looking forward to working with you! Contact us today to discuss your specific requirements and get a customized quote.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="large" className="bg-earth-600 hover:bg-earth-700 border-earth-600 hover:border-earth-700">
                Get A Quote
              </Button>
              <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-army-800">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;





