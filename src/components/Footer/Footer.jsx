import React, { useState, useEffect } from "react";
import "./Footer.scss";
import { Col, Container, Row, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <>
      <section className="footer_wrapper mt-3 mt-md-0">
        <Container>
          <Row>
            <Col lg={3} sm={6} className="mb-5 mb-lg-0">
              <h5>Nimboo</h5>
              <p className="mb-4 ps-0 company_details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                dignissim erat ut laoreet pharetra....
              </p>
              <div className="contact-info">
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">
                      <FaHome className="me-3" />
                      No. 96, South City, London
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaPhone className="me-3" />
                      +1 222 3333
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaEnvelope className="me-3" />
                      info@example.com
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} sm={6} className="mb-5 mb-lg-0">
              <h5>Customer Support</h5>
              <ul className="link-widget p-0">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Product Returns</Link>
                </li>
                <li>
                  <Link to="#">Wholesale Policy</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={6} className="mb-5 mb-lg-0">
              <h5>Quick Links</h5>
              <ul className="link-widget p-0">
                <li>
                  <Link to="#">Product</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#">Accessories</Link>
                </li>
                <li>
                  <Link to="#">Term Of Use</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={6} className="mb-5 mb-lg-0">
              <h5>Newsletter</h5>
              <div className="form-group mb-4">
                <Form.Control type="email" placeholder="Enter email here..." className="bg-transparent"/>
                <button type="submit" className="main-btn">
                  Subscribe
                </button>
              </div>
              <h5>Stay Connected</h5>
              <ul className="social-network d-flex align-items-center p-0">
                <li>
                  <Link to="#">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* copyright section start */}
      <div className="copyright-section">
        <Container>
          <p>
            <Link to="#">Designed & Developed By Avinash Singh.</Link> All
            Rights Reserved
          </p>
        </Container>
      </div>
      {/* copyright section end */}

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default Footer;
