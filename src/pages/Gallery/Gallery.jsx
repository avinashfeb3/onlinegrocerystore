import React,{useState} from 'react';
import Layout from "../../components/layout";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { Link } from "react-router-dom";


export const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex((img) => img === selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = images.findIndex((img) => img === selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  // Define your array of images here
  const images = [
    new URL("../../assets/gallery/g-1.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-2.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-3.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-4.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-5.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-6.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-7.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-8.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-9.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-10.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-11.jpg", import.meta.url).href,
    new URL("../../assets/gallery/g-12.jpg", import.meta.url).href,
  ]; // Example: Showing Menu13 four times

  return (
      <>
        <Layout>
                  {/*  Gallery Banner Section Start  */}
        <section className="banner_section">
          <Container>
            <div className="banner-content">
              <h3>Our Gallery</h3>
            </div>
          </Container>
        </section>
        {/*  Gallery  Banner Section end  */}

          {/* Gallery Section Start */}
      <section className="gallery_section">
        <Container>
          <Row className="align-items-center justify-content-center my-2 py-2">
            <Col lg={12} md={6} className="text-center menu_card">
              <h2 class="section-title">Our Gallery</h2>
              <p class="section-subtitle">
                The Passage Experienced A Surge In Popularity During The 1960s
                When Again During The 90s As Desktop Publishers
              </p>
            </Col>
          </Row>
          <Row>
            {images.map((image, index) => (
              <Col key={index} sm={6} lg={4} className="mb-4">
                <div className="gallery_container">
                  <div className="gallery_item">
                    <img
                      src={image}
                      alt={`menu-${index}`}
                      className="img-fluid"
                      onClick={() => handleShow(image)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Gallery Section End */}

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        contentClassName="custom-modal-content text-center"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img src={selectedImage} alt="menu" className="d-block w-100" />
          )}

          <div className="modal-controls mt-3 pt-3 mb-0 pb-0 text-center">
            <Button variant="light" onClick={handlePrevious}>
              <BsChevronLeft />
            </Button>
            <Button variant="light" onClick={handleNext}>
              <BsChevronRight />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
        </Layout>
      </>  
  )
}

export default Gallery;