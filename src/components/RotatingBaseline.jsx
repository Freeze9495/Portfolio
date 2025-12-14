import { useState, useEffect } from 'react';

export const RotatingBaseline = () => {
  const baselines = [
    "Développeur & UX Designer en évolution",
    "Créateur d'expériences digitales",
    "Passionné par l'innovation web"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % baselines.length);
        setOpacity(1);
      }, 300);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <p 
      className="hero-baseline" 
      style={{ 
        opacity, 
        transition: 'opacity 0.6s',
        minHeight: '2rem',
        marginBottom: '2rem'
      }}
    >
      {baselines[currentIndex]}
    </p>
  );
};
