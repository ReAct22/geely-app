import React from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";

const Kontak: React.FC = () => {
  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h5 className="fw-bold mb-3">INFORMASI KONTAK</h5>
              <p>Silahkan hubungi kami untuk informasi lebih lanjut</p>

              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-phone text-primary fs-4 me-3"></i>
                  <div>
                    <strong>Telpon</strong>
                    <br />
                    <span>+62 877-8724-1024</span>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fa-brands fa-whatsapp text-primary fs-4 me-3"></i>
                  <div>
                    <strong>WhastApp</strong>
                    <br />
                    <span>+62 877-8724-1024</span>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fa-solid fa-envelope text-primary fs-4 me-3"></i>
                  <div>
                    <strong>Email</strong>
                    <br />
                    <span>geelyastorekemang@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
                <h5 className="fw-bold mb-3">Alamat Dealer</h5>
                <p>Kunjungi dealer untuk konsultasi lebih mudah</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.576291451753!2d106.73539497409617!3d-6.189074460697922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72c3e90439b%3A0x1a8e4d0f0c798e8f!2sLippo%20Mall%20Puri!5e0!3m2!1sen!2sid!4v1695470391116!5m2!1sen!2sid"
                  width="600"
                  height="450"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
          </div>
        </div>
      </section>
      <SectionFooterImage />
    </>
  );
};

export default Kontak;
