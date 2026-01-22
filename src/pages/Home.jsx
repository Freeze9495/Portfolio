import { Link } from 'react-router-dom';
import { HeroTitle } from '../components/HeroTitle';
import { RotatingBaseline } from '../components/RotatingBaseline';
import { ScrollFloatText } from '../components/ScrollFloatText';
import { ProjectCard } from '../components/ProjectCard';
import { ToolsMarquee } from '../components/ToolsMarquee';
import projectsData from '../data/projects';

export const Home = () => {
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div>
      {/* HERO */}
      <section id="accueil" className="hero">
        <HeroTitle text="Raphaël Piechocki" />
        <RotatingBaseline />
        <div className="hero-cta">
          <div className="hero-cta">
            <a href="/cv-raph.pdf" target="_blank" rel="noopener noreferrer" className="btn">
              Voir mon CV
            </a>
          </div>
          <a href="/contact" className="btn btn-outline">
            En recherche de stage
          </a>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Je m'appelle <strong>Raphaël Piechocki</strong> et je me forme au <strong>développement web</strong> et au <strong>design UX/UI</strong> au sein du BUT Métiers du Multimédia et de l'Internet.
            </p>
            <p className="about-paragraph">
              J'aime créer des sites qui allient esthétique et fonctionnalité, où chaque détail compte. J'accorde beaucoup d'importance à la <strong>qualité du code</strong> et à une <strong>expérience utilisateur fluide</strong>, pour rendre un site performant, agréable à utiliser et facile à faire évoluer.
            </p>
            <p className="about-paragraph">
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
              <span className="stage-icon">🎯</span>
              <div className="stage-text">
                <strong>En recherche de stage</strong>
                <p>Développement web • Avril - Juin 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className="section">
        <h2 className="section-title">Projets phares</h2>
        <p className="section-subtitle">
          Découvrez une sélection de mes meilleurs projets
        </p>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projets" className="btn">Voir tous les projets</Link>
        </div>
      </section>

      <ToolsMarquee />

      {/* SECTION CONTACT (JUSTE UN LIEN) */}
      <section id="contact" className="contact-section section">
        <h2 className="section-title">Contactez-moi</h2>
        <p className="section-subtitle">
          Une question ? Un projet ? N'hésitez pas à me contacter !
        </p>
        
        {/* Remplacé le formulaire par un bouton vers /contact */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/contact" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            📧 Accéder au formulaire de contact
          </Link>
        </div>
      </section>
    </div>
  );
};
