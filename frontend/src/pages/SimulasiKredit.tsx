import React from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";

const SimulasiKredit: React.FC = () => {
  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <form action="">
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Tipe Mobil
                      </label>
                      <select name="" id="" className="form-select">
                        <option value="">Pilih Tipe Mobil</option>
                        <option value="">Geely Coolray</option>
                        <option value="">Geely Azkarra</option>
                        <option value="">Geely Emgrand</option>
                        <option value="">Geely Okavango</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Tenor
                      </label>
                      <select name="" id="" className="form-select">
                        <option value="">Pilih Tenor</option>
                        <option value="">1 Tahun</option>
                        <option value="">2 Tahun</option>
                        <option value="">3 Tahun</option>
                        <option value="">4 Tahun</option>
                        <option value="">5 Tahun</option>
                      </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Uang Muka</label>
                        <input type="text" className="form-control" placeholder="Masukan Uang Muka" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Nama Lengkap</label>
                        <input type="text" className="form-control" placeholder="Masukan Nama Lengkap" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">No WhatsApp</label>
                        <input type="text" className="form-control" placeholder="Masukan No WhatsApp" />
                    </div>
                    <button className="btn btn-warning w-100 text-white">Kirim</button>
                  </form>
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

export default SimulasiKredit;
