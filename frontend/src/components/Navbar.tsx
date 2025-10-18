import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/image/logo-geely.svg";

const Navbar: React.FC = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Logo */}
                    <Link className="navbar-brand fw-bold" to="/">
                        <img src="/image/logo-geely.svg" width="150" alt="Logo Geely" />
                    </Link>

                    {/* Toggle button (mobile) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar menu */}
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/list-mobil" className="nav-link">List Mobil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/test-drive" className="nav-link">Test Drive</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/simulasi-kredit" className="nav-link">Simulasi Kredit</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/booking-service" className="nav-link">Booking Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/testimoni" className="nav-link">Testimoni</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/kontak" className="nav-link">Kontak</Link>
                            </li>
                        </ul>

                        {/* Search form */}
                        <form className="d-flex" role="search">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>

                        {/* Call to action */}
                        <div className="d-flex ms-3">
                            <button className="btn btn-lg btn-dark">Hubungi Kami</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
