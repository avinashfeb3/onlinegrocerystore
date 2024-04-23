import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UIChat from '../../assets/feature-icon/ui-chat.svg';
import TruckLoaded from '../../assets/feature-icon/truck-loaded.svg';
import Wheat from '../../assets/feature-icon/wheat.svg';
import Lemon from '../../assets/feature-icon/lemon.svg';

export const Features = () => {
  const featuresData = [
    { icon: UIChat, title: '24/7 Support' },
    { icon: TruckLoaded, title: 'Free Shipping' },
    { icon: Wheat, title: 'Fresh Produce' },
    { icon: Lemon, title: 'From our farm' }
  ];

  return (

    <>
      <section className="feature_section">
      <Container>
        <Row>
          {featuresData.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="mt-md-3 pt-md-3 mb-5">
              <Card className="features-box">
                <div className="text-center">
                  <div className="features-icon-border">
                    <div className="features-icon">
                      <img src={feature.icon} className="img-fluid" alt={feature.title} />
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>{feature.title}</h3>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  );
};
export default Features;
