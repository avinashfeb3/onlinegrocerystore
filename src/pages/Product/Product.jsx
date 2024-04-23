import React from "react";
import "./Product.scss";
import Layout from "../../components/layout";
import { Col, Container, Row, Card } from "react-bootstrap";
import FreshFruit1 from "../../assets/products/fresh-fruits1.jpg";
import FreshFruit2 from "../../assets/products/fresh-fruits2.jpg";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <>
      <Layout>
        {/*  Product Banner Section Start  */}
        <section className="banner_section">
          <Container>
            <div className="banner-content">
              <h3>Our Product</h3>
            </div>
          </Container>
        </section>
        {/*  Product Banner Section end  */}

        {/* Product Section Deatils start */}
        <section className="product_section">
          <Container>
            <Row className="justify-content-center">
              <h2 className="section-title">Our Best Seller Product</h2>
              <p className="section-subtitle">
                The Passage Experienced A Surge In Popularity During The 1960s
                When Again During The 90s As Desktop Publishers
              </p>
            </Row>
            <Row className="align-items-center py-5">
              <Col xs={12} xl={5} lg={6} className="mb-5">
                <Card className="border-0 me-lg-5">
                  <img
                    src={FreshFruit1}
                    alt="FreshFruit1"
                    className="img-fluid"
                  />
                </Card>
              </Col>
              <Col xs={12} xl={5} lg={6} className="mb-5">
                <div className="product-content">
                  <h2>Pure Lemon Juice</h2>

                  <div className="product-details">
                    <p>
                      Ready to use Pure, Natural, and Fresh Lemon Juice
                      concentrate in lemon shape bottle of 14 Lemons & 30
                      Lemons, No need to Buy costly Lemons Anymore, Then cut and
                      Squeeze & store them, Just Bring!
                    </p>
                    <p>
                      Easy to use and easy to carry, just squeeze it to use it.
                      99.99% Lemon juice concentrate, No added sugar or
                      anything.
                    </p>

                    <h4>Uses of Nimboo Ras</h4>
                    <p>
                      Use in all your cooking, use in all types of drinks, with
                      Green Tea, with Warm Water.
                    </p>
                    <h4>Benifites Of Nimboo Ras</h4>
                    <p>
                      Reduce stress, Boost the Immune system, help prevent
                      kidney stones, Fight cancer Cells, Natural antiseptic,
                      Clean & clear skin, white Teeth, Stop Dandruff, Aid in
                      digestion, promote weight loss and many more...
                    </p>
                    <br />
                    <Link to="/" className="main-btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center py-5">
              <Col xs={12} xl={5} lg={6} className="mb-5">
                <div className="product-content">
                  <h2>Lemon Juice Concentrate</h2>

                  <div className="product-details">
                    <p>
                      Ready to use Pure, Natural, and Fresh Lemon Juice
                      concentrate in lemon shape bottle of 14 Lemons & 30
                      Lemons, No need to Buy costly Lemons Anymore, Then cut and
                      Squeeze & store them, Just Bring!
                    </p>
                    <p>
                      Easy to use and easy to carry, just squeeze it to use it.
                      99.99% Lemon juice concentrate, No added sugar or
                      anything.
                    </p>

                    <h4>Uses of Nimboo Ras</h4>
                    <p>
                      Use in all your cooking, use in all types of drinks, with
                      Green Tea, with Warm Water.
                    </p>
                    <h4>Benifites Of Nimboo Ras</h4>
                    <p>
                      Reduce stress, Boost the Immune system, help prevent
                      kidney stones, Fight cancer Cells, Natural antiseptic,
                      Clean & clear skin, white Teeth, Stop Dandruff, Aid in
                      digestion, promote weight loss and many more...
                    </p>

                    <br />
                    <Link to="/" className="main-btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={12} xl={5} lg={6} className="mb-5">
                <Card className="border-0 me-lg-5">
                  <img
                    src={FreshFruit2}
                    alt="FreshFruit2"
                    className="img-fluid"
                  />
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Product Section Deatils end */}
      </Layout>
    </>
  );
};

export default Product;
