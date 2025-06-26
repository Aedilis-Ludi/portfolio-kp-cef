import './Contact.css';
import { FaMapMarkedAlt, FaMapPin, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p>
        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
      </p>
      <hr className="section-divider" />

      <div className="contact-wrapper">
        {/* Formulaire */}
        <form className="contact-form">
          <h2>Formulaire de contact</h2>

          <label>
            Votre nom
            <input type="text" name="name" placeholder="Votre nom" required />
          </label>

          <label>
            Votre adresse email
            <input type="email" name="email" placeholder="Votre adresse email" required />
          </label>

          <label>
            Votre numéro de téléphone
            <input type="tel" name="phone" placeholder="Votre numéro de téléphone" required />
          </label>

          <label>
            Sujet
            <input type="text" name="subject" placeholder="Sujet" required />
          </label>

          <label>
            Votre message
            <textarea name="message" placeholder="Votre message" required></textarea>
          </label>

          <button type="submit">Envoyer</button>
        </form>

        {/* Coordonnées */}
        <div className="contact-info">
          <h2>Mes coordonnées</h2>
          <h3 className="contact-name">John Doe</h3>
          <address>
            <p><FaMapMarkedAlt /> 40 rue Laure Diebold</p>
            <p><FaMapPin /> 69009 Lyon, France</p>
            <p><FaPhone /> 10 20 30 40 50</p>
            <p><FaEnvelope /> john.doe@gmail.com</p>
          </address>

          <iframe
            title="Localisation John Doe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.2502228525913!2d4.82369171593281!3d45.76404337910473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea6a3c6eac1f%3A0x4253a494a2b0c84f!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1698263795700!5m2!1sfr!2sfr"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
