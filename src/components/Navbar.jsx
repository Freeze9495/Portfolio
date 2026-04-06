import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll to section after navigation
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">Raphaël P.</Link>
      
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#accueil" onClick={(e) => scrollToSection(e, 'accueil')}>
          Accueil
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
          À propos
        </a>
        <Link to="/projets">Projets</Link>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
          Contact
        </a>
      </div>

      <div 
        className={`nav-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        role="button"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
