import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Menu.css'; // Importa o arquivo de estilos do Menu
import celular from '../assets/FHS-smart-pro.png';
import fone from '../assets/FHS-headset-pro.png';
import outros from '../assets/outros.png';
import tablet from '../assets/FHS-Tablet-pro.png'

const Menu = () => {
  return (
    <Container className="menu-container">
      <Row className="justify-content-center">
        <Col className="menu-item">
          <img src={celular} alt="Mini Imagem 1" />
          <span>Celulares</span>
        </Col>
        <Col className="menu-item">
          <img src={tablet} alt="Mini Imagem 2" />
          <span>Tablets</span>
        </Col>
        <Col className="menu-item">
          <img src={fone} alt="Mini Imagem 2" />
          <span>Notebooks</span>
        </Col>
        <Col className="menu-item">
          <img src={fone} alt="Mini Imagem 2" />
          <span>Headphones</span>
        </Col>
        <Col className="menu-item">
          <img src={fone} alt="Mini Imagem 2" />
          <span>Fones</span>
        </Col>
        <Col className="menu-item">
          <img src={fone} alt="Mini Imagem 2" />
          <span>Relogios</span>
        </Col>
        <Col className="menu-item">
          <img src={outros} alt="Mini Imagem 2" />
          <span>Outros</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
