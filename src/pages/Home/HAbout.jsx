import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HAbout = () => {
  return (
    <>
      <section className="landing_about_section">
        <Container>
          <Row className="align-item-center">
            <Col xl={5} lg={6} sm={8}>
              <div className="about-content">
                <h2>We Providing Services Since 1841 With Proud.</h2>
                <div className="about-details">
                  <p className="fw-bold">
                    The readable content off a page when looking layout using
                    Lorem Ipsum is that it has.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content off a page when looking at
                    its layout using Lorem Ipsum is that it has. It is a long
                    established fact that a reader will be distracted the
                    readable content off a page when looking at its layout using
                    Lorem Ipsum is that it has.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content off a page when looking at
                    its layout using Lorem Ipsum is that it has....
                  </p>
                  <Link to="/product" className="main-btn">Read More</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HAbout;
