import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../components/button";
import SEO from "../../components/SEO";
import { 
  FaIndustry, 
  FaTools, 
  FaFlask, 
  FaClipboardList, 
  FaShippingFast, 
  FaGraduationCap 
} from "react-icons/fa";

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
      <SEO
        title="Services"
        description="Blue Sky Parachutes provides comprehensive parachute manufacturing and related services to military and civilian customers worldwide. Our expertise spans decades of experience in the defense industry."
        keywords="parachute services, military parachute manufacturing, parachute repair, parachute maintenance, industrial sewing services, government parachute contractor"
        url="/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Services - Blue Sky Parachutes",
          description:
            "Blue Sky Parachutes comprehensive services for military and civilian customers worldwide",
          url: "https://blueskyparachute.com/services",
          about: {
            "@type": "Service",
            name: "Parachute Manufacturing Services",
            description:
              "Comprehensive parachute manufacturing and related services for military and civilian customers",
          },
        }}
      />
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

      {/* Industries Served */}
      <section className="py-20 bg-primary-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div ref={addToSectionsRef} className="order-2 lg:order-1">
              <div className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Industries Served: Government and Military
                </h2>
                <p className="text-lg leading-relaxed text-secondary-300 mb-6">
                  Founded in Jakarta, Indonesia in 2012, Blue Sky Parachute
                  Manufacturing relocated in 2015 after securing a substantial
                  parachute contract to support the Indonesian Military. While
                  parachute manufacturing remains a cornerstone of our
                  operations, we have diversified to provide military cut and
                  sew services for other essential items.
                </p>
                <p className="text-lg leading-relaxed text-secondary-300">
                  Our expertise spans decades of experience in the defense
                  industry, ensuring that every service we provide meets the
                  highest standards of quality and reliability required by
                  government and military organizations worldwide.
                </p>

                <img
                  src="/images/service/industries-served.jpeg"
                  alt="Services"
                  className="w-full h-auto rounded-lg mt-5"
                />
              </div>
            </div>
            <div ref={addToSectionsRef} className="order-1 lg:order-2">
              <div className="bg-primary-700 p-4 rounded-2xl shadow-lg border border-primary-700">
                <video className="w-full h-auto rounded-lg" controls>
                  <source
                    src="/images/service/service-video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white relative">
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mb-16 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight text-center">
              Our Services
            </h2>
            <p className="text-lg leading-relaxed text-secondary-300 text-center max-w-4xl mx-auto">
              Blue Sky Parachutes provides comprehensive parachute manufacturing
              and related services to military and civilian customers worldwide.
              Our state-of-the-art facilities and skilled technicians ensure the
              highest quality standards.
            </p>
          </div>

          {/* Services Grid */}
          <div
            ref={addToSectionsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            <motion.div
              className="bg-primary-700 p-8 rounded-2xl shadow-lg border border-primary-700 transition-all duration-300 hover:bg-primary-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-400 rounded-full mb-4">
                  <FaIndustry className="text-3xl text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Manufacturing Services
                </h3>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                We manufacture a wide range of parachutes including military,
                recreational, emergency, and cargo parachutes using
                state-of-the-art equipment and processes.
              </p>
              <ul className="space-y-2">
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Military parachutes
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Recreational parachutes
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Emergency parachutes
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Cargo parachutes
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Custom designs
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-primary-700 p-8 rounded-2xl shadow-lg border border-primary-700 transition-all duration-300 hover:bg-primary-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-400 rounded-full mb-4">
                  <FaTools className="text-3xl text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Repair & Maintenance
                </h3>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Our skilled technicians provide comprehensive repair and
                maintenance services for all types of parachutes and related
                equipment.
              </p>
              <ul className="space-y-2">
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Parachute inspection
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Repair services
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Maintenance programs
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Safety checks
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Recertification
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-primary-700 p-8 rounded-2xl shadow-lg border border-primary-700 transition-all duration-300 hover:bg-primary-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-400 rounded-full mb-4">
                  <FaFlask className="text-3xl text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Testing & Quality Control
                </h3>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                We provide rigorous testing and quality control services to
                ensure every product meets international safety standards.
              </p>
              <ul className="space-y-2">
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Material testing
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Load testing
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Safety inspections
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Quality assurance
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Certification support
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-primary-700 p-8 rounded-2xl shadow-lg border border-primary-700 transition-all duration-300 hover:bg-primary-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-400 rounded-full mb-4">
                  <FaClipboardList className="text-3xl text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Consulting Services
                </h3>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Our experts provide consulting services to help clients select
                the right parachute solutions for their specific needs.
              </p>
              <ul className="space-y-2">
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Product selection
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Technical consultation
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Custom design
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Training programs
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Compliance guidance
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-primary-700 p-8 rounded-2xl shadow-lg border border-primary-700 transition-all duration-300 hover:bg-primary-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-400 rounded-full mb-4">
                  <FaShippingFast className="text-3xl text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Logistics & Shipping
                </h3>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                We coordinate efficient shipments to destinations around the
                globe, ensuring timely delivery of all products.
              </p>
              <ul className="space-y-2">
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Global shipping
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Customs handling
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Documentation
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Tracking services
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Insurance coverage
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-primary-700 p-8 rounded-2xl shadow-lg border border-primary-700 transition-all duration-300 hover:bg-primary-600 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-400 rounded-full mb-4">
                  <FaGraduationCap className="text-3xl text-accent-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Training & Support
                </h3>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                We provide comprehensive training and support services to ensure
                proper use and maintenance of our products.
              </p>
              <ul className="space-y-2">
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  User training
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Maintenance training
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Technical support
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Documentation
                </li>
                <li className="text-secondary-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
                  Ongoing support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-primary-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Who We Serve
            </h2>
            <p className="text-lg leading-relaxed text-secondary-300">
              We are proud to serve all branches of the Indonesian military as well as international clients, including the Army, Air Force, Coast Guard, Marine Corps, and Navy.
            </p>
          </div>
        </div>
      </section>

      {/* Reliable & Resilient Manufacturing */}
      <section className="py-20 bg-white relative">
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Reliable & Resilient Manufacturing
            </h2>
            <p className="text-lg leading-relaxed text-secondary-300">
              Our unwavering commitment to quality control ensures that every parachute system, component, and product is meticulously manufactured in-house. We do not outsource any part of our process. Additionally, Blue Sky Parachutes oversees inspections, testing, and packing, ensuring that all products leaving our facilities meet stringent regulations and exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* How We Stay Ahead & International Customers */}
      <section className="py-20 bg-primary-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              ref={addToSectionsRef}
              className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                How We Stay Ahead
              </h2>
              <p className="text-lg leading-relaxed text-secondary-300 mb-5">
                Through a process of rigorous self-assessment, we have positioned ourselves at the forefront of reliable military parachute manufacturing. As a registered company, our military parachutes are utilized by the Indonesian Armed Forces as well as various governments and organizations around the world.
              </p>
              <p className="text-lg leading-relaxed text-secondary-300 mb-5">
                The safety of our customers is paramount, and we constantly aim to produce even safer and higher-quality military parachutes every day.
              </p>
              <p className="text-lg leading-relaxed text-secondary-300">
                Furthermore, as active members of the Parachute Industry Association and its Specifications Committee, we collaborate with governments to improve industry standards on a global scale.
              </p>
            </div>

            <div
              ref={addToSectionsRef}
              className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                International Customers
              </h2>
              <p className="text-lg leading-relaxed text-secondary-300 mb-5">
                As a family-owned and operated manufacturer, we make all of our decisions in-house. Our reach, however, is far and wide. BLUE SKY PARACHUTES regularly exports our products around the world.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Parachute Manufacturing
                </h3>
                <p className="text-lg leading-relaxed text-secondary-300">
                  Our parachutes ensure that every landing is successful. With our expertise and machinery, we've made these lifesaving devices for the better part of a century. It's an honor to protect those who put their lives on the line for the safety of others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial & Commercial Sewing Services */}
      <section className="py-20 bg-primary-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mb-16 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Industrial & Commercial Sewing Services
            </h2>
            <p className="text-lg leading-relaxed text-secondary-300 mb-5">
              Serving the Indonesian Military and a global clientele, we provide
              industrial and commercial sewing services tailored to meet diverse
              needs. Our state-of-the-art sewing facilities and skilled
              technicians can handle a wide range of textile manufacturing
              requirements.
            </p>
            <p className="text-lg leading-relaxed text-secondary-300">
              Contact us for a customized quote to meet your specific
              requirements. We work closely with our clients to understand their
              needs and provide solutions that exceed expectations.
            </p>
          </div>

          {/* Why Choose Our Services */}
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Why Choose Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Decades of Experience
                </h3>
                <p className="text-base leading-relaxed text-secondary-200">
                  We have been manufacturing parachutes for the better part of a
                  century, with extensive experience serving military and
                  civilian customers.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  International Standards
                </h3>
                <p className="text-base leading-relaxed text-secondary-200">
                  All our services comply with international standards including
                  FAA, NATO, and Indonesian Department of Commerce regulations.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Quality Assurance
                </h3>
                <p className="text-base leading-relaxed text-secondary-200">
                  We maintain ISO 9001 certification and implement rigorous
                  quality control processes throughout all our services.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Global Reach
                </h3>
                <p className="text-base leading-relaxed text-secondary-200">
                  With facilities in Indonesia and a sales office in Canada, we
                  can serve customers worldwide with efficient logistics.
                </p>
              </motion.div>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Whether you're in the market for a long- or short-term contract,
              we're looking forward to working with you! Contact us today to
              discuss your specific requirements and get a customized quote.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                variant="primary"
                size="large"
                className="bg-secondary-600 hover:bg-secondary-700 border-secondary-600 hover:border-secondary-700"
              >
                Get A Quote
              </Button>
              <Button
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white hover:text-primary-800"
              >
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
