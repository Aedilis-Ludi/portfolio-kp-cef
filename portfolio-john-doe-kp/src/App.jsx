import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';

import Modal from './components/Modal.jsx'; // Import modale profil GitHub

import './pages/MentionsLegales.css';
import './styles/Global.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home openModal={() => setShowModal(true)} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
      {/* Modale affichée si showModal = true */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
