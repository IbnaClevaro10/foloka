import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import umkmImg from "../../assets/image/other-object/other-1.jpg"; // ganti sesuai path gambarmu

const ProfilReview = () => {
  const reviews = [
    { id: 1, name: "Rina", text: "Makanannya enak banget, ayam bakarnya juicy dan bumbunya meresap!" },
    { id: 2, name: "Budi", text: "Pelayanan ramah dan cepat, tempatnya juga bersih." },
    { id: 3, name: "Siti", text: "Kopi susu gula arennya enak, manisnya pas dan kopinya kuat banget." },
    { id: 4, name: "Andi", text: "Tempatnya nyaman buat nongkrong bareng teman-teman!" },
  ];

  return (
    <section className="bg-[#015258] text-white md:px-0 py-16 flex flex-col md:flex-row gap-12 justify-between items-start">
      {/* Kiri: Profil UMKM */}
      <div className="flex flex-col w-full md:w-3/4">
        <h2 className="text-4xl font-semibold mb-6">Profil UMKM</h2>

        {/* Responsive: ubah flex jadi kolom di mobile */}
        <div className="flex flex-col md:flex-row bg-[#D4795E] rounded-xl overflow-hidden shadow-lg h-auto md:h-[340px]">
          {/* Gambar */}
          <img
            src={umkmImg}
            alt="UMKM"
            className="w-full md:w-1/3 h-[220px] md:h-auto object-cover"
          />

          {/* Deskripsi */}
          <div className="p-6 flex flex-col justify-between w-full md:w-3/4">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-2">Kedai Pak Nopal</h3>
              <p className="text-base md:text-lg leading-relaxed">
                Kedai Pak Nopal menyajikan berbagai hidangan rumahan khas Indonesia,
                dengan cita rasa autentik dan bahan segar setiap harinya. Spesialisasi kami
                adalah ayam bakar, sambal terasi, dan kopi gula aren yang nikmat. dan kopi gula aren yang nikmatdan kopi gula aren yang nikmat dan kopi gula aren yang nikmat yang nikmatyang nikmatyang nikmatyang nikmatyang nikmatyang nikmatyang nikmatyang nikmatyang nikmat
              </p>

            </div>

            <div className="flex gap-2 mt-4">
              <button className="bg-[#015258] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#013b3f] transition">
                Menu
              </button>
              <button className="bg-white text-[#015258] px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Kanan: Review Pelanggan */}
      <div className="flex flex-col w-full md:w-1/4">
        <h2 className="text-4xl font-semibold mb-6">Review Pelanggan</h2>

        <Swiper
          direction="vertical"
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-[340px] w-full"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white text-[#015258] rounded-lg p-6 shadow-md h-[150px] flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold mb-1">{review.name}</h4>
                  <p className="text-sm leading-relaxed">{review.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProfilReview;
