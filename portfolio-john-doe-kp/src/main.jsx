import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// ✅ Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ✅ Styles
import './index.css';

// ✅ React Router
import { BrowserRouter } from 'react-router-dom';

// ✅ Création de la racine React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Encapsulation de l'app avec React Router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)