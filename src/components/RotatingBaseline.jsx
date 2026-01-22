import { useState, useEffect } from 'react';

export const RotatingBaseline = () => {
  const baselines = [
    "Développeur & UX Designer en évolution",
    "Créateur d'expériences digitales",
    "Passionné par l'innovation web"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('visible');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('hidden');
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % baselines.length);
        
        setTimeout(() => {
          setFadeState('visible');
        }, 50);
      }, 600);
      
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-baseline-container">
      <p 
        key={currentIndex}
        className={`hero-baseline ${fadeState}`}
      >
        {baselines[currentIndex]}
      </p>
    </div>
  );
};
