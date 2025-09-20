import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/button';
import SEO from '../../components/SEO';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AirborneTroopParachutesPage = () => {
  // Refs for animations
  const heroContentRef = useRef(null);
  const sectionsRef = useRef([]);

  // Download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/airborne-troops-parachutes.docx';
    link.download = 'airborne-troops-parachutes.docx';
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
        title="Airborne Troop Parachutes"
        description="Professional airborne troop parachutes from PT Langit Biru Parasut. Trusted supplier since 2009 for Indonesian Armed Forces and international clients with T-10 Series, MC1-1 Series, and T10R models for military deployment."
        keywords="airborne troop parachutes, military parachutes, T-10 parachutes, MC1-1 parachutes, troop deployment, military operations, parachute assembly"
        url="/product/airborne-troop-parachutes"
        type="product"
        product={{
          name: "Airborne Troop Parachutes",
          category: "Military Parachutes",
          offers: {
            availability: "in stock",
            priceCurrency: "IDR"
          }
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Airborne Troop Parachutes",
          "description": "Professional airborne troop parachutes for military deployment operations",
          "category": "Military Parachutes",
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
              Airborne Troop's Parachute
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Parachutes for airborne troop deployment
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
                src="/images/products/airbone.png" 
                alt="Airborne Troop Parachute" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>

            {/* Product Info */}
            <div className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Function and History</h2>
              <p className="text-lg leading-relaxed text-secondary-300 mb-8">
                PT. Langit Biru Parasut has been a major supplier of parachutes to the Indonesian Armed Forces and international clients since 2009. They produce various parachute assemblies and reserve systems used by troops worldwide for troop deployment.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Popular Models:</h3>
                <ul className="space-y-2">
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">T-10B, T-10C, T-10D</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">T10R</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">MC1-1B, MC1-1C, MC1-1D, MC1-1E</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Product Features:</h3>
                <ul className="space-y-2">
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Downloadable specifications</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Price quote options</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Meets international military standards</li>
                  <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">Used by troops worldwide</li>
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

      {/* Product Details */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              ref={addToSectionsRef}
              className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">History and Experience</h2>
              <p className="text-lg leading-relaxed text-secondary-300">
                Since 2009, we have been a trusted supplier to the Indonesian Armed Forces and international clients. Our experience in producing various parachute assemblies and reserve systems has made us the preferred choice for troop deployment.
              </p>
            </div>

            <div
              ref={addToSectionsRef}
              className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Applications</h2>
              <ul className="space-y-3">
                <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Airborne troop deployment</li>
                <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Military operations</li>
                <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Troop training</li>
                <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Special operations</li>
                <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">Mass deployment</li>
              </ul>
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
              Need Military-Grade Parachutes?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact us to get special offers and complete specifications of our military parachute products.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AirborneTroopParachutesPage;





