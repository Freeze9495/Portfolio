import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useEffect, useState } from 'react';
import { ImageLightbox } from '../components/ImageLightbox';
import { SEO } from '../components/SEO';


export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  // États pour la lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!project) {
    return <Navigate to="/projets" />;
  }

  // Fonction pour détecter si c'est une vidéo
  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  // Fonction pour ouvrir la lightbox
  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };


  // Composant pour afficher image ou vidéo
  const MediaElement = ({ src, alt, className }) => {
    if (isVideo(src)) {
      return (
        <video
          src={src}
          loop
          muted
          playsInline
          controls  // ⬅️ AJOUTÉ : Boutons de contrôle
          className={`project-video ${className}`}
        />
      );
    }
    return <img src={src} alt={alt} className={className} />;
  };

  return (
    <div className="project-detail">
      <SEO
        title={`${project.title} - Raphaël Piechocki | Portfolio`}
        description={project.fullDescription || project.description}
        keywords={`${project.technologies.join(', ')}, ${project.tags.join(', ')}, portfolio, Raphaël Piechocki`}
        image={project.image}
      />
      {/* Back button */}
      <Link to="/projets" className="btn-back">
        ← Retour aux projets
      </Link>

      {/* Header */}
      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <span className="tag">{project.category}</span>
      </div>

      {/* Hero avec support vidéo */}
      <div className="project-hero-image">
        <MediaElement
          src={project.imageHero || project.image}
          alt={project.title}
        />
      </div>

      {/* Section 1 - Description */}
      <section className="project-two-cols">
        <div className="section-text">
          <h2>Description du projet</h2>
          <p>{project.fullDescription || project.description}</p>
        </div>
        {(project.imageDescription || project.videoDescription) && (
          <div
            className="clickable-media"
            onClick={() => {
              const mediaSrc = project.videoDescription || project.imageDescription || project.image;
              if (!isVideo(mediaSrc)) {
                openLightbox([mediaSrc], 0);
              }
            }}
            style={{ cursor: isVideo(project.videoDescription || project.imageDescription) ? 'default' : 'pointer' }}
          >
            <MediaElement
              src={project.videoDescription || project.imageDescription || project.image}
              alt={`${project.title} - Description`}
            />
          </div>
        )}
      </section>

      {/* Section 2 - Technologies CORRIGÉ */}
      {project.imageTechnologies && (
        <div className="project-two-cols reverse">
          <div
            className="clickable-media"
            onClick={() => {
              if (!isVideo(project.imageTechnologies)) {
                openLightbox([project.imageTechnologies], 0);
              }
            }}
            style={{ cursor: isVideo(project.imageTechnologies) ? 'default' : 'pointer' }}
          >
            <MediaElement
              src={project.imageTechnologies}
              alt={`Technologies - ${project.title}`}
            />
          </div>
          <div className="section-text">
            <h2>Technologies utilisées</h2>
            <ul className="tech-list">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Galerie avec support vidéo */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery-section">
          <h2>Galerie du projet</h2>
          <div className="project-gallery">
            {project.gallery.map((media, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => {
                  // Ouvrir lightbox SEULEMENT pour les images, pas les vidéos
                  if (!isVideo(media)) {
                    openLightbox(project.gallery, index);
                  }
                }}
                style={{ cursor: isVideo(media) ? 'default' : 'pointer' }}
              >
                <MediaElement
                  src={media}
                  alt={`${project.title} - ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Boutons d'action */}
      <div className="project-actions">
        <Link to="/projets" className="btn btn-outline">
          Tous les projets
        </Link>
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {project.projectLinkText || 'Voir le projet'}
          </a>
        )}
      </div>

      {/* Lightbox pour l'agrandissement des images */}
      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};
