import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import '../css/CarouselComponent.css'; // Importa o arquivo CSS
import videoBackground from '../assets/CellFuturista.mp4'; // Substitua pelo caminho do seu vídeo

const CarouselComponent = () => {
  return (
    <Container className="carousel-container">
      <Row className="justify-content-center">
        <div className="video-background">
          <video autoPlay muted loop className="video">
            <source src={videoBackground} type="video/mp4" />
          </video>
        </div>
        <div className='text'>
          <h2>Bem vindo a FHS Tecnology</h2>
          <p>Aqui fica minha descriçao</p>
        </div>
      </Row>
    </Container>
  );
};

export default CarouselComponent;
