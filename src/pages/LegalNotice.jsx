import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const LegalNotice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-notice">
      <Link to="/" className="btn-back">
        ← Retour à l'accueil
      </Link>

      <h1>Mentions Légales</h1>

      <section className="legal-section">
        <h2>Éditeur du site</h2>
        <p>
          <strong>Nom :</strong> Raphaël Piechocki<br />
          <strong>Statut :</strong> Étudiant<br />
          <strong>Ville :</strong> Ermont, France<br />
          <strong>Email :</strong> raphael.piechockipro@gmail.com<br />
          <strong>Directeur de publication :</strong> Raphaël Piechocki
        </p>
      </section>

      <section className="legal-section">
        <h2>Hébergement</h2>
        <p>
          <strong>Hébergeur :</strong> IONOS SARL<br />
          <strong>Adresse :</strong> 7 place de la Gare, 57200 Sarreguemines, France<br />
          <strong>Téléphone :</strong> 0970 808 911<br />
          <strong>Site web :</strong> <a href="https://www.ionos.fr" target="_blank" rel="noopener noreferrer">www.ionos.fr</a>
        </p>
      </section>

      <section className="legal-section">
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logos) est la propriété exclusive de Raphaël Piechocki, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, distribution, modification ou exploitation, même partielle, sans autorisation préalable est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
        </p>
      </section>

      <section className="legal-section">
        <h2>Données personnelles</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
        </p>
        <p>
          Les informations collectées via le formulaire de contact sont uniquement utilisées pour répondre à vos demandes et ne sont jamais transmises à des tiers.
        </p>
        <p>
          Pour exercer vos droits, contactez-nous à : <strong>contact@raphael-piechocki.fr</strong>
        </p>
      </section>

      <section className="legal-section">
        <h2>Cookies</h2>
        <p>
          Ce site n'utilise pas de cookies de suivi ou de publicité. Aucune donnée personnelle n'est collectée à votre insu.
        </p>
      </section>

      <section className="legal-section">
        <h2>Crédits</h2>
        <p>
          <strong>Conception et développement :</strong> Raphaël Piechocki<br />
          <strong>Technologies utilisées :</strong> React, Vite, EmailJS<br />
          <strong>Polices :</strong> Google Fonts (Poppins, Outfit)
        </p>
      </section>
    </div>
  );
};
