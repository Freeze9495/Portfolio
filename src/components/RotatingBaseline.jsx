import { useState, useEffect } from 'react';

export const RotatingBaseline = () => {
  const baselines = [
    "Développeur & UX Designer en évolution",
    "Créateur d'expériences digitales",
    "Passionné par l'innovation web"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Attend que le fade-out soit terminé avant de changer le texte
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % baselines.length);
        setIsAnimating(false);
      }, 500); // Durée du fade-out
      
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <p 
      className="hero-baseline"
      style={{
        opacity: isAnimating ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      {baselines[currentIndex]}
    </p>
  );
};
