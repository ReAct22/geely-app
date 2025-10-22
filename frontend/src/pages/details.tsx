import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionFooterImage from "../components/SectionFooterImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { CarService } from "../services/carServices";
import type { Car } from "../types/Car";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Details: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [mobil, setMobil] = useState<Car | null>(null);
  const [carImage, setCarImage] = useState<string>("");

  // Fetch data mobil by slug
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!slug) return;
        const data = await CarService.getBySlug(slug);
        setMobil(data);

        if (data.cover) {
          setCarImage(`http://localhost:8000/storage/${data.cover}`);
        }
      } catch (error) {
        console.error("Gagal mengambil detail mobil:", error);
      }
    };

    fetchData();
  }, [slug]);

  // Ganti gambar sesuai warna
  const changeCarColor = (newSrc: string) => {
    setCarImage(`http://localhost:8000/storage/${newSrc}`);
  };

  if (!mobil) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Memuat...</span>
        </div>
      </div>
    );
  }

  // console.log(mobil);
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">{mobil.name}</h1>
              <p className="lead text-muted">{mobil.deskripsi}</p>
            </div>
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <video
                className="w-100 rounded shadow"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/image/video/geely-starray-header.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Gambar Mobil + Warna */}
      <section className="py-5">
        <div className="container text-center">
          <div className="mb-4">
            <img
              src={carImage || "/image/default-car.jpg"}
              alt={mobil.name}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Tombol Warna */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {mobil.color && mobil.color.length > 0 ? (
              mobil.color.map((c) => (
                <button
                  key={c.id}
                  className="btn rounded-circle border"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: c.hex,
                  }}
                  onClick={() => changeCarColor(c.image)}
                ></button>
              ))
            ) : (
              <p className="text-muted">Belum ada data warna.</p>
            )}
          </div>
        </div>
      </section>

      {/* EXTERIOR & INTERIOR Swiper */}
      <section className="py-5 bg-dark">
        <div className="container">
          <h3 className="text-center text-white mb-4">MADE FOR YOUR JOURNEY</h3>
          <ul
            className="nav nav-tabs justify-content-center mb-4"
            id="tabDesign"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className="nav-link active text-white"
                id="exterior-tab"
                data-bs-toggle="tab"
                data-bs-target="#exterior"
                type="button"
              >
                EXTERIOR
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-white"
                id="interior-tab"
                data-bs-toggle="tab"
                data-bs-target="#interior"
                type="button"
              >
                INTERIOR
              </button>
            </li>
          </ul>

          <div className="tab-content">
            {/* EXTERIOR */}
            <div className="tab-pane fade show active" id="exterior">
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
                {mobil.exteriors && mobil.exteriors.length > 0 ? (
                  mobil.exteriors.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="text-center">
                        <img
                          src={`http://localhost:8000/storage/${item.image}`}
                          className="img-fluid rounded"
                          alt={item.name}
                        />
                        <h6 className="fw-bold text-white mt-2">{item.name}</h6>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <p className="text-white text-center">
                    Belum ada gambar exterior.
                  </p>
                )}
              </Swiper>
            </div>

            {/* INTERIOR */}
            <div className="tab-pane fade" id="interior">
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
                {mobil.interiors && mobil.interiors.length > 0 ? (
                  mobil.interiors.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="text-center">
                        <img
                          src={`http://localhost:8000/storage/${item.image}`}
                          className="img-fluid rounded"
                          alt={item.name}
                        />
                        <h6 className="fw-bold text-white mt-2">{item.name}</h6>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <p className="text-white text-center">
                    Belum ada gambar interior.
                  </p>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Harga Mobil */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold mb-4 text-center">Harga OTR</h3>
          <div className="row justify-content-center">
            {mobil.prices && mobil.prices.length > 0 ? (
              mobil.prices.map((p) => (
                <div className="col-md-5 col-lg-4 mb-4" key={p.id}>
                  <div className="card shadow-sm p-4 text-center">
                    <h3 className="fw-bold">{p.model}</h3>
                    {p.discount && p.discount > 0 ? (
                      <>
                        <h4 className="text-muted text-decoration-line-through">
                          Rp {p.harga.toLocaleString("id-ID")}
                        </h4>
                        <h2 className="text-danger fw-bold">
                          Rp {p.discount.toLocaleString("id-ID")}
                        </h2>
                      </>
                    ) : (
                      <h2 className="text-dark">
                        {p.harga === 0
                          ? "Pre Book Now"
                          : `Rp ${p.harga.toLocaleString("id-ID")}`}
                      </h2>
                    )}
                    <p className="text-muted">* OTR Jakarta</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Belum ada data harga mobil.</p>
            )}
          </div>
        </div>
      </section>

      <SectionFooterImage />
    </>
  );
};

export default Details;
