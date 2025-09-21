import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import SEO from "../../components/SEO/SEO";
import { useLightbox } from "../../components/lightbox";

const GalleryPage = () => {
  const { openLightbox } = useLightbox();

  // Daftar lengkap gambar dari folder gallery - International Events & Activities
  const galleryImages = [
    {
      src: "/images/gallery/IMG_2518.jpg",
      alt: "Blue Sky Parachute International Event 1",
      caption: "International Defense Exhibition",
    },
    {
      src: "/images/gallery/IMG_2517.jpg",
      alt: "Blue Sky Parachute International Event 2",
      caption: "Global Partnership Meeting",
    },
    {
      src: "/images/gallery/IMG_2516.jpg",
      alt: "Blue Sky Parachute International Event 3",
      caption: "International Trade Show",
    },
    {
      src: "/images/gallery/IMG_2428.jpg",
      alt: "Blue Sky Parachute International Event 4",
      caption: "Military Equipment Exhibition",
    },
    {
      src: "/images/gallery/IMG_2426.jpg",
      alt: "Blue Sky Parachute International Event 5",
      caption: "International Conference",
    },
    {
      src: "/images/gallery/IMG_2424.jpg",
      alt: "Blue Sky Parachute International Event 6",
      caption: "Defense Technology Summit",
    },
    {
      src: "/images/gallery/IMG_2423.jpg",
      alt: "Blue Sky Parachute International Event 7",
      caption: "Global Industry Forum",
    },
    {
      src: "/images/gallery/IMG_2421.jpg",
      alt: "Blue Sky Parachute International Event 8",
      caption: "International Partnership Event",
    },
    {
      src: "/images/gallery/IMG_2141.jpg",
      alt: "Blue Sky Parachute International Event 9",
      caption: "Overseas Business Meeting",
    },
    {
      src: "/images/gallery/IMG_2133.jpg",
      alt: "Blue Sky Parachute International Event 10",
      caption: "International Collaboration",
    },
    {
      src: "/images/gallery/IMG_1594.jpg",
      alt: "Blue Sky Parachute International Event 11",
      caption: "Global Defense Conference",
    },
    {
      src: "/images/gallery/IMG_0762.jpg",
      alt: "Blue Sky Parachute International Event 12",
      caption: "International Military Expo",
    },
    {
      src: "/images/gallery/IMG_0730.jpg",
      alt: "Blue Sky Parachute International Event 13",
      caption: "Overseas Technology Summit",
    },
    {
      src: "/images/gallery/IMG_0714.jpg",
      alt: "Blue Sky Parachute International Event 14",
      caption: "Global Innovation Forum",
    },
    {
      src: "/images/gallery/IMG_0711.jpg",
      alt: "Blue Sky Parachute International Event 15",
      caption: "International Standards Meeting",
    },
    {
      src: "/images/gallery/IMG_0703.jpg",
      alt: "Blue Sky Parachute International Event 16",
      caption: "Defense Industry Exhibition",
    },
    {
      src: "/images/gallery/IMG_0698.jpg",
      alt: "Blue Sky Parachute International Event 17",
      caption: "Global Quality Assurance Conference",
    },
    {
      src: "/images/gallery/IMG_0488.jpg",
      alt: "Blue Sky Parachute International Event 18",
      caption: "International Certification Forum",
    },
    {
      src: "/images/gallery/IMG_0487.jpg",
      alt: "Blue Sky Parachute International Event 19",
      caption: "Overseas Manufacturing Visit",
    },
    {
      src: "/images/gallery/IMG_0260.jpg",
      alt: "Blue Sky Parachute International Event 20",
      caption: "Global Partnership Summit",
    },
    {
      src: "/images/gallery/IMG_0259.jpg",
      alt: "Blue Sky Parachute International Event 21",
      caption: "International Trade Mission",
    },
    {
      src: "/images/gallery/IMG_0246.jpg",
      alt: "Blue Sky Parachute International Event 22",
      caption: "Global Defense Meeting",
    },
    {
      src: "/images/gallery/IMG_0231.jpg",
      alt: "Blue Sky Parachute International Event 23",
      caption: "International Quality Forum",
    },
    {
      src: "/images/gallery/IMG_0224.jpg",
      alt: "Blue Sky Parachute International Event 24",
      caption: "Overseas Operations Visit",
    },
    {
      src: "/images/gallery/IMG_0201.jpg",
      alt: "Blue Sky Parachute International Event 25",
      caption: "International Trade Exhibition",
    },
    {
      src: "/images/gallery/IMG_0199.jpg",
      alt: "Blue Sky Parachute International Event 26",
      caption: "Global Business Conference",
    },
    {
      src: "/images/gallery/IMG_0192.jpg",
      alt: "Blue Sky Parachute International Event 27",
      caption: "International Certification Event",
    },
    {
      src: "/images/gallery/20a3909b-b43d-4b8a-9cb3-f63136247157.jpg",
      alt: "Blue Sky Parachute International Event 28",
      caption: "Overseas Facility Tour",
    },
    {
      src: "/images/gallery/6d9fb309-f234-491f-a3dd-2f05392619c7.jpg",
      alt: "Blue Sky Parachute International Event 29",
      caption: "International Excellence Award",
    },
    {
      src: "/images/gallery/2c632b20-3ac1-4be8-91be-8313e371b7cb.jpg",
      alt: "Blue Sky Parachute International Event 30",
      caption: "Global Partnership Ceremony",
    },
  ];

  // Fungsi untuk handle klik gambar
  const handleImageClick = (image, index) => {
    openLightbox(image, index, galleryImages);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gallery"
        description="Explore Blue Sky Parachute's international events and activities showcasing our global presence, partnerships, and achievements in the defense industry. View our participation in defense exhibitions and trade shows worldwide."
        keywords="blue sky parachute gallery, international defense exhibitions, parachute trade shows, military equipment exhibitions, defense industry events, global partnerships, parachute manufacturing events"
        url="/gallery"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Blue Sky Parachute Gallery",
          description: "International events and activities of Blue Sky Parachute",
          url: "https://blueskyparachute.com/gallery",
          mainEntity: {
            "@type": "Organization",
            name: "Blue Sky Parachute",
            event: [
              {
                "@type": "Event",
                name: "International Defense Exhibition",
                description: "Blue Sky Parachute participation in global defense exhibitions"
              },
              {
                "@type": "Event", 
                name: "Military Equipment Trade Shows",
                description: "Showcasing parachute products at international trade shows"
              }
            ]
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-40 md:py-44 !pt-52">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Gallery
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore our international events and activities showcasing Blue Sky Parachute's 
              global presence, partnerships, and achievements in the defense industry
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              International Events & Activities
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Discover our participation in global defense exhibitions, international partnerships, 
              and industry conferences that showcase our commitment to excellence and innovation.
            </motion.p>
          </motion.div>

          {/* Gallery Grid - Showing ALL images */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-gray-200 hover:shadow-2xl transition-shadow duration-300"
                onClick={() => handleImageClick(image, index)}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                      <FaEye className="mx-auto mb-2 text-2xl" />
                      <div className="text-sm font-medium">{image.caption}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery Stats */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Global Presence & Partnerships
              </h3>
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                These images showcase our active participation in international defense exhibitions, 
                trade shows, and partnership meetings across the globe. Our commitment to building 
                strong international relationships has positioned Blue Sky Parachute as a trusted 
                partner in the global defense industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
