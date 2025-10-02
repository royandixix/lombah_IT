// resources/js/components/carbon/Layout/header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="bg-green-600 text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Tentang Karbon
        </h1>
        <p className="text-lg">
          Pelajari bagaimana karbon memengaruhi lingkungan dan langkah-langkah yang dapat kita ambil untuk mengurangi jejak karbon.
        </p>
      </div>
    </header>
  );
}
