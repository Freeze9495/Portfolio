import { Link } from 'react-router-dom';
import { HeroTitle } from '../components/HeroTitle';
import { RotatingBaseline } from '../components/RotatingBaseline';
import { ScrollFloatText } from '../components/ScrollFloatText';
import { ProjectCard } from '../components/ProjectCard';
import { ToolsMarquee } from '../components/ToolsMarquee';
import { projectsData } from '../data/projects'; // ✅ Retiré toolsData
import { useState } from 'react';

export const Home = () => {
  const featuredProjects = projectsData.filter(p => p.featured);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé ! (En développement)');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div>
      <section id="accueil" className="hero">
        <HeroTitle text="Raphaël Piechocki" />
        <RotatingBaseline />
        <div className="hero-cta">
          <div className="hero-cta">
  <a 
    href="/cvraph.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn"
  >
    Voir mon CV
  </a>

</div>

          <a href="#contact" className="btn btn-outline">
            En recherche de stage
          </a>
        </div>
      </section>

      <section className="section about-section">
        <div className="about-grid">
         {/* BLOC 1 - Introduction */}
<div className="about-block">
  <p className="about-intro">
    Je m'appelle <strong>Raphaël Piechocki</strong> et je me forme au <strong>développement web</strong> et au <strong>design UX/UI</strong> au sein du BUT Métiers du Multimédia et de l'Internet. J'aime créer des sites qui allient esthétique et fonctionnalité, où chaque détail a son importance.
  </p>
</div>

{/* BLOC 2 - Description */}
<div className="about-block">
  <p className="about-description">
    J'accorde beaucoup d'importance à la <strong>qualité du code</strong> et à une <strong>expérience utilisateur fluide</strong>, pour rendre un site performant, agréable à utiliser et facile à faire évoluer. 
    Ce qui me motive le plus, c'est de <strong>transformer des idées en réalités digitales</strong> qui servent vraiment aux utilisateurs et donnent vie aux projets.
  </p>
</div>


          {/* COLONNE DROITE - Photo + Badge stage */}
          <div className="about-right">
            <div className="about-photo">
              <img src="/images/raph.png" alt="Raphaël Piechocki" />
            </div>
            
            {/* Badge recherche de stage */}
            <div className="stage-badge">
              <span className="stage-icon">🔍</span>
              <div className="stage-text">
                <strong>En recherche de stage</strong>
                <p>Développement web • Avril - Juin 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Projets phares</h2>
        <p className="section-subtitle">
          Découvrez une sélection de mes meilleurs projets
        </p>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projets" className="btn">
            Voir tous les projets
          </Link>
        </div>
      </section>

      <ToolsMarquee /> {/* ✅ Retiré tools={toolsData} */}

      <section id="contact" className="contact-section section">
        <h2 className="section-title">Contactez-moi</h2>
        <p className="section-subtitle">
          Une question ? Un projet ? N'hésitez pas à me contacter !
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
};
