// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CompraCelulares from './components/CompraCelulares';
import CompraFones from './components/CompraFones';
import CompraHeadphones from './components/CompraHeadphones';
import CompraNotbooks from './components/CompraNotbooks';
import CompraOculos from './components/CompraOculos';
import CompraRelogios from './components/CompraRelogios';
import CompraTablets from './components/CompraTablets';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/loja-de-celulares" element={<CompraCelulares />} />
          <Route path="/loja-de-fones" element={<CompraFones />} />
          <Route path="/loja-de-headphones" element={<CompraHeadphones />} />
          <Route path="/loja-de-notbooks" element={<CompraNotbooks />} />
          <Route path="/loja-de-oculos" element={<CompraOculos />} />
          <Route path="/loja-de-relogios" element={<CompraRelogios />} />
          <Route path="/loja-de-tablets" element={<CompraTablets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
