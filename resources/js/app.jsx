import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/gambar.css";
import "../css/app.css";

// Components
import AppNavbar from "./components/Navbar.jsx";
import HeaderContent from "./components/conten/header.jsx";
import Card from "./components/conten/card.jsx";
import ProfilCard from "./components/conten/profil.jsx";
import TeamCards from "./components/conten/TeamCards.jsx";
import Tutorial1 from "./components/conten/tutorial1.jsx"; // path benar

export default function App() {
  return (
    <div>
      <AppNavbar />
      <HeaderContent />
      
    
      <Tutorial1 />   {/* Memanggil komponen tutorial1 */}
      <Card />
      <TeamCards />
    </div>
  );
}

// Render ke root
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
