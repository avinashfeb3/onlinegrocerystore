import React from "react";
import Layout from "../../components/layout";
import "./Home.scss";
import Banner from "./Banner";
import { Features } from "./Features";
import HAbout from "./HAbout";
import HProduct from "./HProduct";
import HTestimonial from "./HTestimonial";
import HGallery from "./HGallery";


export const Home = () => {
  return (
    <>
      <Layout>

        {/* Banner Section Start */}
        <Banner/>
        {/* Banner Section End */}

        {/* Home Features Section Start */}
        <Features/>
        {/* Home Features Section End */}

        {/* Home About Section Start */}
        <HAbout/>
        {/* Home About Section End */}

        {/* Home Product Section Start */}
        <HProduct/>
        {/* Home Product Section End */}

        {/* Home Testimonial Section Start */}
        <HTestimonial/>
        {/* Home Testimonial Section End */}

        {/* Home Gallery Section Start */}
        <HGallery/>
        {/* Home Gallery Section End*/}
      </Layout>
    </>
  );
};
export default Home;
