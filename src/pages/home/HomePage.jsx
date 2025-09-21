import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO/SEO";
import ImageSlider from "../../components/image-slider";
import ProductCard from "../../components/product-card";
import Button from "../../components/button";
import Gallery from "../../components/gallery";
import Quote from "../../components/quote";

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
      src: "/images/slider/172238226470.jpg",
      alt: "Quality Control Process",
      caption: {
        title: "Quality Assurance",
        description: "Rigorous testing and quality control.",
      },
    },
  ];

  // Products data - updated with 3 new products
  const products = [
    {
      id: "troop-back-parachute",
      name: "Troop Back Parachute",
      description:
        "Parachute assembly for military operations with international standards and high security.",
      image: "/images/products/172236959034.jpg",
      downloadFile: "/pdf/1-TROOP BACK PARACHUTE ASSEMBLY- LBPMC1-1C.pdf",
      features: [
        "International military standards",
        "Multi-layered security system",
        "Ergonomic design",
        "Extreme weather resistant",
      ],
      specifications: [
        { name: "Model", value: "LBPMC1-1C" },
        { name: "Application", value: "Military operations" },
      ],
    },
    {
      id: "personal-reserve-parachute",
      name: "Personal Reserve Parachute",
      description:
        "Personal reserve parachute for extra safety in parachuting operations.",
      image: "/images/products/172264791528.jpg",
      downloadFile: "/pdf/2-PERSONNAL RESERVE PARACHUTE - LBPT-10R.pdf",
      features: [
        "Fast deployment in emergency situations",
        "Lightweight and compact",
        "Easy to use",
        "For pilots and military personnel",
      ],
      specifications: [
        { name: "Model", value: "LBPT-10R" },
        { name: "Type", value: "Reserve parachute" },
      ],
    },
    {
      id: "freefall-parachute",
      name: "Freefall Parachute",
      description:
        "Freefall parachute for sports and recreation with full control for canopy pilots.",
      image: "/images/products/172236994822.jpg",
      downloadFile: "/pdf/3-LBP Startrac 2.0 FREEFALL 245.pdf",
      features: [
        "Full pilot control",
        "Structured wing design",
        "Responsive steering lines",
        "High safety standards",
      ],
      specifications: [
        { name: "Model", value: "LBP Startrac 2.0" },
        { name: "Sizes", value: "245, 265, 290, 320 sq ft" },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEO
        title="Home"
        description="PT Langit Biru Parasut (Blue Sky Parachute) is Indonesia's leading parachute manufacturing company. We produce military, recreational, cargo, and emergency parachutes with international standards for TNI, Polri, and civilians."
        keywords="parachute, parachute manufacturing, military parachutes, recreational parachutes, cargo parachutes, emergency parachutes, TNI, Polri, skydiving, static line, airborne, Indonesia, Blue Sky Parachute"
        url="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PT Langit Biru Parasut",
          alternateName: "Blue Sky Parachute",
          url: "https://blueskyparachute.com",
          logo: "https://blueskyparachute.com/logo-master.png",
          description:
            "Indonesia's leading parachute manufacturing company that produces military, recreational, cargo, and emergency parachutes with international standards",
          foundingDate: "2010",
          address: {
            "@type": "PostalAddress",
            addressCountry: "ID",
            addressLocality: "Indonesia",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Indonesian", "English"],
          },
          sameAs: [
            "https://www.facebook.com/blueskyparachute",
            "https://www.instagram.com/blueskyparachute",
            "https://www.linkedin.com/company/blueskyparachute",
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Military Parachutes",
                description: "Parachutes for military and defense purposes",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Recreational Parachutes",
                description: "Parachutes for skydiving and recreational sports",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Cargo Parachutes",
                description: "Parachutes for cargo delivery and air logistics",
              },
            },
          ],
        }}
      />
      {/* Hero Section with Image Slider */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 pt-28 md:pt-32 pb-16 w-full">
        <div className="container mx-auto mt-2 mb-2">
          {/* Image Slider with responsive aspect ratio - 16:9 on small screens, 21:9 on large screens */}
          <div className="w-full aspect-video lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageSlider
              images={heroSliderImages}
              autoPlay={true}
              interval={6000}
              isHeroBackground={false}
              showCaptions={false}
              showControls={true}
            />
          </div>
          <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start gap-4 bg-white p-4 rounded-xl">
            <div className="">
              <h2 className="text-lg md:text-2xl font-bold text-accent-500">
                Leading the Way in Military and Recreational Parachutes.
              </h2>
              <p className="text-sm md:text-base">
                Check out our options and features included.
              </p>
            </div>
            <Button
              variant="primary"
              size={window.innerWidth > 768 ? "medium" : "small"}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Video Big One */}
      <section className="py-20 bg-white relative">
        <div className="container relative z-10">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-primary-600">
            <video className="w-full h-full object-cover" controls>
              <source
                src="https://res.cloudinary.com/dfzjkdczw/video/upload/v1758425481/home-vid-commpressed_kapsu0.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pb-20 bg-white relative">
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-3"
          >
            <motion.div
              className="bg-white p-2 md:p-4 rounded-2xl shadow-lg border border-primary-300 h-max"
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
                  style={{ border: 0 }}
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
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-primary-300 space-y-4"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 text-primary-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Where Craftsmanship Meets Technology: Blue Sky Parachute
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-accent-500"
              >
                Where Craftsmanship Meets Technology:
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-justify"
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
                className="text-justify"
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
            className="hero-gradient p-6 md:p-8 rounded-2xl mt-10 shadow-lg border border-primary-700 space-y-4 text-white"
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
      <section className="py-20 bg-accent-100/30">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary-800 mb-8"
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
                className="text-3xl md:text-4xl font-bold text-primary-800"
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
                products, reflecting our unwavering dedication to our craft.
              </motion.p>
            </div>
            <div className="space-y-4">
              <motion.img
                src="/images/why-choose.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-primary-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Activities
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore our international events and activities showcasing Blue
              Sky Parachute's global presence and partnerships
            </motion.p>
          </motion.div>

          <motion.div
            ref={addToSectionsRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Gallery />
          </motion.div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-20 bg-white">
        <div className="container">
          <Quote />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white relative">
        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16 bg-primary-900 p-8 rounded-2xl shadow-lg border border-primary-900"
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
              className="text-xl text-secondary-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our parachutes ensure that every landing is successful.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto mb-16 bg-primary-900 p-8 rounded-2xl shadow-lg border border-primary-900"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-secondary-300 leading-relaxed text-center">
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
                className="bg-secondary-600 hover:bg-secondary-700 border-secondary-600 hover:border-secondary-700"
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
