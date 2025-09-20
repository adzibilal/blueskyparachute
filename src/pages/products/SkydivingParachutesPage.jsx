import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../../components/SEO';
import Button from '../../components/button';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const SkydivingParachutesPage = () => {
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
    <>
      <SEO
        title="Parasut Skydiving"
        description="Parasut skydiving berkualitas tinggi dari PT Langit Biru Parasut. Dirancang khusus untuk olahraga terjun payung dengan standar keamanan internasional dan teknologi terdepan untuk pengalaman skydiving yang aman dan menyenangkan."
        keywords="parasut skydiving, parasut terjun payung, parasut olahraga, parasut rekreasi, skydiving indonesia, parasut sport, terjun payung"
        url="/product/skydiving-parachutes"
        type="product"
        product={{
          name: "Parasut Skydiving",
          category: "Parasut Rekreasi",
          offers: {
            availability: "in stock",
            priceCurrency: "IDR"
          }
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Parasut Skydiving",
          "description": "Parasut skydiving berkualitas tinggi untuk olahraga terjun payung dengan standar keamanan internasional",
          "category": "Parasut Rekreasi",
          "brand": {
            "@type": "Brand",
            "name": "PT Langit Biru Parasut"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "PT Langit Biru Parasut"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "IDR",
            "seller": {
              "@type": "Organization",
              "name": "PT Langit Biru Parasut"
            }
          }
        }}
      />
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
              Skydiving Parachutes
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            >
              Parasut terjun bebas untuk olahraga dan rekreasi
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
                src="/images/skydiving-parachute.jpg" 
                alt="Skydiving Parachute" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>

            {/* Product Info */}
            <div className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Fungsi dan Cara Kerja</h2>
              <p className="text-lg leading-relaxed text-earth-300 mb-8">
                Parasut ini berfungsi dengan memaksa udara masuk ke bagian depan, menciptakan 'sayap' terstruktur yang memungkinkan pilot kanopi untuk terbang. Parasut dikendalikan dengan menarik garis kemudi yang mengubah bentuk sayap, menyebabkan belokan, atau meningkatkan/mengurangi kecepatan turun.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Fitur Utama:</h3>
                <ul className="space-y-2">
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Kontrol penuh untuk pilot kanopi</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Desain sayap terstruktur</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Garis kemudi responsif</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Keamanan tinggi untuk olahraga</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Material berkualitas tinggi</li>
                  <li className="text-earth-200 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-earth-400 before:font-bold">Berbagai ukuran tersedia</li>
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
          <div
            ref={addToSectionsRef}
            className="bg-army-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-army-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Spesifikasi Teknis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Material</h3>
                <p className="text-sm leading-relaxed text-earth-200">Nylon berkualitas tinggi dengan lapisan tahan air</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Ukuran</h3>
                <p className="text-sm leading-relaxed text-earth-200">Berbagai ukuran tersedia sesuai kebutuhan</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Kontrol</h3>
                <p className="text-sm leading-relaxed text-earth-200">Sistem kontrol dengan garis kemudi responsif</p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-army-600 rounded-lg border border-army-500 transition-all duration-300 hover:bg-army-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">Keamanan</h3>
                <p className="text-sm leading-relaxed text-earth-200">Standar keamanan internasional untuk olahraga</p>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div
              ref={addToSectionsRef}
              className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Aplikasi</h2>
              <p className="text-lg leading-relaxed text-earth-300 mb-6">
                Parasut skydiving kami dirancang khusus untuk olahraga terjun bebas dan rekreasi. Cocok untuk:
              </p>
              <ul className="space-y-3">
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Skydiving rekreasi</li>
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Kompetisi skydiving</li>
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Pelatihan terjun bebas</li>
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Olahraga udara</li>
                <li className="text-earth-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-earth-400 before:font-bold before:text-xl">Aktivitas rekreasi outdoor</li>
              </ul>
            </div>

            <div
              ref={addToSectionsRef}
              className="bg-army-700 p-8 md:p-12 rounded-2xl shadow-lg border border-army-700"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Keunggulan Produk</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Desain Terstruktur</h3>
                  <p className="text-earth-300">Sayap terstruktur yang memungkinkan kontrol penuh dan manuver yang presisi.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Material Berkualitas</h3>
                  <p className="text-earth-300">Menggunakan material terbaik yang tahan lama dan aman untuk penggunaan intensif.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Kontrol Responsif</h3>
                  <p className="text-earth-300">Sistem kontrol yang responsif memungkinkan pilot untuk melakukan manuver dengan mudah.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Standar Keamanan</h3>
                  <p className="text-earth-300">Memenuhi standar keamanan internasional untuk olahraga terjun bebas.</p>
                </div>
              </div>
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
              Siap Terjun Bebas?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hubungi kami untuk mendapatkan parasut skydiving berkualitas tinggi yang aman dan responsif untuk petualangan terjun bebas Anda.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SkydivingParachutesPage;





