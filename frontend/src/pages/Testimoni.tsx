import React from "react";
import HeroSection from "../components/HeroSection";
import SectionFooterImage from "../components/SectionFooterImage";

const Testimoni: React.FC = () => {
    return(
        <>
            <HeroSection />
            <section className="py-5">
                <div className="container">
                   <div className="row gap-4">
                    <div className="col-lg-3">
                        <img src="/image/testimonial/WhatsApp-Image-2025-08-25-at-11.16.28-1.jpeg" alt="" className="img-fixed rounded-top" />
                    </div>
                    <div className="col-lg-3">
                        <img src="/image/testimonial/WhatsApp-Image-2025-08-25-at-11.16.28-510x680.jpeg" alt="" className="img-fixed rounded-top" />
                    </div>
                    <div className="col-lg-3">
                        <img src="/image/testimonial/WhatsApp-Image-2025-08-25-at-11.16.29.jpeg" alt="" className="img-fixed rounded-top" />
                    </div>
                    <div className="col-lg-3">
                        <img src="/image/testimonial/WhatsApp-Image-2025-09-01-at-19.12.58-510x680.jpeg" alt="" className="img-fixed rounded-top" />
                    </div>
                    <div className="col-lg-3">
                        <img src="/image/testimonial/WhatsApp-Image-2025-09-01-at-19.13.00-1-510x1133.jpeg" alt="" className="img-fixed rounded-top" />
                    </div>
                     <div className="col-lg-3">
                        <img src="/image/testimonial/WhatsApp-Image-2025-09-01-at-19.13.00-711x400.jpeg" alt="" className="img-fixed rounded-top" />
                    </div>
                     <div className="col-lg-3">
                        <img src="/image/testimonial/testimoni1.jpg" alt="" className="img-fixed rounded-top" />
                    </div>
                   </div>
                </div>
            </section>
            <SectionFooterImage />
        </>
    )
}

export default Testimoni;