import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../css/Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="mr-auto">FHS Technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Produto 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Produto 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Todos os produtos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
