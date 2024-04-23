import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Testimonial from "../../assets/testimonial/testimonial-1.png";
import Quotes from "../../assets/testimonial/qoutes.svg";

const HTestimonial = () => {
  return (
    <>
      <section className="testimonial_section">
        <Container>
          <Row className="pb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title">Our Happy Customers</h2>
              <p className="section-subtitle">
                The Passage Experienced A Surge In Popularity During The 1960s
                When Again During The 90s As Desktop Publishers
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xl={8} md={10}>
              <Carousel interval={1000} id="testimonial-slider">
                <Carousel.Item>
                  <Row className="d-sm-flex">
                    <Col sm={5} className="profile-box">
                      <img
                        src={Testimonial}
                        className="img-fluid"
                        alt="Testimonial 1"
                      />
                    </Col>
                    <Col sm={7} className="card">
                      <div className="desc-box">
                        <p class="fst-italic">
                          Not only was customer support very fast, but the
                          design is very professional. Will definitely be
                          looking for new products in the future from this
                          author.
                        </p>
                        <div className="my-4">
                            <h4 className="mx-5">Jecob Oramson</h4>
                          <p className="m-0 text-white mx-5">Happy Customers</p>
                        </div>
                        <img src={Quotes} className="float-end mx-5" alt="Quotes" />
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row className="d-sm-flex">
                    <Col sm={5} className="profile-box">
                      <img
                        src={Testimonial}
                        className="img-fluid"
                        alt="Testimonial 2"
                      />
                    </Col>
                    <Col sm={7} className="card">
                      <div className="desc-box">
                      <p class="fst-italic">
                          Not only was customer support very fast, but the
                          design is very professional. Will definitely be
                          looking for new products in the future from this
                          author.
                        </p>
                        <div className="my-4">
                        <h4 className="mx-5">Jecob Oramson</h4>
                          <p className="m-0 text-white mx-5">Happy Customers</p>
                        </div>
                        <img src={Quotes} className="float-end mx-5" alt="Quotes" />
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row className="d-sm-flex">
                    <Col sm={5} className="profile-box">
                      <img
                        src={Testimonial}
                        className="img-fluid"
                        alt="Testimonial 3"
                      />
                    </Col>
                    <Col sm={7} className="card">
                      <div className="desc-box">
                      <p class="fst-italic">
                          Not only was customer support very fast, but the
                          design is very professional. Will definitely be
                          looking for new products in the future from this
                          author.
                        </p>
                        <div className="my-4">
                        <h4 className="mx-5">Jecob Oramson</h4>
                          <p className="m-0 text-white mx-5">Happy Customers</p>
                        </div>
                        <img src={Quotes} className="float-end mx-5" alt="Quotes" />
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HTestimonial;
