import React from "react";
import Layout from "../../components/layout";
import "./Contact.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Contact = () => {
  return (
    <>
      <Layout>
        {/*  Contact UsBanner Section Start  */}
        <section className="banner_section">
          <Container>
            <div className="banner-content">
              <h3>Contact Us</h3>
            </div>
          </Container>
        </section>
        {/*  Contact Us Banner Section end  */}

        {/* Contact Form Section Start */}
        <section className="contact_section">
          <Container>
            <Row className="justify-content-center">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                The Passage Experienced A Surge In Popularity During The 1960s
                When Again During The 90s As Desktop Publishers
              </p>

              <Col xs={12} className="contact-form">
                <Row>
                  <Col lg={7} className="mb-5">
                    <Form className="row g-3">
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name *"
                          required=""
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                          required=""
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Address*"
                          required=""
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Your Phone *"
                          required=""
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <input
                          className="form-control"
                          placeholder="Your Message"
                        />
                      </div>
                      <div className="col-12">
                        <Link type="submit" className="main-btn">
                          {" "}
                          Send Message
                        </Link>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Col>
              <Col lg={5} className="mb-5">
                <div className="content-box ms-sm-5">
                  <ul class="info-box clearfix">
                    <li>
                      <i class="fas fa-phone-alt"></i>
                      <p>Any Questions? Call us</p>
                      <div>
                        <Link to="tel:+91 123 123 1234">+91 123 123 1234</Link>
                      </div>
                    </li>
                    <li>
                      <i class="far fa-envelope-open"></i>
                      <p>Any Questions? Email us</p>
                      <div>
                        <Link to="mailto:@inforexample.com">info@example.com</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Contact Form Section End */}
      </Layout>
    </>
  );
};

export default Contact;
