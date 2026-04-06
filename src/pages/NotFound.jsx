import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn">
          Retour à l'accueil
        </Link>
        <Link to="/projets" className="btn btn-outline">
          Voir les projets
        </Link>
      </div>
    </div>
  );
};
