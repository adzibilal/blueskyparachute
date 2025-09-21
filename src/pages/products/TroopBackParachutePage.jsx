import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO";
import Button from "../../components/button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const TroopBackParachutePage = () => {
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/1-TROOP BACK PARACHUTE ASSEMBLY- LBPMC1-1C.pdf';
    link.download = '1-TROOP BACK PARACHUTE ASSEMBLY- LBPMC1-1C.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const specifications = [
    { label: "National Stock Number", value: "1670-00-262-2359" },
    { label: "Part No", value: "111-1-900-2" },
    { label: "Color", value: "Olive Green" },
    { label: "Canopy", value: "11-1-1501-3" },
    { label: "Riser", value: "11-1-2149-1" },
    { label: "Pack", value: "1670 002622359" },
    { label: "Deployment Bag/Static Line", value: "55D6276/55D6481" },
    { label: "Harness", value: "11-1-2143-1" },
  ];

  const performanceSpecs = [
    { label: "Suspended Load", value: "360 lbs. (163.3 kg)" },
    { label: "Weight (APP)", value: "31 lbs. (14 kg)" },
    { label: "Max. Deployment (A/C SPEED)", value: "150 knots" },
    { label: "Min. Jump Height", value: "500 ft." },
    { label: "Deployment Time", value: "2.8 sec" },
    { label: "Decent Rate", value: "4.5 - 5.5 m/sec." },
    { label: "Forward Rate", value: "3.8 - 4.1 m/sec." },
    { label: "Rate of Turn", value: "360° in 7.7 sec." },
    { label: "Shape", value: "Parabolic" },
    { label: "Canopy Diameter", value: "35 Ft. (Nominal) 24.5 Ft. (Skirt)" },
    { label: "Canopy Gores", value: "30" },
    { label: "Suspension Line - SPEC", value: "PIA-C-5040-T/2" },
    { label: "Panels Per Gore", value: "5" },
    { label: "Radial Tapes", value: "30" },
    { label: "Vent Lines", value: "15" },
    { label: "Suspension Lines", value: "30" },
    { label: "Length of Suspension Line", value: "22 - 25 ft." },
    { label: "Steering Lines", value: "2" },
    { label: "Steering Orifice", value: "11 'TU' Type" },
    { label: "Pocket Bands", value: "15" },
    { label: "Canopy Material", value: "1.17 oz.Ripstop Nylon Low0-5 cfm" },
  ];

  const features = [
    "International military standards",
    "Multi-layered security system",
    "Ergonomic design",
    "Extreme weather resistant",
    "15° universal static line & 5° extraction static line",
    "Deployment bag with integrated static line",
    "Harness with quick release system",
    "Parabolic shaped canopy for optimal stability"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Troop Back Parachute Assembly LBPMC1-1C"
        description="Troop Back Parachute Assembly LBPMC1-1C - Parachute assembly for military operations with international standards and high security. Equipped with integrated deployment bag and static line system."
        keywords="troop back parachute, military parachute, LBPMC1-1C, static line parachute, airborne operations, military equipment, parachute assembly"
        url="/product/troop-back-parachute"
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
                Troop Back Parachute Assembly
              </motion.h1>
              <motion.p 
                className="text-xl mb-4 text-primary-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Model: LBPMC1-1C
              </motion.p>
              <motion.p 
                className="text-lg mb-8 text-primary-200 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Parachute assembly for military operations with international standards and high security. 
                Equipped with integrated deployment bag and static line system for airborne operations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={handleDownload}
                  className="bg-primary-500 hover:bg-primary-600 text-white"
                >
                  Download Brochure PDF
                </Button>
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
                  src="/images/products/troops.png" 
                  alt="Troop Back Parachute Assembly LBPMC1-1C"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div ref={addToSectionsRef} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 text-center">
              Product Specifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Basic Information</h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600 font-medium">{spec.label}:</span>
                      <span className="text-primary-800 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Performance Specifications</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {performanceSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-primary-200 pb-2">
                      <span className="text-gray-600 font-medium text-sm">{spec.label}:</span>
                      <span className="text-primary-800 font-semibold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto">
          <div ref={addToSectionsRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              Interested in Troop Back Parachute Assembly?
            </h2>
            <p className="text-xl mb-8 text-primary-200 max-w-3xl mx-auto">
              Contact us for detailed specifications, pricing, and custom requirements for your military operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="large"
                onClick={handleDownload}
                className="bg-secondary-500 hover:bg-secondary-600"
              >
                Download Technical Specs
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => window.location.href = '/contact'}
                className="border-white text-white hover:bg-white hover:text-primary-800"
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TroopBackParachutePage;
