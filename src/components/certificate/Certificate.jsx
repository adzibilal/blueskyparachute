import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaCertificate } from "react-icons/fa";
import { useLightbox } from "../lightbox";

const Certificate = () => {
  const [visibleCount] = useState(16);
  const { openLightbox } = useLightbox();

  // Daftar sertifikat dari folder certificate
  const certificateImages = [
    {
      src: "/images/certificate/IMMA - 001 - MC1-1C.jpg",
      alt: "IMMA Certificate MC1-1C",
      caption: "IMMA - 001 - MC1-1C",
      category: "IMMA Certificate"
    },
    {
      src: "/images/certificate/IMMA - 002 - T-10R.jpg",
      alt: "IMMA Certificate T-10R",
      caption: "IMMA - 002 - T-10R",
      category: "IMMA Certificate"
    },
    {
      src: "/images/certificate/IMMA - 003 - MC4.jpg",
      alt: "IMMA Certificate MC4",
      caption: "IMMA - 003 - MC4",
      category: "IMMA Certificate"
    },
    {
      src: "/images/certificate/IMMA - 004 - G-1A.jpg",
      alt: "IMMA Certificate G-1A",
      caption: "IMMA - 004 - G-1A",
      category: "IMMA Certificate"
    },
    {
      src: "/images/certificate/IMMA - 005 - G12D_E.jpg",
      alt: "IMMA Certificate G12D_E",
      caption: "IMMA - 005 - G12D_E",
      category: "IMMA Certificate"
    },
    {
      src: "/images/certificate/IMMA - 006 - G14.jpg",
      alt: "IMMA Certificate G14",
      caption: "IMMA - 006 - G14",
      category: "IMMA Certificate"
    },
    {
      src: "/images/certificate/ISO PT Langit Biru Parasut.jpg",
      alt: "ISO PT Langit Biru Parasut Certificate",
      caption: "ISO PT Langit Biru Parasut",
      category: "ISO Certification"
    },
    {
      src: "/images/certificate/Langit Biru Parasut - CAMAR BIRU FREEFALL.jpg",
      alt: "Langit Biru Parasut CAMAR BIRU FREEFALL Certificate",
      caption: "Langit Biru Parasut - CAMAR BIRU FREEFALL",
      category: "Product Certificate"
    },
    {
      src: "/images/certificate/Langit Biru Parasut - MC1-1C_page-0001.jpg",
      alt: "Langit Biru Parasut MC1-1C Certificate Page 1",
      caption: "Langit Biru Parasut - MC1-1C (Page 1)",
      category: "Product Certificate"
    },
    {
      src: "/images/certificate/Langit Biru Parasut - MC1-1C_page-0002.jpg",
      alt: "Langit Biru Parasut MC1-1C Certificate Page 2",
      caption: "Langit Biru Parasut - MC1-1C (Page 2)",
      category: "Product Certificate"
    },
    {
      src: "/images/certificate/Langit Biru Parasut - T10R.jpg",
      alt: "Langit Biru Parasut T10R Certificate",
      caption: "Langit Biru Parasut - T10R",
      category: "Product Certificate"
    },
    {
      src: "/images/certificate/SERTIFIKAT NCAGE_page-0001.jpg",
      alt: "NCAGE Certificate Page 1",
      caption: "SERTIFIKAT NCAGE (Page 1)",
      category: "NCAGE Certificate"
    },
    {
      src: "/images/certificate/SERTIFIKAT NCAGE_page-0002.jpg",
      alt: "NCAGE Certificate Page 2",
      caption: "SERTIFIKAT NCAGE (Page 2)",
      category: "NCAGE Certificate"
    },
    {
      src: "/images/certificate/SERTIFIKAT NCAGE_page-0003.jpg",
      alt: "NCAGE Certificate Page 3",
      caption: "SERTIFIKAT NCAGE (Page 3)",
      category: "NCAGE Certificate"
    },
    {
      src: "/images/certificate/SERTIFIKAT NCAGE_page-0004.jpg",
      alt: "NCAGE Certificate Page 4",
      caption: "SERTIFIKAT NCAGE (Page 4)",
      category: "NCAGE Certificate"
    },
    {
      src: "/images/certificate/SERTIFIKAT NCAGE_page-0005.jpg",
      alt: "NCAGE Certificate Page 5",
      caption: "SERTIFIKAT NCAGE (Page 5)",
      category: "NCAGE Certificate"
    },
  ];

  // Fungsi untuk handle klik sertifikat
  const handleCertificateClick = (certificate, index) => {
    openLightbox(certificate, index, certificateImages);
  };

  // Get visible certificates
  const visibleCertificates = certificateImages.slice(0, visibleCount);

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

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "IMMA Certificate":
        return "bg-blue-500";
      case "ISO Certification":
        return "bg-green-500";
      case "Product Certificate":
        return "bg-purple-500";
      case "NCAGE Certificate":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      {/* Header Section */}
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
          Our Certifications
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore our comprehensive collection of international certifications and quality standards that validate our commitment to excellence
        </motion.p>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {visibleCertificates.map((certificate, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
            onClick={() => handleCertificateClick(certificate, index)}
          >
            {/* Certificate Image */}
            <div className="aspect-[3/4] bg-gray-100">
              <img
                src={certificate.src}
                alt={certificate.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <FaEye className="mx-auto mb-3 text-3xl" />
                  <div className="text-sm font-medium">View Certificate</div>
                </div>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="p-4">
              {/* Category Badge */}
              <div className="flex items-center mb-3">
                <FaCertificate className="text-primary-600 mr-2" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(certificate.category)}`}>
                  {certificate.category}
                </span>
              </div>
              
              {/* Certificate Name */}
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                {certificate.caption}
              </h3>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 rounded-xl transition-all duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            Quality Assurance & International Standards
          </h3>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our certifications demonstrate our unwavering commitment to international quality standards, 
            regulatory compliance, and continuous improvement in parachute manufacturing. Each certificate 
            represents rigorous testing, evaluation, and validation of our products and processes.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Certificate;
