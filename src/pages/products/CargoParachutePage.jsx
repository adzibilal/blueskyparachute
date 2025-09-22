import React, { useEffect, useRef } from "react";
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

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const specifications = [
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
  ];

  const features = [
    "Reliable cargo delivery system",
    "Military-grade construction",
    "High payload capacity up to 500 lbs",
    "Durable PIA-C-7350 Type I canopy material",
    "32-gore flat circular design",
    "Bi-conical configuration with annular ring",
    "Strong 400 Lbf suspension lines",
    "Olive green military standard color",
    "Complete assembly ready for deployment",
    "Proven performance in various weather conditions"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Cargo Parachute G-14"
        description="Cargo Parachute G-14 - Military-grade cargo delivery parachute with 500 lbs payload capacity. Reliable flat circular design for cargo airdrop operations."
        keywords="cargo parachute, G-14, military cargo, airdrop, cargo delivery, military parachute, payload parachute, cargo drop"
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
                Cargo Parachute G-14
              </motion.h1>
              <motion.p 
                className="text-xl mb-4 text-primary-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Military Cargo Delivery System
              </motion.p>
              <motion.p 
                className="text-lg mb-8 text-primary-200 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Military-grade cargo parachute designed for reliable cargo delivery operations. 
                Features flat circular design with 500 lbs payload capacity for various cargo airdrop missions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => handleDownload("/pdf/CARGO PARACHUTE G-14.pdf", "CARGO PARACHUTE G-14.pdf")}
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
                  src="/images/products/cargo.jpg" 
                  alt="Cargo Parachute G-14"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    // Fallback jika gambar tidak ditemukan
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3ECargo Parachute G-14%3C/text%3E%3C/svg%3E";
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
              G-14 Specifications
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="outline" 
                size="large"
                onClick={() => window.location.href = '/contact'}
                className="border-white text-white hover:bg-white hover:text-primary-800"
              >
                Contact Sales Team
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                onClick={() => handleDownload("/pdf/CARGO PARACHUTE G-14.pdf", "CARGO PARACHUTE G-14.pdf")}
                className="bg-secondary-500 hover:bg-secondary-600"
              >
                Download Specifications
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CargoParachutePage;
