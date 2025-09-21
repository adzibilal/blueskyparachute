import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SEO from "../../components/SEO/SEO";
import Certificate from "../../components/certificate/Certificate";

const CertificatePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Certifications"
        description="Explore Blue Sky Parachute's comprehensive collection of international certifications and quality standards. Our certifications demonstrate our commitment to excellence in parachute manufacturing and regulatory compliance."
        keywords="blue sky parachute certifications, parachute quality standards, ISO certification, IMMA certificate, NCAGE certificate, international parachute standards, parachute manufacturing certification"
        url="/certificate"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Blue Sky Parachute Certifications",
          description: "International certifications and quality standards of Blue Sky Parachute",
          url: "https://blueskyparachute.com/certificate",
          mainEntity: {
            "@type": "Organization",
            name: "Blue Sky Parachute",
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                name: "ISO 9001 Certification",
                credentialCategory: "Quality Management"
              },
              {
                "@type": "EducationalOccupationalCredential", 
                name: "IMMA Certification",
                credentialCategory: "Military Standards"
              },
              {
                "@type": "EducationalOccupationalCredential",
                name: "NCAGE Certification", 
                credentialCategory: "NATO Commercial and Government Entity"
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
              Our Certifications
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore our comprehensive collection of international
              certifications and quality standards that validate our commitment
              to excellence
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

      {/* Certificate Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Certificate />
        </div>
      </section>
    </div>
  );
};

export default CertificatePage;
