import React from "react";
import { Link } from "react-router-dom";

const SectionFooterImage: React.FC = () => {
  return (
    <section
      className="text-white text-center d-flex align-items-center"
      style={{
        backgroundImage: "url('/image/banner-starray.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div style={{position: "absolute", inset: 0, background: 'rgba(0,0,0,0.5)'}}></div>
      <div className="container position-relative">
        {/* Judul */}
        <h1 className="fw-bold display-5 mb-5">TEMUKAN GEELY IMPIAN MU.</h1>
        {/* 4 Menu */}
        <div className="row text-uppercase fw-bold">
            <div className="col-6 col-lg-3 mb-4">
                <h5>Simulasi Kredit</h5>
                <Link to={''} className="text-white text-decoration-none ">
                    Klik Disini &gt;
                </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
                <h5>List Mobil Geely</h5>
                <Link to={''} className="text-white text-decoration-none ">
                    Klik Disini &gt;
                </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
                <h5>Geleri Testimoni</h5>
                <Link to={''} className="text-white text-decoration-none ">
                    Klik Disini &gt;
                </Link>
            </div>
            <div className="col-6 col-lg-3 mb-4">
                <h5>Alamat Dealer</h5>
                <Link to={''} className="text-white text-decoration-none ">
                    Klik Disini &gt;
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFooterImage;
