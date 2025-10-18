import React from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";

const TestDrive: React.FC = () => {
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
                        <option value="">Geely Tugella</option>
                        <option value="">Geely Starry</option>
                      </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Nama Lengkap</label>
                        <input type="text" className="form-control" placeholder="Masukan Nama Lengkap" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">No. Handphone</label>
                        <input type="text" className="form-control" placeholder="Masukan No. Handphone" />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-warning btn-lg text-white w-100">Test Drive</button>
                    </div>
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
export default TestDrive;
