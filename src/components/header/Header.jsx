import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { HiX } from "react-icons/hi";

const Header = () => {
  const productsRef = useRef(null);
  const productsTlRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Data navigasi dengan 4 produk
  const productLinks = [
    {
      label: "Troop Back Parachute",
      href: "/product/troop-back-parachute",
      ariaLabel: "View Troop Back Parachute Details",
      isDownload: false,
    },
    {
      label: "Personal Reserve Parachute",
      href: "/product/personal-reserve-parachute",
      ariaLabel: "View Personal Reserve Parachute Details",
      isDownload: false,
    },
    {
      label: "Freefall Parachute",
      href: "/product/freefall-parachute",
      ariaLabel: "View Freefall Parachute Details",
      isDownload: false,
    },
    {
      label: "Cargo Parachute G-14",
      href: "/product/cargo-parachute",
      ariaLabel: "View Cargo Parachute G-14 Details",
      isDownload: false,
    },
  ];

  const menuItems = [
    { label: "Home", href: "/", type: "link" },
    { label: "About Us", href: "/about", type: "link" },
    { label: "Manufacturing", href: "/manufacturing", type: "link" },
    {
      label: "Products",
      href: "/#products",
      type: "dropdown",
      links: productLinks,
    },
    { label: "Services", href: "/services", type: "link" },
    { label: "Gallery", href: "/gallery", type: "link" },
    { label: "Certificate", href: "/certificate", type: "link" },
  ];


  useLayoutEffect(() => {
    const dropdown = productsRef.current;

    if (!dropdown) return;

    // Desktop dropdown animation only
    gsap.set(dropdown, { height: 0, opacity: 0, overflow: "hidden" });

    const tl = gsap.timeline({ paused: true });
    tl.to(dropdown, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    productsTlRef.current = tl;

    return () => {
      tl?.kill();
      productsTlRef.current = null;
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    const tl = productsTlRef.current;
    if (tl) {
      tl.play();
    }
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to prevent flickering
    hoverTimeoutRef.current = setTimeout(() => {
      const tl = productsTlRef.current;
      if (tl) {
        tl.reverse();
      }
    }, 100);
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full bg-transparent relative">
      <nav className="fixed left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-[99] top-[1.2em] md:top-[2em]">
        <div className="p-4 flex items-center justify-between md:justify-between transition-all duration-300">
          {/* Spacer untuk mobile agar logo tetap di tengah */}
          <div className="md:hidden w-8 h-8 order-1"></div>

          {/* Logo - di tengah pada mobile, di kiri pada desktop */}
          <a href="/" className="order-2 md:order-1">
            <div className="flex items-center">
              <img
                src="/logo-master.png"
                alt="Blue Sky Parachute"
                className="h-[32px] md:h-[40px]"
              />
            </div>
          </a>

          {/* Mobile menu button - di kanan pada mobile */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 relative z-[10000] order-3 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Open menu"
          >
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-primary-700' : 'bg-white'
            }`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-primary-700' : 'bg-white'
            }`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-primary-700' : 'bg-white'
            }`}></div>
          </button>

          {/* Menu di kanan */}
          <div className="hidden md:flex items-center space-x-8 order-4">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.type === "dropdown" ? (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => (window.location.href = item.href)}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className={`flex items-center space-x-1 transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer ${
                        isScrolled 
                          ? 'text-primary-800 hover:text-primary-600' 
                          : 'text-white hover:text-white/80'
                      }`}
                    >
                      <span>{item.label}</span>
                      <GoArrowUpRight className="transform transition-transform duration-300" />
                    </button>
                    <div
                      ref={productsRef}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      role="menu"
                      tabIndex={0}
                      aria-label="Products menu"
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-primary-200 min-w-[280px] z-50"
                    >
                      <div className="py-2">
                        {productLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="block px-4 py-2 text-primary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                            aria-label={link.ariaLabel}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`transition-colors duration-300 font-medium ${
                      isScrolled 
                        ? 'text-primary-800 hover:text-primary-600' 
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Contact Us Button */}
            <a href="/contact">
              <button
                type="button"
                className="bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors duration-300 font-medium"
              >
                Contact Us
              </button>
            </a>
          </div>

        </div>

        {/* Mobile Menu Overlay with Animation */}
        <div
          ref={mobileMenuRef}
          className={`fixed inset-0 bg-white z-[9999] md:hidden transition-all duration-300 ease-in-out backdrop-blur-sm ${
            isMobileMenuOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible"
          }`}
          style={{
            top: -20,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(248, 249, 250, 0.95)",
            overflowY: "auto",
          }}
          onClick={(e) => {
            // Close menu if clicking on the overlay background
            if (e.target === e.currentTarget) {
              closeMobileMenu();
            }
          }}
        >
          <div 
            className="flex flex-col h-full pt-16 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Inside Mobile Menu */}
            <div className="absolute top-4 right-6">
              <button
                type="button"
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors duration-300"
                aria-label="Close menu"
              >
                <HiX className="w-6 h-6 text-primary-700" />
              </button>
            </div>

            {/* Mobile Menu Items with staggered animation */}
            <div className="flex flex-col space-y-6">
              {menuItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`transform transition-all duration-500 ease-out ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 100}ms`
                      : "0ms",
                  }}
                >
                  {item.type === "dropdown" ? (
                    <div className="space-y-4">
                      <a
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="text-2xl font-semibold text-primary-800 hover:text-primary-600 transition-colors duration-300 block"
                      >
                        {item.label}
                      </a>
                      <div className="pl-4 space-y-3">
                        {productLinks.map((link, linkIndex) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMobileMenu}
                            className={`block text-lg text-primary-700 hover:text-primary-600 transition-all duration-300 ${
                              isMobileMenuOpen
                                ? "translate-x-0 opacity-100"
                                : "translate-x-4 opacity-0"
                            }`}
                            style={{
                              transitionDelay: isMobileMenuOpen
                                ? `${index * 100 + linkIndex * 50 + 200}ms`
                                : "0ms",
                            }}
                            aria-label={link.ariaLabel}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="text-2xl font-semibold text-primary-800 hover:text-primary-600 transition-colors duration-300 block"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Contact Button with animation */}
            <div
              className={`mt-8 transform transition-all duration-500 ease-out ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${menuItems.length * 100 + 200}ms`
                  : "0ms",
              }}
            >
              <a href="/contact" onClick={closeMobileMenu}>
                <button
                  type="button"
                  className="w-full bg-accent-500 text-white px-6 py-4 rounded-lg hover:bg-accent-600 transition-colors duration-300 font-semibold text-lg"
                >
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
