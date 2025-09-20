import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  const productsRef = useRef(null);
  const productsTlRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Data navigasi dengan dropdown hanya untuk Products
  const productLinks = [
    {
      label: "Skydiving Parachutes",
      href: "/product/skydiving-parachutes",
      ariaLabel: "View Skydiving Parachutes",
    },
    {
      label: "Static Line Parachutes",
      href: "/product/static-line-parachutes",
      ariaLabel: "View Static Line Parachutes",
    },
    {
      label: "Emergency Parachutes",
      href: "/product/emergency-parachutes",
      ariaLabel: "View Emergency Parachutes",
    },
    {
      label: "Declaration Parachutes",
      href: "/product/declaration-parachutes",
      ariaLabel: "View Declaration Parachutes",
    },
    {
      label: "Cargo Parachutes",
      href: "/product/cargo-parachutes",
      ariaLabel: "View Cargo Parachutes",
    },
    {
      label: "Airborne Troop's Parachute",
      href: "/product/airborne-troop-s-parachute",
      ariaLabel: "View Airborne Troop Parachutes",
    },
  ];

  const menuItems = [
    { label: "Home", href: "/", type: "link" },
    { label: "About Us", href: "/about", type: "link" },
    { label: "Manufacturing", href: "/manufacturing", type: "link" },
    {
      label: "Products",
      href: "/products",
      type: "dropdown",
      links: productLinks,
    },
    { label: "Services", href: "/services", type: "link" },
  ];

  useLayoutEffect(() => {
    const dropdown = productsRef.current;
    if (!dropdown) return;

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

  return (
    <header className="w-full bg-transparent relative">
      <nav className="absolute left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-[99] top-[1.2em] md:top-[2em]">
        <div className="bg-army-50 border border-army-200 rounded-xl shadow-lg p-4 flex items-center justify-between">
          {/* Logo di kiri */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Blue Sky Parachute"
              className="h-[32px] md:h-[40px]"
            />
          </div>

          {/* Menu di kanan */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.type === "dropdown" ? (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => (window.location.href = item.href)}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="flex items-center space-x-1 text-army-800 hover:text-army-600 transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer"
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
                      className="absolute top-full left-0 mt-2 bg-army-50 rounded-lg shadow-lg border border-army-200 min-w-[250px] z-50"
                    >
                      <div className="py-2">
                        {productLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            role="menuitem"
                            className="block px-4 py-2 text-army-700 hover:bg-army-100 hover:text-army-600 transition-colors duration-200"
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
                    className="text-army-800 hover:text-army-600 transition-colors duration-300 font-medium"
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
                className="bg-army-600 text-army-50 px-6 py-2 rounded-lg hover:bg-army-700 transition-colors duration-300 font-medium"
              >
                Contact Us
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          >
            <div className="w-6 h-0.5 bg-army-700"></div>
            <div className="w-6 h-0.5 bg-army-700"></div>
            <div className="w-6 h-0.5 bg-army-700"></div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
