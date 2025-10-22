import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";
// import { fetchMobils } from "../data/dataMobil"; // perbaiki nama file (case-sensitive)
import { Link } from "react-router-dom";
import { CarService } from "../services/carServices";
import type { Car } from "../types/Car";



const List: React.FC = () => {
  const [mobils, setMobils] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async() => {
      try{
        const response = await CarService.getallcar();
        if(response){
          const carData = Array.isArray(response) ? response : [response];
          setMobils(carData);
        } else {
          console.error("Response kosong atau tidak sesuai:", response);
          setMobils([]);
        }
      } catch(error) {
        console.error("Error fetching cars: ", error);
      } finally{
        setLoading(false)
      }
    }
    fetchCar();
  }, []); // ✅ hanya sekali saat komponen mount

  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="row">
              {mobils.map((mobil) => (
                <div className="col-lg-3 col-md-6 mb-4" key={mobil.id}>
                  <div className="card shadow-sm border-0 rounded-3 h-100">
                    <div className="position-relative">
                      <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                        New
                      </span>
                      <Link to={ `/detail/${mobil.slug}`}><img
                        src={`http://localhost:8000/storage/${mobil.cover}`}
                        alt={mobil.name}
                        className="img-fluid rounded-top p-3"
                      /></Link>
                    </div>
                    <div className="card-body text-center d-flex flex-column">
                      {/* Warna */}
                      <div className="d-flex justify-content-center mb-3">
                        {mobil.color.length ? (
                          mobil.color.map((c) => (
                            <span
                              className="rounded-circle border me-2"
                              key={c.name}
                              style={{
                                width: "20px",
                                height: "20px",
                                background: c.hex,
                                display: "inline-block",
                              }}
                            />
                          ))
                        ) : (
                          <small className="text-muted">No Color</small>
                        )}
                      </div>

                      {/* Tombol Brand */}
                      <a
                        href="#"
                        className="btn btn-info btn-sm text-white fw-bold"
                      >
                        Geely
                      </a>

                      {/* Nama Mobil */}
                      <h6 className="fw-bold mb-0 mt-2">{mobil.name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <SectionFooterImage />
    </>
  );
};

export default List;
