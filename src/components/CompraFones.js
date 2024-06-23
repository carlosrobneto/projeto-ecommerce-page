// components/CompraCelulares.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Importe componentes do Bootstrap
import { Link } from 'react-router-dom'; // Importe o Link para navegação interna

const CompraCelulares = () => {
  // Simulação de dados dos celulares (substitua com seus dados reais)
  const celulares = [
    {
      id: 1,
      name: 'FHS HeadSet',
      description: 'Esse é nosso modelo de HeadSet de entrada.',
      price: 1000.0,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'FHS HeadSet Pro',
      description: 'Esse é nosso modelo de HeadSet Profissional.',
      price: 1500.0,
      image: 'https://via.placeholder.com/150',
    },
    // Adicione mais celulares conforme necessário
  ];

  return (
    <Container>
      <h2>Comprar Celulares</h2>
      <Row>
        {celulares.map((celular) => (
          <Col key={celular.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={celular.image} />
              <Card.Body>
                <Card.Title>{celular.name}</Card.Title>
                <Card.Text>{celular.description}</Card.Text>
                <Card.Text>Preço: ${celular.price}</Card.Text>
                {/* Aqui está o Link para a rota de detalhes de cada celular */}
                <Link to={`/compra-celulares/${celular.id}`}>
                  <Button variant="primary">Ver Detalhes</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CompraCelulares;
