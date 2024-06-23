import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Menu.css'; // Importa o arquivo de estilos do Menu
import celular from '../assets/FHS-smart-pro.png';
import tablet from '../assets/FHS-Tablet-pro.png';
import NotBook from '../assets/Notbook.jpg';
import fone from '../assets/FHS-headset-pro.png';
import FoneOuvido from '../assets/foneOuvido.png';
import Relogio from '../assets/Relogio.png';
import Oculos from '../assets/oculs.png';

const Menu = () => {
  return (
    <Container className="menu-container">
      <Row className="justify-content-center">
        <Col className="menu-item">
          <a href="loja-de-celulares">
            <img src={celular} alt="Celular" />
            <span>Celulares</span>
          </a>
        </Col>
        <Col className="menu-item">
          <a href="loja-de-tablets">
            <img src={tablet} alt="Tablet" />
            <span>Tablets</span>
          </a>
        </Col>
        <Col className="menu-item">
          <a href="loja-de-notbooks">
            <img src={NotBook} alt="Notbook" />
            <span>Notebooks</span>
          </a>
        </Col>
        <Col className="menu-item">
          <a href="loja-de-headphones">
            <img src={fone} alt="HeadPhone" />
            <span>Headphones</span>
          </a>
        </Col>
        <Col className="menu-item">
          <a href="loja-de-fones">
            <img src={FoneOuvido} alt="Fone" />
            <span>Fones</span>
          </a>
        </Col>
        <Col className="menu-item">
          <a href="loja-de-relogios">
            <img src={Relogio} alt="SmartWhat" />
            <span>Relogios</span>
          </a>
        </Col>
        <Col className="menu-item">
          <a href="loja-de-oculos">
            <img src={Oculos} alt="Oculos VR" />
            <span>Oculos</span>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;