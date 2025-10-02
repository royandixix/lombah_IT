import React from "react";
import Header from "./Layout/Header";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/20/solid";

// List edukasi tentang hutan
const edukasi = [
  "Pengertian dan jenis-jenis hutan",
  "Fungsi ekologi hutan",
  "Keanekaragaman hayati hutan",
  "Hutan dan perubahan iklim",
  "Peran masyarakat dalam menjaga hutan",
];

export default function TentangHutan2() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header dari Layout */}
      <Header />

      {/* Konten utama */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          {/* Judul */}
          <motion.h2
            className="text-center text-base font-semibold text-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Edukasi Hutan
          </motion.h2>

          <motion.p
            className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pengetahuan Penting tentang Hutan
          </motion.p>

          {/* List edukasi */}
          <motion.ul
            className="mt-12 space-y-4 mx-auto max-w-xl text-left text-lg text-gray-100"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {edukasi.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-x-3"
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

          {/* Grid cards */}
          <div className="mt-16 grid gap-4 sm:mt-20 lg:grid-cols-3 lg:grid-rows-2">
            {/* Card 1 */}
            <motion.div
              className="relative lg:row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-400">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900">
                    <img
                      alt="Mobile preview"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="relative max-lg:row-start-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Performance
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit maiores
                    impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10">
                  <img
                    alt="Performance"
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-px rounded-lg bg-gray-800" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Security
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-400">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10">
                  <img
                    alt="Security"
                    src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                    className="h-40 object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="relative lg:row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-400">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                    eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                    <div className="px-6 pt-6 pb-14">{/* Contoh code */}</div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
