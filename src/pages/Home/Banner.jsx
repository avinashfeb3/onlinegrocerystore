import React from 'react'
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner_section">
    <div className="container">
      <div
        id="banner-carousel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="banner-content">
              <h1>100% Organic</h1>
                          <h3>Fresh & Natural Farm Food</h3>
                          <p>The readable content of a page when looking at its layout point of using of letters,
                              as opposed.</p>
                              <Link to="/product" className="main-btn"> ALL Products</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
            <div className="banner-content">
              <h1>100% Organic</h1>
                          <h3>Fresh & Natural Farm Food</h3>
                          <p>The readable content of a page when looking at its layout point of using of letters,
                              as opposed.</p>
                              <Link to="/product" className="main-btn"> ALL Products</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  </section>
  )
}

export default Banner;