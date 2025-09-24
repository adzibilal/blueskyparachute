import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO";
import Button from "../../components/button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CargoParachutePage = () => {
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
      name: 'CARGO PARACHUTE G-14',
      pdfFile: '3-CARGO PARACHUTE  G-14.pdf',
      image: '/images/types/3.png',
      capacity: '500 Lbs'
    },
    {
      name: 'CARGO PARACHUTE G-1A',
      pdfFile: '11-CARGO PARACHUTE G-1A.pdf',
      image: '/images/types/11.png',
      capacity: '300 LBS (136 KG)'
    },
    {
      name: 'CARGO PARACHUTE G-12D',
      pdfFile: '12-CARGO PARACHUTE G-12D.pdf',
      image: '/images/types/12.png',
      capacity: '2200 LBS (998 KG)'
    },
    {
      name: 'CARGO PARACHUTE G-12E',
      pdfFile: '13-CARGO PARACHUTE G-12E.pdf',
      image: '/images/types/13.png',
      capacity: '2200 LBS (998 KG)'
    },
    {
      name: 'CARGO PARACHUTE G-13A',
      pdfFile: '14-CARGO PARACHUTE G-13A.pdf',
      image: '/images/types/14.png',
      capacity: '500 LBS (227 KG)'
    },
    {
      name: 'CARGO PARACHUTE G-11B',
      pdfFile: '15-CARGO PARACHUTE G-11B.pdf',
      image: '/images/types/15.png',
      capacity: '210 kg'
    },
    {
      name: 'CONTAINER CARGO TYPE A-21',
      pdfFile: '17-CONTAINER CARGO YPE A-21.pdf',
      image: '/images/types/17.png',
      capacity: '500 LBS'
    },
    {
      name: 'CONTAINER CARGO TYPE A-22',
      pdfFile: '18-CONTAINER CARGO YPE A-22.pdf',
      image: '/images/types/18.png',
      capacity: '2200 LBS'
    },
    {
      name: 'Modular Airborne Weapone Case',
      pdfFile: '19-Modular Airbone Weapone Case.pdf',
      image: '/images/types/19.png',
      capacity: 'Variable'
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
    // CARGO PARACHUTE G-14
    [
      { label: "National Stock Number", value: "1670-00-999-2658" },
      { label: "Complete Set", value: "11-1-578" },
      { label: "Part No", value: "G-14" },
      { label: "Color", value: "Olive Green" },
      { label: "Canopy", value: "11-1-579" },
      { label: "Chest Pack", value: "51d6533" },
      { label: "Static Line", value: "11-1-219" },
      { label: "Drogue", value: "61D2459" },
      { label: "Canopy Shape", value: "Flat Circular" },
      { label: "Canopy Design", value: "Bi-Conical with annular ring" },
      { label: "Canopy Length", value: "16 Feet" },
      { label: "Canopy Diameter", value: "34 Feet, Nominal" },
      { label: "Number of Gores", value: "32" },
      { label: "Canopy Material", value: "PIA-C-7350 Type I" },
      { label: "Standard Color", value: "Olive Green" },
      { label: "Suspension Line Material", value: "PIA-C-7515 Type IA" },
      { label: "Suspension Line Length", value: "27.5 Feet" },
      { label: "Suspension Line Tensile Strength", value: "400 Lbf" },
      { label: "Assembled Weight", value: "37 Lbs" },
      { label: "Payload Capacity, Max.", value: "500 Lbs" },
      { label: "Deployment Altitude", value: "600 Feet, AGL" },
    ],
    // CARGO PARACHUTE G-1A
    [
      { label: "National Stock Number", value: "1670-00-242-2530" },
      { label: "Part No", value: "51C6163-1" },
      { label: "Max Suspended Load", value: "300 LBS (136 KG)" },
      { label: "Color", value: "Olive Green" },
      { label: "Weight", value: "19 LBS" },
      { label: "Parachute Type", value: "Solid" },
      { label: "Canopy", value: "B2J3968-1" },
      { label: "D-Bag", value: "51K6194" },
      { label: "Static Line", value: "51C6166" },
      { label: "Drogue", value: "61D2459" },
      { label: "Canopy Shape", value: "Flat Circular" },
      { label: "Diameter", value: "24FT - 7.3M" },
      { label: "Gore", value: "24" },
      { label: "Section / Gore", value: "1" },
      { label: "Material - Canopy", value: "MIL-C-7350-T/1" },
      { label: "Material - Suspension Line", value: "MIL-C-7517-T/4" },
    ],
    // CARGO PARACHUTE G-12D
    [
      { label: "National Stock Number", value: "1670-00-893-2371" },
      { label: "Part No", value: "55A6045" },
      { label: "Max Suspended Load", value: "2200 LBS (998 KG)" },
      { label: "Weight", value: "125 LBS (57 KG)" },
      { label: "Color", value: "Olive Green" },
      { label: "Parachute Type", value: "Solid" },
      { label: "Canopy", value: "48K6076" },
      { label: "D-Bag", value: "58J6100" },
      { label: "Static Line", value: "59J6171" },
      { label: "Riser", value: "51D6183" },
      { label: "Pilot Chute", value: "53E6803" },
      { label: "Center Line", value: "X" },
      { label: "Canopy Shape", value: "Flat Circular" },
      { label: "Diameter", value: "64FT-19.5m" },
      { label: "Gore", value: "64" },
      { label: "Section / Gore", value: "8" },
      { label: "Material - Canopy", value: "MIL-C-7350-T/1" },
      { label: "Material - Suspension Line", value: "MIL-C-7515-T/4" },
      { label: "Difference", value: "No centerline." },
    ],
    // CARGO PARACHUTE G-12E
    [
      { label: "National Stock Number", value: "1670-01-065-3755" },
      { label: "Part No", value: "11-1-2620" },
      { label: "Max Suspended Load", value: "2200 LBS (998 KG)" },
      { label: "Weight", value: "125 LBS (57 KG)" },
      { label: "Color", value: "Olive Green" },
      { label: "Parachute Type", value: "Solid" },
      { label: "Canopy", value: "48K6076" },
      { label: "D-Bag", value: "58J6100" },
      { label: "Static Line", value: "59J6171" },
      { label: "Riser", value: "51D6183" },
      { label: "Pilot Chute", value: "53E6803" },
      { label: "Center Line", value: "57 FT" },
      { label: "Canopy Shape", value: "Flat Circular" },
      { label: "Diameter", value: "64FT-19.5m" },
      { label: "Gore", value: "64" },
      { label: "Section / Gore", value: "8" },
      { label: "Material - Canopy", value: "MIL-C-7350-T/1" },
      { label: "Material - Suspension Line", value: "MIL-C-7350-T/1" },
      { label: "Difference", value: "Uses 57-foot Centerline ti pull down Canopy Vent" },
    ],
    // CARGO PARACHUTE G-13A
    [
      { label: "National Stock Number", value: "1670-00-098-43535" },
      { label: "Part No", value: "51B7280" },
      { label: "Max Suspended Load", value: "500 LBS (227 KG)" },
      { label: "Weight", value: "37.5 LBS" },
      { label: "Color", value: "Olive Green" },
      { label: "Parachute Type", value: "Solid" },
      { label: "Canopy", value: "51J7069" },
      { label: "D-Bag", value: "51D6553" },
      { label: "Static Line", value: "11-1-219" },
      { label: "Drogue", value: "61D2459" },
      { label: "Canopy Shape", value: "Para Bolic" },
      { label: "Diameter", value: "32.5FT - 9.9M" },
      { label: "Gore", value: "20" },
      { label: "Section / Gore", value: "5" },
      { label: "Material - Canopy", value: "MIL-C-7350-T/1" },
      { label: "Material - Canopy", value: "MIL-C-7515-T/4" },
    ],
    // CARGO PARACHUTE G-11B
    [
      { label: "National Stock Number", value: "1670-01-016-7841" },
      { label: "Part No", value: "11-1-2566" },
      { label: "Canopy", value: "11-1-2567" },
      { label: "Suspension Line", value: "PIA-C-5040 Type III" },
      { label: "Average Vertical Speed Full Glide", value: "3.44 m/s" },
      { label: "Average Vertical Speed - 30% Brake", value: "2.79" },
      { label: "Surface", value: "420 sq.ft." },
      { label: "Number of Cells", value: "9" },
      { label: "Aspect Ratio", value: "2.7" },
      { label: "Glide Ratio Full Glide", value: "3.5" },
      { label: "Glide Ratio - 30% Brake", value: "3.8" },
      { label: "Section / Gore", value: "5" },
      { label: "Forward Speed Full Glide", value: "12.60 m/s" },
      { label: "Forward Speed - 30% Brake", value: "11.40 m/s" },
      { label: "Horizontal Speed Full Glide", value: "12.50 m/s" },
      { label: "Resistance Test Payload", value: "-" },
      { label: "Max. Deployment Velocity", value: "150kt" },
      { label: "Max. Deployment Altitude", value: "25000 ft" },
      { label: "Maximum Payload Capacity", value: "210 kg" },
    ],
    // CONTAINER CARGO TYPE A-21
    [
      { label: "National Stock Number", value: "1670-00-024-29173" },
      { label: "Part No", value: "51C6739" },
      { label: "Capacity", value: "500 LBS" },
      { label: "Size", value: "25\" * 35\" * 40\"" },
      { label: "Material", value: "Nylon Webbing PIA-4088-T/13" },
      { label: "Remark", value: "1-Quick Release Box" },
    ],
    // CONTAINER CARGO TYPE A-22
    [
      { label: "National Stock Number", value: "1670-00-242-9169" },
      { label: "Part No", value: "50B7702" },
      { label: "Capacity", value: "2200 LBS" },
      { label: "Size", value: "43\" * 51\" * 70\"" },
      { label: "Material", value: "Nylon Webbing PIA-4088-T/13" },
      { label: "Remark", value: "1-Quick Release Box" },
    ],
    // Modular Airborne Weapone Case
    [
      { label: "Product Features", value: "Compresses in length and width" },
      { label: "Functionality", value: "Hold a wide range of weapons systems" },
      { label: "Design", value: "Carries both weapon and additional equipment" },
      { label: "Protection", value: "Padded on all sides to protect weapon and optics" },
      { label: "Mounting", value: "Adjustable single point of attachment - fits all systems and jumpers • internal MOLLE system" },
      { label: "Carry Handle", value: "Light weight case with external carry handle" },
      { label: "Lowering System", value: "Lowering line attachment point - drop tested with 105 LBS load @ 12G" },
      { label: "Divider", value: "Internal padded divider to protect weapon from accessories" },
      { label: "Size Options", value: "Available in 2 Size" },
      { label: "Small Size", value: "31-41 in (79-104cm) Length 8-12 in (20-30 cm) width" },
      { label: "Large Size", value: "40-51 in (102-130cm) Length 10-15 in (25-38 cm) Width" },
    ]
  ];

  const specifications = specificationsData[selectedParachute];

  const featuresData = [
    // CARGO PARACHUTE G-14
    [
      "Reliable cargo delivery system",
      "Military-grade construction",
      "High payload capacity up to 500 lbs",
      "Durable PIA-C-7350 Type I canopy material",
      "32-gore flat circular design",
      "Bi-conical configuration with annular ring",
      "Strong 400 Lbf suspension lines",
      "Olive green military standard color"
    ],
    // CARGO PARACHUTE G-1A
    [
      "Lightweight cargo delivery system",
      "300 lbs payload capacity",
      "Compact 24FT diameter design",
      "Solid parachute type configuration",
      "Military specification materials",
      "Flat circular canopy shape",
      "Single section per gore design",
      "Proven reliability for small cargo drops"
    ],
    // CARGO PARACHUTE G-12D
    [
      "Heavy-duty cargo delivery system",
      "Maximum 2200 lbs payload capacity",
      "Large 64FT diameter canopy",
      "64-gore flat circular design",
      "No centerline configuration",
      "MIL-C-7350-T/1 canopy material",
      "8 sections per gore construction",
      "Ideal for heavy equipment drops"
    ],
    // CARGO PARACHUTE G-12E
    [
      "Advanced heavy cargo system",
      "2200 lbs maximum payload",
      "Enhanced with 57-foot centerline",
      "Pull-down canopy vent system",
      "64FT diameter flat circular design",
      "Improved deployment characteristics",
      "Military grade construction",
      "Superior landing control"
    ],
    // CARGO PARACHUTE G-13A
    [
      "Parabolic cargo delivery system",
      "500 lbs payload capacity",
      "Unique parabolic canopy shape",
      "32.5FT diameter design",
      "20-gore construction",
      "Enhanced glide characteristics",
      "Precision landing capability",
      "Improved forward speed control"
    ],
    // CARGO PARACHUTE G-11B
    [
      "High-performance cargo glider",
      "210 kg maximum payload",
      "9-cell ram-air design",
      "420 sq.ft. surface area",
      "Superior glide ratio (3.5-3.8)",
      "Variable speed control",
      "Advanced maneuvering capability",
      "Precision cargo delivery"
    ],
    // CONTAINER CARGO TYPE A-21
    [
      "Compact cargo container system",
      "500 lbs capacity",
      "25\" x 35\" x 40\" dimensions",
      "Nylon webbing construction",
      "Quick release box system",
      "Lightweight and durable",
      "Easy packing and deployment",
      "Military specification compliance"
    ],
    // CONTAINER CARGO TYPE A-22
    [
      "Large capacity container system",
      "2200 lbs maximum capacity",
      "43\" x 51\" x 70\" dimensions",
      "Heavy-duty nylon webbing",
      "Quick release mechanism",
      "High-volume cargo capability",
      "Robust construction",
      "Suitable for heavy equipment"
    ],
    // Modular Airborne Weapone Case
    [
      "Modular weapon carrying system",
      "Adjustable length and width",
      "Accommodates various weapon systems",
      "Padded protection for optics",
      "Internal MOLLE system",
      "Lowering line capability",
      "Drop tested to 105 LBS @ 12G",
      "Available in two sizes"
    ]
  ];

  const features = featuresData[selectedParachute];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Cargo Parachutes - Military Cargo Delivery Systems"
        description="Professional cargo parachutes including G-14, G-1A, G-12D, G-12E, G-13A, G-11B, Container A-21/A-22, and Modular Weapon Case. Military-grade cargo delivery systems for various payload capacities."
        keywords="cargo parachute, G-14, G-1A, G-12D, G-12E, G-13A, G-11B, military cargo, airdrop, cargo delivery, container cargo, modular case, payload parachute"
        url="/product/cargo-parachute"
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
                Cargo Parachutes
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
                Professional cargo delivery systems designed for military and civilian cargo airdrop operations. 
                Complete range from light to heavy payload capacities with advanced deployment technologies.
              </motion.p>
              
              {/* Parachute Type Selector */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                  {parachuteTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedParachute(index)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        selectedParachute === index
                          ? 'bg-white text-primary-600 shadow-lg'
                          : 'bg-primary-500/20 text-white hover:bg-primary-500/30'
                      }`}
                    >
                      {type.name.includes('G-') ? type.name.split(' ').slice(-1)[0] : 
                       type.name.includes('A-') ? type.name.split(' ').slice(-1)[0] :
                       type.name.includes('Modular') ? 'MAWC' : type.name.split(' ').slice(-1)[0]}
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
                  onError={(e) => {
                    // Fallback jika gambar tidak ditemukan
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3E" + encodeURIComponent(parachuteTypes[selectedParachute].name) + "%3C/text%3E%3C/svg%3E";
                  }}
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
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-6xl mx-auto">
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
              Download complete documentation for all our Cargo Parachutes and delivery systems
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
                    
                    <h3 className="text-lg font-bold text-primary-800 mb-2 min-h-[3rem] flex items-center justify-center text-center">
                      {parachute.name}
                    </h3>
                    
                    <div className="text-sm text-primary-600 font-semibold mb-4">
                      Capacity: {parachute.capacity}
                    </div>
                    
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
                Need Custom Cargo Solutions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our engineering team can design custom cargo delivery systems tailored to your specific payload requirements and mission parameters
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  Request Custom Solution
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  onClick={() => window.location.href = '/services'}
                  className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                >
                  View Engineering Services
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
              Need Cargo Delivery Solutions?
            </h2>
            <p className="text-xl mb-8 text-primary-200 max-w-3xl mx-auto">
              Contact us for detailed specifications, payload requirements, and custom cargo parachute solutions for your operations.
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

export default CargoParachutePage;
