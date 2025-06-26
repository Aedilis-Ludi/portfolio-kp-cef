import React from 'react';
import './Modal.css';

function Modal({ show, onClose, user }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <header className="modal-header">
          <h2>Mon profil GitHub</h2>
          <button className="close-button" onClick={onClose} aria-label="Fermer la modale">
            ×
          </button>
        </header>

        <section className="modal-body">
          <img src={user.avatar_url} alt={`${user.name || user.login} avatar`} className="modal-avatar" />
          <div className="modal-info">
            <p><strong><a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.name || user.login}</a></strong></p>
            <p>{user.location || 'Sur la planète Terre'}</p>
            <p>{user.bio || 'Je suis le mystère'}</p>
            <p>Repos : {user.public_repos}</p>
            <p>Followers : {user.followers}</p>
            <p>Following : {user.following}</p>
          </div>
        </section>

        <footer className="modal-footer">
          <button className="btn-close" onClick={onClose}>Fermer</button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
