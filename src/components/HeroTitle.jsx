import { useEffect, useRef } from 'react';

export const HeroTitle = ({ text }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.opacity = '1';
        letter.style.transform = 'translateY(0)';
        letter.style.filter = 'blur(0)';
      }, index * 40 + 200);
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
                transform: 'translateY(12px)',
                filter: 'blur(4px)',
                transition: `all 0.5s cubic-bezier(0.22, 1, 0.36, 1)`,
                display: 'inline-block',
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
