import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Raphaël Piechocki - Tous droits réservés</p>
      <div className="footer-links">
        <a 
          href="https://www.linkedin.com/in/raphael-piechocki-399a13301/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Freeze9495" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:contact@raphael-piechocki.fr">Email</a>
        <Link to="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
};
