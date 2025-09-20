import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const EmergencyParachutesPage = () => {
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
              className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              Emergency Parachutes
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Parasut darurat untuk situasi emergency
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Product Image */}
            <motion.div 
              className="bg-army-700 p-8 rounded-2xl shadow-lg border border-army-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/emergency-parachute.jpg" 
                alt="Emergency Parachute" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>

            {/* Product Info */}
            <div className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Fungsi dan Aplikasi</h2>
              <p className="text-lg leading-relaxed text-earth-300 mb-8">
                Pemilihan parasut darurat bergantung pada kebutuhan spesifik dan penggunaan yang dimaksudkan, seperti untuk pilot pesawat, skydiver yang melakukan BASE jump, atau personel militer. Pertimbangan meliputi kecepatan pengeluaran, berat, dan kemudahan penggunaan dalam situasi darurat.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Fitur Utama:</h3>
                <ul className="space-y-2">
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Kecepatan pengeluaran tinggi</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Berat ringan dan portable</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Mudah digunakan dalam situasi darurat</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Untuk pilot pesawat</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Untuk skydiver BASE jump</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Untuk personel militer</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large" className="bg-earth-600 hover:bg-earth-700 border-earth-600 hover:border-earth-700">
                  Request Quote
                </Button>
                <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-army-800">
                  Download Specifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Considerations & Applications */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Pertimbangan Desain</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Kecepatan Pengeluaran</h3>
                <p className="text-sm leading-relaxed text-earth-200">Dirancang untuk pembukaan cepat dalam situasi darurat</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Berat Ringan</h3>
                <p className="text-sm leading-relaxed text-earth-200">Portable dan mudah dibawa untuk penggunaan darurat</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Kemudahan Penggunaan</h3>
                <p className="text-sm leading-relaxed text-earth-200">Operasi sederhana dalam kondisi stress tinggi</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Keandalan</h3>
                <p className="text-sm leading-relaxed text-earth-200">Performansi konsisten dalam situasi kritis</p>
              </motion.div>
            </div>
          </div>

          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Aplikasi</h2>
            <ul className="space-y-3">
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Pilot pesawat</li>
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Skydiver BASE jump</li>
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Personel militer</li>
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Operasi darurat</li>
              <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Kegiatan ekstrem</li>
            </ul>
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
              Butuh Parasut Darurat?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hubungi kami untuk mendapatkan parasut darurat berkualitas tinggi yang dapat diandalkan dalam situasi kritis.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyParachutesPage;





