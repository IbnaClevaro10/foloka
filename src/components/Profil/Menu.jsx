import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import kopiImg from "../../assets/image/makanan/kopi.png"; // ganti sesuai path

const Menu = () => {
  const menuData = [
    {
      id: 1,
      name: "Kopi Aren",
      price: 17,
      rating: 5,
      desc: "Kopi susu gula aren dengan cita rasa manis yang pas dan aroma kopi yang kuat.",
      img: kopiImg,
    },
    {
      id: 2,
      name: "Ayam Bakar",
      price: 25,
      rating: 4.8,
      desc: "Ayam bakar bumbu khas sambal terasi pedas gurih dan harum.",
      img: kopiImg,
    },
    {
      id: 3,
      name: "Es Teh Manis",
      price: 10,
      rating: 4.6,
      desc: "Teh segar dengan es batu dingin yang menyegarkan siang hari.",
      img: kopiImg,
    },
    {
      id: 4,
      name: "Nasi Goreng Spesial",
      price: 30,
      rating: 5,
      desc: "Nasi goreng dengan topping telur mata sapi dan kerupuk renyah.",
      img: kopiImg,
    },
    {
      id: 5,
      name: "Mie Goreng Jawa",
      price: 20,
      rating: 4.7,
      desc: "Mie goreng dengan cita rasa Jawa yang gurih dan pedas ringan.",
      img: kopiImg,
    },
    {
      id: 6,
      name: "Sate Ayam",
      price: 28,
      rating: 4.9,
      desc: "Sate ayam bumbu kacang lembut dan daging yang empuk.",
      img: kopiImg,
    },
    {
      id: 7,
      name: "Tempe Mendoan",
      price: 12,
      rating: 4.5,
      desc: "Tempe goreng tipis dengan adonan tepung gurih dan sambal kecap.",
      img: kopiImg,
    },
  ];

  return (
    <section className="bg-[#015258] text-white py-16 px-6 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Menu Kami</h2>
        <p className="text-gray-200 text-base max-w-2xl mx-auto">
          Temukan beragam menu favorit pelanggan kami, dari minuman hingga hidangan spesial!
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={50}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {menuData.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isActive ? "scale-110 opacity-100" : "scale-90 opacity-60"
                } flex flex-col items-center`}
              >
                <div className="bg-[#D4795E] rounded-2xl shadow-lg p-6 relative w-[260px] md:w-[300px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <div className="absolute -top-6 -left-6 bg-[#015258] text-white text-center rounded-full w-24 h-24 flex flex-col items-center justify-center text-sm shadow-lg">
                    <span className="text-xs">Harga Spesial!</span>
                    <span className="text-3xl font-bold">{item.price}</span>
                    <span className="text-xs">Ribu</span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 mr-2">★</span>
                    <p className="text-sm">{item.rating}/5</p>
                  </div>
                  <p className="text-sm mb-4 text-gray-100">{item.desc}</p>
                  <button className="bg-[#015258] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#013b3f] transition">
                    Order Now
                  </button>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Menu;
