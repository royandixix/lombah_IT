import React from "react";
import Header from "./Layout/Header";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

// Data fitur/penjelasan
const features = [
  {
    name: "Pengertian dan jenis-jenis hutan",
    description:
      "Hutan adalah ekosistem yang didominasi oleh pepohonan dan tumbuhan lain yang hidup secara alami. Hutan memiliki peran penting sebagai paru-paru dunia, penyimpan cadangan air, serta habitat jutaan makhluk hidup. Jenis-jenis hutan di Indonesia antara lain: Hutan Hujan Tropis, Hutan Mangrove, Hutan Sabana, dan Hutan Pegunungan. Masing-masing jenis memiliki karakteristik unik dan fungsi ekologis berbeda.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Fungsi ekologi hutan",
    description:
      "Hutan menyerap karbon dioksida, menghasilkan oksigen, menjaga keseimbangan iklim, serta melindungi tanah dari erosi. Tanpa hutan, siklus air dan iklim global akan terganggu.",
    icon: LockClosedIcon,
  },
  {
    name: "Keanekaragaman hayati hutan",
    description:
      "Hutan Indonesia menyimpan salah satu keanekaragaman hayati terbesar di dunia, menjadi rumah bagi ribuan spesies tumbuhan dan satwa endemik, termasuk orangutan, harimau sumatera, dan burung cenderawasih.",
    icon: ServerIcon,
  },
];

export default function TentangHutan() {
  return (
    <div className="bg-white">
      {/* Header tetap tampil */}
      <Header />

      {/* Konten dengan animasi */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            
            {/* Bagian Teks */}
            <motion.div
              className="lg:pt-4 lg:pr-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="lg:max-w-lg">
                <motion.h2
                  className="text-base font-semibold text-green-600"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Edukasi Hutan
                </motion.h2>

                <motion.p
                  className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Pengertian dan Jenis-Jenis Hutan
                </motion.p>

                <motion.p
                  className="mt-6 text-lg text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Hutan bukan hanya sekadar kumpulan pepohonan, melainkan
                  ekosistem kompleks yang menopang kehidupan. Berikut beberapa
                  penjelasan penting mengenai hutan:
                </motion.p>

                {/* List features dengan animasi stagger */}
                <motion.dl
                  className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.2 },
                    },
                  }}
                >
                  {features.map((feature) => (
                    <motion.div
                      key={feature.name}
                      className="relative pl-9"
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 h-5 w-5 text-green-500"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </motion.div>
                  ))}
                </motion.dl>
              </div>
            </motion.div>

            {/* Bagian Gambar */}
            <motion.div
              className="grid gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.img
                alt="Hutan tropis"
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"
                width={2432}
                height={1442}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                alt="Hutan pegunungan"
                src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1200&auto=format&fit=crop"
                width={2432}
                height={1442}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
