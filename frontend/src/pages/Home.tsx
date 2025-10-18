import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";
import { useScrollFadeFallback } from "../hook/useScrollFade";
import { Helmet } from "react-helmet-async";
import { fetchLatestMobil } from "../data/dataMobil";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface MobilColor {
  name: string;
  hex: string;
  image: string;
}

export interface HargaMobil {
  model: string;
  price: number;
  discount?: number;
}

export interface Exterior {
  name: string;
  image: string;
}

export interface Interior {
  name: string;
  image: string;
}
interface Mobil {
  id_doc: string;
  nama: string;
  deskripsi?: string;
  colors?: MobilColor[];
  harga?: HargaMobil[];
  exterior?: Exterior[];
  interior?: Interior[];
}

const Home: React.FC = () => {
  const produkSection = useScrollFadeFallback();
  const layananSection = useScrollFadeFallback();
  const modelSection = useScrollFadeFallback();
  const testimoniSection = useScrollFadeFallback();
  const videoSection = useScrollFadeFallback();
  const [carImage, setCarImage] = useState(
    "/image/car/geely-starray-em-i/alphine-white23-1400x730.png"
  );
  const [mobil, setMobil] = useState<Mobil | null>(null);

  useEffect(() => {
    const getLatestMobil = async () => {
      const latestMobil = await fetchLatestMobil();
      setMobil(latestMobil);
    };
    getLatestMobil();
  }, []);

  const changeCarColor = (newSrc: string) => {
    setCarImage(newSrc);
  };
  return (
    <main>
      {/* Meta Data */}
      <Helmet>
        <title>Geely Andalan - Home</title>
        <meta
          name="description"
          content="Geely Andalan adalah dealer resmi mobil Geely di Indonesia. Temukan promo, harga terbaru, spesifikasi, dan layanan purna jual terbaik untuk mobil Geely Anda."
        />
        <meta
          name="keywords"
          content="Geely Andalan, Dealer Geely, Mobil Geely Indonesia, Harga Mobil Geely, Promo Geely"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://geely-showroom-kemang.netlify.app/"
        />
        {/* Open Graph (FB, LinkdIn) */}
        <meta
          property="og:title"
          content="Geely Andalan - Dealer Mobil Geely Resmi"
        />
        <meta
          property="og:description"
          content="Dealer resmi mobil Geely di Indonesia. Cek harga, promo, dan layanan terbaik di Geely Andalan."
        />
        <meta
          property="og:url"
          content="https://geely-showroom-kemang.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://geely-showroom-kemang.netlify.app/image/download.jpg"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Geely Andalan - Dealer Mobil Geely Resmi"
        />
        <meta
          name="twitter:description"
          content="Dealer resmi mobil Geely di Indonesia. Cek harga, promo, dan layanan terbaik di Geely Andalan."
        />
        <meta
          name="twitter:image"
          content="https://geely-showroom-kemang.netlify.app/image/download.jpg"
        />
      </Helmet>
      {/* Section Hero */}
      <HeroSection />
      {/* Produk & Swatches section */}
      <section
        ref={produkSection.ref}
        className={`bg-light py-5 ${
          produkSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Produk Image */}
            <div className="col-lg-6">
              <img
                src={carImage}
                alt="Produk Geely"
                className="img-fluid rounded-3 shadow"
              />
            </div>

            {/* Swatches */}
            <div className="col-lg-6">
              <h4 className="mb-3">Pilih Warna</h4>
              <div className="d-flex flex-wrap gap-3">
                {mobil?.colors?.map((color) => (
                  <button
                    className="btn rounded-circle border"
                    key={color.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      background: color.hex,
                    }}
                    onClick={() => changeCarColor(color.image)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="row mt-5">
            {mobil?.harga?.map((item, index) => (
              <div className="col-lg-6 mb-4" key={index}>
                <div className="card shadow-sm p-4 text-center">
                  {/* Tampilkan model sesuai data */}
                  <h3 className="fw-bold">{item.model}</h3>

                  {/* Jika ada discount, tampilkan harga coret + harga diskon */}
                  {item.discount && item.discount > 0 ? (
                    <div>
                      <h4 className="text-muted text-decoration-line-through">
                        {item.price.toLocaleString("id-ID")}
                      </h4>
                      <h2 className="text-danger fw-bold">
                        {item.discount.toLocaleString("id-ID")}
                      </h2>
                    </div>
                  ) : (
                    <h2 className="text-dark">
                      {item.price === 0
                        ? "Pre Book Now"
                        : item.price.toLocaleString("id-ID")}
                    </h2>
                  )}

                  <p>2025 Special Price</p>
                  <p className="text-muted">* OTR Jakarta</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section
        ref={layananSection.ref}
        className={`container ${
          layananSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="row">
          <div className="col-lg-4">
            <img
              src="/image/new-generation.webp"
              alt="New Generation"
              className="img-fluid rounded-3 shadow"
            />
            <h4>Proses mudah dan cepat</h4>
            <p>
              Dapatkan mobil impian Anda dengan proses yang mudah dan cepat
              bersama kami.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="/image/ex5-feature-highlight-3_1.png-510x287.webp"
              alt=""
              className="img-fluid rounded-3 shadow"
            />
            <h4>Sales Berpengalaman</h4>
            <p>
              Pengalaman menjadi modal utama kami untuk terus memberikan
              pelayanan terbaik kepada konsumen.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="/image/excelent-in-comfort.png-510x287.webp"
              alt=""
              className="img-fluid rounded-3 shadow"
            />
            <h4>Harga Fleksibel</h4>
            <p>
              Kami menawarkan harga yang cocok sesuai anggaran belanja Anda
              untuk mendapatkan mobil impian Anda.
            </p>
          </div>
        </div>
      </section>

      {/* New Model section */}
      <section
        ref={modelSection.ref}
        className={`bg-light py-5 ${
          modelSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">Geely Andalan Opening Soon</h1>
              <p className="lead my-4">Prebook Price 499.800.000</p>
            </div>
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src="/image/Geely-Andalan-Coming-Soon-1-1.jpg"
                alt="Geely Hero Banner"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section
        ref={testimoniSection.ref}
        className={`container mt-5 mb-5 ${
          testimoniSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="row align-items-center">
          <h2 className="text-center mb-5">Galery Testimoni</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}

          >
            <SwiperSlide>
              <div className="gap-3">
                <img
                  src="/image/testimonial/WhatsApp-Image-2025-08-25-at-11.16.28-1.jpeg"
                  alt=""
                  className="img-fixed rounded-top"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gap-3">
                <img
                  src="/image/testimonial/WhatsApp-Image-2025-08-25-at-11.16.28-510x680.jpeg"
                  alt=""
                  className="img-fixed rounded-top"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gap-3">
                <img
                  src="/image/testimonial/WhatsApp-Image-2025-08-25-at-11.16.29.jpeg"
                  alt=""
                  className="img-fixed rounded-top"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gap-3">
              <img
                src="/image/testimonial/testimoni1.jpg"
                alt=""
                className="img-fixed rounded-top"
              />
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Video Section */}
      <section
        ref={videoSection.ref}
        className={`container my-5 ${
          videoSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold">Video</h2>
          </div>
          <div className="col-lg-8">
            <div className="ratio ratio-16x9 shadow rounded-3">
              <iframe
                src="https://www.youtube.com/embed/UhpHXpBRrEU"
                title="Built for Safety: Geely EX5 Faces Extreme Safety Trials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <SectionFooterImage />
    </main>
  );
};

export default Home;
