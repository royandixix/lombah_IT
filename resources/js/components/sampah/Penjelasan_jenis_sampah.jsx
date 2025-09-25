"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function Example() {
  const [open, setOpen] = useState(false);
  const [kategori, setKategori] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const data = [
    {
      title: "Plastik",
      desc: "Botol minuman, kantong belanja, dan wadah plastik bisa diproses ulang.",
      icon: CloudArrowUpIcon,
      images: [
        "/img/sampah/bundle-1853667_1280.jpg",
        "/img/sampah/the-bottle-5128607_1280.jpg",
      ],
    },
    {
      title: "Organik",
      desc: "Sisa makanan dan sampah hijau bisa dijadikan kompos.",
      icon: LockClosedIcon,
      images: ["/img/sampah/green-waste-486011_1280.jpg"],
    },
    {
      title: "Ban Bekas",
      desc: "Ban bekas bisa didaur ulang menjadi produk kreatif.",
      icon: ServerIcon,
      images: ["/img/sampah/tires-904945_1280.jpg"],
    },
  ];

  const allImages = data.flatMap((item) => item.images);

  // Slideshow otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  // Intersection observer untuk animasi saat scroll
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Teks Judul */}
        <motion.div
          className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600">
                Peduli Lingkungan
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Sampah yang Bisa{" "}
                <span className=" text-green-600">Didaur</span> Ulang
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Banyak jenis sampah rumah tangga bisa dimanfaatkan kembali jika
                dipilah dengan benar. Mari kenali beberapa contohnya agar lebih
                mudah mendaur ulang.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Slideshow Gambar Besar */}
        <motion.div
          className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          initial={{ opacity: 0, x: 200 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[50rem] h-[44rem] lg:w-[60rem] lg:h-[48rem] overflow-hidden">
            <AnimatePresence mode="wait" custom={currentImage}>
              <motion.img
                key={currentImage}
                src={allImages[currentImage]}
                alt="Ilustrasi daur ulang"
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* List Fitur */}
        <motion.div
          className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-700">
                {data.map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-y-2">
                    <div className="flex gap-x-3">
                      <item.icon
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          {item.title}.
                        </strong>{" "}
                        {item.desc}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setKategori(item);
                        setOpen(true);
                      }}
                      className="ml-8 w-fit rounded-lg bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700 transition"
                    >
                      Selengkapnya
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && kategori && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300 hover:text-gray-800"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <h2 className="mb-4 text-xl font-bold text-gray-900">
                {kategori.title}
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {kategori.images.map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    alt={kategori.title}
                    className="h-40 w-full rounded-lg object-cover shadow"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
