import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { useEffect } from 'react';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/projets" />;
  }

  // 🎯 Fonction pour détecter si c'est une vidéo
  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  // 🎯 Composant pour afficher image ou vidéo
  const MediaElement = ({ src, alt, className = '' }) => {
    if (isVideo(src)) {
      return (
        <video 
          src={src} 
          autoPlay 
          loop 
          muted 
          playsInline
          className={`project-video ${className}`}
        />
      );
    }
    return <img src={src} alt={alt} className={className} />;
  };

  return (
    <div className="project-detail">
      {/* Back button */}
      <Link to="/projets" className="btn-back">
        ← Retour aux projets
      </Link>

      {/* Header */}
      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <span className="tag">{project.category}</span>
      </div>

      {/* 🎥 Hero avec support vidéo */}
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
          <MediaElement 
            src={project.videoDescription || project.imageDescription || project.image} 
            alt={`${project.title} - Description`}
          />
        )}
      </section>

      {/* Section 2 - Technologies */}
      {project.imageTechnologies && (
  <div className="project-two-cols reverse">
    {project.imageTechnologies.endsWith('.mp4') || 
     project.imageTechnologies.endsWith('.webm') ? (
      <video 
        src={project.imageTechnologies} 
        className="project-video"
        autoPlay 
        loop 
        muted 
        playsInline
      />
    ) : (
      <img src={project.imageTechnologies} alt={`Technologies ${project.title}`} />
    )}
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


      {/* 🎥 Galerie avec support vidéo */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery-section">
          <h2>Galerie du projet</h2>
          <div className="project-gallery">
            {project.gallery.map((media, index) => (
              <MediaElement 
                key={index}
                src={media} 
                alt={`${project.title} - ${index + 1}`}
              />
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
            {project.projectLinkText || 'Voir le projet'} →
          </a>
        )}
      </div>
    </div>
  );
};
