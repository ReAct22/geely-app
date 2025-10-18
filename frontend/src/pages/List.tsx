import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";
import { fetchMobils } from "../data/dataMobil"; // perbaiki nama file (case-sensitive)
import { Link } from "react-router-dom";

export interface MobilColor {
  name: string;
  hex: string;
  image: string;
}

interface Mobil{
    id: number;
    id_doc: string; // id dokumen dari Firestore
    nama: string;
    slug: string;
    cover?: string;
    colors?: MobilColor[];
}

const List: React.FC = () => {
  const [mobils, setMobils] = useState<Mobil[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMobils();
      setMobils(data);
      setLoading(false);
    };
    getData();
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
                <div className="col-lg-3 col-md-6 mb-4" key={mobil.id_doc}>
                  <div className="card shadow-sm border-0 rounded-3 h-100">
                    <div className="position-relative">
                      <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                        New
                      </span>
                      <Link to={ `/detail/${mobil.slug}`}><img
                        src={mobil.cover || "/image/starray-em1.jpg"}
                        alt={mobil.nama}
                        className="img-fluid rounded-top p-3"
                      /></Link>
                    </div>
                    <div className="card-body text-center d-flex flex-column">
                      {/* Warna */}
                      <div className="d-flex justify-content-center mb-3">
                        {mobil.colors?.length ? (
                          mobil.colors.map((color) => (
                            <span
                              className="rounded-circle border me-2"
                              key={color.name}
                              style={{
                                width: "20px",
                                height: "20px",
                                background: color.hex,
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
                      <h6 className="fw-bold mb-0 mt-2">{mobil.nama}</h6>
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
