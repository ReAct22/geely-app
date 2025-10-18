import React from "react";
import { useLocation } from "react-router-dom";
// import HeroImage from "../assets/image/download.jpg";
interface HeroContent {
  title: string;
  description: string;
  image: string;
}

const HeroSection: React.FC = () => {
  const location = useLocation();

  // Mapping kontent per halaman
  const heroData: Record<string, HeroContent> = {
    "/": {
      title: "Selamat Datang di Geely",
      description:
        "Temukan mobil impian Anda dengan teknologi canggih dan desain modern dari Geely.",
      image: "/image/download.jpg",
    },
    "/list-mobil": {
      title: "Tipe Mobil",
      description:
        "Pilih dari berbagai model mobil Geely yang sesuai dengan gaya hidup Anda.",
      image: "/image/image-5.jpg",
    },
    "/test-drive": {
      title: "Rasakan Sensasi Test Drive",
      description:
        "Jadwalkan test drive dan alami performa luar biasa dari mobil Geely.",
      image: "/image/interior-6.jpg",
    },
    "/simulasi-kredit": {
      title: "Simulasi Kredit Mudah",
      description:
        "Hitung cicilan bulanan Anda dengan alat simulasi kredit kami yang praktis.",
      image: "/image/interior-1.jpg",
    },
    "/booking-service": {
      title: "Booking Service Online",
      description:
        "Pesan layanan servis untuk mobil Geely Anda dengan mudah dan cepat.",
      image: "/image/interior-3.jpg",
    },
    "/testimoni": {
      title: "Apa Kata Pelanggan Kami",
      description:
        "Baca testimoni dari pelanggan yang puas dengan mobil dan layanan Geely.",
      image: "/image/interior-3.jpg",
    },
    "/kontak": {
      title: "Hubungi Kami",
      description:
        "Kami siap membantu Anda. Hubungi kami untuk informasi lebih lanjut.",
      image: "/image/interior-4.jpg",
    },
  };

  // Ambil konten berdasarkan path saat ini
  const currentHero = heroData[location.pathname] || heroData["/"];
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">
              {currentHero.title.includes("Geely") ? (
                <>
                  {currentHero.title.split("Geely")[0]}
                  <span className="text-primary">Geely</span>
                  {currentHero.title.split("Geely")[1]}
                </>
              ) : (
                currentHero.title
              )}
            </h1>
            <p className="lead my-4">
              {currentHero.description}
            </p>
            <div className="d-flex gap-3">
              <a href="#layanan" className="btn btn-primary btn-lg">
                Mulai Sekarang
              </a>
              <a href="#kontak" className="btn btn-outline-dark btn-lg">
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={currentHero.image || "/image/download.jpg"}
              alt="Geely Hero"
              className="img-fluid rounded-3 shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
