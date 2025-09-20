import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AirborneTroopParachutesPage = () => {
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
              Airborne Troop's Parachute
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Parasut untuk penyebaran pasukan udara
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
                src="/images/airborne-parachute.jpg" 
                alt="Airborne Troop Parachute" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>

            {/* Product Info */}
            <div className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Fungsi dan Sejarah</h2>
              <p className="text-lg leading-relaxed text-earth-300 mb-8">
                PT. Langit Biru Parasut telah menjadi pemasok utama parasut untuk Angkatan Bersenjata Indonesia dan klien internasional sejak 2009. Mereka memproduksi berbagai rakitan parasut dan sistem cadangan yang digunakan oleh pasukan di seluruh dunia untuk penyebaran pasukan.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Model Populer:</h3>
                <ul className="space-y-2">
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">T-10B, T-10C, T-10D</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">T10R</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">MC1-1B, MC1-1C, MC1-1D, MC1-1E</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Fitur Produk:</h3>
                <ul className="space-y-2">
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Spesifikasi dapat diunduh</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Opsi penawaran harga</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Sesuai standar militer internasional</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Digunakan pasukan di seluruh dunia</li>
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

      {/* Product Details */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              ref={addToSectionsRef}
              className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Sejarah dan Pengalaman</h2>
              <p className="text-lg leading-relaxed text-earth-300">
                Sejak 2009, kami telah menjadi pemasok terpercaya untuk Angkatan Bersenjata Indonesia dan klien internasional. Pengalaman kami dalam memproduksi berbagai rakitan parasut dan sistem cadangan telah membuat kami menjadi pilihan utama untuk penyebaran pasukan.
              </p>
            </div>

            <div
              ref={addToSectionsRef}
              className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Aplikasi</h2>
              <ul className="space-y-3">
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Penyebaran pasukan udara</li>
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Operasi militer</li>
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Latihan pasukan</li>
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Operasi khusus</li>
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Penerjunan massal</li>
              </ul>
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
              Butuh Parasut Berkualitas Militer?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hubungi kami untuk mendapatkan penawaran khusus dan spesifikasi lengkap produk parasut militer kami.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AirborneTroopParachutesPage;





