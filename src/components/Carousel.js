import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Container className="carousel-container">
      <Row className="justify-content-center">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Slide 1</h3>
              <p>Descrição do primeiro slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Slide 2</h3>
              <p>Descrição do segundo slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Adicione mais Carousel.Items conforme necessário */}
        </Carousel>
      </Row>
    </Container>
  );
};

export default CarouselComponent;
