import React, { useState } from "react";
import makananImg from "../assets/image/makanan/ayam.jpg"; // contoh gambar makanan
import minumanImg from "../assets/image/makanan/ayam.jpg"; // contoh gambar minuman
import sampingImg from "../assets/image/other-object/other-1.jpg"; // gambar pendamping statis

const Recommendation = () => {
  const [selectedCategory, setSelectedCategory] = useState("makanan");
  const [selectedItem, setSelectedItem] = useState(null);

  const data = {
    makanan: [
      {
        id: 1,
        title: "Ayam Bakar",
        store: "Toko Nopal",
        desc: "Ayam bakar bumbu kecap khas rumahan dengan cita rasa gurih dan manis yang pas.",
        img: makananImg,
      },
      {
        id: 2,
        title: "Mie Ayam Kampung",
        store: "Toko Nopal",
        desc: "Mie kenyal buatan tangan dengan potongan ayam kampung gurih.",
        img: makananImg,
      },
    ],
    minuman: [
      {
        id: 3,
        title: "Es Teh Manis",
        store: "Toko Nopal",
        desc: "Teh pilihan dengan rasa manis segar, disajikan dengan es batu.",
        img: minumanImg,
      },
      {
        id: 4,
        title: "Kopi Susu Gula Aren",
        store: "Toko Nopal",
        desc: "Kopi robusta dengan campuran susu segar dan gula aren premium.",
        img: minumanImg,
      },
    ],
  };

  const items = data[selectedCategory];

  return (
    <section id="recomandation" className="flex flex-col md:flex-row w-full ">
      {/* Bagian kiri */}
      <div className="bg-[#D4795E] text-white w-full md:w-1/2 px-10 md:px-16 py-16 flex flex-col justify-start">
        <h2 className="text-5xl font-semibold tracking-tight  mb-6">Rekomendasi <span className="font-primary italic font-light tracking-normal"> dari <br />  Kami </span> </h2>

        {/* Mini Navbar (Sekarang di atas card, gak absolute lagi) */}
        <div className="flex justify-center mb-8">
          <div className="flex border border-white overflow-hidden shadow-md">
            <button
              onClick={() => {
                setSelectedCategory("makanan");
                setSelectedItem(null);
              }}
              className={`px-4 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === "makanan"
                  ? "bg-[#015258] text-white"
                  : "text-white hover:bg-[#015258]/40"
              }`}
            >
              Makanan
            </button>
            <button
              onClick={() => {
                setSelectedCategory("minuman");
                setSelectedItem(null);
              }}
              className={`px-4 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === "minuman"
                  ? "bg-[#015258] text-white"
                  : "text-white hover:bg-[#015258]/40"
              }`}
            >
              Minuman
            </button>
          </div>
        </div>

        {/* Card container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white text-[#015258]  p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-[#015258]  h-40 mb-3"></div>
              <h3 className="text-md text-center font-bold">{item.title}</h3>
              <p className="text-sm text-center italic text-gray-600">dari {item.store}</p>
            </div>
          ))}
        </div>

        {/* Deskripsi */}
        <div className="text-center mt-10 max-w-md">
          {selectedItem ? (
            <p className="text-sm leading-relaxed">{selectedItem.desc}</p>
          ) : (
            <p className="text-md text-center text-gray-200">
              Pilih salah satu {selectedCategory} untuk melihat detailnya.
            </p>
          )}
        </div>
      </div>

      {/* Bagian kanan → gambar statis */}
      <div className="w-full md:w-1/2">
        <img
          src={sampingImg}
          alt="Gambar Pendamping"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Recommendation;
