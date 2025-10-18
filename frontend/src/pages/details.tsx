import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";
// import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { fetchMobilBySlug } from "../data/dataMobil";

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

const Details: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [mobil, setMobil] = useState<Mobil | null>(null);
  const [carImage, setCarImage] = useState(
    "/image/car/geely-starray-em-i/alphine-white23-1400x730.png"
  );

  // Use Effect
  useEffect(() => {
    if (slug) {
      fetchMobilBySlug(slug).then((res) => {
        console.log(res);
        setMobil(res);
      });
    }
  }, [slug]);

  if (!mobil) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const changeCarColor = (newSrc: string) => {
    setCarImage(newSrc);
  };

  console.log(mobil);
  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Hero Text */}
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">{mobil.nama}</h1>
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

      {/* Section Detail Mobil */}
      <section className="py-5">
        <div className="container text-center">
          {/* Gambar Mobil */}
          <div className="mb-4">
            <img src={carImage} alt="Mobil" className="img-fluid rounded" />
          </div>

          {/* Pilih Warni */}
          <div className="d-flex justify-content-center gap-3">
            {mobil.colors?.map((color) => (
              <button
                key={color.name}
                className="btn rounded-circle border"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: color.hex, // ambil dari Firestore
                }}
                onClick={() => changeCarColor(color.image)} // ambil dari Firestore
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Information */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h6 className="text-center">Efficiency meets intelligent</h6>
              <h3 className="text-center fw-bold">{mobil.nama}</h3>
              <p className="lead fs-6 text-center">
                EM-i or E-Motive intelligence is Geely's advanced hybrid
                technology, combining the benefits of fuel and battery for
                greater efficiency, capability, and lower emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Video */}
      <section className="py-5">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <video className="w-100 h-50" autoPlay loop muted playsInline>
              <source
                src="/image/video/technology-starray.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      {/* section Build and quality */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h3 className="fw-bold text-center">SAFETY BEYOND</h3>
              <p className="lead fs-6 text-center">
                Built to your needs with advances software evolves with you.
                Keeping you connected and comfortable no matter where the road
                takes you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tabs */}
      <section className="py-5">
        <div className="container text-center">
          {/* Tabs Navigation */}
          <ul
            className="nav nav-tabs justify-content-center mb-4"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="battery-tab"
                data-bs-toggle="tab"
                data-bs-target="#battery"
                type="button"
                role="tab"
                aria-controls="battery"
                aria-selected="true"
              >
                BATTERY
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="adas-tab"
                data-bs-toggle="tab"
                data-bs-target="#adas"
                type="button"
                role="tab"
                aria-controls="adas"
                aria-selected="false"
              >
                ADAS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="flyme-tab"
                data-bs-toggle="tab"
                data-bs-target="#flyme"
                type="button"
                role="tab"
                aria-controls="flyme"
                aria-selected="false"
              >
                FLYME SOUND
              </button>
            </li>
          </ul>

          {/* Tabs Content */}
          <div className="tab-content" id="myTabContent">
            {/* Battery Content */}
            <div
              className="tab-pane fade show active"
              id="battery"
              role="tabpanel"
              aria-labelledby="battery-tab"
            >
              <h3 className="fw-bold mb-5">Drive More with Less Energy</h3>
              <div className="row text-center">
                <div className="col-md-4">
                  <p>Range up to</p>
                  <h4 className="fw-bold">1000+km*</h4>
                  <p className="text-muted">NEDC Range - Combined</p>
                </div>
                <div className="col-md-4">
                  <p>Fuel Efficiency up to</p>
                  <h4 className="fw-bold">83km/l*</h4>
                  <p className="text-muted">
                    NEDC Fuel Consumption - Weighted Combined
                  </p>
                </div>
                <div className="col-md-4">
                  <p>Electric Range up to</p>
                  <h4 className="fw-bold">105km*</h4>
                  <p className="text-muted">NEDC Electric Range - Combined</p>
                </div>
              </div>
            </div>

            {/* ADAS Content */}
            <div
              className="tab-pane fade"
              id="adas"
              role="tabpanel"
              aria-labelledby="adas-tab"
            >
              <h3 className="text-center-fw-bold">
                Experience enhanced safety and convenience with 13 functions of
                Level 2 ADAS
              </h3>
              <p className="lead fs-6">
                *Only for PRO series; all other features are exclusive to MAX.
              </p>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">AEB</h4>
                  <p className="lead">Automatic Emergency Breaking</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">ACC</h4>
                  <p className="lead">Adaptive Cruise Control</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">ICC</h4>
                  <p className="lead">Intelligent Cruise Control</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">CMSF</h4>
                  <p className="lead">Collision Mitigation Support Front</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">CMSF</h4>
                  <p className="lead">Collision Mitigation Support Front</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">RCTA</h4>
                  <p className="lead">Rear Cross Traffic Alert</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">RCTB</h4>
                  <p className="lead">Rear Cross Traffic Brake</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">LKA</h4>
                  <p className="lead">Lane Keeping Assist</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">TSI</h4>
                  <p className="lead">Traffic Sign Information</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">DOW</h4>
                  <p className="lead">Doors Open Warning</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">LCA</h4>
                  <p className="lead">Lanes Changing Assistant</p>
                </div>
                <div className="col-lg-3">
                  <h4 className="text-center fw-bold">BSD</h4>
                  <p className="lead">Blind Spots Detection</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h4 className="text-center fw-bold">ELKA</h4>
                  <p className="lead">Emergency Lane Keeping Assist</p>
                </div>
                <div className="col-lg-6">
                  <h4 className="text-center fw-bold">IHBC</h4>
                  <p className="lead">Intelligent High Beam Control</p>
                </div>
              </div>
            </div>

            {/* Flyme Sound Content */}
            <div
              className="tab-pane fade"
              id="flyme"
              role="tabpanel"
              aria-labelledby="flyme-tab"
            >
              <h3 className="fw-bold text-center">
                Enjoy crystal-clear audio from a 16-speaker setup with powerful
                1000W amplifier
              </h3>
              <p className="lead text-center fs-6">
                *Exclusively for MAX series.
              </p>
              <div className="row align-items-center">
                <div
                  className="col-lg-4"
                  style={{
                    borderRight: "0.5px solid #c4c4c4",
                    borderBottom: "0.5px solid #c4c4c4",
                  }}
                >
                  <h3 className="fw-bold">4pcs</h3>
                  <p className="lead">Tweeter</p>
                </div>
                <div
                  className="col-lg-4"
                  style={{
                    borderRight: "1px solid #c4c4c4",
                    borderBottom: "0.5px solid #c4c4c4",
                  }}
                >
                  <h3 className="fw-bold">5pcs</h3>
                  <p className="lead">Midrange Speaker</p>
                </div>
                <div
                  className="col-lg-4"
                  style={{ borderBottom: "1px solid #c4c4c4" }}
                >
                  <h3 className="fw-bold">4pcs</h3>
                  <p className="lead">Tweeter</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div
                  className="col-lg-6"
                  style={{ borderRight: "1px solid #c4c4c4" }}
                >
                  <h3 className="fw-bold">4pcs</h3>
                  <p className="lead">Woofer</p>
                </div>
                <div className="col-lg-6">
                  <h3 className="fw-bold">1pcs</h3>
                  <p className="lead">Standalone Subwoofer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saction Swipper */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <h3 className="text-center text-white">MADE FOR YOUR JOURNEY</h3>
            <p className="lead text-white text-center">
              Adapts to your lifestyle with features that ensures your drive
              always comfortable, no matter the occasion.
            </p>

            {/* Tabs */}
            <ul
              className="nav nav-tabs justify-content-center mb-4"
              id="myTabSwip"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-white active"
                  id="exterior-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#exterior"
                  type="button"
                  role="tab"
                  aria-controls="exterior"
                  aria-selected="true"
                >
                  EXTERIOR
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link text-white"
                  id="interior-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#interior"
                  type="button"
                  role="tab"
                  aria-controls="interior"
                  aria-selected="false"
                >
                  INTERIOR
                </button>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content" id="myTabContentSwip">
              {/* Exterior */}
              <div
                className="tab-pane fade show active"
                id="exterior"
                role="tabpanel"
                aria-labelledby="exterior-tab"
              >
                <div className="col-lg-12">
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
                    className="exterior-swiper"
                  >
                    {mobil.exterior && mobil.exterior.length > 0 ? (
                      mobil.exterior.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="shadow border-0 text-center">
                            <img
                              src={item.image}
                              className="card-img-top"
                              alt={item.name}
                            />
                            <h6 className="fw-bold text-white mt-2">
                              {item.name}
                            </h6>
                            <p className="small text-white mb-0">
                              Tampilan sporty modern
                            </p>
                          </div>
                        </SwiperSlide>
                      ))
                    ) : (
                      <p className="text-white text-center">
                        Belum ada gambar exterior tersedia.
                      </p>
                    )}
                  </Swiper>
                </div>
              </div>

              {/* Interior */}
              <div
                className="tab-pane fade"
                id="interior"
                role="tabpanel"
                aria-labelledby="interior-tab"
              >
                <div className="col-lg-12">
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
                    className="interior-swiper"
                  >
                    {mobil.interior && mobil.interior.length > 0 ? (
                      mobil.interior.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="border-0 text-center">
                            <img
                              src={item.image}
                              className="card-img-top"
                              alt="Interior 1"
                            />
                            <h6 className="fw-bold text-white">{item.name}</h6>
                            <p className="small text-white mb-0">
                              Kabin luas premium
                            </p>
                          </div>
                        </SwiperSlide>
                      ))
                    ) : (
                      <p className="text-muted">Data Tidak ada</p>
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Harga */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3>Harga OTR</h3>
          <div className="row align-items-center">
            {mobil.harga && mobil.harga.length > 0
              ? mobil.harga.map((item, index) => {
                  const colClass =
                    mobil.harga!.length === 1 ? "col-lg-12" : "col-lg-6";
                  return (
                    <div className={colClass} key={index}>
                      <h3 className="fw-bold">{item.model}</h3>
                      {item.discount && item.discount > 0 ? (
                        <p>
                          <span className="text-muted text-decoration-line-through">
                            {item.price.toLocaleString("id-ID")}
                          </span>
                          <span className="fw-bold text-danger ms-2">
                            {item.discount.toLocaleString("id-ID")}
                          </span>
                        </p>
                      ) : (
                        <p className="lead">
                          {item.price === 0
                            ? "Pre book Now"
                            : item.price.toLocaleString("id-ID")}
                        </p>
                      )}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>

      {/* Section More Information */}
      <section className="py-5">
        <div className="container">
          {/* Tabs */}
          <ul
            className="nav nav-tabs justify-content-center"
            id="myTabMore"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="video-tab"
                data-bs-toggle="tab"
                data-bs-target="#video"
                type="button"
                role="tab"
                aria-controls="video"
                aria-selected="true"
              >
                Video
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="info-tab"
                data-bs-toggle="tab"
                data-bs-target="#info"
                type="button"
                role="tab"
                aria-controls="info"
                aria-selected="false"
              >
                Informasi Tambahan
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content" id="myTabContent">
            {/* Video Content */}
            <div
              className="tab-pane fade show active"
              id="video"
              role="tabpanel"
              aria-labelledby="video-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="ratio ratio-16x9 shadow rounded-3">
                    <iframe
                      src="https://www.youtube.com/embed/N_i5oC3OssY"
                      title="First Impressions of the Geely Starray EM-i at GIIAS Jakarta 2025"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Informasi Tambahan Content */}
            <div
              className="tab-pane fade"
              id="info"
              role="tabpanel"
              aria-labelledby="info-tab"
            >
              <div className="row">
                <div className="col-lg-6 bg-success py-5">
                  <h5 className="fw-bold text-white">WARNA</h5>
                </div>
                <div className="col-lg-6 bg-light py-5 gap-3">
                  <p className="lead">
                    Alphine White, Cloundveil Silver, Glacier Blue, Jungle
                    Green, Polar Black, Volcaninc Grey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionFooterImage />
    </>
  );
};

export default Details;
