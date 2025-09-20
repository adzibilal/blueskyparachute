import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO";
import ImageSlider from "../../components/image-slider";
import ProductCard from "../../components/product-card";
import Button from "../../components/button";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  // Refs for animations
  const heroContentRef = useRef(null);
  const sectionsRef = useRef([]);
  const productsRef = useRef([]);

  // Animation variants

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

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

    // Products stagger animation
    if (productsRef.current.length > 0) {
      gsap.fromTo(
        productsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: productsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

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

  // Helper function to add product refs
  const addToProductsRef = (el) => {
    if (el && !productsRef.current.includes(el)) {
      productsRef.current.push(el);
    }
  };

  // Hero slider images from /public/images/slider
  const heroSliderImages = [
    {
      src: "/images/slider/172238164299.jpg",
      alt: "Blue Sky Parachute Manufacturing",
      caption: {
        title: "Leading the Way in Military and Recreational Parachutes",
        description: "Check out our options and features included.",
      },
    },
    {
      src: "/images/slider/172238166082.jpg",
      alt: "Parachute Manufacturing Facility",
      caption: {
        title: "Superior Manufacturing",
        description: "Quality and delivery are our top priorities.",
      },
    },
    {
      src: "/images/slider/172238180386.jpg",
      alt: "State-of-the-art Factory",
      caption: {
        title: "Our Factory",
        description: "State-of-the-art facilities in Bandung, West Java.",
      },
    },
    {
      src: "/images/slider/172238201949.jpg",
      alt: "ISO Certified Quality",
      caption: {
        title: "ISO 9001 Certified",
        description: "Meeting international quality standards.",
      },
    },
    {
      src: "/images/slider/172238219118.jpg",
      alt: "Professional Parachute Assembly",
      caption: {
        title: "Professional Assembly",
        description: "Expert craftsmanship in every product.",
      },
    },
    {
      src: "/images/slider/172238226470.jpg",
      alt: "Quality Control Process",
      caption: {
        title: "Quality Assurance",
        description: "Rigorous testing and quality control.",
      },
    },
  ];

  // Sample products data - replace with actual data
  const products = [
    {
      id: "skydiving-parachutes",
      name: "Skydiving Parachutes",
      description:
        "Parasut terjun bebas untuk olahraga dan rekreasi dengan kontrol penuh untuk pilot kanopi.",
      image: "/images/skydiving-parachute.jpg",
      features: [
        "Kontrol penuh untuk pilot",
        "Desain sayap terstruktur",
        "Garis kemudi responsif",
        "Keamanan tinggi",
      ],
      specifications: [
        { name: "Material", value: "Nylon berkualitas tinggi" },
        { name: "Ukuran", value: "Berbagai ukuran tersedia" },
      ],
    },
    {
      id: "static-line-parachutes",
      name: "Static Line Parachutes",
      description:
        "Parasut untuk operasi static line dengan model T-10, MC1-1, dan LBPP-MC6.",
      image: "/images/static-line-parachute.jpg",
      features: [
        "Model T-10, T-10B, T-10C, T-10D",
        "Model MC1-1B, MC1-1C, MC1-1D, MC1-1E",
        "LBPP-MC6",
        "Parasut cadangan T10R",
      ],
      specifications: [
        { name: "Model", value: "T-10, MC1-1, LBPP-MC6" },
        { name: "Aplikasi", value: "Operasi static line" },
      ],
    },
    {
      id: "emergency-parachutes",
      name: "Emergency Parachutes",
      description:
        "Parasut darurat untuk situasi emergency dengan kecepatan pengeluaran tinggi.",
      image: "/images/emergency-parachute.jpg",
      features: [
        "Kecepatan pengeluaran tinggi",
        "Berat ringan",
        "Mudah digunakan",
        "Untuk pilot dan personel militer",
      ],
      specifications: [
        { name: "Kecepatan", value: "Pengeluaran cepat" },
        { name: "Berat", value: "Ringan dan portable" },
      ],
    },
    {
      id: "declaration-parachutes",
      name: "Declaration Parachutes",
      description:
        "Parasut pengereman untuk memperlambat kecepatan pesawat dan kendaraan.",
      image: "/images/declaration-parachute.jpg",
      features: [
        "Pengereman efektif",
        "Untuk landasan basah/licin",
        "Pendaratan darurat",
        "Mengurangi keausan ban",
      ],
      specifications: [
        { name: "Fungsi", value: "Pengereman kendaraan" },
        { name: "Aplikasi", value: "Pesawat dan kendaraan" },
      ],
    },
    {
      id: "cargo-parachutes",
      name: "Cargo Parachutes",
      description:
        "Parasut kargo untuk pengiriman barang dengan kapasitas 100-10,000 pon.",
      image: "/images/cargo-parachute.jpg",
      features: [
        "Kapasitas 100-10,000 pon",
        "Untuk semua cabang ABRI",
        "Pengiriman amunisi",
        "Drop ke zona kritis",
      ],
      specifications: [
        { name: "Kapasitas", value: "100-10,000 pon" },
        { name: "Pengguna", value: "Angkatan Bersenjata" },
      ],
    },
    {
      id: "airborne-troop-s-parachute",
      name: "Airborne Troop's Parachute",
      description:
        "Parasut untuk penyebaran pasukan udara dengan model T-10B, T-10C, T-10D.",
      image: "/images/airborne-parachute.jpg",
      features: [
        "Model T-10B, T-10C, T-10D",
        "T10R dan MC1-1 series",
        "Pemasok utama sejak 2009",
        "Digunakan pasukan dunia",
      ],
      specifications: [
        { name: "Model", value: "T-10B, T-10C, T-10D" },
        { name: "Sejak", value: "2009" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Beranda"
        description="PT Langit Biru Parasut (Blue Sky Parachute) adalah perusahaan manufaktur parasut terdepan di Indonesia. Kami memproduksi parasut militer, rekreasi, kargo, dan darurat dengan standar internasional untuk TNI, Polri, dan sipil."
        keywords="parasut, parachute, manufaktur parasut, parasut militer, parasut rekreasi, parasut kargo, parasut darurat, TNI, Polri, skydiving, static line, airborne, Indonesia, Blue Sky Parachute"
        url="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PT Langit Biru Parasut",
          "alternateName": "Blue Sky Parachute",
          "url": "https://blueskyparachute.com",
          "logo": "https://blueskyparachute.com/logo.png",
          "description": "Perusahaan manufaktur parasut terdepan di Indonesia yang memproduksi parasut militer, rekreasi, kargo, dan darurat dengan standar internasional",
          "foundingDate": "2010",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ID",
            "addressLocality": "Indonesia"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["Indonesian", "English"]
          },
          "sameAs": [
            "https://www.facebook.com/blueskyparachute",
            "https://www.instagram.com/blueskyparachute",
            "https://www.linkedin.com/company/blueskyparachute"
          ],
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Parasut Militer",
                "description": "Parasut untuk keperluan militer dan pertahanan"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Parasut Rekreasi",
                "description": "Parasut untuk skydiving dan olahraga rekreasi"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Parasut Kargo",
                "description": "Parasut untuk pengiriman kargo dan logistik udara"
              }
            }
          ]
        }}
      />
      {/* Hero Section with Background Slider */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          <ImageSlider
            images={heroSliderImages}
            autoPlay={true}
            interval={6000}
            isHeroBackground={true}
            showCaptions={false}
            showControls={true}
          />
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-army-900/50 z-10"></div>

        {/* Hero Content */}
        <div
          ref={heroContentRef}
          className="absolute rounded-2xl z-20 h-max w-max flex items-center justify-center text-center pointer-events-none bg-army-900 left-1/2 -translate-x-1/2 bottom-[80px] opacity-0"
        >
          <div className="container !w-full !p-6 pointer-events-auto flex justify-between items-center">
            <motion.div
              className="!text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl font-bold text-white drop-shadow-lg mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              >
                Leading the Way in Military and Recreational Parachutes
              </motion.h1>
              <motion.p
                className="text-xl text-white/90 drop-shadow-md max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              >
                Since 1980, we've been crafting the highest quality parachutes
                for military and recreational use. Check out our options and
                features included.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="large"
                className="w-max whitespace-nowrap"
              >
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-3"
          >
            <motion.div
              className="bg-army-700 p-2 md:p-4 rounded-2xl shadow-lg border border-army-700 h-max"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/DQRZfptkSRI?si=Np3_m4siF1OlIWzl"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src="/images/slider/172238392799.jpg"
                  alt="Blue Sky Parachute Manufacturing"
                  className="w-full h-32 object-cover rounded-lg"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
                <motion.img
                  src="/images/slider/172289106296.jpg"
                  alt="Parachute Production Facility"
                  className="w-full h-32 object-cover rounded-lg"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-army-700 p-2 md:p-8 rounded-2xl shadow-lg border border-army-700 space-y-4 text-white"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Where Craftsmanship Meets Technology: New Sky Parachute
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Where Craftsmanship Meets Technology:
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                PT Langit Biru Parasut, also known as Blue Sky Parachute, takes
                pride in our longstanding relationship with the Indonesian
                Military and consistently upholds their stringent standards. Our
                commitment to excellence is evident in our engineering
                capabilities and the rigorous safety testing processes we
                undertake at every stage of production.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                As a defense industry company based near Jakarta, Indonesia,
                with a sales office in Vancouver, Canada, we operate
                independently. This autonomy allows us to make swift, informed
                decisions without the need for external approvals. Our dedicated
                team shares a common goal of delivering top-quality, safe
                products, reflecting our unwavering dedication to our craft.
              </motion.p>
            </motion.div>
          </div>
          <motion.div
            className="bg-army-700 p-2 md:p-8 rounded-2xl mt-10 shadow-lg border border-army-700 space-y-4 text-white"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Equipment
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Adhering to international safety standards, we ensure that all
              textile products and raw materials used in our manufacturing
              processes meet client specifications. Items such as packs,
              harnesses, canopies, and deployment bags are crafted in strict
              accordance with the latest international government designs and
              specifications. We maintain stringent quality and manufacturing
              standards to guarantee the superior quality of every item,
              irrespective of size or complexity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Serving the Indonesian Military and a global clientele, we provide
              industrial and commercial sewing services tailored to meet diverse
              needs. Contact us for a customized quote to meet your specific
              requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Superior Manufacturing Section */}
      <section className="py-20 bg-army-100">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-army-800 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Superior Manufacturing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            At Superior Manufacturing, quality and delivery are our top
            priorities. Our dedicated team personally manufactures, inspects,
            tests, and packages each product we create, ensuring the highest
            standards are met at every step. We take great pride in the trust
            the armed forces have placed in us for decades. As a build-to-print
            manufacturer, we proudly maintain a current ISO 9001 registration.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-army-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why Choose Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                We take pride in our long-standing relationship with the
                Indonesian military and consistently uphold their stringent
                standards. Our commitment to excellence is evident in our
                engineering capabilities and rigorous safety testing at every
                stage of production.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                As a defense industry business based near Jakarta, Indonesia,
                with a sales office in Vancouver, Canada, we operate
                independently. This autonomy allows us to make quick, informed
                decisions without the need for external approvals. Our dedicated
                team shares a common goal of delivering top-quality and safe
                products, reflecting our unwavering dedication to our
                craft.About Us
              </motion.p>
            </div>
            <div className="space-y-4">
              <motion.img
                src="/images/why-choose-us.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-camo relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16 bg-army-900 p-8 rounded-2xl shadow-lg border border-army-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Parachute Manufacturing
            </motion.h2>
            <motion.p
              className="text-xl text-earth-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our parachutes ensure that every landing is successful.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto mb-16 bg-army-900 p-8 rounded-2xl shadow-lg border border-army-900"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-earth-300 leading-relaxed text-center">
              With our expertise and state-of-the-art machinery, we have been
              manufacturing these lifesaving devices for the better part of a
              century. It is an honor to protect those who put their lives on
              the line for the safety of others. As a duly registered and
              certified company, PT Langit Biru Parasut (also known as Blue Sky
              Parachute) meets international quality standards and regulatory
              requirements.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                ref={addToProductsRef}
                variants={staggerItem}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
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
              className="text-3xl md:text-4xl font-bold mb-10 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Whether you're in the market for a long- or short-term contract,
              we're looking forward to working with you!
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="large"
                className="bg-earth-600 hover:bg-earth-700 border-earth-600 hover:border-earth-700"
              >
                Get A Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
