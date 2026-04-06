import { Link } from 'react-router-dom';
import { HeroTitle } from '../components/HeroTitle';
import { ProjectCard } from '../components/ProjectCard';
import { ToolsMarquee } from '../components/ToolsMarquee';
import { ScrollToTop } from '../components/ScrollToTop';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
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

  // Scroll reveal refs
  const aboutRef = useRevealAnimation();
  const projectsRef = useRevealAnimation();
  const contactRef = useRevealAnimation();

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
      {/* ── HERO ── */}
      <section id="accueil" className="hero">
        <HeroTitle text="Raphaël Piechocki" />
        <p className="hero-subtitle">Développeur Web &amp; UX Designer</p>
        <div className="hero-cta">
          <a
            href="/cvraph.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Voir mon CV
          </a>
          <a href="#contact" className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Me contacter
          </a>
        </div>

      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about-section" ref={aboutRef}>
        <p className="section-label">// à propos</p>
        <h2 className="section-title">Qui suis-je ?</h2>

        <div className="about-content">
          <div className="about-left">
            <div className="about-photo">
              <img src="/images/raph.png" alt="Raphaël Piechocki" loading="lazy" />
            </div>

            <div className="alternance-badge">
              <div className="alternance-indicator" />
              <div className="alternance-text">
                <strong>En recherche d'alternance</strong>
                <p>Développement web • Rentrée Sept. 2026</p>
              </div>
            </div>
          </div>

          <div className="about-text">
            <p className="about-paragraph">
              Je m'appelle <strong>Raphaël Piechocki</strong> et je me forme au <strong>développement web</strong> et au <strong>design UX/UI</strong> au sein du BUT Métiers du Multimédia et de l'Internet à Bobigny.
            </p>
            <p className="about-paragraph">
              J'aime créer des sites web qui allient esthétique et fonctionnalité, où chaque détail compte. J'accorde beaucoup d'importance à la <strong>qualité du code</strong> et à une <strong>expérience utilisateur fluide</strong>, pour rendre un site web performant, agréable à utiliser et facile à faire évoluer.
            </p>
            <p className="about-paragraph">
              Ce qui me motive le plus, c'est de <strong>transformer des idées en réalités</strong> qui servent vraiment aux utilisateurs et donnent vie aux projets.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section" ref={projectsRef}>
        <p className="section-label">// travaux</p>
        <h2 className="section-title">Projets phares</h2>
        <p className="section-subtitle">
          Une sélection de mes meilleurs projets, du développement web au design UX/UI.
        </p>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
          <Link to="/projets" className="btn btn-outline" style={{ marginTop: '2.5rem', display: 'inline-flex' }}>
            Voir tous les projets →
          </Link>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <ToolsMarquee />

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section" ref={contactRef}>
        <p className="section-label">// contact</p>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p className="section-subtitle">
          Une question, un projet ou une opportunité d'alternance ? N'hésitez pas à me contacter.
        </p>

        <div className="contact-layout">
          <div className="contact-info">
            <a href="mailto:raphael.piechocki@gmail.com" className="contact-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>raphael.piechocki@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/raphael-piechocki" target="_blank" rel="noopener noreferrer" className="contact-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Freeze9495" target="_blank" rel="noopener noreferrer" className="contact-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>GitHub</span>
            </a>
            
            <div className="alternance-badge" style={{ marginTop: '0.5rem' }}>
              <div className="alternance-indicator" />
              <div className="alternance-text">
                <strong>Disponible en alternance</strong>
                <p>Développement web • Sept. 2026</p>
              </div>
            </div>
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
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {status === 'success' && (
              <div className="success-message">
                ✓ Message envoyé avec succès !
              </div>
            )}

            {status === 'error' && (
              <div className="error-message">
                Erreur lors de l'envoi. Veuillez réessayer.
              </div>
            )}
          </form>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};
