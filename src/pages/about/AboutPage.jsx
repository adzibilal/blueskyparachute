import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../components/SEO";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  // Refs for animations
  const heroContentRef = useRef(null);
  const sectionsRef = useRef([]);
  
  // State for tabs
  const [activeTab, setActiveTab] = useState('vision');

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
        title="About Us"
        description="Blue Sky Parachute is Indonesia's leading parachute manufacturing company since 2010. We are committed to producing high-quality parachutes with international standards for military, recreational, and commercial purposes."
        keywords="about blue sky parachute, indonesia parachute history, parachute manufacturing, parachute company, parachute vision mission, Blue Sky Parachute"
        url="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Blue Sky Parachute",
          description:
            "About page of Blue Sky Parachute, Indonesia's leading parachute manufacturing company",
          url: "https://blueskyparachute.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "Blue Sky Parachute",
            alternateName: "Blue Sky Parachute",
            foundingDate: "2010",
            description:
              "Indonesia's leading parachute manufacturing company that produces military, recreational, cargo, and emergency parachutes with international standards",
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
      <section className="py-20 bg-primary-100">
        <div className="container">
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-secondary-300 mb-5">
              We take pride in our long-standing relationship with the
              Indonesian military and consistently uphold their stringent
              standards. Our commitment to excellence is evident in our
              engineering capabilities and rigorous safety testing at every
              stage of production.
            </p>
            <p className="text-lg leading-relaxed text-secondary-300">
              As a defense industry business based near Jakarta, Indonesia, with
              a sales office in Vancouver, Canada, we operate independently.
              This autonomy allows us to make quick, informed decisions without
              the need for external approvals. Our dedicated team shares a
              common goal of delivering top-quality and safe products,
              reflecting our unwavering dedication to our craft.
            </p>
          </div>

          {/* Images Gallery */}
          <div
            ref={addToSectionsRef}
            className="mb-10"
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Large image - spans 6 columns on sm+ */}
              <div className="col-span-12 sm:col-span-6 mb-4 sm:mb-0">
                <motion.img 
                  src="/images/about/172239580581.jpg" 
                  alt="Blue Sky Parachute Manufacturing Facility" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
              
              {/* Medium image - spans 3 columns on sm+ */}
              <div className="col-span-6 sm:col-span-3">
                <motion.img 
                  src="/images/about/172191656813.jpg" 
                  alt="Parachute Manufacturing Process" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
              
              {/* Two small images stacked - spans 3 columns on sm+ */}
              <div className="col-span-6 sm:col-span-3 space-y-4">
                <motion.img 
                  src="/images/about/172191656821.jpg" 
                  alt="Quality Control Testing" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                />
                <motion.img 
                  src="/images/about/172288084429.jpg" 
                  alt="Parachute Assembly Line" 
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-primary-700"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'vision'
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-primary-600 text-secondary-300 hover:bg-secondary-600 hover:text-white'
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'mission'
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-primary-600 text-secondary-300 hover:bg-secondary-600 hover:text-white'
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab('why')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'why'
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-primary-600 text-secondary-300 hover:bg-secondary-600 hover:text-white'
                }`}
              >
                Why Choose Us
              </button>
            </div>

            {/* Tab Content */}
            <div>
              {/* Vision Tab */}
              {activeTab === 'vision' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Vision</h3>
                  <p className="text-lg leading-relaxed text-secondary-300">
                    Our vision is to provide paratroopers with the highest quality parachutes, recognizing the risks they take with each jump to fulfill their duties. We are committed to manufacturing complete systems essential for a successful landing. Our process includes everything from hand-spreading and cutting canopies to utilizing advanced technologies such as the Gerber Automatic Cutter for components like canopy parts, deployment bags, backpacks, harnesses, pilot chutes, and more.
                  </p>
                </motion.div>
              )}

              {/* Mission Tab */}
              {activeTab === 'mission' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Our Mission</h3>
                  <div className="space-y-5">
                    <p className="text-lg leading-relaxed text-secondary-300">
                      Our mission is to ensure the safe landing of military personnel with each jump they make. We understand the significant risks they undertake, and we are dedicated to providing reliable parachutes that bring them safely back to earth every time.
                    </p>
                    <p className="text-lg leading-relaxed text-secondary-300">
                      We are equipped to handle large-scale contracts for manufacturing parachutes for government bodies and other clients. Our team of experts possesses the capability and experience to produce a wide range of parachute-related items. Simply provide us with your detailed designs and specifications, and we will offer you a competitive quote. Upon completion of production, we guarantee prompt delivery to your designated location, with flexible shipping options including ground, air, or ocean transport to customers worldwide.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Why Choose Us Tab */}
              {activeTab === 'why' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Why Choose Us</h3>
                  <div className="space-y-5">
                    <p className="text-lg leading-relaxed text-secondary-300">
                      We take pride in our long-standing relationship with the Indonesian Military and consistently uphold their stringent standards. Our commitment to excellence is evident in our engineering capabilities and the thorough safety testing processes applied at every stage of production.
                    </p>
                    <p className="text-lg leading-relaxed text-secondary-300">
                      As a defense industry business based near Jakarta, Indonesia, and with a sales office in Vancouver, Canada, we operate independently, allowing us to make quick, informed decisions without the need for external approvals. Our dedicated team shares a common goal of delivering top-quality and safe products, demonstrating our unwavering dedication to our craft.
                    </p>
                    <p className="text-lg leading-relaxed text-secondary-300">
                      Our client base includes the Indonesian Military and extends to numerous other countries. We offer industrial and commercial sewing services tailored to meet diverse needs. Contact us for a customized quote to meet your specific requirements.
                    </p>
                    <p className="text-lg leading-relaxed text-secondary-300">
                      In the near future, we will have full manufacturing facilities in Turkey to fulfill demand in NATO members and Europe and certain Middle Eastern markets. Our company is Yiltex Sky Parachute Systemleri AS.
                    </p>
                    
                    {/* Video Section */}
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Manufacturing Process</h4>
                      <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-primary-600">
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/d77ws14ksys?start=50"
                          title="Blue Sky Parachute Manufacturing Process"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <motion.div
                className="text-center p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Quality
                </h3>
                <p className="text-base leading-relaxed text-secondary-200">
                  We maintain the highest standards in manufacturing and testing
                  to ensure every product meets our rigorous quality
                  requirements.
                </p>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Safety
                </h3>
                <p className="text-base leading-relaxed text-secondary-200">
                  Safety is our top priority. Every parachute we manufacture
                  undergoes extensive testing to ensure reliability in critical
                  situations.
                </p>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Innovation
                </h3>
                <p className="text-base leading-relaxed text-secondary-200">
                  We continuously invest in research and development to improve
                  our products and manufacturing processes.
                </p>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-primary-600 rounded-lg border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  Reliability
                </h3>
                <p className="text-base leading-relaxed text-secondary-200">
                  Our customers trust us with their lives. We deliver products
                  that perform consistently in the most demanding conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Standards Section */}
      <section className="py-20 bg-white relative">
        <div className="container relative z-10">
          <div
            ref={addToSectionsRef}
            className="bg-white p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-accent-500"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-500 mb-8 leading-tight">
              Our Facilities
            </h2>
            <p className="text-lg leading-relaxed text-justify mb-5">
              Our 2,500 square-meter facilities are located in Bandung, West
              Java, Indonesia. This strategic location allows us to coordinate
              efficient shipments to destinations around the globe while
              maintaining close relationships with our local suppliers and
              partners.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              The facility houses state-of-the-art manufacturing equipment,
              quality control laboratories, and testing facilities that ensure
              every product meets our exacting standards.
            </p>
          </div>

          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mb-10 rounded-2xl shadow-lg border border-primary-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Certifications & Standards
            </h2>
            <p className="text-lg leading-relaxed text-secondary-300 mb-6">
              As a duly registered and certified company, Blue Sky Parachute
              meets international quality standards and regulatory requirements.
              We proudly maintain a current ISO 9001 registration and comply
              with:
            </p>
            <ul className="list-none p-0 space-y-3">
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">
                Indonesian Department of Commerce Export Administration
                Regulations
              </li>
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">
                FAA (Federal Aviation Administration) standards
              </li>
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">
                NATO Commercial and Government Entity Code – 1370Z
              </li>
              <li className="text-secondary-300 text-lg leading-relaxed relative pl-8 before:content-['✓'] before:absolute before:left-0 before:text-secondary-400 before:font-bold before:text-xl">
                International military specifications
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-100">
        <div className="container">
          {/* Team Description */}
          <div
            ref={addToSectionsRef}
            className="bg-primary-700 p-8 md:p-12 mt-12 rounded-2xl shadow-lg border border-primary-700"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Leadership Excellence
            </h3>
            <p className="text-lg leading-relaxed text-secondary-300 mb-5">
              Our dedicated team of engineers, technicians, and quality control specialists work together to ensure that every parachute we manufacture meets the highest standards. With decades of combined experience in the industry, our team brings expertise and passion to every project.
            </p>
            <p className="text-lg leading-relaxed text-secondary-300">
              We take great pride in the trust the armed forces have placed in us for decades. As a build-to-print manufacturer, we understand the critical importance of precision and reliability in every product we deliver.
            </p>
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
              Ready to Work with Industry Leaders?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contact us today to learn more about our capabilities and how we
              can serve your parachute needs.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
