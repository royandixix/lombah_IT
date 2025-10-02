import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function CompanyNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const dropdownRef = useRef(null);
  const lastScrollRef = useRef(0);

  // Klik di luar → tutup dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 50) {
        setShowNavbar(true);
      } else if (currentScroll > lastScrollRef.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollRef.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-black backdrop-blur-md shadow-md transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-white font-semibold text-lg">
          PT. Global Importindo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>

          {/* Dropdown Desktop */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-gray-300 transition"
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
              <ul className="absolute top-full left-0 mt-2 w-44 bg-black rounded-md shadow-lg">
                <li>
                  <Link
                    to="/sampah"
                    className="block px-4 py-2 text-white hover:bg-black/70 rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Tentang Sampah
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hutan"
                    className="block px-4 py-2 text-white hover:bg-black/70 rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Tentang Hutan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/carbon"
                    className="block px-4 py-2 text-white hover:bg-black/70 rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Tentang Karbon
                  </Link>
                </li>
                <li className="border-t border-white/20 my-1"></li>
                <li>
                  <Link
                    to="/customs"
                    className="block px-4 py-2 text-white hover:bg-black/70 rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Layanan Bea Cukai
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/products" className="hover:text-gray-300 transition">
              Produk
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 transition">
              Kontak
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/login"
            className="px-4 py-1 rounded text-white bg-black/40 hover:bg-black/60 transition"
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className="px-4 py-1 rounded text-white bg-black hover:bg-black/80 font-medium transition"
          >
            Daftar
          </Link>
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
        <div className="lg:hidden bg-black text-white px-6 py-4 max-h-[70vh] overflow-auto">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sampah"
                className="block hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang Sampah
              </Link>
            </li>
            <li>
              <Link
                to="/hutan"
                className="block hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang Hutan
              </Link>
            </li>
            <li>
              <Link
                to="/carbon"
                className="block hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang Karbon
              </Link>
            </li>
            <li>
              <Link
                to="/customs"
                className="block hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Layanan Bea Cukai
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produk
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontak
              </Link>
            </li>
            <li className="flex space-x-2 mt-3">
              <Link
                to="/login"
                className="px-4 py-1 rounded bg-black/40 hover:bg-black/60 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link
                to="/register"
                className="px-4 py-1 rounded bg-black hover:bg-black/80 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default CompanyNavbar;
