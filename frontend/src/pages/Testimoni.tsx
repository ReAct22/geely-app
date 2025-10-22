import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";
import type { Testimonis } from "../types/Testimoni";
import { TestimoniService } from "../services/testimoniService";

const TestimoniPage: React.FC = () => {
  const [testimoni, setTestimoni] = useState<Testimonis[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimoni = async () => {
      try {
        const response = await TestimoniService.getAll();
        if (response) {
          // pastikan response.data berisi array testimoni
          setTestimoni(response);
        } else {
          console.error("Response kosong atau tidak sesuai:", response);
          setTestimoni([]);
        }
      } catch (error) {
        console.error("Error fetching testimonis:", error);
        setTestimoni([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimoni();
  }, []);

  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
            <h3 className="text-center mb-4">Testimoni</h3>
          <div className="row g-4 justify-content-center">
            {loading ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              testimoni.map((t) => (
                <div className="col-6 col-md-4 col-lg-3" key={t.id}>
                  <div className="ratio ratio-1x1">
                    <img
                      src={`http://localhost:8000/storage/${t.image}`}
                      alt={t.name || "Testimoni"}
                      className="img-fluid rounded-3 shadow object-fit-cover"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  {/* <p className="text-center mt-2 fw-semibold">{t.name}</p> */}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <SectionFooterImage />
    </>
  );
};

export default TestimoniPage;
