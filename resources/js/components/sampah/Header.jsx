import React, { useEffect, useState } from "react";
import "../../../css/header.css";


export default function HeaderContent() {
  const texts = [
    "Kelola Sampah, Selamatkan Bumi",
    "Daur Ulang Hari Ini, Hijaukan Masa Depan",
    "Kurangi Sampah, Tingkatkan Kehidupan"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % texts.length);
    }, 4000); // ganti teks setiap 4 detik

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <header
      className="hero-section d-flex align-items-center text-white"
      style={{ backgroundImage: "url('/img/gambar1.jpeg')" }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="container position-relative text-start">
        <p className="tagline mb-2">Bersama Jaga Lingkungan</p>

        {/* Slider Kalimat */}
        <div className="hero-slider">
          {texts.map((text, index) => (
            <h1
              key={index}
              className={`hero-title ${
                index === current ? "slide-in" : "slide-out"
              }`}
            >
              {text}
            </h1>
          ))}
        </div>

        <p className="hero-subtitle lead mb-4">
          Sampah bukan sekadar limbah, tapi peluang untuk masa depan yang lebih hijau. <br />
          Mulailah dari diri sendiri: kurangi, daur ulang, dan peduli lingkungan hari ini.
        </p>

        <div className="d-flex gap-3">
          <a href="#courses" className="btn btn-light btn-lg px-4 hero-btn">
            Mulai Aksi
          </a>
          <a href="#join" className="btn btn-outline-light btn-lg px-4 hero-btn">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </header>
  );
}
