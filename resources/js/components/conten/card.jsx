import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaUserFriends, FaRecycle, FaChartLine } from "react-icons/fa";

function AboutSection() {
  const [currentText, setCurrentText] = useState(0);
  const intervalRef = useRef(null);

  const texts = [
    "Kelola Sampah, Selamatkan Bumi",
    "Daur Ulang Hari Ini, Hitamkan Masa Depan",
    "Kurangi Sampah, Tingkatkan Kehidupan",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const cardData = [
    {
      icon: <FaBuilding size={22} />,
      title: "Edukasi & Sosialisasi",
      text: "Menyebarkan kesadaran pentingnya pengelolaan sampah berkelanjutan.",
    },
    {
      icon: <FaUserFriends size={22} />,
      title: "Kolaborasi Komunitas",
      text: "Mengajak semua elemen masyarakat menjaga lingkungan bersama-sama.",
    },
    {
      icon: <FaRecycle size={22} />,
      title: "Daur Ulang Inovatif",
      text: "Mengolah sampah jadi produk baru yang bermanfaat bagi masyarakat.",
    },
    {
      icon: <FaChartLine size={22} />,
      title: "Pertumbuhan Hitam",
      text: "Mendorong ekonomi sirkular yang menyejahterakan dan melestarikan alam.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-start py-20 font-sans overflow-hidden">
      {/* Background gradient hitam-hijau */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900 to-green-800 animate-[pulse_8s_ease-in-out_infinite] opacity-90 pointer-events-none"></div>

      {/* Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-800/30 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-green-900/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-700/30 rounded-full blur-3xl animate-[float_7s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Kiri: Cards (tetap putih/semi-transparan) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8" data-aos="fade-right">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className={`group relative min-h-[240px] md:min-h-[270px] rounded-2xl p-8 
                  bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 
                  hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] 
                  transition-all duration-500 overflow-hidden 
                  hover:animate-[float_3s_ease-in-out_infinite]
                  ${idx % 2 === 0 ? "mt-0" : "mt-12"}`}
              >
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black/60 group-hover:animate-pulse transition-all duration-500"></div>

                <div className="relative z-10 w-16 h-16 mb-6 flex items-center justify-center 
                  rounded-full bg-black text-white text-2xl shadow-md 
                  transition-all duration-500 group-hover:bg-gray-800 
                  group-hover:scale-125 group-hover:rotate-12 group-hover:animate-bounce">
                  {card.icon}
                </div>

                <h3 className="relative z-10 font-bold text-xl mb-3 text-gray-800 group-hover:text-black transition-colors">
                  {card.title}
                </h3>

                <p className="relative z-10 text-base text-gray-600 leading-relaxed">
                  {card.text}
                </p>

                <span className="absolute left-0 bottom-0 w-0 h-1 bg-black rounded-br-xl transition-all duration-700 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Kanan: Slider teks + paragraf + button */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-left" data-aos-delay={100}>
            
            <div className="relative h-24 md:h-32">
              {texts.map((text, index) => (
                <h2
                  key={index}
                  className={`absolute font-extrabold text-3xl md:text-5xl leading-snug text-green-200 transition-all duration-1000 transform ${
                    index === currentText
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-6"
                  }`}
                >
                  {text}
                </h2>
              ))}
            </div>

            <div className="space-y-8">
              <p className="text-base md:text-lg text-green-100 leading-relaxed mt-6">
                <span className="font-semibold text-green-50 bg-green-900/50 px-2 py-0.5 rounded">
                  Sampah bukan sekadar limbah
                </span>{" "}
                melainkan peluang. Dengan pengelolaan tepat, kita bisa menciptakan masa depan
                yang lebih bersih, sehat, dan berkelanjutan.
                <br />
                Setiap langkah kecil, seperti{" "}
                <span className="font-medium text-green-50 underline decoration-green-200 decoration-dashed hover:decoration-solid transition">
                  memilah sampah
                </span>{" "}
                dan mendukung{" "}
                <span className="font-medium text-green-50">
                  daur ulang
                </span>
                , memberi dampak besar untuk bumi dan generasi mendatang.
                <br />
                Mari bersama menjaga bumi —{" "}
                <span className="font-bold text-green-50 italic">
                  perubahan besar dimulai dari kita
                </span>.
                <br />
                <button className="mt-4 inline-block px-6 py-2 rounded-full text-sm font-semibold text-black bg-green-400 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                  Ikut Aksi
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
