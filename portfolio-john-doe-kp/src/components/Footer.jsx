import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne 1 */}
        <div className="footer-column">
          <h3>John Doe</h3>
          <address>
            40 rue Laure Diebold<br />
            69009 Lyon, France<br />
            10 20 30 40 50<br />
            john.doe@gmail.com
          </address>
          <div className="social-icons">
            <a href="https://github.com/Aedilis-Ludi/portfolio-kp-cef" target="_blank" rel="nofollow noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://github.com/Aedilis-Ludi/portfolio-kp-cef" target="_blank" rel="nofollow noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://github.com/Aedilis-Ludi/portfolio-kp-cef" target="_blank" rel="nofollow noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Colonne 2 */}
        <div className="footer-column">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Me contacter</a></li>
            <li><a href="/mentions-legales">Mentions légales</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="footer-column">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><a href="/portfolio">Fresh Food</a></li>
            <li><a href="/portfolio">Restaurant Akira</a></li>
            <li><a href="/portfolio">Espace bien-être</a></li>
            <li><a href="/portfolio">SEO</a></li>
            <li><a href="/portfolio">Création d'une API</a></li>
            <li><a href="/portfolio">Maquette d'un site</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
