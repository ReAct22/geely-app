import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import TestDrive from "./pages/TestDrive";
import SimulasiKredit from "./pages/SimulasiKredit";
import Testimoni from "./pages/Testimoni";
import Booking from "./pages/Booking";
import Kontak from "./pages/Kontak";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Details from "./pages/details";
import Details from "./pages/details"
import WhatsAppFloat from "./components/WhatsAppFloat";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-mobil" element={<List />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/simulasi-kredit" element={<SimulasiKredit />} />
        <Route path="/booking-service" element={<Booking />} />
        <Route path="/testimoni" element={<Testimoni />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/detail/:slug" element={<Details />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default App;
