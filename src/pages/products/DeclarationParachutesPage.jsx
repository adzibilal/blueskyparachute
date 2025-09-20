import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/button';
import SEO from '../../components/SEO';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const DeclarationParachutesPage = () => {
  // Refs for animations
  const heroContentRef = useRef(null);
  const sectionsRef = useRef([]);

  // Download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/declaration-parachutes.docx';
    link.download = 'declaration-parachutes.docx';
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
    <>
      <SEO
        title="Declaration Parachutes"
        description="High-performance drag parachutes from PT Langit Biru Parasut. Designed for aircraft and vehicle deceleration, effective for wet runways, emergency landings, and reducing tire and brake wear with various sizes available."
        keywords="declaration parachutes, drag parachutes, aircraft deceleration, vehicle braking, runway parachutes, emergency landing, tire brake protection"
        url="/product/declaration-parachutes"
        type="product"
        product={{
          name: "Declaration Parachutes",
          category: "Aircraft Equipment",
          offers: {
            availability: "in stock",
            priceCurrency: "IDR"
          }
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Declaration Parachutes",
          "description": "High-performance drag parachutes for aircraft and vehicle deceleration",
          "category": "Aircraft Equipment",
          "brand": {
            "@type": "Brand",
            "name": "PT Langit Biru Parasut"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "PT Langit Biru Parasut"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "IDR",
            "seller": {
              "@type": "Organization",
              "name": "PT Langit Biru Parasut"
            }
          }
        }}
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] hero-gradient overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-900/70 z-10"></div>

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
              Declaration Parachutes
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Drag parachutes for vehicles
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
                src="/images/products/declaration.png" 
                alt="Declaration Parachute" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>

            {/* Product Info */}
            <div className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Function and Applications</h2>
              <p className="text-lg leading-relaxed text-secondary-300 mb-8">
                Also known as drag parachutes, used to slow down aircraft or other vehicles, especially effective for landings on wet or slippery runways and high-speed emergency landings. These parachutes help reduce wear on tires and brakes.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features:</h3>
                <ul className="space-y-2">
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Effective braking</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">For wet/slippery runways</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Emergency landings</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Reduces tire wear</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Reduces brake wear</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Various sizes available</li>
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

      {/* Product Applications */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Applications</h2>
            <ul className="space-y-3">
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Slowing down aircraft speed</li>
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Landings on wet/slippery runways</li>
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">High-speed emergency landings</li>
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Reducing tire and brake wear</li>
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Military aircraft operations</li>
            </ul>
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
              Need Drag Parachutes?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact us to get the right drag parachute solutions for your vehicle needs.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default DeclarationParachutesPage;





