import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Context untuk Lightbox
const LightboxContext = createContext();

// Hook untuk menggunakan Lightbox
export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};

// Provider untuk Lightbox
export const LightboxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Fungsi untuk membuka lightbox
  const openLightbox = (image, index, imageList) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setImages(imageList);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Fungsi untuk menutup lightbox
  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'unset';
  };

  // Fungsi untuk navigasi ke gambar sebelumnya
  const previousImage = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  // Fungsi untuk navigasi ke gambar selanjutnya
  const nextImage = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        previousImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentIndex, images]);

  // Animation variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const value = {
    openLightbox,
    closeLightbox,
    isOpen,
    currentImage,
    currentIndex,
    images
  };

  return (
    <LightboxContext.Provider value={value}>
      {children}
      
      {/* Global Lightbox Modal */}
      <AnimatePresence>
        {isOpen && currentImage && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-[10000] text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FaTimes size={20} />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-[10000] text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={20} />
                </button>

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-[10000] text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next image"
                >
                  <FaChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh] mx-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{ maxHeight: '85vh' }}
              />
              
              {/* Caption */}
              {currentImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white p-4 rounded-b-lg">
                  <h3 className="text-lg font-semibold mb-1">{currentImage.caption}</h3>
                  {images.length > 1 && (
                    <p className="text-sm text-gray-300">
                      {currentIndex + 1} of {images.length}
                    </p>
                  )}
                </div>
              )}
            </motion.div>

            {/* Mobile swipe indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
};

export default LightboxProvider;
