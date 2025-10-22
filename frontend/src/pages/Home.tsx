import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";
import { useScrollFadeFallback } from "../hook/useScrollFade";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Car } from "../types/Car";
import { CarService } from "../services/carServices"; // ✅ pastikan nama file dan import benar
import type { Testimonis } from "../types/Testimoni";
import { TestimoniService } from "../services/testimoniService";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: React.FC = () => {
  // Hooks animasi scroll
  const produkSection = useScrollFadeFallback();
  const layananSection = useScrollFadeFallback();
  const modelSection = useScrollFadeFallback();
  const testimoniSection = useScrollFadeFallback();
  const videoSection = useScrollFadeFallback();

  // State
  const [cars, setCars] = useState<Car[]>([]);
  const [carImage, setCarImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [testimoni, setTestimoni] = useState<Testimonis[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await CarService.getAll();

        if (response) {
          const carData = Array.isArray(response) ? response : [response];
          setCars(carData);

          // ✅ Langsung set carImage setelah data berhasil diambil
          if (carData.length > 0 && carData[0].cover) {
            setCarImage(`http://localhost:8000/storage/${carData[0].cover}`);
          }
        } else {
          console.error("Response kosong atau tidak sesuai:", response);
          setCars([]);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []); // ✅ hanya sekali jalan saat komponen mount

  useEffect(() => {
    const fetchtestimoni = async () => {
      try {
        const response = await TestimoniService.getAll();
        if (response) {
          setTestimoni(response);
        } else {
          console.error("Response kosong atau tidak sesuai:", response);
          setTestimoni([]);
        }
      } catch (error) {
        console.error("Error fetching testimonis:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchtestimoni();
  }, []);

  // ✅ Fungsi ubah gambar berdasarkan warna
  const changeCarColor = (newSrc: string) => {
    if (!newSrc) return;
    setCarImage(`http://localhost:8000/storage/${newSrc}`);
  };

  return (
    <main>
      {/* 🧠 SEO Metadata */}
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
        <meta
          property="og:title"
          content="Geely Andalan - Dealer Mobil Geely Resmi"
        />
        <meta
          property="og:description"
          content="Dealer resmi mobil Geely di Indonesia. Cek harga, promo, dan layanan terbaik di Geely Andalan."
        />
        <meta
          property="og:image"
          content="https://geely-showroom-kemang.netlify.app/image/download.jpg"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 🏠 Hero Section */}
      <HeroSection />

      {/* 🚗 Produk Section */}
      <section
        ref={produkSection.ref}
        className={`bg-light py-5 ${
          produkSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Gambar mobil */}
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <div className="ratio ratio-16x9 d-flex justify-content-center align-items-center">
                <img
                  src={carImage}
                  alt="Produk Geely"
                  className="img-fluid rounded-3 shadow object-fit-cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem"
                  }}
                />
              </div>
            </div>

            {/* Pilihan warna */}
            <div className="col-lg-6">
              <h4 className="mb-3">Pilih Warna</h4>
              {loading ? (
                <p>Memuat data warna mobil...</p>
              ) : cars.length === 0 ? (
                <p>Tidak ada data mobil tersedia.</p>
              ) : (
                <div className="d-flex flex-wrap gap-3">
                  {cars.map((car) =>
                    car.color?.map((c) => (
                      <button
                        key={c.id}
                        className="btn rounded-circle border"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: c.hex,
                        }}
                        onClick={() => changeCarColor(c.image)}
                      ></button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 💰 Harga Mobil */}
          <div className="container mt-5">
            <h2 className="text-center mb-4">Daftar Harga Mobil</h2>
            {loading ? (
              <p className="text-center">Memuat daftar harga...</p>
            ) : cars.length === 0 ? (
              <p className="text-center">Belum ada data harga mobil.</p>
            ) : (
              <div className="row flex-nowrap overflow-auto pb-3 gx-4">
                {cars.map((car) =>
                  car.prices?.map((p) => (
                    <div
                      className="col-10 col-sm-6 col-md-4 col-lg-6 mb-3"
                      key={`${car.id}-${p.id}`}
                    >
                      <div className="card h-100 shadow-sm text-center border-0 rounded-4">
                        <div className="card-body">
                          {/* <h3 className="fw-bold">{p.model}</h3> */}
                          <h5 className="text-primary">{p.model}</h5>

                          {p.discount && p.discount > 0 ? (
                            <>
                              <h5 className="text-muted text-decoration-line-through">
                                Rp {p.harga.toLocaleString("id-ID")}
                              </h5>
                              <h3 className="text-danger fw-bold">
                                Rp {p.discount.toLocaleString("id-ID")}
                              </h3>
                            </>
                          ) : (
                            <h3 className="text-dark">
                              {p.harga === 0
                                ? "Pre Book Now"
                                : `Rp ${p.harga.toLocaleString("id-ID")}`}
                            </h3>
                          )}

                          <p className="mt-2 mb-0 text-muted small">
                            2025 Special Price <br /> * OTR Jakarta
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 🧰 Layanan Section */}
      <section
        ref={layananSection.ref}
        className={`container py-5 ${
          layananSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="row text-center">
          {[
            {
              img: "/image/new-generation.webp",
              title: "Proses mudah dan cepat",
              text: "Dapatkan mobil impian Anda dengan proses yang mudah dan cepat bersama kami.",
            },
            {
              img: "/image/ex5-feature-highlight-3_1.png-510x287.webp",
              title: "Sales Berpengalaman",
              text: "Pengalaman menjadi modal utama kami untuk terus memberikan pelayanan terbaik kepada konsumen.",
            },
            {
              img: "/image/excelent-in-comfort.png-510x287.webp",
              title: "Harga Fleksibel",
              text: "Kami menawarkan harga yang cocok sesuai anggaran belanja Anda untuk mendapatkan mobil impian Anda.",
            },
          ].map((item, idx) => (
            <div className="col-lg-4 mb-4" key={idx}>
              <img
                src={item.img}
                alt={item.title}
                className="img-fluid rounded-3 shadow mb-3"
              />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚘 Coming Soon Section */}
      <section
        ref={modelSection.ref}
        className={`bg-light py-5 ${
          modelSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Geely Andalan Opening Soon</h1>
          <p className="lead mb-4">Prebook Price 499.800.000</p>
          <img
            src="/image/Geely-Andalan-Coming-Soon-1-1.jpg"
            alt="Geely Coming Soon"
            className="img-fluid rounded-3 shadow"
          />
        </div>
      </section>

      {/* 💬 Testimoni Section */}
      <section
        ref={testimoniSection.ref}
        className={`container mt-5 mb-5 ${
          testimoniSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <h2 className="text-center mb-5">Galeri Testimoni</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          loop
          grabCursor
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimoni.map((t) => (
            <SwiperSlide key={t.id} className="text-center">
              <div className="ratio ratio-1x1 d-flex justify-content-center align-items-center">
                <img
                  src={`http://localhost:8000/storage/${t.image}`}
                  alt={`Testimoni ${t.name}`}
                  className="img-fluid rounded-3 shadow object-fit-cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ▶️ Video Section */}
      <section
        ref={videoSection.ref}
        className={`container my-5 ${
          videoSection.isVisible ? "fade-in" : "fade-out"
        }`}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Video</h2>
        </div>
        <div className="ratio ratio-16x9 shadow rounded-3">
          <iframe
            src="https://www.youtube.com/embed/UhpHXpBRrEU"
            title="Built for Safety: Geely EX5 Faces Extreme Safety Trials"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <SectionFooterImage />
    </main>
  );
};

export default Home;
