import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO";
import Button from "../../components/button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const PersonalReserveParachutePage = () => {
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
    link.href = '/pdf/9-EMERGENCY PARACHUTE BA-22.pdf';
    link.download = '9-EMERGENCY PARACHUTE BA-22.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const specifications = [
    { label: "Complete Set", value: "50C7024-22" },
    { label: "Nato Stock Number", value: "1670 009400787" },
    { label: "Pilot Chute", value: "53J7205" },
    { label: "Canopy Assembly", value: "50E6877-3" },
    { label: "Harness & Container", value: "65K1533-101" },
    { label: "Riser", value: "64D2167" },
    { label: "Deployment Bag", value: "57T6021" },
    { label: "Bridle Line", value: "58D6353" },
    { label: "Cushion", value: "53D6353" },
    { label: "Disc Assembly", value: "53B7106" },
    { label: "Ripcord Assembly", value: "51B7751" },
  ];

  const performanceSpecs = [
    { label: "Canopy Shape", value: "Flat Circular - C-9" },
    { label: "Canopy Diameter (FT)", value: "28, Nominal" },
    { label: "Number of Gores", value: "28" },
    { label: "Canopy Material", value: "PIA-C-7020 Type 1" },
    { label: "Suspension Lines", value: "PIA-C-5040" },
    { label: "Suspension Line Length", value: "Type III" },
    { label: "Suspension Line Tensile Strength (LBS)", value: "22 FT, 10 IN" },
    { label: "Rate of Descent (FPS)", value: "550" },
    { label: "Assembly Weight", value: "18-20" },
  ];

  const features = [
    "Emergency deployment system for critical situations",
    "28-gore flat circular design for maximum stability",
    "28 ft nominal diameter for reliable descent",
    "PIA-C-7020 Type 1 military grade canopy material",
    "PIA-C-5040 suspension line specification",
    "22 ft 10 in suspension line length",
    "550 FPS descent rate for safe landing",
    "Lightweight 18-20 lbs assembly weight",
    "Complete emergency parachute system",
    "Proven reliability in emergency situations"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Emergency Parachute BA-22"
        description="Emergency Parachute BA-22 - Professional emergency parachute system for critical situations. Military-grade construction with 28-gore flat circular design and reliable deployment system."
        keywords="emergency parachute, BA-22, emergency deployment, military parachute, safety equipment, flat circular parachute, emergency system"
        url="/product/personal-reserve-parachute"
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
                Emergency Parachute
              </motion.h1>
              <motion.p 
                className="text-xl mb-4 text-primary-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Model: BA-22
              </motion.p>
              <motion.p 
                className="text-lg mb-8 text-primary-200 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Professional emergency parachute system designed for critical situations and emergency deployment. 
                Features military-grade construction with reliable 28-gore flat circular design for maximum safety.
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
                  src="/images/types/10.png" 
                  alt="Emergency Parachute BA-22"
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
              Interested in Emergency Parachute?
            </h2>
            <p className="text-xl mb-8 text-primary-200 max-w-3xl mx-auto">
              Contact us for detailed specifications, pricing, and custom requirements for your emergency safety equipment needs.
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

export default PersonalReserveParachutePage;
