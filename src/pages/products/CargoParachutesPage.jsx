import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CargoParachutesPage = () => {
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
              Cargo Parachutes
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Parasut untuk pengiriman kargo
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
                src="/images/cargo-parachute.jpg" 
                alt="Cargo Parachute" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>

            {/* Product Info */}
            <div className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Fungsi dan Aplikasi</h2>
              <p className="text-lg leading-relaxed text-earth-300 mb-8">
                Parasut kargo memastikan pengiriman barang berharga dengan aman ke darat. Digunakan oleh semua cabang Angkatan Bersenjata Indonesia, sistem pengiriman kargo ini dirancang untuk mengangkut barang ringan hingga berat, termasuk amunisi dan kendaraan, ke zona drop kritis.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Fitur Utama:</h3>
                <ul className="space-y-2">
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Kapasitas 100-10,000 pon</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Untuk semua cabang ABRI</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Pengiriman amunisi</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Drop ke zona kritis</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Barang ringan hingga berat</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Kendaraan dan peralatan</li>
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

      {/* Product Specifications */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Spesifikasi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Kapasitas Beban</h3>
                <p className="text-sm leading-relaxed text-earth-200">100 hingga 10,000 pon</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Pengguna</h3>
                <p className="text-sm leading-relaxed text-earth-200">Angkatan Bersenjata Indonesia</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Aplikasi</h3>
                <p className="text-sm leading-relaxed text-earth-200">Pengiriman barang ringan hingga berat</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Zona Drop</h3>
                <p className="text-sm leading-relaxed text-earth-200">Drop ke zona kritis</p>
              </motion.div>
            </div>
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
              Butuh Solusi Pengiriman Kargo?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hubungi kami untuk mendapatkan penawaran khusus parasut kargo dengan kapasitas sesuai kebutuhan Anda.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CargoParachutesPage;





