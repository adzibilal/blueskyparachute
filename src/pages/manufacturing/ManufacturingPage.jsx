import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../../components/SEO';

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
      <SEO
        title="Manufacturing"
        description="Blue Sky Parachutes manufacturing facilities use cutting-edge technology and international standards to produce high-quality parachutes. Our strict production processes ensure the safety and reliability of every parachute product."
        keywords="parachute manufacturing, parachute factory, parachute production, parachute facilities, parachute technology, international parachute standards, parachute quality control"
        url="/manufacturing"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Manufacturing - Blue Sky Parachutes",
          "description": "Blue Sky Parachutes manufacturing facilities with cutting-edge technology and international standards",
          "url": "https://blueskyparachute.com/manufacturing",
          "about": {
            "@type": "ManufacturingProcess",
            "name": "Parachute Manufacturing Process",
            "description": "Parachute manufacturing process with cutting-edge technology and international standards"
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-camo overflow-hidden">
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

      {/* Parachute Manufacturing */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Parachute Manufacturing</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              Our parachutes ensure that every landing is successful. With our expertise and machinery, we've made these lifesaving devices for the better part of a century. It's an honor to protect those who put their lives on the line for the safety of others.
            </p>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              A duly registered and certified company, Blue Sky Parachutes meets international quality standards and regulatory requirements. We make military parachutes and ancillary items for our international customers to the same strict standards as those for the Indonesian Military. All of our products are subject to the Indonesian Department of Commerce Export Administration Regulations under the Commerce Control List (CCL) 9A018 – "Equipment on the International Munitions List."
            </p>
            <p className="text-lg leading-relaxed text-earth-300">
              Because our 50,000-square feet of facilities are located near major Air and Sea ports, we can coordinate efficient shipments to destinations around the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Parachute Models */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={addToSectionsRef}
              className="order-2 lg:order-1"
            >
              <div className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Popular Parachute Models</h2>
                <p className="text-lg leading-relaxed text-earth-300 mb-6">
                  Worldwide, parachutes help ensure safe descents and there are many models to choose from. Forces around the world rely on personnel parachutes to safely land troops. Our most popular airborne troop parachutes are:
                </p>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-3 p-4 bg-army-600 rounded-lg border border-army-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-2 h-2 bg-earth-400 rounded-full"></div>
                    <span className="text-white font-medium">T-10B, T-10C, T-10D, T10R</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3 p-4 bg-army-600 rounded-lg border border-army-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-2 h-2 bg-earth-400 rounded-full"></div>
                    <span className="text-white font-medium">MC1-1B, MC1-1C, MC1-1D, & MC1-1E</span>
                  </motion.div>
                </div>
              </div>
            </div>
            <div
              ref={addToSectionsRef}
              className="order-1 lg:order-2"
            >
              <div className="bg-army-700 p-4 rounded-2xl shadow-lg border border-army-700">
                <img 
                  src="/images/manufacture/172191656877.jpg" 
                  alt="Parachute Manufacturing" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Parachutes */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Cargo & Recovery Operations</h2>
            <p className="text-lg leading-relaxed text-earth-300 max-w-4xl mx-auto">
              When it comes to airdrop and recovery operations, cargo parachutes are critical. Extraction parachutes can pull out loads ranging from 2,500 to 10,000 lbs, depending on the aircraft type. Most deceleration parachutes we manufacture are procured by the Indonesian Air Force and many other countries. We can also manufacture custom military parachutes as requested.
            </p>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Products</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Personnel Static Line Parachute Assemblies including steerable and non-steerable.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">High Accuracy Tactical Free Fall Parachute Systems.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">HAHO and HALO Operations.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Accuracy Parachute Systems.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Retardation Parachutes for Munitions.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Sport Parachute System for training, competition, and recreational use.</span>
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Compatible Reserve Assemblies.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Static Line.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Freefall.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Cargo Aerial Delivery Parachutes.</span>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 p-4 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-2 h-2 bg-earth-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-earth-200 leading-relaxed">Special End Use Parachutes e.g., Aircraft Retardation, UAV Recovery, etc.</span>
                </motion.div>
              </div>
            </div>
            
            {/* Product Image */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-army-600 p-4 rounded-2xl shadow-lg border border-army-500">
                <img 
                  src="/images/manufacture/products.jpeg" 
                  alt="Parachute Products" 
                  className="w-72 h-auto rounded-lg"
                  style={{width: '290px'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Certificates</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="space-y-6">
                <motion.div 
                  className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Defence Industry Registration</h3>
                  <p className="text-earth-200 leading-relaxed">DEFENCE INDUSTRY REGISTRATION CERTIFICATE: SP/73/VIII/DJPOT</p>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">IMAA Certifications</h3>
                  <p className="text-earth-200 mb-3">Indonesia Military Airworthiness Authority:</p>
                  <div className="space-y-2 text-sm text-earth-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>MILITARY TROOPER STATIC PARACHUTE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>MILITARY TROOPER FREEFALL & SUPPORT PARACHUTE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>CARGO PARACHUTE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>RECOVERY PARACHUTE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>RESCUE PARACHUTE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>ILLUMINATION AND FLAME PARACHUTE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>DRAGCHUTE AND BOMB CARRIERS PARACHUTE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>AIRTEP</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-earth-400 rounded-full"></div>
                      <span>ACCESSORIES OF MILITARY PARACHUTING</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Production Certificate</h3>
                  <p className="text-earth-200 leading-relaxed">PRODUCTION CERTIFICATE: S1 PROD 74/VIII/2020/DJPOT</p>
                </motion.div>
                
                <motion.div 
                  className="p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Test Certificates</h3>
                  <p className="text-earth-200 leading-relaxed">TEST CERTIFICATE: Dislitbang AD 2011, Dislitbang AU 2012-2019</p>
                </motion.div>
                
                {/* Certificate Image */}
                <div className="text-center">
                  <div className="inline-block bg-army-600 p-4 rounded-2xl shadow-lg border border-army-500">
                    <img 
                      src="/images/manufacture/certificate.jpeg" 
                      alt="Certificate" 
                      className="w-72 h-auto rounded-lg"
                      style={{width: '290px'}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-army-800 via-army-700 to-army-600 text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Whether you're in the market for a long- or short-term contract, we're looking forward to working with you!
              </motion.h2>
            </motion.div>
            <motion.div
              className="lg:col-span-1 text-center lg:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-army-900 hover:bg-army-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-army-600 hover:border-army-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get A Quote
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingPage;





