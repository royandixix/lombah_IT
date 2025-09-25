import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/gambar.css";
import "../css/app.css";



import AppNavbar from "./components/sampah/layout/Navbar.jsx";
import HeaderContent from "./components/sampah/layout/header.jsx";
import Card from "./components/sampah/card.jsx";
// import Profil from "./components/sampah/profil.jsx";
import TeamCards from "./components/sampah/TeamCards.jsx";
import Tutorial1 from "./components/sampah/Tutorial1.jsx";
import Example from "./components/sampah/Penjelasan_jenis_sampah.jsx";
import CaraPengeLolaAnSampah from "./components/sampah/CaraPengeLolaAnSampah.jsx";
import Footer from "./components/sampah/layout/footer.jsx";

export default function App() {
  return (
    <div>
      <AppNavbar />
      <HeaderContent />
      <Tutorial1 />
      <Card />
      <Example />
      <CaraPengeLolaAnSampah />
      <TeamCards />
      <Footer />
      {/* <Profil />   sekarang dipanggil */}
    </div>
  );
}

// Render ke root
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
