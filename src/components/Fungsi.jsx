import React from "react";
import step1 from "../assets/image/booths/booth1.png";
import owner1 from "../assets/image/owner/owner1.png"; // nanti ganti dengan foto owner beneran

const HowItWorks = () => {
  const steps = [
    {
      img: step1,
      title: "Daftar / Membuat Akun",
      desc: "Daftar dan buat akun Brobooth untuk mempermudah proses penyewaan booth Anda.",
    },
    {
      img: step1,
      title: "Pilih Booth yang Anda Inginkan",
      desc: "Pilih booth yang sesuai dengan kebutuhan acara Anda dan nikmati kemudahan dalam pemesanan.",
    },
    {
      img: step1,
      title: "Lanjutkan Pembayaran",
      desc: "Lakukan pembayaran untuk menyelesaikan reservasi booth Anda dengan cepat dan aman.",
    },
  ];

  const owners = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    img: owner1,
  }));

  return (
    <section id="howitworks" className="relative">
      {/* Bagian hijau atas */}
      <div className="bg-[#015258] text-white text-center pt-16 pb-32">
        <h2 className="text-4xl md:text-5xl font-bold  tracking-tight">
          Nanti Kata <span className="font-primary font-light  italic"> kata nya ya</span>
        </h2>
      </div>

      {/* Bagian bawah salmon */}
      <div className="bg-[#D4795E] text-white rounded-t-[120px] -mt-20 relative z-10">
        {/* STEP SECTION */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-19 mt-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-20 h-20 mb-4 object-contain relative -mt-10 z-20 sm:"
                />
                <h1  className="text-2xl tracking-tight font-primary italic font-semibold mb-2">{step.title}</h1>
                <p className="text-sm font-light text-gray-100">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OWNER SECTION */}
        <div className="w-full mt-20 px-0 flex flex-col pb-0">
          <h3 className=" tracking-tighter font-light text-4xl md:text-5xl  mb-8 text-left px-8 text-white text-nowrap">
            Cari Tahu! <br /> <span className="font-primary font-semibold italic tracking-normal">Pemilik UMKM</span>
          </h3>

          <div className="flex gap-6 overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent  snap-x snap-mandatory scroll-smooth pb-0"
            style={{
    scrollSnapType: "x mandatory",
    marginBottom: 0,
    paddingBottom: 0,
  }}
          >
              {owners.map((owner) => (
                <div
                  key={owner.id}
                  className="flex-shrink-0
        w-[calc(25%-1rem)] min-w-[250px] 
        md:w-[calc(25%-1rem)]
        hover:scale-105 transition-transform duration-300
        snap-start"
                >
                  <img
                    src={owner.img}
                    alt={`Owner ${owner.id}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default HowItWorks;
