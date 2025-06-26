import { useEffect, useState } from 'react';
import './Home.css';
import Modal from '../components/Modal';
import heroBg from '../assets/hero-bg.jpg';
import aboutImg from '../assets/john-doe-about.jpg';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubData, setGithubData] = useState(null);

  // Récupération des données GitHub une seule fois au chargement //
  useEffect(() => {
    fetch('https://github.com/Aedilis-Ludi/portfolio-kp-cef.git')
      .then(res => res.json())
      .then(data => setGithubData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* Section Hero */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <button className="hero-button" onClick={() => setIsModalOpen(true)}>
          En savoir plus
        </button>
      </section>

      {/* Section À propos + compétences */}
      <section className="about-section">
        <div className="about-wrapper">
          {/* À propos */}
          <div className="about-left">
            <h2>À propos</h2>
            <img src={aboutImg} alt="John Doe" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque at?
            </p>
          </div>

          {/* Compétences */}
          <div className="about-right">
            <h2>Mes compétences</h2>
            <div className="skill-bar">
              <span>HTML5 90%</span>
              <div className="bar html"></div>
            </div>
            <div className="skill-bar">
              <span>CSS3 80%</span>
              <div className="bar css"></div>
            </div>
            <div className="skill-bar">
              <span>JAVASCRIPT 70%</span>
              <div className="bar js"></div>
            </div>
            <div className="skill-bar">
              <span>PHP 60%</span>
              <div className="bar php"></div>
            </div>
            <div className="skill-bar">
              <span>REACT 50%</span>
              <div className="bar react"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modale, affichée uniquement si ouverte ET données chargées */}
      {isModalOpen && githubData && (
        <Modal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          user={githubData}
        />
      )}
    </>
  );
}

export default Home;
