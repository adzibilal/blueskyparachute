import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas setiap kali pathname berubah
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Untuk smooth scrolling, bisa diganti 'auto' untuk instant
    });
  }, [pathname]);

  return null; // Komponen ini tidak merender apapun
};

export default ScrollToTop;
