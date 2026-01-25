import { useState, useEffect } from 'react';
import '../styles/ImageLightbox.css';

export const ImageLightbox = ({ images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  // Fonction pour détecter si c'est une vidéo
  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  // Navigation avec les touches du clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    if (!isVideo(images[currentIndex])) {
      setIsZoomed(!isZoomed);
    }
  };

  const currentMedia = images[currentIndex];
  const isCurrentVideo = isVideo(currentMedia);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Bouton de fermeture */}
        <button className="lightbox-close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>

        {/* Navigation précédent */}
        {images.length > 1 && (
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            ‹
          </button>
        )}

        {/* Contenu (image ou vidéo) */}
        <div className="lightbox-content" onClick={toggleZoom}>
          {isCurrentVideo ? (
            <video 
              src={currentMedia}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="lightbox-media"
            />
          ) : (
            <img 
              src={currentMedia}
              alt={`Image ${currentIndex + 1}`}
              className={`lightbox-media ${isZoomed ? 'zoomed' : ''}`}
            />
          )}
        </div>

        {/* Navigation suivant */}
        {images.length > 1 && (
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={goToNext}
            aria-label="Image suivante"
          >
            ›
          </button>
        )}

        {/* Indicateur de position */}
        {images.length > 1 && (
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Miniatures */}
        {images.length > 1 && (
          <div className="lightbox-thumbnails">
            {images.map((img, index) => (
              <div
                key={index}
                className={`lightbox-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsZoomed(false);
                }}
              >
                {isVideo(img) ? (
                  <video src={img} className="thumbnail-preview" />
                ) : (
                  <img src={img} alt={`Miniature ${index + 1}`} className="thumbnail-preview" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
