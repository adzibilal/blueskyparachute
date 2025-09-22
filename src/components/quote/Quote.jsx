import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Quote = () => {
  const quoteImages = [
    {
      id: 1,
      image: "/images/quotes/quote-president.png",
      alt: "Quote from President",
    },
    {
      id: 2,
      image: "/images/quotes/quote-menhan.png",
      alt: "Quote from Minister of Defense",
    },
  ];

  // Fungsi untuk mencegah context menu dan drag
  const handleImageProtection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  // Fungsi untuk mencegah keyboard shortcuts
  const handleKeyDown = (e) => {
    // Mencegah Ctrl+S, Ctrl+A, F12, Ctrl+Shift+I, Ctrl+U
    if (
      (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'u')) ||
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I')
    ) {
      e.preventDefault();
      return false;
    }
  };

  return (
    <div 
      className="md:py-16 py-10"
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {quoteImages.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative select-none"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            onContextMenu={handleImageProtection}
            onDragStart={handleImageProtection}
            onDrop={handleImageProtection}
          >
            {/* Overlay transparan untuk mencegah klik kanan */}
            <div
              className="absolute inset-0 z-10"
              onContextMenu={handleImageProtection}
              onDragStart={handleImageProtection}
              onSelectStart={handleImageProtection}
              style={{ userSelect: 'none', pointerEvents: 'auto' }}
            />
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-auto object-contain select-none pointer-events-none"
              draggable="false"
              onContextMenu={handleImageProtection}
              onDragStart={handleImageProtection}
              onLoad={(e) => {
                // Mencegah caching gambar di browser
                e.target.style.webkitUserSelect = 'none';
                e.target.style.mozUserSelect = 'none';
                e.target.style.msUserSelect = 'none';
                e.target.style.userSelect = 'none';
              }}
              onError={(e) => {
                // Fallback jika gambar tidak ditemukan
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='18' fill='%236b7280' text-anchor='middle' dy='.3em'%3EQuote Image%3C/text%3E%3C/svg%3E";
              }}
              style={{
                userSelect: 'none',
                webkitUserSelect: 'none',
                mozUserSelect: 'none',
                msUserSelect: 'none',
                webkitTouchCallout: 'none',
                webkitUserDrag: 'none',
                pointerEvents: 'none'
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Quote;
