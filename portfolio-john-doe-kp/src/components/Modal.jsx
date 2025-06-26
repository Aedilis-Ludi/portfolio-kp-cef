import React from 'react';
import './Modal.css';

function Modal({ show, onClose, user }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Fermer la modale">
          &times;
        </button>

        <h2>Mon profil GitHub</h2>

        <div className="modal-body">
          <img src={user.avatar_url} alt={user.name} width="150" height="150" />

          <div className="modal-info">
            <p><strong><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.name}</a></strong></p>
            <p><i className="bi bi-geo-alt"></i> {user.location || 'Lieu non renseigné'}</p>
            <p><i className="bi bi-card-text"></i> {user.bio || "Aucune bio disponible."}</p>
            <p><i className="bi bi-box-seam"></i> Repositories : {user.public_repos}</p>
            <p><i className="bi bi-people"></i> Followers : {user.followers}</p>
            <p><i className="bi bi-person-check"></i> Following : {user.following}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
