import { useEffect, useRef } from 'react';

export const HeroTitle = ({ text }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.opacity = '1';
        letter.style.transform = 'translateY(0) rotateX(0)';
      }, index * 50);
    });
  }, []);

  const words = text.split(' ');

  return (
    <h1 className="hero-title" ref={titleRef}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="hero-title-word">
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="letter"
              style={{
                opacity: 0,
                transform: 'translateY(20px) rotateX(-90deg)',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                display: 'inline-block',
                transformOrigin: '50% 100%'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};
