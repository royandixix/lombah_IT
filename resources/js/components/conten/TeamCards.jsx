import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const teamMembers = [
  {
    name: "Royandi",
    role: "Freelance Web Developer",
    img: "/img/roy.jpeg",
    desc: "Membangun aplikasi web modern yang responsif, cepat, dan aman.",
  },
  {
    name: "Reinhard Jens Robert",
    role: "Machine Learning Engineer",
    img: "/img/reynhard.JPG",
    desc: "Menciptakan model AI cerdas untuk solusi data-driven di berbagai bidang.",
  },
  {
    name: "Abdilah",
    role: "UI/UX Designer",
    img: "/img/abdil.jpeg",
    desc: "Merancang antarmuka dengan pengalaman pengguna yang intuitif dan elegan.",
  },
];

function TeamSection() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="relative py-20 bg-white overflow-hidden font-sans">
            <div className="container mx-auto px-6 relative z-10 space-y-16">
                {/* Title & Sub */}
                <div
                    className="lg:flex lg:items-center lg:space-x-4 mb-12"
                    data-aos="fade-up"
                >
                    <div className="lg:w-2/3 flex items-center group">
                        <p className="text-gray-600 leading-relaxed text-justify">
                            "Tim kami adalah gabungan dari profesional
                            berpengalaman, kreatif, dan berdedikasi, yang selalu
                            berinovasi dalam dunia teknologi. Dengan latar
                            belakang yang beragam, kami mampu menghadirkan
                            solusi yang tidak hanya aman dan efisien, tetapi
                            juga inovatif dan sesuai kebutuhan klien. Dari
                            pengembangan web yang responsif, kecerdasan buatan
                            berbasis data, hingga desain antarmuka yang intuitif
                            dan elegan, fokus kami adalah membangun produk
                            berkualitas tinggi yang membuat pengalaman pengguna
                            semakin memukau."
                        </p>
                        <ArrowRightIcon className="w-6 h-6 text-gray-800 ml-3 transform transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                </div>

                {/* Team Cards */}
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                            index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                    >
                        <div
                            className="lg:col-span-5 flex justify-center"
                            data-aos={
                                index % 2 === 0 ? "fade-right" : "fade-left"
                            }
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-72 h-72 object-cover rounded-2xl shadow-md border border-gray-200"
                            />
                        </div>

                        <div
                            className="lg:col-span-7 space-y-4"
                            data-aos={
                                index % 2 === 0 ? "fade-left" : "fade-right"
                            }
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <span className="block text-gray-600 font-medium">
                                {member.role}
                            </span>
                            <p className="text-gray-700 leading-relaxed">
                                {member.desc}
                            </p>
                            <button className="mt-4 px-6 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 shadow-sm transition-all duration-300 rounded-lg">
                                Hubungi {member.name}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamSection;
