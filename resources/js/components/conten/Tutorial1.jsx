import React, { useEffect } from "react";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    name: 'Pengelolaan Sampah Modern',
    description:
      'Kami memanfaatkan teknologi terbaru untuk menjauhkan sampah dari bumi dan mendukung lingkungan yang lestari.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Daur Ulang Cerdas',
    description: 'Sampah diproses ulang menjadi bahan berguna, mengurangi limbah dan menjaga ekosistem.',
    icon: LockClosedIcon,
  },
  {
    name: 'Laporan & Pemantauan',
    description: 'Memastikan semua proses pengelolaan sampah terdokumentasi dengan baik dan transparan.',
    icon: ServerIcon,
  },
];

export default function Example() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gray-100"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-none lg:grid-cols-2 items-center">
          
          {/* Konten Teks */}
          <div className="lg:pt-4 lg:pr-8" data-aos="fade-right">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-green-600">Lingkungan Bersih</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Tenaga sampah dijauhkan dari bumi untuk cinta lestari
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Kami berkomitmen menjaga bumi dengan pengelolaan sampah yang tepat, efisien, dan ramah lingkungan.
              </p>

              <dl className="mt-10 max-w-xl space-y-6 text-base text-gray-700 lg:max-w-none">
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className="relative pl-12 group cursor-pointer transition-all duration-300 hover:bg-green-50 rounded-lg p-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <dt className="absolute left-0 top-1 h-8 w-8 text-green-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                      <feature.icon aria-hidden="true" className="h-6 w-6" />
                    </dt>
                    <dd className="ml-2 group-hover:text-green-700 transition-colors duration-300">
                      <span className="font-semibold text-gray-900">{feature.name}</span>
                      <p className="mt-1 text-gray-700">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Gambar */}
          <div className="relative flex justify-end" data-aos="fade-left">
            <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 p-2 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                alt="Ilustrasi Pengelolaan Sampah"
                src="https://images.unsplash.com/photo-1581092795360-2f26f3a3a4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FtcGFoJTIwZGF1cnJ8fDB8fHx8MTY5NTI1NjMzOQ&ixlib=rb-4.0.3&q=80&w=1080"
                className="w-full max-w-3xl rounded-xl shadow-lg ring-1 ring-gray-200 sm:w-auto"
              />
            </div>
          </div>

          <div>
          </div>

        </div>
      </div>
    </div>
  );
}
