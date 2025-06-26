import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './MentionsLegales.css';

function MentionsLegales() {
  return (
    <Container className="my-5">
      <h1 className="text-center fw-bold mb-3">Mentions légales</h1>
      <hr />

      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <p><strong>John Doe</strong></p>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <p><strong>alwaysdata</strong></p>
            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
            <p>
              <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                www.alwaysdata.com
              </a>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <p>
              Ce site a été réalisé par John Doe, étudiant au{' '}
              <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noopener noreferrer">
                Centre Européen de formation
              </a>.
            </p>
            <p>
              <em>
                Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
                <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
                  Pixabay
                </a>.
              </em>
            </p>
            <p>
              La favicon de ce site a été fournie par{' '}
              <a href="https://www.flaticon.com/free-icons/john-doe" target="_blank" rel="noopener noreferrer">
                John Doe Icons créé par Freepik - Flaticon
              </a>.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default MentionsLegales;
