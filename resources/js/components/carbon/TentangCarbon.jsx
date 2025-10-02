import React from "react";
import Header from "./Layout/header";

export default function TentangCarbon() {
  return (
    <div>
      <Header />
      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Mengapa Karbon Penting?</h2>
        <p>
          Karbon merupakan salah satu gas rumah kaca utama yang berkontribusi pada perubahan iklim.
          Mengetahui dampaknya membantu kita membuat keputusan lebih bijak untuk lingkungan.
        </p>
      </section>
    </div>
  );
}
