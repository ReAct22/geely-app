import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";
import { TestDriverService } from "../services/testDriveServices";
import type { testdata } from "../types/testdata";
import { CarService } from "../services/carServices";
import type { Car } from "../types/Car";

const TestDrive: React.FC = () => {
  const [formData, setFormData] = useState<testdata>({
    id_mobil: 0,
    name: "",
    notelp: "",
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<Car | Car[]>([]);
  const [carLoading, setCarLoading] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "id_mobil" ? parseInt(value, 10) || 0 : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(null);

    // const nomorTujuan = "628812148330";
    // const pesan = `Halo Admin, saya ingin melakukan Test Drive:
    // - Mobil: ${formData.id_mobil}
    // - Nama: ${formData.name}
    // - No.HP: ${formData.notelp}
    // `;

    // const url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;

    // window.open(url, "_blank");

    const result = await TestDriverService.createTestDrive(formData);
    console.log(result);

    if (!result.status && result.errors) {
      setErrors(result.errors);
    } else if (result.status) {
      setSuccess(result.message || "Test drive berhasil dikirim");
      setFormData({ id_mobil: 0, name: "", notelp: "" });
    }

    setLoading(false);
  };

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await CarService.getallcar();
        if (response) {
          const carData = Array.isArray(response) ? response : [response];
          setCars(carData);
        } else {
          console.error("Response kosong atau tidak sesuai:", response);
          setCars([]);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setCarLoading(false);
      }
    };
    fetchCar();
  }, []);
  return (
    <>
      <HeroSection />
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Tipe Mobil
                      </label>
                      {carLoading ? (
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="spinner-border spinner-border-sm text-dark"
                            role="status"
                          ></div>
                          <span>Memuat daftar mobil...</span>
                        </div>
                      ) : (
                        <select
                          name="id_mobil"
                          id="id_mobil"
                          className={`form-select ${
                            errors.id_mobil ? "is-invalid" : ""
                          }`}
                          value={formData.id_mobil || ""}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Pilih Tipe Mobil</option>
                          {cars.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      )}
                      {errors.id_mobil && (
                        <div className="invalid-feedback">
                          {errors.id_mobil[0]}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="Masukan Nama Lengkap"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name[0]}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        No. Handphone
                      </label>
                      <input
                        type="text"
                        name="notelp"
                        className={`form-control ${
                          errors.notelp ? "is-invalid" : ""
                        }`}
                        placeholder="Masukan No. Handphone"
                        value={formData.notelp}
                        onChange={handleChange}
                      />
                      {errors.notelp && (
                        <div className="invalid-feedback">
                          {errors.notelp[0]}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-warning btn-lg text-white w-100"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <div
                              className="spinner-border spinner-border-sm text-light"
                              role="status"
                            ></div>
                            <span>Mengirim...</span>
                          </>
                        ) : (
                          "Test Drive"
                        )}
                      </button>
                    </div>

                    {success && (
                      <div className="alert alert-success text-center mt-3">
                        {success}
                      </div>
                    )}
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
