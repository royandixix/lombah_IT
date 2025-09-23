import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Sampah Organik",
    description:
      "Sampah dari bahan alami yang mudah terurai, seperti sisa makanan, dedaunan, dan ranting pohon. Dapat diolah kembali menjadi kompos untuk menyuburkan tanah.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Sampah Anorganik",
    description:
      "Berupa plastik, kaleng, kaca, dan kertas. Jenis sampah ini tidak mudah terurai, tetapi bisa dimanfaatkan kembali melalui proses daur ulang.",
    icon: LockClosedIcon,
  },
  {
    name: "Sampah B3 (Bahan Berbahaya & Beracun)",
    description:
      "Contohnya baterai bekas, obat-obatan kadaluarsa, pestisida, dan limbah kimia. Sampah ini harus ditangani dengan cara khusus agar tidak merusak lingkungan.",
    icon: ServerIcon,
  },
  {
    name: "Sampah Elektronik",
    description:
      "Meliputi peralatan elektronik rusak seperti HP, komputer, atau televisi. Komponen di dalamnya dapat didaur ulang, namun harus diproses dengan benar.",
    icon: ServerIcon,
  },
  {
    name: "Sampah Konstruksi",
    description:
      "Puing bangunan, beton, batu, dan kayu sisa konstruksi. Sebagian masih dapat dipakai kembali untuk keperluan lain atau didaur ulang.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Sampah Medis",
    description:
      "Jarum suntik, masker sekali pakai, sarung tangan medis, dan limbah rumah sakit lainnya yang berpotensi berbahaya bagi kesehatan manusia.",
    icon: LockClosedIcon,
  },
];

export default function Example() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-24 sm:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid: teks dulu di mobile, gambar di bawah; kebalikan di desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Konten teks */}
          <div
            className="order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="lg:max-w-2xl">
              <h2 className="text-base font-semibold text-green-600 uppercase tracking-wide">
                Penjelasan Jenis Sampah
              </h2>
              <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Mengenal Sampah untuk{" "}
                <span className="text-green-600">Mengelola dengan Bijak</span>
              </p>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Sampah yang kita hasilkan sehari-hari terbagi menjadi beberapa
                jenis. Dengan mengenali masing-masing kategori, kita bisa lebih
                bijak dalam memilah, mengurangi dampak buruk bagi lingkungan,
                serta memaksimalkan potensi daur ulang.
              </p>

              {/* Daftar fitur */}
              <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-base text-gray-700">
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className="relative pl-12 group transition-all duration-300 hover:bg-green-50 rounded-xl p-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <dt className="absolute left-0 top-1 h-8 w-8 text-green-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                      <feature.icon aria-hidden="true" className="h-6 w-6" />
                    </dt>
                    <dd className="ml-2 group-hover:text-green-700 transition-colors duration-300">
                      <span className="font-semibold text-gray-900">
                        {feature.name}
                      </span>
                      <p className="mt-1 text-gray-700">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Kolase gambar */}
          <div
            className="order-2 lg:order-1 grid grid-cols-3 gap-4"
            data-aos="fade-right"
          >
            {/* Gambar besar */}
            <div className="col-span-2 row-span-2">
              <img
                src="img/sampah/trash-184994_1280.jpg"
                alt="Sampah 1"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Gambar kecil tambahan */}
            <img
              src="img/sampah/the-bottle-5128607_1280.jpg"
              alt="Sampah 2"
              className="w-full h-[180px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
            <img
              src="img/sampah/green-waste-486011_1280.jpg"
              alt="Sampah 3"
              className="w-full h-[220px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
            <img
              src="img/sampah/tires-904945_1280.jpg"
              alt="Sampah 4"
              className="w-full h-[160px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
            <img
              src="img/sampah/trash-184994_1280.jpg"
              alt="Sampah 5"
              className="w-full h-[200px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />

            {/* Gambar besar kedua */}
            <div className="col-span-2">
              <img
                src="img/sampah/the-bottle-5128607_1280.jpg"
                alt="Sampah 6"
                className="w-full h-[300px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Gambar kecil tambahan */}
            <img
              src="img/sampah/green-waste-486011_1280.jpg"
              alt="Sampah 7"
              className="w-full h-[160px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
            <img
              src="img/sampah/tires-904945_1280.jpg"
              alt="Sampah 8"
              className="w-full h-[180px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
            <img
              src="img/sampah/trash-184994_1280.jpg"
              alt="Sampah 9"
              className="w-full h-[200px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
