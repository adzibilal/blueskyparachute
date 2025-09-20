import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../../components/SEO';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
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
        title="Tentang Kami"
        description="PT Langit Biru Parasut (Blue Sky Parachute) adalah perusahaan manufaktur parasut terdepan di Indonesia sejak 2010. Kami berkomitmen memproduksi parasut berkualitas tinggi dengan standar internasional untuk keperluan militer, rekreasi, dan komersial."
        keywords="tentang blue sky parachute, sejarah parasut indonesia, manufaktur parasut, perusahaan parasut, visi misi parasut, PT Langit Biru Parasut"
        url="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Tentang PT Langit Biru Parasut",
          "description": "Halaman tentang PT Langit Biru Parasut (Blue Sky Parachute), perusahaan manufaktur parasut terdepan di Indonesia",
          "url": "https://blueskyparachute.com/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "PT Langit Biru Parasut",
            "alternateName": "Blue Sky Parachute",
            "foundingDate": "2010",
            "description": "Perusahaan manufaktur parasut terdepan di Indonesia yang memproduksi parasut militer, rekreasi, kargo, dan darurat dengan standar internasional"
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-camo overflow-hidden">
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
              About Us
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Leading the Way in Military and Recreational Parachutes
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Story</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              PT Langit Biru Parasut, also known as Blue Sky Parachute, takes pride in our longstanding relationship with the Indonesian Military and consistently upholds their stringent standards. Our commitment to excellence is evident in our engineering capabilities and the rigorous safety testing processes we undertake at every stage of production.
            </p>
            <p className="text-lg leading-relaxed text-earth-300">
              As a defense industry company based near Jakarta, Indonesia, with a sales office in Vancouver, Canada, we operate independently. This autonomy allows us to make swift, informed decisions without the need for external approvals. Our dedicated team shares a common goal of delivering top-quality, safe products, reflecting our unwavering dedication to our craft.
            </p>
          </div>

          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Mission</h2>
            <p className="text-lg leading-relaxed text-earth-300">
              We are committed to providing the highest quality parachutes and related equipment to military and civilian customers worldwide. Our mission is to ensure the safety and reliability of every product we manufacture, meeting and exceeding international standards.
            </p>
          </div>

          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Quality</h3>
                <p className="text-base leading-relaxed text-earth-200">We maintain the highest standards in manufacturing and testing to ensure every product meets our rigorous quality requirements.</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Safety</h3>
                <p className="text-base leading-relaxed text-earth-200">Safety is our top priority. Every parachute we manufacture undergoes extensive testing to ensure reliability in critical situations.</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-base leading-relaxed text-earth-200">We continuously invest in research and development to improve our products and manufacturing processes.</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">Reliability</h3>
                <p className="text-base leading-relaxed text-earth-200">Our customers trust us with their lives. We deliver products that perform consistently in the most demanding conditions.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Standards Section */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Facilities</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              Our 2,500 square-meter facilities are located in Bandung, West Java, Indonesia. This strategic location allows us to coordinate efficient shipments to destinations around the globe while maintaining close relationships with our local suppliers and partners.
            </p>
            <p className="text-lg leading-relaxed text-earth-300">
              The facility houses state-of-the-art manufacturing equipment, quality control laboratories, and testing facilities that ensure every product meets our exacting standards.
            </p>
          </div>

          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Certifications & Standards</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-6">
              As a duly registered and certified company, PT Langit Biru Parasut meets international quality standards and regulatory requirements. We proudly maintain a current ISO 9001 registration and comply with:
            </p>
            <ul className="list-none p-0 space-y-3">
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Indonesian Department of Commerce Export Administration Regulations</li>
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">FAA (Federal Aviation Administration) standards</li>
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">NATO Commercial and Government Entity Code – 1370Z</li>
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">International military specifications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Team</h2>
            <p className="text-lg leading-relaxed text-earth-300 mb-5">
              Our dedicated team of engineers, technicians, and quality control specialists work together to ensure that every parachute we manufacture meets the highest standards. With decades of combined experience in the industry, our team brings expertise and passion to every project.
            </p>
            <p className="text-lg leading-relaxed text-earth-300">
              We take great pride in the trust the armed forces have placed in us for decades. As a build-to-print manufacturer, we understand the critical importance of precision and reliability in every product we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-army-800 via-army-700 to-army-600 text-white py-20 text-center">
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
              Ready to Work with Industry Leaders?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact us today to learn more about our capabilities and how we can serve your parachute needs.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;





