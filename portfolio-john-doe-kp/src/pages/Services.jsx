import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaPaintBrush, FaCode, FaSearch } from 'react-icons/fa';
import banner from '../assets/banner.jpg'; // Import de la bannière
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: <FaPaintBrush size={40} color="#1976d2" />,
    title: 'UX Design',
    description:
      "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
  },
  {
    id: 2,
    icon: <FaCode size={40} color="#1976d2" />,
    title: 'Développement web',
    description:
      "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
  },
  {
    id: 3,
    icon: <FaSearch size={40} color="#1976d2" />,
    title: 'Référencement',
    description:
      "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
  },
];

function Services() {
  return (
    <Container fluid className="services-page">
      <img src={banner} alt="Bannière services" className="banner-image" />

      <h1 className="text-center fw-bold mb-2">Mon offre de services</h1>
      <p className="text-center mb-4">Voici les prestations sur lesquelles je peux intervenir</p>
      <hr className="section-divider mx-auto" />

      <Row className="mt-4 justify-content-center">
        {servicesData.map(({ id, icon, title, description }) => (
          <Col key={id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="service-card h-100 text-center p-3">
              <div className="service-icon mb-3">{icon}</div>
              <Card.Title className="fw-bold">{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
