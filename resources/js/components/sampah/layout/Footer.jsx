import React from "react";

function Footer() {
  return (
    <footer className="bg-[#000000] pt-16 pb-8 px-6 md:px-12 tracking-wide relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Grid utama */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12 gap-10 relative z-20">
          {/* Logo + Deskripsi */}
          <div className="lg:col-span-1">
            <h1 className="text-2xl font-semibold text-white mb-4">PT. Global Importindo</h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Menghadirkan solusi ramah lingkungan melalui pengelolaan dan daur ulang sampah yang efisien dan inovatif.
            </p>
          </div>

          {/* Perusahaan */}
          <div>
            <h2 className="text-base font-medium text-white mb-6">Perusahaan</h2>
            <ul className="space-y-4">
              {["Tentang Kami", "Layanan", "Kontak", "Karir", "Blog", "Berita"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm inline-flex items-center transition-all"
                  >
                    <span className="mr-1.5">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h2 className="text-base font-medium text-white mb-6">Produk</h2>
            <ul className="space-y-4">
              {["Unggulan", "Produk Baru", "Promo", "Terlaris", "Kategori", "Voucher"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm inline-flex items-center transition-all"
                  >
                    <span className="mr-1.5">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sumber Daya */}
          <div>
            <h2 className="text-base font-medium text-white mb-6">Sumber Daya</h2>
            <ul className="space-y-4">
              {["Dokumentasi", "FAQ", "Dukungan", "Tutorial", "Forum Komunitas"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm inline-flex items-center transition-all"
                  >
                    <span className="mr-1.5">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h2 className="text-base font-medium text-white mb-6">Hubungi Kami</h2>
            <ul className="space-y-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-green-500 text-sm inline-flex items-center transition-all"
                  >
                    <span className="mr-1.5">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Garis pemisah */}
        <hr className="border-gray-700 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-slate-400 text-sm relative z-20">
          <p>© {new Date().getFullYear()} PT. Global Importindo. Semua hak dilindungi.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
