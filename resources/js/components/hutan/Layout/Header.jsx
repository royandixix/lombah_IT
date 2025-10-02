import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// List edukasi tentang hutan
const edukasi = [
  "Pengertian dan jenis-jenis hutan",
  "Fungsi ekologi hutan",
  "Keanekaragaman hayati hutan",
  "Hutan dan perubahan iklim",
  "Peran masyarakat dalam menjaga hutan",
];

// Path gambar dari folder public
const bgImage = "/img/hutan/muhammad-iqbal-uD4wymJbp7g-unsplash.jpg";

export default function Header() {
  return (
    <div
      className="relative isolate min-h-screen flex items-center justify-center px-6 py-20 lg:px-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl text-center">
        {/* Judul */}
        <motion.h2
          className="text-green-300 text-lg font-semibold uppercase tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Tentang Hutan
        </motion.h2>

        <motion.p
          className="mt-2 text-5xl font-extrabold text-white sm:text-6xl drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Edukasi Hutan
        </motion.p>

        {/* Deskripsi */}
        <motion.p
          className="mt-6 text-lg text-gray-200 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Pelajari betapa pentingnya hutan dalam menjaga keseimbangan ekosistem,
          keanekaragaman hayati, serta peran kita dalam melestarikannya untuk
          generasi mendatang.
        </motion.p>

        {/* List edukasi */}
        <motion.ul
          className="mt-12 space-y-4 text-left text-gray-100 mx-auto max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {edukasi.map((item) => (
            <motion.li
              key={item}
              className="flex items-start gap-x-3 text-lg"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <CheckIcon className="h-6 w-6 text-green-400 flex-none" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Tombol Lanjut ke halaman TentangHutan */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Link
              to="/hutan"
              className="rounded-md bg-green-600 px-6 py-3 text-white text-lg font-semibold shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              Lanjut
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
