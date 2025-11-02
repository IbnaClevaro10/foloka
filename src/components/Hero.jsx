import React from "react";
import background from "../assets/image/hero/backround.jpeg"; // background hero
import booth1 from "../assets/image/booths/booth1.png";

export default function Hero() {
  // contoh array gambar (nanti tinggal ganti dengan path lo sendiri)
  const images = [
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  { id: 1, src: booth1, link: "/produk1" },
  ];

  return (
  <section
  id="hero"
  className="relative w-full min-h-screen bg-cover bg-center text-white overflow-hidden flex flex-col justify-between"
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Overlay gelap biar teks lebih kebaca */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Teks tengah */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center py-32">
    <h1 className="text-5xl mb-4 font-primary  tracking-tighter italic">Hai <span className="font-bold font-normal" style={{fontWeight : "bold", fontStyle : "normal"}}> Anak baik</span> </h1>
    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, minima?</p>
  </div>

  {/* Booths */}
  <div className="relative z-10 flex gap-6 overflow-x-auto no-scrollbar px-0 pb-9 m-0 items-end">
    {images.map((item) => (
      <a
        key={item.id}
        href={item.link}
        className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
      >
        <img
          src={item.src}
          alt={`Booth ${item.id}`}
          className="w-44 object-contain block"
        />
      </a>
    ))}
  </div>
</section>


  );
}
