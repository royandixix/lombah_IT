import { useEffect, useState, useRef } from "react";

function CompanyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll handler hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);
      setShowNavbar(!(currentScroll > lastScroll && currentScroll > 100));
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Click outside dropdown → close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform transition-opacity duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      } ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-white font-semibold text-lg">
          PT. Global Importindo
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-white">
          <li>
            <a href="#about" className="hover:text-gray-200 transition">
              Tentang Kami
            </a>
          </li>

          {/* Dropdown Desktop */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-gray-200 transition"
            >
              Layanan
              <svg
                className="ml-1 w-3 h-3 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-44 bg-black/90 rounded-md shadow-lg">
                <li>
                  <a
                    href="#import"
                    className="block px-4 py-2 text-white hover:bg-white/10 rounded-md"
                  >
                    Impor
                  </a>
                </li>
                <li>
                  <a
                    href="#export"
                    className="block px-4 py-2 text-white hover:bg-white/10 rounded-md"
                  >
                    Ekspor
                  </a>
                </li>
                <li>
                  <a
                    href="#consulting"
                    className="block px-4 py-2 text-white hover:bg-white/10 rounded-md"
                  >
                    Konsultasi
                  </a>
                </li>
                <li className="border-t border-white/20 my-1"></li>
                <li>
                  <a
                    href="#customs"
                    className="block px-4 py-2 text-white hover:bg-white/10 rounded-md"
                  >
                    Layanan Bea Cukai
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#products" className="hover:text-gray-200 transition">
              Produk
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200 transition">
              Kontak
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="#login"
            className="px-4 py-1 rounded text-white bg-white/20 hover:bg-white/30 transition"
          >
            Masuk
          </a>
          <a
            href="#register"
            className="px-4 py-1 rounded bg-white text-black font-medium hover:bg-gray-100 transition"
          >
            Daftar
          </a>
        </div>


       

        {/* Mobile Toggle */}
        <div className="lg:hidden text-white">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/90 text-white px-6 py-4 max-h-[70vh] overflow-auto">
          <ul className="space-y-2">
            <li>
              <a href="#about" className="block hover:text-gray-200">
                Tentang Kami
              </a>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full hover:text-gray-200"
              >
                Layanan
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={dropdownOpen ? "M6 18L18 6M6 6l12 12" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <a href="#import" className="block hover:text-gray-200">
                      Impor
                    </a>
                  </li>
                  <li>
                    <a href="#export" className="block hover:text-gray-200">
                      Ekspor
                    </a>
                  </li>
                  <li>
                    <a href="#consulting" className="block hover:text-gray-200">
                      Konsultasi
                    </a>
                  </li>
                  <li>
                    <a href="#customs" className="block hover:text-gray-200">
                      Layanan Bea Cukai
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#products" className="block hover:text-gray-200">
                Produk
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-gray-200">
                Kontak
              </a>
            </li>
            <li className="flex space-x-2 mt-3">
              <a
                href="#login"
                className="px-4 py-1 rounded bg-white/20 hover:bg-white/30 transition"
              >
                Masuk
              </a>
              <a
                href="#register"
                className="px-4 py-1 rounded bg-white text-black font-medium hover:bg-gray-100 transition"
              >
                Daftar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default CompanyNavbar;
