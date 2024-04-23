import React from "react";
import { Col, Container, Row, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const HProduct = () => {
    const products = [
        {
            image: new URL('../../assets/products/product-1.jpg', import.meta.url).href,
            name: 'Musk Melon', 
            price: '$70 KG', 
        },
        {
            image: new URL('../../assets/products/product-2.jpg', import.meta.url).href,
            name: 'Orange', 
            price: '$90 KG', 
        },
        {
            image: new URL('../../assets/products/product-3.jpg', import.meta.url).href,
            name: 'Apple', 
            price: '$100 KG', 
        },
        {
            image: new URL('../../assets/products/product-4.jpg', import.meta.url).href,
            name: 'Dragon', 
            price: '$120 KG', 
        },
       
      ];
  return (
    <>
      <section className="landing_product_section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center pb-5">
              <h2 className="section-title">Our Best Seller Product</h2>
              <p className="section-subtitle">
                The Passage Experienced A Surge In Popularity During The 1960s
                When Again During The 90s As Desktop Publishers
              </p>
            </Col>
          </Row>
          <Row className="mx-0">
            {products.map((product) => (
              <Col lg={3} sm={6} className="mb-5">
                <Card className="product-card">
                  <div className="product-img">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="img-fluid"
                    />
                  </div>
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                    </div>
                    <div className="product-detail">
                      <Link to="/product" className="main-btn">
                        View Products
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HProduct;
