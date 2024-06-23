import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-3">
      <Container>
        <p>&copy; 2024 E-commerce. Todos direitos reservador a Neto Hoffmann.</p>
      </Container>
    </footer>
  );
};

export default Footer;
