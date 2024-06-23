// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; // Arquivo CSS global, se necessário
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
