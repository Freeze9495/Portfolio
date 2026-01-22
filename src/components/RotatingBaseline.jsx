import { useState, useEffect } from 'react';

export const RotatingBaseline = () => {
  const baselines = [
    "Développeur & UX Designer en évolution",
    "Créateur d'expériences digitales",
    "Passionné par l'innovation web"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('visible'); // 'visible' ou 'hidden'

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Fade out
      setFadeState('hidden');
      
      // 2. Change le texte APRÈS fade out complet
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % baselines.length);
        
        // 3. Fade in après un micro-délai
        setTimeout(() => {
          setFadeState('visible');
        }, 50);
      }, 600); // Attend la fin complète du fade-out
      
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-baseline-container">
      <p 
        key={currentIndex} // Force React à recréer l'élément
        className={`hero-baseline ${fadeState}`}
      >
        {baselines[currentIndex]}
      </p>
    </div>
  );
};
