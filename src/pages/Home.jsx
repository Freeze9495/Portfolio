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
          <a 
            href="/CV-Raphael-PIECHOCKI-092025-V6.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            Voir mon CV
          </a>
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
              Étudiant en <strong>BUT Métiers du Multimédia et de l'Internet</strong>, 
              je me spécialise dans le <strong>développement web</strong>, le <strong>design UX/UI</strong> 
              et la <strong>création d'expériences digitales</strong>. J'aime transformer 
              les idées en réalités visuelles et interactives.
            </p>
          </div>

          {/* BLOC 2 - Description */}
          <div className="about-block">
            <p className="about-description">
              Je suis un étudiant en deuxième année de BUT MMI passionné par la création 
              numérique sous toutes ses formes. Mon objectif : mêler <strong>design graphique</strong>, 
              <strong>développement web</strong> et <strong>stratégie UX</strong> pour raconter 
              des histoires visuelles fortes.
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
