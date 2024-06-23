import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // Importa os ícones de seta corretos
import ProductItem from './ProductItem';
import '../css/ProductList.css';
import fone from '../assets/FHS-headset.png';
import fone_pro from '../assets/FHS-headset-pro.png';
import smart_gamer from '../assets/FHS-smart-gamer.png';
import smart_pro from '../assets/FHS-smart-pro.png';
import tablet from '../assets/FHS-Tablet-pro.png';
import NotBook from '../assets/Notbook.jpg';
import FoneOuvido from '../assets/foneOuvido.png';
import Relogio from '../assets/Relogio.png';
import Oculos from '../assets/oculs.png';
import CarouselComponent from './Carousel'; // Importa o componente Carousel
import Menu from './Menu';

const products = [
  {
    id: 1,
    name: 'FHS HeadSet',
    description: 'Esse é nosso modelos de HeadSet de entrada com uma otima qualidade.',
    price: 1000.0,
    image: fone,
  },
  {
    id: 2,
    name: 'FHS HeadSet Pro',
    description: 'Esse é nosso modelos de HeadSet Proficional com a melhor qualidade.',
    price: 1500.0,
    image: fone_pro,
  },
  {
    id: 3,
    name: 'FHS Smart Gamer',
    description: 'Nosso celular focado em Jogos Mobiles, topo de linha.',
    price: 3500.00,
    image: smart_gamer,
  },
  {
    id: 4,
    name: 'FHS Smart Pro',
    description: 'Nosso celular focado em fotografias e resolução de tela 8k.',
    price: 5500.0,
    image: smart_pro,
  },
  {
    id: 5,
    name: 'FHS Tablet Pro',
    description: 'Tablet Topo de linha muito a frente de tudo que existe.',
    price: 6500.0,
    image: tablet,
  },
  {
    id: 6,
    name: 'FHS NotBook Ultra',
    description: 'Nosso Notbook topo de linha que roda literalmente tudo...',
    price: 12000.0,
    image: NotBook,
  },
  {
    id: 7,
    name: 'FHS Fone',
    description: 'Para quem gosta de fones pequenos, esta é a melhor opção.',
    price: 600.0,
    image: FoneOuvido,
  },
  {
    id: 8,
    name: 'FHS SmartWhat',
    description: 'Nosso melhor SmartWhat, com um sistema topo de linha.',
    price: 3000.0,
    image: Relogio,
  },
  {
    id: 9,
    name: 'FHS VR',
    description: 'Esse VR mistura realidade aumentada com realidade virtual...',
    price: 4500.0,
    image: Oculos,
  },
];

const ProductList = () => {
  const listRef = useRef(null);
  const itemWidth = 250; // Largura estimada de cada item em pixels

  const handleScroll = (scrollOffset) => {
    const list = listRef.current;
    list.scrollLeft += scrollOffset;
  };

  return (
    <Container className="product-list-container">
      <CarouselComponent /> {/* Renderiza o Carousel acima da lista de produtos */}
      <Menu /> {/* Renderiza o menu acima da lista de produtos */}
      <h3> Produtos em destaque </h3>
      <Row className="justify-content-center">
        <div className="product-list" ref={listRef}>
          {products.map((product) => (
            <Col key={product.id} style={{ minWidth: `${itemWidth}px`, maxWidth: `${itemWidth}px` }} className="d-inline-block">
              <ProductItem product={product} />
            </Col>
          ))}
        </div>
      </Row>
      <Row className="scroll-buttons">
        <Col className="d-flex justify-content-center">
          <BsChevronLeft className="scroll-icon" onClick={() => handleScroll(-itemWidth)} />
        </Col>
        <Col className="d-flex justify-content-center">
          <BsChevronRight className="scroll-icon" onClick={() => handleScroll(itemWidth)} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;