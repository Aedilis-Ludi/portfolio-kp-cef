import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';

import banner from '../assets/banner.jpg';
import freshFood from '../assets/portfolio/fresh-food.jpg';
import restaurantAkira from '../assets/portfolio/restaurant-japonais.jpg';
import espaceBienEtre from '../assets/portfolio/espace-bien-etre.jpg';
import seo from '../assets/portfolio/seo.jpg';
import creationApi from '../assets/portfolio/coder.jpg';
import maquetteSite from '../assets/portfolio/screens.jpg';

import './Portfolio.css';

const projects = [
  {
    id: 1,
    img: freshFood,
    title: 'Fresh Food',
    description: 'Site de vente de produits frais en ligne',
    footer: 'Site réalisé avec PHP et MySQL',
    link: '#',
  },
  {
    id: 2,
    img: restaurantAkira,
    title: 'Restaurant Akira',
    description: 'Site de vente de produits frais en ligne',
    footer: 'Site réalisé avec WordPress',
    link: '#',
  },
  {
    id: 3,
    img: espaceBienEtre,
    title: 'Espace bien-être',
    description: 'Site de vente de produits frais en ligne',
    footer: 'Site réalisé avec LARAVEL',
    link: '#',
  },
  {
    id: 4,
    img: seo,
    title: 'SEO',
    description: "Amélioration du référencement d'un site e-commerce",
    footer: 'Utilisation des outils SEO',
    link: '#',
  },
  {
    id: 5,
    img: creationApi,
    title: "Création d'une API",
    description: "Création d'une API RESTFULL publique",
    footer: 'PHP - SYMFONY',
    link: '#',
  },
  {
    id: 6,
    img: maquetteSite,
    title: "Maquette d'un site web",
    description: "Création du prototype d'un site",
    footer: 'Réalisé avec FIGMA',
    link: '#',
  },
];

function Portfolio() {
  return (
    <Container fluid className="portfolio">
      <img src={banner} alt="Bannière portfolio" className="banner" />
      <h2 className="title">Portfolio</h2>
      <p className="subtitle">Voici quelques-unes de mes réalisations.</p>
      <hr className="divider" />

      <Row className="cards-row">
        {projects.map(({ id, img, title, description, footer, link }) => (
          <Col key={id} xs={12} sm={6} md={4} className="card-col">
            <Card className="card">
              <Card.Img variant="top" src={img} alt={title} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button href={link} className="btn">Voir le site</Button>
              </Card.Body>
              <Card.Footer>{footer}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
