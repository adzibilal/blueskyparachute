import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { useLightbox } from "../lightbox";

const Gallery = () => {
  const [visibleCount] = useState(8);
  const { openLightbox } = useLightbox();

  // Daftar gambar dari folder gallery - International Events & Activities
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
      caption: "Global Defense Expo",
    },
    {
      src: "/images/gallery/IMG_0762.jpg",
      alt: "Blue Sky Parachute International Event 12",
      caption: "International Trade Mission",
    },
    {
      src: "/images/gallery/IMG_0730.jpg",
      alt: "Blue Sky Parachute International Event 13",
      caption: "Overseas Team Activities",
    },
    {
      src: "/images/gallery/IMG_0714.jpg",
      alt: "Blue Sky Parachute International Event 14",
      caption: "International Product Launch",
    },
    {
      src: "/images/gallery/IMG_0711.jpg",
      alt: "Blue Sky Parachute International Event 15",
      caption: "Global Technology Showcase",
    },
    {
      src: "/images/gallery/IMG_0703.jpg",
      alt: "Blue Sky Parachute International Event 16",
      caption: "International Standards Meeting",
    },
    {
      src: "/images/gallery/IMG_0698.jpg",
      alt: "Blue Sky Parachute International Event 17",
      caption: "Overseas Exhibition",
    },
    {
      src: "/images/gallery/IMG_0488.jpg",
      alt: "Blue Sky Parachute International Event 18",
      caption: "International Business Forum",
    },
    {
      src: "/images/gallery/IMG_0487.jpg",
      alt: "Blue Sky Parachute International Event 19",
      caption: "Global Industry Conference",
    },
    {
      src: "/images/gallery/IMG_0260.jpg",
      alt: "Blue Sky Parachute International Event 20",
      caption: "International Networking Event",
    },
    {
      src: "/images/gallery/IMG_0259.jpg",
      alt: "Blue Sky Parachute International Event 21",
      caption: "Overseas Partnership Summit",
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
