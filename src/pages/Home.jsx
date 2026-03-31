import { Link } from 'react-router-dom';
import { HeroTitle } from '../components/HeroTitle';
import { RotatingBaseline } from '../components/RotatingBaseline';
import { ScrollFloatText } from '../components/ScrollFloatText';
import { ProjectCard } from '../components/ProjectCard';
import { ToolsMarquee } from '../components/ToolsMarquee';
import { ScrollToTop } from '../components/ScrollToTop';
import { projectsData } from '../data/projects';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export const Home = () => {
  const featuredProjects = projectsData.filter(p => p.featured);

  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_36kjm1s',
      'template_so0fmm4',
      formData,
      'AnPrrZz3e2_TR703Z'
    )
      .then(() => {
        setStatus('success');
        setFormData({ from_name: '', user_email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
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
            En recherche d'alternance
          </a>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Je m'appelle <strong>Raphaël Piechocki</strong> et je me forme au <strong>développement web</strong> et au <strong>design UX/UI</strong> au sein du BUT Métiers du Multimédia et de l'Internet à Bobigny.
            </p>
            <p className="about-paragraph">
              J'aime créer des sites web qui allient esthétique et fonctionnalité, où chaque détail compte. J'accorde beaucoup d'importance à la <strong>qualité du code</strong> et à une <strong>expérience utilisateur fluide</strong>, pour rendre un site web performant, agréable à utiliser et facile à faire évoluer.
            </p>
            <p className="about-paragraph">
              Ce qui me motive le plus, c'est de <strong>transformer des idées en réalités </strong> qui servent vraiment aux utilisateurs et donnent vie aux projets.
            </p>
          </div>

          <div className="about-right">
            <div className="about-photo">
              <img src="/images/raph.png" alt="Raphaël Piechocki" loading="lazy" />
            </div>

            <div className="stage-badge">
              <span className="stage-icon">🔍</span>
              <div className="stage-text">
                <strong>En recherche d'Alternance</strong>
                <p>Développement web • Septembre 2026</p>
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

      <ToolsMarquee />

      <section id="contact" className="contact-section section">
        <h2 className="section-title">Contactez-moi</h2>
        <p className="section-subtitle">
          Une question ? Un projet ? N'hésitez pas à me contacter !
        </p>

        {/* Encadré explicatif recherche de stage */}
        <div style={{
          maxWidth: '700px',
          margin: '0 auto 2rem',
          textAlign: 'center',
          padding: '1.2rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.03))',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1rem',
            lineHeight: '1.6',
            margin: 0
          }}>
            💼 Je suis actuellement <strong style={{ color: 'var(--doré)' }}>en recherche d'une alternance de 1 an</strong> en développement web,
            idéalement à <strong style={{ color: 'var(--doré)' }}>la rentrée 2026</strong>.
            N'hésitez pas à me contacter pour toute opportunité !
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Votre nom"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            value={formData.user_email}
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
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
          </button>

          {status === 'success' && (
            <div style={{ color: '#4CAF50', marginTop: '1rem', textAlign: 'center' }}>
              ✅ Message envoyé avec succès !
            </div>
          )}

          {status === 'error' && (
            <div style={{ color: '#f44336', marginTop: '1rem', textAlign: 'center' }}>
              ❌ Erreur lors de l'envoi. Réessayez.
            </div>
          )}
        </form>
      </section>

      {/* Bouton retour en haut */}
      <ScrollToTop />
    </div>
  );
};
