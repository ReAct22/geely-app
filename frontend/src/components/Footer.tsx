import React from "react";
// import logo from "../assets/image/logo-geely.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-5">
      <div className="container">
        <img
          src="/image/Logo.svg"
          alt="Logo Geely"
          width="100"
          className="mb-3"
        />
        <h5 className="fw-bold">GEELY ANDALAN LIPPO MALL KEMANG</h5>
        <p className="mb-2">
          Lippo Mall Kemang, Jl. Pangeran Antasari No 36, Jakarta Selatan 12150
        </p>
        <p className="small mb-4">&copy; 2025 Geely Andalan Indonesia</p>

        <div className="d-flex justify-content-center gap-3">
          <a href="https://www.instagram.com/geely_andalan?utm_source=ig_web_button_share_sheet&igsh=MXRqaGhuM2N4NDZlYw==" target="_blank" className="text-white fs-5">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@geely__2?is_from_webapp=1&sender_device=pc" target="_blank" className="text-white fs-5">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="mailto:geelyandalankemang@gmail.com " className="text-white fs-5">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
