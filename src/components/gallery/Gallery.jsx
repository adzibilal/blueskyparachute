import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { useLightbox } from "../lightbox";

const Gallery = () => {
  const [visibleCount] = useState(4);
  const { openLightbox } = useLightbox();

  // Daftar gambar dari folder gallery yang tersedia - International Events & Activities
  const galleryImages = [
    {
      src: "/images/gallery/Copy of WhatsApp Image 2025-09-26 at 19.56.38.jpg",
      alt: "Blue Sky Parachute International Event 1",
      caption: "International Collaboration Workshop",
    },
    {
      src: "/images/gallery/Copy of DSCF5950.jpg",
      alt: "Blue Sky Parachute International Event 2",
      caption: "Defense Technology Innovation Summit",
    },
    {
      src: "/images/gallery/Copy of DSCF6022.jpg",
      alt: "Blue Sky Parachute International Event 3",
      caption: "International Standards Workshop",
    },
    {
      src: "/images/gallery/Copy of DSCF6026.jpg",
      alt: "Blue Sky Parachute International Event 4",
      caption: "Global Defense Innovation Conference",
    },
  ];

  // Fungsi untuk handle klik gambar
  const handleImageClick = (image, index) => {
    openLightbox(image, index, galleryImages);
  };

  // Get visible images
  const visibleImages = galleryImages.slice(0, visibleCount);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <>
      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {visibleImages.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-200"
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
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                  <FaEye className="mx-auto mb-2 text-2xl" />
                  <div className="text-sm font-medium">{image.caption}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Gallery;
