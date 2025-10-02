import React, { useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/gambar.css";
import "../css/app.css";

// Layout
import { Navbar as AppNavbar, Header as HeaderContent, Footer } from "./components/sampah/layout";

// Pages / Components
import Sampah from "./components/sampah/CaraPengeLolaAnSampah.jsx";
import TentangHutan from "./components/hutan/TentangHutan.jsx";
import TentangHutan2 from "./components/hutan/TentangHutan2.jsx";
import Card from "./components/sampah/Card.jsx";
import TeamCards from "./components/sampah/TeamCards.jsx";
import Tutorial1 from "./components/sampah/Tutorial1.jsx";
import Example from "./components/sampah/Penjelasan_jenis_sampah.jsx";
import TentangCarbon from "./components/carbon/TentangCarbon.jsx";

// Navbar dengan efek hide/show saat scroll
function ScrollNavbar() {
  const [show, setShow] = useState(true);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef(null);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50 || (navRef.current && navRef.current.matches(":hover"))) {
        setShow(true);
      } else if (currentScroll > lastScrollRef.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollRef.current = currentScroll;
    };

    handleScroll(); // posisi awal

    window.addEventListener("scroll", handleScroll);
    setMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 w-full z-50 ${
        mounted ? "transition-transform duration-300" : ""
      } ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <AppNavbar />
    </div>
  );
}

// Komponen untuk scroll ke atas setiap pindah route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <ScrollNavbar />

      {/* Scroll ke atas saat pindah halaman */}
      <ScrollToTop />

      {/* Layout wrapper agar footer selalu di bawah */}
      <div className="flex flex-col min-h-screen pt-[80px]">
        {/* Konten halaman */}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <HeaderContent />
                  <Tutorial1 />
                  <Card />
                  <Example />
                  <Sampah />
                  <TeamCards />
                </div>
              }
            />
            
            <Route path="/hutan" element={<TentangHutan />} />
            <Route path="/hutan2" element={<TentangHutan2 />} />
            <Route path="/sampah" element={<Sampah />} />
            <Route path="/carbon" element={<TentangCarbon />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

// Render ke root
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
