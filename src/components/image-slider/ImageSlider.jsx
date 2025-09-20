import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = ({ images = [], autoPlay = true, interval = 5000, isHeroBackground = false, showCaptions = true, showControls = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images.length) {
    const containerClasses = "relative w-full h-full overflow-hidden";
    
    return (
      <div className={containerClasses}>
        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 text-lg">
          <p>No images available</p>
        </div>
      </div>
    );
  }

  const containerClasses = "relative w-full h-full overflow-hidden";

  return (
    <div className={containerClasses}>
      <div className="relative w-full h-full">
        <div 
          className="flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={`slide-${image.src || index}`} className="min-w-full h-full relative">
              <img 
                src={image.src} 
                alt={image.alt || `Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              {showCaptions && image.caption && !isHeroBackground && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 md:p-10 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{image.caption.title}</h3>
                  <p className="text-sm md:text-base opacity-90">{image.caption.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {showControls && images.length > 1 && (
          <>
            <button 
              className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 hover:scale-110 z-30 flex items-center justify-center shadow-lg"
              onClick={goToPrevious}
              aria-label="Previous slide"
              type="button"
            >
              <FaChevronLeft className="text-lg md:text-xl" />
            </button>
            <button 
              className="absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 hover:scale-110 z-30 flex items-center justify-center shadow-lg"
              onClick={goToNext}
              aria-label="Next slide"
              type="button"
            >
              <FaChevronRight className="text-lg md:text-xl" />
            </button>
          </>
        )}

        {showControls && images.length > 1 && (
          <div className={`absolute ${isHeroBackground ? 'bottom-8' : 'bottom-4'} left-1/2 transform -translate-x-1/2 flex space-x-3 z-30`}>
            {images.map((image, index) => (
              <button
                key={`dot-${image.src || index}`}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 shadow-lg ${
                  index === currentIndex 
                    ? 'bg-white scale-125 shadow-white/30' 
                    : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    caption: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  })),
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  isHeroBackground: PropTypes.bool,
  showCaptions: PropTypes.bool,
  showControls: PropTypes.bool
};

export default ImageSlider;
