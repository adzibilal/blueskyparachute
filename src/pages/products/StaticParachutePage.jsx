import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO";
import Button from "../../components/button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const StaticParachutePage = () => {
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
      name: 'Troop Back Parachute Assembly LBPMC1-1C',
      pdfFile: '1-TROOP BACK PARACHUTE ASSEMBLY - LBPMC1-1C(update123).pdf',
      image: '/images/types/1.png'
    },
    {
      name: 'Personnel Reserve Parachute LBPT-10R',
      pdfFile: '2-PERSONNAL RESERVE PARACHUTE -LBPT-10R(update123).pdf',
      image: '/images/types/2.png'
    },
    {
      name: 'Static Parachute LBP MC1-D1',
      pdfFile: '16-Static Parachute LBP MC1-D1(update123).pdf',
      image: '/images/types/16.png'
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
    // Troop Back Parachute Assembly LBPMC1-1C
    [
    { label: "National Stock Number", value: "1670-00-262-2359" },
    { label: "Part No", value: "111-1-900-2" },
    { label: "Color", value: "Olive Green" },
    { label: "Canopy", value: "11-1-1501-3" },
    { label: "Riser", value: "11-1-2149-1" },
    { label: "Pack", value: "1670 002622359" },
    { label: "Deployment Bag/Static Line", value: "55D6276/55D6481" },
    { label: "Harness", value: "11-1-2143-1" },
    ],
    // Personnel Reserve Parachute LBPT-10R
    [
      { label: "National Stock Number", value: "1670-00-598-0751" },
      { label: "Part No", value: "62C4317-1/62C4317-10" },
      { label: "Color", value: "White - Olive Green" },
      { label: "Canopy", value: "48J7161-2/-3" },
      { label: "Chest Pack", value: "62J4346" },
      { label: "Pilot Chute", value: "49J7161-1/-2" },
    ],
    // Static Parachute LBP MC1-D1
    [
      { label: "Part Number", value: "11-1-900-3" },
      { label: "NSN", value: "1670-01-487-0777" },
      { label: "Canopy", value: "11-1-1501-3" },
      { label: "Riser", value: "11-1-2149-1" },
      { label: "Harness", value: "11-1-2143-1" },
      { label: "Pack Tray", value: "62J4342" },
      { label: "Deployment Bag", value: "11-1-6994-1" },
      { label: "Static Line", value: "USL 15-ft.-11-1-6993-1\nUSL 5-ft Ext.-11-1-6993-2\nSnap hook-11-1-6991-1" },
    ]
  ];

  const specifications = specificationsData[selectedParachute];

  const performanceSpecsData = [
    // Troop Back Parachute Assembly LBPMC1-1C
    [
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
    ],
    // Personnel Reserve Parachute LBPT-10R
    [
      { label: "Suspended Load", value: "360 lbs. (163.3 kg)" },
      { label: "Weight (APP)", value: "12 lbs. (5.4 kg)" },
      { label: "Max. Deployment (A/C SPEED)", value: "130 knots" },
      { label: "Min. Jump Height", value: "500 ft." },
      { label: "Deployment Time", value: "3.3 sec." },
      { label: "Decent Rate", value: "6.5 - 6.7 m/sec." },
      { label: "Shape", value: "Flat Circular" },
      { label: "Canopy Diameter", value: "24 ft. (Nominal)" },
      { label: "Canopy Gores", value: "24" },
      { label: "Suspension Line - SPEC", value: "PIA-C-5040-T/3" },
      { label: "Panels Per Gore", value: "4" },
      { label: "Vent Lines", value: "12" },
      { label: "Suspension Lines", value: "24" },
      { label: "Length of Suspension Line", value: "20.5 ft." },
      { label: "Steering Lines", value: "N/A" },
      { label: "Steering Orifice", value: "N/A" },
      { label: "Pocket Bands", value: "24" },
      { label: "Canopy Material", value: "11 oz. Ripstop Nylon" },
    ],
    // Static Parachute LBP MC1-D1
    [
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
    ]
  ];

  const performanceSpecs = performanceSpecsData[selectedParachute];

  const featuresData = [
    // Troop Back Parachute Assembly LBPMC1-1C
    [
    "International military standards",
    "Multi-layered security system",
    "Ergonomic design",
    "Extreme weather resistant",
    "15° universal static line & 5° extraction static line",
    "Deployment bag with integrated static line",
    "Harness with quick release system",
    "Parabolic shaped canopy for optimal stability"
    ],
    // Personnel Reserve Parachute LBPT-10R
    [
      "Reserve parachute for emergency situations",
      "Chest pack configuration",
      "Flat circular canopy design",
      "Lightweight construction",
      "Quick deployment system",
      "Compatible with military standards",
      "Reliable backup system",
      "Compact size for easy carrying"
    ],
    // Static Parachute LBP MC1-D1
    [
      "Military static line parachute",
      "Proven MC1 design",
      "Parabolic canopy shape",
      "Universal static line system",
      "Deployment bag configuration",
      "Military specification compliance",
      "Enhanced stability and control",
      "Durable construction materials"
    ]
  ];

  const features = featuresData[selectedParachute];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Static Parachutes - Military Grade Parachute Systems"
        description="Static Parachutes collection including Troop Back Parachute LBPMC1-1C, Personnel Reserve Parachute LBPT-10R, and Static Parachute LBP MC1-D1. Military grade parachute systems with international standards and high security."
        keywords="static parachute, military parachute, LBPMC1-1C, LBPT-10R, MC1-D1, static line parachute, airborne operations, military equipment, parachute assembly"
        url="/product/static-parachutes"
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
                Static Parachutes
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
                Complete collection of static parachutes for military operations with international standards and high security. 
                Equipped with integrated deployment bag system and static line for airborne operations.
              </motion.p>
              
              {/* Parachute Type Selector */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex flex-wrap gap-3">
                  {parachuteTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedParachute(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedParachute === index
                          ? 'bg-white text-primary-600 shadow-lg'
                          : 'bg-primary-500/20 text-white hover:bg-primary-500/30'
                      }`}
                    >
                      {type.name.split(' ').slice(-1)[0]}
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

      {/* Download Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div ref={addToSectionsRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 text-center">
              Download Documentation
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Download complete documentation for all our Static Parachutes types
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
                Need More Information?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our technical team is ready to help you with free consultation for selecting the right parachute according to your operational needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  onClick={() => window.location.href = '/services'}
                  className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                >
                  View Our Services
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
              Interested in Static Parachutes?
            </h2>
            <p className="text-xl mb-8 text-primary-200 max-w-3xl mx-auto">
              Contact us for detailed specifications, pricing, and custom requirements for your military operations.
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

export default StaticParachutePage;
