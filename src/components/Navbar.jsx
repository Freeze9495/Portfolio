import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll vers une section après navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Si on est sur une autre page, naviguer vers accueil avec le hash
      navigate(`/#${id}`);
    } else {
      // Si on est déjà sur l'accueil, juste scroller
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">Raphaël P.</Link>
      <div className="nav-links">
        <a href="#accueil" onClick={(e) => scrollToSection(e, 'accueil')}>
          Accueil
        </a>
        <Link to="/projets">Projets</Link>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
          Contact
        </a>
      </div>
    </nav>
  );
};
