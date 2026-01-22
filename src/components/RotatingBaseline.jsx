import { useState, useEffect } from 'react';

export const RotatingBaseline = () => {
  const baselines = [
    "Développeur & UX Designer en évolution",
    "Créateur d'expériences digitales",
    "Passionné par l'innovation web"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade-out
      setIsFadingOut(true);

      // après le fade-out, changement de texte + fade-in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % baselines.length);
        setIsFadingOut(false);
      }, 400); // durée du fade-out
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="hero-baseline"
      style={{
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.4s ease-in-out'
      }}
    >
      {baselines[currentIndex]}
    </p>
  );
};
