import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './assets/css/inicio.css';
import './assets/css/artistas.css';
import './assets/css/contacto.css';
import './assets/css/nosotros.css';
import './assets/css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);