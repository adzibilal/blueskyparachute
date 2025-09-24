import React, { useEffect, useRef, useState } from "react";
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

  const [selectedParachute, setSelectedParachute] = useState(0);

  const parachuteTypes = [
    {
      name: 'LBP Startrac 2.0 FREEFALL 245',
      pdfFile: '4-LBP Startrac 2 0 FREEFALL 245.pdf',
      image: '/images/types/4.png',
      area: '245 Sq. ft.'
    },
    {
      name: 'LBP Startrac 2.0 FREEFALL 265',
      pdfFile: '5-LBP Startrac 2 0 FREEFALL 265.pdf',
      image: '/images/types/5.png',
      area: '265 Sq. ft.'
    },
    {
      name: 'LBP Startrac 2.0 FREEFALL 290',
      pdfFile: '6-LBP Startrac 2 0 FREEFALL 290.pdf',
      image: '/images/types/6.png',
      area: '290 Sq. ft.'
    },
    {
      name: 'LBP Startrac 2.0 FREEFALL 320',
      pdfFile: '7-LBP Startrac 2 0 FREEFALL 320.pdf',
      image: '/images/types/7.png',
      area: '320 Sq. ft.'
    },
    {
      name: 'FREEFALL MC-4',
      pdfFile: '8-FREEFALL MC-4.pdf',
      image: '/images/types/8.png',
      area: '370 Sq. Feet'
    },
    {
      name: 'FREEFALL CAMAR LBP-4',
      pdfFile: '9-FREEFALL CAMAR LBP-4.pdf',
      image: '/images/types/9.png',
      area: '290 Sq. FT'
    }
  ];

  const handleDownload = (pdfFile) => {
    const link = document.createElement('a');
    link.href = `/pdf/${pdfFile}`;
    link.download = pdfFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const specificationsData = [
    // LBP Startrac 2.0 FREEFALL 245
    [
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
    ],
    // LBP Startrac 2.0 FREEFALL 265
    [
      { label: "Lift/Drag Ratio", value: "2.5 to 1" },
      { label: "Span", value: "23.4 ft." },
      { label: "Chord", value: "11.5 ft" },
      { label: "Area", value: "265 Sq. ft." },
      { label: "Max. suspended weight", value: "291 lbs." },
      { label: "Forward speed", value: "18 - 22 mph" },
      { label: "Rate of descent", value: "" },
      { label: "Full Flight", value: "16 - 20 ft./sec." },
      { label: "50% Brakes", value: "8 to 12 ft./sec." },
      { label: "100% Brakes", value: "2 to 8 ft./sec." },
      { label: "Fully Flared Landing Touchdown", value: "0 to 2 ft./sec. (if executed properly)" },
      { label: "Canopy cloth", value: "F-111 (1.1oz Ripstop Nylon)" },
      { label: "Suspension Lines", value: "900 lbs. Dacron Line" },
      { label: "Max Jump Altitudes (Exit from plane)", value: "35,000 ft AGL" },
      { label: "Max Jump Speed (Exit from plane)", value: "160 KIAS" },
      { label: "Deployment Altitude (Recommended)", value: "Max 20,000 ft AGL, Min 2,000 ft AGL" },
      { label: "Deployment Velocity Range", value: "130-150 KIAS" },
    ],
    // LBP Startrac 2.0 FREEFALL 290
    [
      { label: "Lift/Drag Ratio", value: "2.5 to 1" },
      { label: "Span", value: "24.5 ft." },
      { label: "Chord", value: "12.1 ft" },
      { label: "Area", value: "290 Sq. ft." },
      { label: "Max. suspended weight", value: "319 lbs." },
      { label: "Forward speed", value: "18 - 22 mph" },
      { label: "Rate of descent", value: "" },
      { label: "Full Flight", value: "16 - 20 ft./sec." },
      { label: "50% Brakes", value: "8 to 12 ft./sec." },
      { label: "100% Brakes", value: "2 to 8 ft./sec." },
      { label: "Fully Flared Landing Touchdown", value: "0 to 2 ft./sec. (if executed properly)" },
      { label: "Canopy cloth", value: "F-111 (1.1oz Ripstop Nylon)" },
      { label: "Suspension Lines", value: "900 lbs. Dacron Line" },
      { label: "Max Jump Altitudes (Exit from plane)", value: "35,000 ft AGL" },
      { label: "Max Jump Speed (Exit from plane)", value: "160 KIAS" },
      { label: "Deployment Altitude (Recommended)", value: "Max 20,000 ft AGL, Min 2,000 ft AGL" },
      { label: "Deployment Velocity Range", value: "130-150 KIAS" },
    ],
    // LBP Startrac 2.0 FREEFALL 320
    [
      { label: "Lift/Drag Ratio", value: "2.5 to 1" },
      { label: "Span", value: "25.2 ft" },
      { label: "Chord", value: "12.7 ft." },
      { label: "Area", value: "320 Sq. ft." },
      { label: "Max. suspended weight", value: "360 lbs" },
      { label: "Forward speed", value: "18 - 22 mph" },
      { label: "Rate of descent", value: "" },
      { label: "Full Flight", value: "16 - 20 ft./sec." },
      { label: "50% Brakes", value: "8 to 12 ft./sec." },
      { label: "100% Brakes", value: "2 to 8 ft./sec." },
      { label: "Fully Flared Landing Touchdown", value: "0 to 2 ft./sec. (if executed properly)" },
      { label: "Canopy cloth", value: "F-111 (1.1oz Ripstop Nylon)" },
      { label: "Suspension Lines", value: "900 lbs. Dacron Line" },
      { label: "Max Jump Altitudes (Exit from plane)", value: "35,000 ft AGL" },
      { label: "Max Jump Speed (Exit from plane)", value: "160 KIAS" },
      { label: "Deployment Altitude (Recommended)", value: "Max 20,000 ft AGL, Min 2,000 ft AGL" },
      { label: "Deployment Velocity Range", value: "130-150 KIAS" },
    ],
    // FREEFALL MC-4
    [
      { label: "L/D", value: "3 to 1" },
      { label: "Span", value: "28.5 Feet" },
      { label: "Chord", value: "13.0 Feet" },
      { label: "Area", value: "370 Sq. Feet" },
      { label: "Max. suspended weight", value: "360 lbs" },
      { label: "Forward speed", value: "10 - 25 Mph" },
      { label: "Rate of descent", value: "Variable Full Flight to Fully Flared Landing" },
      { label: "Full Flight", value: "14 - 18 Fps With Brakes" },
      { label: "50% Brakes", value: "6 to 10 Fps" },
      { label: "100% Brakes", value: "2 to 6 Fps" },
      { label: "Fully Flared Landing Touchdown", value: "0 to 4 Fps ( if executed properly )" },
      { label: "Deployment Altitude", value: "0-150 KIAS" },
      { label: "Canopy cloth", value: "Mil-C-44378 0-5 CFM (F-111)" },
      { label: "Suspension Lines", value: "Braided Polyester" },
      { label: "Maximum Altitude", value: "30,000 Ft" },
      { label: "Minimum Altitude", value: "2000 Ft" },
    ],
    // FREEFALL CAMAR LBP-4
    [
      { label: "L/D", value: "4.2 to 1" },
      { label: "Span", value: "24.7 FT (7.5 M" },
      { label: "Chord", value: "11.3 FT (3.4 M)" },
      { label: "Area", value: "290 Sq. FT" },
      { label: "Max. suspended weight", value: "360 lbs" },
      { label: "Forward speed", value: "15-25 MPH" },
      { label: "Rate of descent", value: "" },
      { label: "Full Flight", value: "14-20 FPS" },
      { label: "50% Brakes", value: "9-15 FPS" },
      { label: "100% Brakes", value: "3-4 FPS" },
      { label: "Canopy Material", value: "NYLON RIPSTOP" },
      { label: "Deployment Altitude", value: "0-150 KIAS" },
      { label: "Suspension Lines", value: "Polyester Braided" },
      { label: "Altitude Range", value: "20,000 FT AGL - 25,000 FT MSL" },
      { label: "Max. Deployment Velocity", value: "150 KIAS" },
      { label: "Reliability (Approx)", value: "0.999 to 99.5 %" },
    ]
  ];

  const specifications = specificationsData[selectedParachute];

  // Remove old availableSizes array as it's now part of parachuteTypes

  const featuresData = [
    // LBP Startrac 2.0 FREEFALL 245
    [
      "Full pilot control for precision maneuvers",
      "Structured wing design for optimal performance",
      "Responsive steering lines for directional control",
      "High safety standards for skydiving",
      "Ram-air design for best lift and glide ratio",
      "High-quality F-111 Ripstop Nylon material",
      "900 lbs Dacron suspension lines for maximum strength",
      "Compact 245 sq ft area for lighter pilots"
    ],
    // LBP Startrac 2.0 FREEFALL 265
    [
      "Full pilot control for precision maneuvers",
      "Structured wing design for optimal performance",
      "Responsive steering lines for directional control",
      "High safety standards for skydiving",
      "Ram-air design for best lift and glide ratio",
      "High-quality F-111 Ripstop Nylon material",
      "900 lbs Dacron suspension lines for maximum strength",
      "Medium 265 sq ft area for standard weight pilots"
    ],
    // LBP Startrac 2.0 FREEFALL 290
    [
      "Full pilot control for precision maneuvers",
      "Structured wing design for optimal performance",
      "Responsive steering lines for directional control",
      "High safety standards for skydiving",
      "Ram-air design for best lift and glide ratio",
      "High-quality F-111 Ripstop Nylon material",
      "900 lbs Dacron suspension lines for maximum strength",
      "Large 290 sq ft area for heavier pilots"
    ],
    // LBP Startrac 2.0 FREEFALL 320
    [
      "Full pilot control for precision maneuvers",
      "Structured wing design for optimal performance",
      "Responsive steering lines for directional control",
      "High safety standards for skydiving",
      "Ram-air design for best lift and glide ratio",
      "High-quality F-111 Ripstop Nylon material",
      "900 lbs Dacron suspension lines for maximum strength",
      "Extra large 320 sq ft area for maximum load capacity"
    ],
    // FREEFALL MC-4
    [
      "Military-grade freefall parachute system",
      "Variable full flight to fully flared landing",
      "Advanced ram-air design with superior L/D ratio",
      "Braided polyester suspension lines",
      "Mil-C-44378 0-5 CFM (F-111) canopy material",
      "Maximum altitude capability up to 30,000 ft",
      "Proven military specification compliance",
      "Enhanced maneuverability and control"
    ],
    // FREEFALL CAMAR LBP-4
    [
      "Exceptional 4.2:1 lift-to-drag ratio",
      "Advanced CAMAR design technology",
      "Nylon ripstop canopy construction",
      "Polyester braided suspension lines",
      "High reliability rate (0.999 to 99.5%)",
      "Extended altitude range capability",
      "Optimized for precision landing",
      "Professional grade performance"
    ]
  ];

  const features = featuresData[selectedParachute];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Freefall Parachutes - Professional Skydiving Equipment"
        description="Professional freefall parachutes including LBP Startrac 2.0 series (245, 265, 290, 320 sq ft), MC-4, and CAMAR LBP-4. High-performance ram-air parachutes for sports and military applications."
        keywords="freefall parachute, LBP Startrac 2.0, MC-4, CAMAR LBP-4, skydiving parachute, sport parachute, ram-air parachute, recreational parachute, canopy pilot, military parachute"
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
                Freefall Parachutes
              </motion.h1>
              <motion.p 
                className="text-xl mb-4 text-primary-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {parachuteTypes[selectedParachute].name}
              </motion.p>
              <motion.p 
                className="text-lg mb-8 text-primary-200 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Professional freefall parachutes for sports, recreation, and military applications with full control for canopy pilots. 
                Ram-air design with high performance for optimal skydiving experience.
              </motion.p>
              
              {/* Parachute Type Selector */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {parachuteTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedParachute(index)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                        selectedParachute === index
                          ? 'bg-white text-primary-600 shadow-lg'
                          : 'bg-primary-500/20 text-white hover:bg-primary-500/30'
                      }`}
                    >
                      {type.name.includes('Startrac') ? type.area : type.name.split(' ').slice(-1)[0]}
                    </button>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => handleDownload(parachuteTypes[selectedParachute].pdfFile)}
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
                  src={parachuteTypes[selectedParachute].image} 
                  alt={parachuteTypes[selectedParachute].name}
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
              {parachuteTypes[selectedParachute].name} Specifications
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

      {/* Download Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div ref={addToSectionsRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 text-center">
              Download Documentation
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Download complete documentation for all our Freefall Parachutes types
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parachuteTypes.map((parachute, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-lg font-bold text-primary-800 mb-2 min-h-[3rem] flex items-center justify-center">
                      {parachute.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-6">
                      Complete technical documentation including specifications, usage instructions, and maintenance guidelines
                    </p>
                    
                    <Button 
                      variant="primary"
                      size="medium"
                      onClick={() => handleDownload(parachute.pdfFile)}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3M4 12h16" />
                        </svg>
                        <span>Download PDF</span>
                      </div>
                    </Button>
                    
                    <div className="mt-3 text-xs text-gray-500">
                      PDF File • Official Documentation
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Download Info */}
            <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                Need Expert Guidance?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our certified instructors and technical team are ready to help you choose the right parachute size and configuration for your skill level and jumping conditions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  Get Expert Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  onClick={() => window.location.href = '/services'}
                  className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                >
                  View Training Programs
                </Button>
              </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="large"
                onClick={() => handleDownload(parachuteTypes[selectedParachute].pdfFile)}
                className="bg-secondary-500 hover:bg-secondary-600"
              >
                Download Technical Specifications
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

export default FreefallParachutePage;
