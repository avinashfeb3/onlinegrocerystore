import React from "react";
import "./About.scss";
import Layout from "../../components/layout";
import { Col, Container, Row, Card } from "react-bootstrap";
import AboutImg from "../../assets/about/about-img.jpg";

export const About = () => {
  return (
    <>
      <Layout>
        {/* Banner Section Start */}
        <section className="banner_section">
          <Container>
            <div className="banner-content">
              <h3>About Us</h3>
            </div>
          </Container>
        </section>
        {/* Banner Section End */}

        {/* About Section Start */}
        <section className="about_section">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center pb-5">
                <h2 className="section-title">About Us</h2>
                <p className="section-subtitle">
                  This is one of the unique products which is an excellent
                  thirst beverage and provides relief in the strong summer
                  season.
                </p>
              </Col>
            </Row>
            <Row className="align-items-center py-5">
              <Col lg={6} xs={12} className="mb-4">
                <div className="me-lg-5">
                  <img src={AboutImg} alt="About Image" className="img-fluid" />
                </div>
              </Col>
              <Col lg={6} xs={12} className="mb-4">
                <div className="about-content">
                  <div className="about-details">
                    <p>
                      Welcome to Tazza, your ultimate destination for a seamless
                      online grocery shopping experience. At Tazza, we
                      understand the importance of convenience, quality, and
                      reliability when it comes to fulfilling your daily grocery
                      needs. Our mission is to revolutionize the way you shop
                      for groceries by providing a platform that caters to your
                      diverse requirements while prioritizing your comfort and
                      satisfaction.
                    </p>
                    <p>
                      At Tazza, we believe that grocery shopping should be
                      convenient, affordable, and enjoyable. We understand the
                      importance of quality ingredients in creating delicious
                      meals for you and your loved ones. That's why we're
                      dedicated to providing a seamless online shopping
                      experience, offering a wide selection of fresh produce,
                      pantry staples, and specialty items right at your
                      fingertips.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* About Section End */}

        {/* Mission, vision, values section start */}
        <section className="mission_wrapper">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <Card>
                  <Card.Body>
                    <h4 className="text-center my-4 py-4">Our Mission</h4>
                    <p className="text-left mx-4">
                      At Tazza Online Grocery Store, our mission is to redefine
                      convenience by providing our customers with seamless
                      access to fresh, high-quality groceries right at their
                      fingertips. We aim to simplify the shopping experience,
                      saving our customers time and effort while ensuring they
                      have access to a wide selection of products to meet their
                      diverse needs.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card>
                  <Card.Body>
                    <h4 className="text-center my-4 py-4">Our Vision</h4>
                    <p className="text-left mx-4">
                    Tazza Online Grocery Store is to become the preferred choice for individuals and families seeking a convenient, reliable, and enjoyable grocery shopping experience online. We envision a future where shopping for groceries is not just a task but a delightful part of our customers' everyday lives, offering them convenience without compromising on quality or variety.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card>
                  <Card.Body>
                    <h4 className="text-center my-4 py-4">Our Values</h4>
                    <p className="text-left mx-4">
                    At Tazza Online Grocery Store, we are driven by a set of core values that guide everything we do. These principles shape our interactions with customers, suppliers, and within our team.
                    </p>
                    <p className="text-left mx-4">
                    We carefully curate our product selection to ensure that every item meets our rigorous quality standards.With Tazza, you can shop for groceries anytime, anywhere, from the comfort of your home or on the go. 
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Mission, vision, values section end */}
      </Layout>
    </>
  );
};

export default About;
