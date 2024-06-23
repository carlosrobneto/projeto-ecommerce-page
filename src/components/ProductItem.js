import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../css/ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <Card className="product-item">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
